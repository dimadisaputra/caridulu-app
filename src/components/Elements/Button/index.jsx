const Button = (props) => {
  const {
    children = "Button",
    classname = "text-white bg-green-500 hover:bg-green-600",
    type = "button",
    onClick = () => {},
  } = props;
  return (
    <button
      className={`h-11 px-6 font-semibold ${classname} rounded-md`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
