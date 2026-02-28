import "../../App.css";

const Scrollable = () => {
    
  const tickerText = "Market is open from 9:30 AM to 4:00 PM IST, Monday to Friday";
  
  const content = (
    <>
      {[...Array(8)].map((_, i) => (
        <span key={i} className="mx-10 text-amber-800 font-medium flex items-center shrink-0">
          <span className="w-2 h-2 bg-amber-400 rounded-full mr-4 inline-block"></span>
          {tickerText}
        </span>
      ))}
    </>
  );

  return (
      <div className="w-full bg-white shadow-lg rounded-xl overflow-hidden border border-slate-200">
        <div className="relative overflow-hidden bg-amber-50 border-y border-amber-100 py-3">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            <div className="flex">
              {content}
            </div>
            <div className="flex">
              {content}
            </div>
          </div>

        </div>
    </div>
  );
};

export default Scrollable;