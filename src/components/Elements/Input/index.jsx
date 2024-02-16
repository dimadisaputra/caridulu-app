import Label from "./Label";
import Input from "./Input";

const inputForm = (props) => {
  const { title, type, id, placeholder, autoComplete = "on" } = props;
  return (
    <div className="my-3">
      <Label htmlFor={id}>{title}</Label>
      <Input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default inputForm;
