const IpoDescription = ({ipo}) => {
  return (
    <div className="p-10 gap-5 flex-col border border-gray-400 rounded-xl w-full flex items-start">
      <h1 className="text-2xl font-semibold">About {ipo?.name}</h1>
      <p>{ipo?.additional_text??"-"}</p>

    </div>
  );
};

export default IpoDescription;