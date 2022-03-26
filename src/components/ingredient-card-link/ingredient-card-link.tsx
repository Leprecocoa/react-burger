import { PropsWithChildren } from "react";
import { useLocation, Link, LinkProps } from "react-router-dom";
import { TIngredient } from "../../utils/types";

interface IIngredientCardLinkProps extends PropsWithChildren<{}> {
  ingredient: TIngredient;
  innerRef: LinkProps["innerRef"];
  className: LinkProps["className"];
  onClick: LinkProps["onClick"];
}

export function IngredientCardLink({
  children,
  ingredient,
  innerRef,
  className,
  onClick,
}: IIngredientCardLinkProps) {
  let location = useLocation();
  return (
    <Link
      key={ingredient._id}
      to={{
        pathname: `/ingredients/${ingredient._id}`,
        // This is the trick! This link sets
        // the `background` in location state.
        state: { background: location },
      }}
      innerRef={innerRef}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
