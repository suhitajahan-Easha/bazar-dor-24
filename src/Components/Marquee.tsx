import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { RxTriangleDown } from "react-icons/rx";
import { GoTriangleUp } from "react-icons/go";
import Link from "next/link";
import { translateUnit } from "@/lib/unitMap";
import { Product } from "@/lib/type";



const Marquee = async () => {
  //1stapi
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  // const res = await fetch(
  //   "https://api.abcz.workers.dev/api/bazardor/products",
  // );
  const data = await res.json();

  //console.log(data);
  return (
    <div className="mt-5 overflow-hidden border-y border-gray-200 bg-gray-50">
      <MarqueeText direction="right" duration={10}  className="py-2">
        {data.map((n: Product) => (
          <Link href={`/Products/${n.id}`} key={n.id}>
            <div
              className="flex items-center gap-3 px-4 border-r border-gray-200 whitespace-nowrap text-[15px]"
            >
              <span className="font-bold">
                {n.image} {n.nameBn}
              </span>

              <span>
                {n.today.toLocaleString("bn-BD")}{" "}
                টাকা / {translateUnit(n.unit)}
                
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
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;

///responsive 
// import MarqueeText from "react-marquee-text";
// import "react-marquee-text/dist/styles.css";
// import { RxTriangleDown } from "react-icons/rx";
// import { GoTriangleUp } from "react-icons/go";
// import Link from "next/link";
// import { translateUnit } from "@/lib/unitMap";
// import { Product } from "@/lib/type";

// const Marquee = async () => {
//   const res = await fetch(
//     "https://api.api-store.workers.dev/api/bazardor/products",
//   );

//   const data = await res.json();

//   return (
//     <div className="mt-5 overflow-hidden border-y border-gray-200 bg-gray-50">
//       <MarqueeText direction="right" duration={10} className="py-2 max-sm:py-1.5">
//         {data.map((n: Product) => (
//           <Link href={`/Products/${n.id}`} key={n.id}>
//             <div className="flex items-center gap-3 whitespace-nowrap border-r border-gray-200 px-4 text-[15px] max-md:gap-2 max-md:px-3 max-md:text-sm max-sm:gap-1.5 max-sm:px-2 max-sm:text-xs">
//               <span className="font-bold">
//                 {n.image} {n.nameBn}
//               </span>

//               <span>
//                 {n.today.toLocaleString("bn-BD")} টাকা /{" "}
//                 {translateUnit(n.unit)}
//               </span>

//               <span
//                 className={`flex shrink-0 items-center ${
//                   Number(n.change.pct) === 0
//                     ? "text-gray-500"
//                     : n.change.dir === "up"
//                       ? "text-green-600"
//                       : "text-red-600"
//                 }`}
//               >
//                 {Number(n.change.pct) === 0 ? (
//                   "− ০.০%"
//                 ) : (
//                   <>
//                     {n.change.dir === "up" ? (
//                       <GoTriangleUp className="text-lg max-sm:text-sm" />
//                     ) : (
//                       <RxTriangleDown className="text-lg max-sm:text-sm" />
//                     )}
//                     {Math.abs(Number(n.change.pct)).toLocaleString("bn-BD")}%
//                   </>
//                 )}
//               </span>
//             </div>
//           </Link>
//         ))}
//       </MarqueeText>
//     </div>
//   );
// };

// export default Marquee;
