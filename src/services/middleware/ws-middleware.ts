import type { Middleware, Dispatch } from "redux";
import { TActions } from "../../utils/tactions";
import {
  TFeedWsResponse,
  TWsActions,
  TWsConnectionPool,
} from "../../utils/types";

export const socketMiddleware: (
  wsActions: TWsActions
) => Middleware<{}, {}, Dispatch<TActions>> = (wsActions) => {
  return (store) => {
    const connections: TWsConnectionPool = {};
    return (next: Dispatch<TActions>) => (action: TActions) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === wsActions.init) {
        const { wsUrl, id, actions } = action.payload;

        if (connections[id]) {
          return next(action);
        }

        // объект класса WebSocket
        const socket = new WebSocket(wsUrl);
        connections[id] = { socket, id, wsUrl, actions };
        console.log("wsMiddleware", "socket created", {
          socket,
          id,
          wsUrl,
          actions,
        });

        dispatch({ type: actions.start });

        // функция, которая вызывается при открытии сокета
        socket.onopen = (event) => {
          console.log("wsMiddleware", "socket open event", { id, event });
          dispatch({
            type: actions.open,
          });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event) => {
          console.log("wsMiddleware", "socket error event", id, event);
          dispatch({
            type: actions.error,
          });
          if (connections[id]) {
            connections[id].socket.close();
            delete connections[id];
            console.log("wsMiddleware", "connection deleted", { id });
          }
        };

        // функция, которая вызывается при получении события от сервера
        socket.onmessage = (event: MessageEvent<string>) => {
          const data = JSON.parse(event.data) as TFeedWsResponse;
          console.log("wsMiddleware", "message event", { data });
          if (!data.success) {
            dispatch({
              type: actions.error,
            });
            if (connections[id]) {
              connections[id].socket.close();
              delete connections[id];
              console.log("wsMiddleware", "connection deleted", { id });
            }
          } else {
            dispatch({
              type: actions.message,
              payload: { data },
            });
          }
        };

        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          console.log("wsMiddleware", "close event", { id, event });
          dispatch({
            type: actions.close,
          });
          if (connections[id]) {
            delete connections[id];
            console.log("wsMiddleware", "connection deleted", { id });
          }
        };
      }

      if (type === wsActions.send) {
        const { message, id } = action.payload;
        const connection = connections[id];
        if (connection) {
          // функция для отправки сообщения на сервер
          connection.socket.send(JSON.stringify(message));
        }
      }

      if (type === wsActions.close) {
        const { id } = action.payload;
        const connection = connections[id];
        if (connection) {
          connection.socket.close();
          delete connections[id];
        }
      }

      next(action);
    };
  };
};
