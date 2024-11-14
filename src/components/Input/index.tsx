import React from "react";
import "./input.scss";

type InputProps = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <input className="input" ref={ref} {...props} />;
  }
);

export default Input;
