/* eslint-disable react-hooks/set-state-in-effect */
// import { useEffect, useRef, useState } from "react";
// import Nifty from "./Nifty";
// import Sensex from "./Sensex";
// import BankNifty from "./BankNifty";

// const ExchangeRates = () => {
//   const [sensex, setSensex] = useState({});
//   const [nifty, setNifty] = useState({});
//   const [bankNifty, setBankNifty] = useState({});

//   const sensexRef = useRef(null);
//   const niftyRef = useRef(null);
//   const bankNiftyRef = useRef(null);
//   const timerRef = useRef(null);

//   const fetchIndex = async (url, setState, prevRef) => {
//         const res = await fetch(url);
//         const resdata = await res.json();

//         const meta = resdata.chart.result[0].meta;
//         const price = meta.regularMarketPrice;
//         const prevPrice = meta.chartPreviousClose;

//         const change = (price - prevPrice).toFixed(2);
//         const changePer = ((change / prevPrice) * 100).toFixed(2);

//         if (!prevRef.current || prevRef.current.price !== price) {
//             setState({ price, change, changePer });
//             prevRef.current = { price, change, changePer };
//         }
// };


//   const fetchAll = async () => {
//     fetchIndex(
//       "/api/index/sensex",
//       setSensex,
//       sensexRef
//     );
//     fetchIndex(
//       "/api/index/nifty",
//       setNifty,
//       niftyRef
//     );
//     fetchIndex(
//       "/api/index/banknifty",
//       setBankNifty,
//       bankNiftyRef
//     );
//   };

//   useEffect(() => {
//     fetchAll();
//     timerRef.current = setInterval(fetchAll, 600000);

//     return () => clearInterval(timerRef.current);
//   }, []);

//   return (
//     <div className="py-3 flex justify-around bg-linear-to-r from-blue-500 to-blue-600">
//       <Nifty data={nifty} />
//       <Sensex data={sensex} />
//       <BankNifty data={bankNifty} />
//     </div>
//   );
// };

// export default ExchangeRates;

// import { useEffect, useState } from "react";
// import socket from "../../socket"; // adjust path if needed
// import Nifty from "./Nifty";
// import Sensex from "./Sensex";
// import BankNifty from "./BankNifty";

// const ExchangeRates = () => {
//   const [sensex, setSensex] = useState({});
//   const [nifty, setNifty] = useState({});
//   const [bankNifty, setBankNifty] = useState({});

//   /* ==============================
//      SOCKET CONNECTION
//   ================================= */

//   // useEffect(() => {
//   //   // Subscribe to all three indices
//   //   socket.emit("subscribeIndex", { name: "nifty" });
//   //   socket.emit("subscribeIndex", { name: "sensex" });
//   //   socket.emit("subscribeIndex", { name: "banknifty" });

//   //   socket.on("indexUpdate", (res) => {
//   //     if (!res?.data?.chart?.result) return;

//   //     const result = res.data.chart.result[0];
//   //     const meta = result.meta;

//   //     const price = meta.regularMarketPrice;
//   //     const prevPrice = meta.chartPreviousClose;

//   //     if (!price || !prevPrice) return;

//   //     const change = (price - prevPrice).toFixed(2);
//   //     const changePer = ((change / prevPrice) * 100).toFixed(2);

//   //     const formattedData = {
//   //       price,
//   //       change,
//   //       changePer,
//   //     };

//   //     // Update only matching index
//   //     if (res.name === "nifty") setNifty(formattedData);
//   //     if (res.name === "sensex") setSensex(formattedData);
//   //     if (res.name === "banknifty") setBankNifty(formattedData);
//   //   });

//   //   return () => {
//   //     socket.emit("unsubscribeIndex");
//   //     socket.off("indexUpdate");
//   //   };
//   // }, []);

//   useEffect(() => {
//   socket.off("indexUpdate"); // prevent duplicate listeners

//   socket.emit("subscribeIndex", { name: "nifty" });
//   socket.emit("subscribeIndex", { name: "sensex" });
//   socket.emit("subscribeIndex", { name: "banknifty" });

//   socket.on("indexUpdate", (res) => {
//     if (!res?.data?.chart?.result) return;

//     const result = res.data.chart.result[0];
//     const meta = result.meta;

//     const price = meta.regularMarketPrice;
//     const prevPrice = meta.chartPreviousClose;

//     if (!price || !prevPrice) return;

//     const change = (price - prevPrice).toFixed(2);
//     const changePer = ((change / prevPrice) * 100).toFixed(2);

//     const formatted = { price, change, changePer };

//     if (res.name === "nifty") setNifty(formatted);
//     if (res.name === "sensex") setSensex(formatted);
//     if (res.name === "banknifty") setBankNifty(formatted);
//   });

//   return () => {
//     socket.off("indexUpdate");
//   };
// }, []);


//   return (
//     <div className="py-3 flex justify-around bg-linear-to-r from-blue-500 to-blue-600">
//       <Nifty data={nifty} />
//       <Sensex data={sensex} />
//       <BankNifty data={bankNifty} />
//     </div>
//   );
// };

// export default ExchangeRates;

// import { useEffect, useRef, useState } from "react";
// import Nifty from "./Nifty";
// import Sensex from "./Sensex";
// import BankNifty from "./BankNifty";

// const ExchangeRates = () => {
//   const [sensex, setSensex] = useState({});
//   const [nifty, setNifty] = useState({});
//   const [bankNifty, setBankNifty] = useState({});

//   const sensexRef = useRef(null);
//   const niftyRef = useRef(null);
//   const bankNiftyRef = useRef(null);

//   const fetchIndex = async (url, setState, ref) => {
//     try {
//       const res = await fetch(url);
//       const json = await res.json();

//       const result = json?.chart?.result?.[0];
//       if (!result) return;

//       const meta = result.meta;

//       const price = meta.regularMarketPrice;
//       const prev = meta.chartPreviousClose;

//       // ✅ IMPORTANT FIX
//       if (price == null || prev == null) return;

//       const change = +(price - prev).toFixed(2);
//       const changePer = +((change / prev) * 100).toFixed(2);

//       const formatted = { price, change, changePer };

//       if (!ref.current || ref.current.price !== price) {
//         setState(formatted);
//         ref.current = formatted;
//       }
//     } catch (err) {
//       console.error("Index fetch failed:", err);
//     }
//   };

//   const fetchAll = () => {
//     fetchIndex("http://localhost:5000/api/index/nifty", setNifty, niftyRef);
//     fetchIndex("http://localhost:5000/api/index/sensex", setSensex, sensexRef);
//     fetchIndex("http://localhost:5000/api/index/banknifty", setBankNifty, bankNiftyRef);
//   };

//   useEffect(() => {
//     fetchAll();
//     const id = setInterval(fetchAll, 5 * 60 * 1000);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div className="py-3 flex justify-around bg-linear-to-r from-blue-500 to-blue-600">
//       <Nifty data={nifty} />
//       <Sensex data={sensex} />
//       <BankNifty data={bankNifty} />
//     </div>
//   );
// };

// export default ExchangeRates;

// import { useEffect, useState } from "react";
// import socket from "../../socket";
// import Nifty from "./Nifty";
// import Sensex from "./Sensex";
// import BankNifty from "./BankNifty";

// const ExchangeRates = () => {
//   const [sensex, setSensex] = useState({});
//   const [nifty, setNifty] = useState({});
//   const [bankNifty, setBankNifty] = useState({});

//   useEffect(() => {
//     const handler = (res) => {
//       if (!res?.data) return;

//       if (res.name === "nifty") setNifty(res.data);
//       if (res.name === "sensex") setSensex(res.data);
//       if (res.name === "banknifty") setBankNifty(res.data);
//     };

//     socket.on("indexUpdate", handler);

//     return () => {
//       socket.off("indexUpdate", handler);
//     };
//   }, []);

//   return (
//     <div className="py-3 mt-6 flex justify-around bg-linear-to-r from-blue-500 to-blue-600">
//       <Nifty data={nifty} />
//       <Sensex data={sensex} />
//       <BankNifty data={bankNifty} />
//     </div>
//   );
// };

// export default ExchangeRates;

import { useEffect, useState } from "react";
import socket from "../../socket";
import Nifty from "./Nifty";
import Sensex from "./Sensex";
import BankNifty from "./BankNifty";

const defaultIndex = {
  price: "--",
  change: "--",
  percent: "--",
};

const ExchangeRates = () => {
  const [sensex, setSensex] = useState(defaultIndex);
  const [nifty, setNifty] = useState(defaultIndex);
  const [bankNifty, setBankNifty] = useState(defaultIndex);

  // 1️⃣ Load from localStorage immediately on mount
  useEffect(() => {
    const storedNifty = localStorage.getItem("nifty");
    const storedSensex = localStorage.getItem("sensex");
    const storedBankNifty = localStorage.getItem("banknifty");

    if (storedNifty) setNifty(JSON.parse(storedNifty));
    if (storedSensex) setSensex(JSON.parse(storedSensex));
    if (storedBankNifty) setBankNifty(JSON.parse(storedBankNifty));
  }, []);

  // 2️⃣ Listen to socket updates
  useEffect(() => {
    const handler = (res) => {
      if (!res?.data || !res?.name) return;

      switch (res.name.toLowerCase()) {
        case "nifty":
          setNifty(res.data);
          localStorage.setItem("nifty", JSON.stringify(res.data));
          break;

        case "sensex":
          setSensex(res.data);
          localStorage.setItem("sensex", JSON.stringify(res.data));
          break;

        case "banknifty":
          setBankNifty(res.data);
          localStorage.setItem("banknifty", JSON.stringify(res.data));
          break;

        default:
          break;
      }
    };

    socket.on("indexUpdate", handler);

    return () => {
      socket.off("indexUpdate", handler);
    };
  }, []);

  return (
    <div className="py-3 mt-6 flex justify-around bg-gradient-to-r from-blue-500 to-blue-600">
      <Nifty data={nifty} />
      <Sensex data={sensex} />
      <BankNifty data={bankNifty} />
    </div>
  );
};

export default ExchangeRates;