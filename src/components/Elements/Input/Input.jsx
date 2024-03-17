const Input = (props) => {
  const {
    type,
    id,
    placeholder,
    autoComplete = "on",
    min = "",
    value,
    onKeyDown = () => {},
    onChange = () => {},
    classname = "",
    minLength = "",
  } = props;
  return (
    <input
      type={type}
      className={`appearance-none border border-gray-200 rounded-lg w-full py-3 px-4 text-gray-500 leading-tight focus:outline-none focus:border-green-700 ${classname}`}
      placeholder={placeholder}
      id={id}
      name={id}
      autoComplete={autoComplete}
      required
      min={min}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      minLength={minLength}
    />
  );
};

export default Input;
