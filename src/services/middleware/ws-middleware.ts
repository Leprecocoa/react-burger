import type { Middleware, Dispatch } from "redux";
import {
  WS_CONNECTION_INIT,
  WS_SEND_MESSAGE,
  WS_CONNECTION_CLOSE,
} from "../actions/ws-actions";
import { TActions } from "../../utils/tactions";

export const socketMiddleware: () => Middleware<
  {},
  {},
  Dispatch<TActions>
> = () => {
  return (store) => {
    const connections: {
      [id: string]: {
        socket: WebSocket;
        wsUrl: string;
        id: string;
        actions: {
          start: string;
          open: string;
          error: string;
          message: string;
          close: string;
        };
      };
    } = {};
    return (next: Dispatch<TActions>) => (action: TActions) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === WS_CONNECTION_INIT) {
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
        socket.onmessage = (event) => {
          console.log("wsMiddleware", "message event", { id, event });
          const { data } = event;
          dispatch({
            type: actions.message,
            payload: { data },
          });
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

      if (type === WS_SEND_MESSAGE) {
        const { message, id } = action.payload;
        const connection = connections[id];
        if (connection) {
          // функция для отправки сообщения на сервер
          connection.socket.send(JSON.stringify(message));
        }
      }

      if (type === WS_CONNECTION_CLOSE) {
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
