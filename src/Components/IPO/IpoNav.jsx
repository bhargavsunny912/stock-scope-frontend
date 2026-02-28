const IpoNav = ({ipo}) => {
  return (
    <div className="focus p-5 gap-5 border border-gray-400 rounded-xl w-full flex items-center">
      <div className="w-15 h-15 text-3xl flex justify-center items-center rounded-xl text-white bg-blue-500 p-2 font-bold">{ipo?.name?.[0]}</div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">{ipo?.name}</h1>
        <h1>Symbol : <span className="font-semibold">{ipo?.symbol}</span></h1>
      </div>
    </div>
  );
};

export default IpoNav;