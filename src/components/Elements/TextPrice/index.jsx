const TextPrice = (props) => {
  const { children, classname} = props;
  return (
    <p className={classname}>
      Rp{" "}
      {children.toLocaleString("id-ID", {
        styles: "currency",
        currency: "IDR",
      })}
    </p>
  );
};

export default TextPrice;
