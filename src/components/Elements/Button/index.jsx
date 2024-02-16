const Button = (props) => {
  const {
    children = "Button",
    classname = "text-white bg-green-600 hover:bg-green-700",
    type = "button",
  } = props;
  return (
    <button
      className={`h-11 px-6 font-semibold ${classname} rounded-md`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
