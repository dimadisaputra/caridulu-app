const WidgetLayouts = (props) => {
  const { children, classname } = props;
  return (
    <div
      className={`p-6 rounded-xl border border-gray-300 bg-white ${classname}`}
    >
      {children}
    </div>
  );
};

const Header = (props) => {
  const { children, title, classname } = props;

  return (
    <div className="flex items-center gap-4">
      {children}
      <p className={`text-slate-500 font-semibold text-md my-4 ${classname}`}>
        {title}
      </p>
    </div>
  );
};

WidgetLayouts.Header = Header;

export default WidgetLayouts;
