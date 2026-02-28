// import React from "react";
// import { FaLongArrowAltUp } from "react-icons/fa";
// import { FaLongArrowAltDown } from "react-icons/fa";

// const BankNifty=({data})=>{
//     return (
//         <div className="flex flex-col items-start">
//                     <h1 className="text-gray-200">BANK NIFTY</h1>
//                     <h1 className="flex items-center gap-5 text-white text-2xl font-bold">{data?.price??50000} <span className={`${data.change>0?"text-green-300":"text-red-500"} flex items-center text-sm font-medium`}>{data.change>0?<FaLongArrowAltUp />:<FaLongArrowAltDown />}{data?.change??100} ({data?.changePer??1.2}%)</span></h1>
//                 </div>
//     );
// }
// export default React.memo(BankNifty);

import React from "react";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

const BankNifty = ({ data }) => {
  const isPositive = Number(data?.change) >= 0;

  return (
    <div className="flex flex-col items-start gap-1">
      <h1 className="text-gray-200">BANK NIFTY</h1>

      <h1 className="flex items-center gap-5 text-white text-2xl font-bold">
        {data?.price?.toFixed?.(2) ?? "Loading..."}

        {data?.change !== undefined && (
          <span
            className={`${
              isPositive ? "text-green-300" : "text-red-400"
            } flex items-center text-sm font-medium`}
          >
            {isPositive ? <FaLongArrowAltUp /> : <FaLongArrowAltDown />}
            {data.change} ({data.changePer}%)
          </span>
        )}
      </h1>
    </div>
  );
};

export default React.memo(BankNifty);
