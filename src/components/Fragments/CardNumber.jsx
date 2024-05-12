const CardNumber = (props) => {
  const { children, number, numberDesc = "", title } = props;
  return (
    <div className="rounded-xl border border-gray-300 p-4 bg-white">
      <div className="flex items-center justify-between gap-4">
        {children}
        <div>
          <p className="text-2xl font-bold text-slate-700 ">
            {number}
            <span className="text-xs text-slate-500 font-medium">
              {" "}
              {numberDesc}
            </span>
          </p>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardNumber;
