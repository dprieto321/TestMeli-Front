import React from "react";
import "./button.scss";

type ButtonProps = React.ComponentProps<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    return <button className="button" ref={ref} {...props} />;
  }
);

export default Button;
