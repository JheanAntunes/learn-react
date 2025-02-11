const Button = ({ children, ...restProps }: React.ComponentProps<"button">) => {
  return <button {...restProps}>{children}</button>;
};

export default Button;
