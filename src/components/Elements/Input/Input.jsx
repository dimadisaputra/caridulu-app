const Input = (props) => {
  const { type, id, name, placeholder, autoComplete = "on" } = props;
  return (
    <input
      type={type}
      className="appearance-none border border-gray-200 rounded-lg w-full py-3 px-4 pr-10 text-gray-500 leading-tight focus:outline-none focus:border-green-700"
      placeholder={placeholder}
      id={id}
      name={name}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
