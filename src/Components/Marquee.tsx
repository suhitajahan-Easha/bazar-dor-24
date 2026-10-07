import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { RxTriangleDown } from "react-icons/rx";
import { GoTriangleUp } from "react-icons/go";

interface navs {
  id: string;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: string;
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const data = await res.json();

  //console.log(data);
  return (
    <div className="mt-5 overflow-hidden border-y border-gray-200 bg-gray-50">
      <MarqueeText direction="right" duration={10} className="py-2">
        {data.map((n: navs) => (
          <div
            key={n.id}
            className="flex items-center gap-3 px-4 border-r border-gray-200 whitespace-nowrap text-[15px]"
          >
            <span className="font-bold">
              {n.image} {n.nameBn}
            </span>

            <span>
              {n.today.toLocaleString("bn-BD")}
              {n.unit === "dozen" ? " টাকা/ ডজন" :  n.unit === "litre"? " টাকা/ লিটার": " টাকা/ কেজি"}
            </span>

            <span
              className={`flex items-center ${
                Number(n.change.pct) === 0
                  ? "text-gray-500"
                  : n.change.dir === "up"
                    ? "text-green-600"
                    : "text-red-600"
              }`}
            >
              {Number(n.change.pct) === 0 ? (
                "− ০.০%"
              ) : (
                <>
                  {n.change.dir === "up" ? (
                    <GoTriangleUp className="text-lg" />
                  ) : (
                    <RxTriangleDown className="text-lg" />
                  )}
                  {Math.abs(Number(n.change.pct)).toLocaleString("bn-BD")}%
                </>
              )}
            </span>
          </div>
        ))}
      </MarqueeText>
    </div>
    // <div className=" mt-8">
    //   <div className="flex  mx-5 ">
    //     <MarqueeText direction="right" duration={10} className="py-1">
    //       {data.map((n: navs) => (
    //         <div key={n.id} className="flex gap-8 ">
    //           <div className="flex gap-3 mx-5">
    //             <div>
    //               <span className="pr-2">{n.image}</span>
    //               <span>{n.nameBn}</span>
    //             </div>
    //             <p>{n.today.toLocaleString("bn-BD")} টাকা/কেজি</p>
    //             <p className={`flex justify-center items-center ${
    //                 n.change.dir === "up" ? "text-green-500" : "text-red-600"
    //               }`}
    //              >
    //               {n.change.dir === "up" ? (
    //                 <GoTriangleUp className="text-xl" />
    //               ) : (
    //                 <RxTriangleDown className="text-xl" />
    //               )}
    //               {Math.abs(Number(n.change.pct)).toLocaleString("bn-BD")} %
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </MarqueeText>
    //   </div>
    // </div>
  );
};

export default Marquee;
