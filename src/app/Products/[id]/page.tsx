import { Product } from "@/lib/type";
import { translateUnit } from "@/lib/unitMap";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
export interface Root {
  id: number;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: Change;
  markets: Market[];
}

export interface Change {
  dir: string;
  pct: number;
}

export interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

const Productdetailpage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${id}`,
  );
  // const res = await fetch(
  //   `https://api.abcz.workers.dev/api/bazardor/products/${id}`,
  // );
  const data = await res.json();
  if (!res.ok || data.error === "Not found") {
  notFound();
}

  

  const minPrice = Math.min(...data.markets.map((item:Market) => item.min));
  const maxPrice = Math.max(...data.markets.map((item:Market) => item.max));
  const averagePrice =
    data.markets.reduce((sum:number, item:Market) => sum + (item.min + item.max) / 2, 0) /
    data.markets.length;
  

  return (
    <div className="max-w-300 mx-auto my-10">
      <div className="space-y-4 mb-5">
        {/* Breadcrumb */}
        <div className="px-1 text-xs text-gray-500">
          <Link href='/'><span>হোম</span> </Link>
          <span className="mx-2">›</span>
          <Link href={`/Category/${data.slug}`}>
              <span>{data.categoryNameBn}</span>
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{data.nameBn}</span>
        </div>

        {/* Product Header */}
        <div className="rounded-xl border border-gray-200 bg-white p-3 sm:p-4">
          <div className="flex items-center justify-between gap-3">
            {/* Left: Image + Information */}
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              {/* Product Image */}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F1F6F3]">
                <span className="text-4xl">{data.image}</span>
              </div>

              {/* Product Information */}
              <div className="min-w-0">
                <h1 className="truncate text-lg font-bold text-gray-800 sm:text-xl">
                  {data.nameBn}
                </h1>

                <p className="text-xs text-gray-500">
                  প্রতি{" "}{translateUnit(data.unit)}{" "}
                  {data.categoryNameBn}
                </p>

                <p className="mt-1 truncate text-[11px] text-gray-600 sm:text-xs">
                  গতকালের তুলনায় আজ দাম বেড়েছে ·
                  {(data.today - data.yesterday).toLocaleString("bn-BD")} টাকা
                </p>
              </div>
            </div>

            {/* Right: Today's Price */}
            <div className="shrink-0 rounded-xl bg-gray-50 px-3 py-2.5 text-center sm:px-4">
              <p className="text-[10px] text-gray-500">আজকের দাম</p>

              <p className="text-xl font-bold text-gray-800">
                {data.today.toLocaleString("bn-BD")}
              </p>

              <p className="text-[10px] text-gray-500">
                টাকা /{" "}{translateUnit(data.unit)}
              </p>

              <p
                className={`mt-0.5 text-[10px] font-medium ${
                  data.change.dir === "up" ? "text-green-600" : "text-red-500"
                }`}
              >
                {data.change.dir === "up" ? "▲" : "▼"}{" "}
                {data.change.pct.toLocaleString("bn-BD")}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-3 sm:p-4">
        {/* Summary Title */}
        <h2 className="mb-3 text-base font-semibold text-gray-800">
          দামের সারসংক্ষেপ
        </h2>

        {/* Price Summary Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* Lowest Price */}
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
            <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>

            <p className="mt-1 text-xl font-bold text-green-600">
              {minPrice.toLocaleString("bn-BD")} টাকা
            </p>

            <p className="text-[11px] text-gray-500">সবচেয়ে কম দামের বাজার</p>
          </div>

          {/* Highest Price */}
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
            <p className="text-xs text-gray-500">সর্বাধিক দাম</p>

            <p className="mt-1 text-xl font-bold text-red-500">
              {maxPrice.toLocaleString("bn-BD")} টাকা
            </p>

            <p className="text-[11px] text-gray-500">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>

          {/* Average Price */}
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
            <p className="text-xs text-gray-500">গড় দাম</p>

            <p className="mt-1 text-xl font-bold text-green-600">
              {averagePrice.toLocaleString("bn-BD", {
                maximumFractionDigits: 2,
              })}{" "}
              টাকা
            </p>

            <p className="text-[11px] text-gray-500">প্রতি{" "}{translateUnit(data.unit)}-এর হিসাবে</p>
          </div>
        </div>

        {/* Market Prices */}
        <section className="mt-5">
          <h2 className="mb-3 text-base font-semibold text-gray-800">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-162.5 border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="px-4 py-2.5 font-medium">বাজার</th>
                  <th className="px-4 py-2.5 font-medium">বিভাগ</th>
                  <th className="px-4 py-2.5 text-right font-medium">
                    সর্বনিম্ন
                  </th>
                  <th className="px-4 py-2.5 text-right font-medium">
                    সর্বোচ্চ
                  </th>
                  <th className="px-4 py-2.5 text-right font-medium">গড়</th>
                </tr>
              </thead>

              <tbody>
                {data.markets.map((item: Market, index: number) => {
                  const average = (item.min + item.max) / 2;

                  return (
                    <tr
                      key={index}
                      className="border-b border-gray-200 last:border-b-0 even:bg-gray-50"
                    >
                      <td className="px-4 py-2.5 text-gray-700">
                        {item.market}
                      </td>

                      <td className="px-4 py-2.5 text-gray-700">
                        {item.division}
                      </td>

                      <td className="px-4 py-2.5 text-right text-gray-700">
                        {item.min.toLocaleString("bn-BD")} টাকা
                      </td>

                      <td className="px-4 py-2.5 text-right text-gray-700">
                        {item.max.toLocaleString("bn-BD")} টাকা
                      </td>

                      <td className="px-4 py-2.5 text-right font-medium text-gray-800">
                        {average.toLocaleString("bn-BD", {
                          maximumFractionDigits: 2,
                        })}{" "}
                        টাকা
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Productdetailpage;

////responsive

// import { Product } from "@/lib/type";
// import { translateUnit } from "@/lib/unitMap";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// export interface Root {
//   id: number;
//   nameBn: string;
//   category: string;
//   categoryNameBn: string;
//   unit: string;
//   image: string;
//   today: number;
//   yesterday: number;
//   lastWeek: number;
//   lastMonth: number;
//   change: Change;
//   markets: Market[];
// }

// export interface Change {
//   dir: string;
//   pct: number;
// }

// export interface Market {
//   market: string;
//   division: string;
//   min: number;
//   max: number;
// }

// const Productdetailpage = async ({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) => {
//   const { id } = await params;

//   const res = await fetch(
//     `https://api.api-store.workers.dev/api/bazardor/products/${id}`,
//   );

//   // const res = await fetch(
//   //   `https://api.abcz.workers.dev/api/bazardor/products/${id}`,
//   // );

//   const data = await res.json();

//   if (!res.ok || data.error === "Not found") {
//     notFound();
//   }

//   const minPrice = Math.min(...data.markets.map((item: Market) => item.min));
//   const maxPrice = Math.max(...data.markets.map((item: Market) => item.max));
//   const averagePrice =
//     data.markets.reduce(
//       (sum: number, item: Market) => sum + (item.min + item.max) / 2,
//       0,
//     ) / data.markets.length;

//   const priceDifference = data.today - data.yesterday;

//   return (
//     <div className="mx-auto my-10 max-w-300 max-md:my-6 max-md:px-5 max-sm:my-4 max-sm:px-3">
//       <div className="mb-5 space-y-4 max-sm:mb-4 max-sm:space-y-3">
//         {/* Breadcrumb */}
//         <div className="flex flex-wrap items-center gap-y-1 px-1 text-xs text-gray-500 max-sm:text-[10px]">
//           <Link href="/" className="hover:text-[#05893E]">
//             হোম
//           </Link>
//           <span className="mx-2">›</span>
//           <Link
//             href={`/Category/${data.category}`}
//             className="hover:text-[#05893E]"
//           >
//             {data.categoryNameBn}
//           </Link>
//           <span className="mx-2">›</span>
//           <span className="break-words text-gray-700">{data.nameBn}</span>
//         </div>

//         {/* Product Header */}
//         <div className="rounded-xl border border-gray-200 bg-white p-3 sm:p-4">
//           <div className="flex items-center justify-between gap-3 max-sm:items-start max-sm:gap-2">
//             {/* Product Image + Information */}
//             <div className="flex min-w-0 items-center gap-3 sm:gap-4 max-sm:items-start max-sm:gap-2.5">
//               <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F1F6F3] max-md:h-14 max-md:w-14 max-sm:h-11 max-sm:w-11 max-sm:rounded-xl">
//                 <span className="text-4xl max-md:text-3xl max-sm:text-2xl">
//                   {data.image}
//                 </span>
//               </div>

//               <div className="min-w-0">
//                 <h1 className="break-words text-lg font-bold text-gray-800 sm:text-xl max-sm:text-sm">
//                   {data.nameBn}
//                 </h1>

//                 <p className="mt-0.5 text-xs text-gray-500 max-sm:text-[10px]">
//                   প্রতি {translateUnit(data.unit)} {data.categoryNameBn}
//                 </p>

//                 <p className="mt-1 text-[11px] text-gray-600 sm:text-xs max-sm:text-[10px] max-sm:leading-4">
//                   {priceDifference > 0
//                     ? "গতকালের তুলনায় দাম বেড়েছে"
//                     : priceDifference < 0
//                       ? "গতকালের তুলনায় দাম কমেছে"
//                       : "গতকালের তুলনায় দামে পরিবর্তন নেই"}
//                   {" · "}
//                   {Math.abs(priceDifference).toLocaleString("bn-BD")} টাকা
//                 </p>
//               </div>
//             </div>

//             {/* Today's Price */}
//             <div className="shrink-0 rounded-xl bg-gray-50 px-3 py-2.5 text-center sm:px-4 max-sm:px-2 max-sm:py-2">
//               <p className="text-[10px] text-gray-500 max-sm:text-[9px]">
//                 আজকের দাম
//               </p>

//               <p className="text-xl font-bold text-gray-800 max-md:text-lg max-sm:text-sm">
//                 {data.today.toLocaleString("bn-BD")}
//               </p>

//               <p className="text-[10px] text-gray-500 max-sm:text-[9px]">
//                 টাকা / {translateUnit(data.unit)}
//               </p>

//               <p
//                 className={`mt-0.5 text-[10px] font-medium max-sm:text-[9px] ${
//                   Number(data.change.pct) === 0
//                     ? "text-gray-500"
//                     : data.change.dir === "up"
//                       ? "text-red-500"
//                       : "text-green-600"
//                 }`}
//               >
//                 {Number(data.change.pct) === 0
//                   ? "− ০.০%"
//                   : `${data.change.dir === "up" ? "▲" : "▼"} ${Math.abs(
//                       Number(data.change.pct),
//                     ).toLocaleString("bn-BD")}%`}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Price Summary + Market Prices */}
//       <div className="rounded-xl border border-gray-200 bg-white p-3 sm:p-4 max-sm:p-3">
//         <h2 className="mb-3 text-base font-semibold text-gray-800 max-sm:text-sm">
//           দামের সারসংক্ষেপ
//         </h2>

//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 max-sm:gap-2.5">
//           <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 max-md:px-3 max-sm:px-3 max-sm:py-3">
//             <p className="text-xs text-gray-500 max-sm:text-[11px]">
//               সর্বনিম্ন দাম
//             </p>
//             <p className="mt-1 text-xl font-bold text-green-600 max-md:text-lg max-sm:text-lg">
//               {minPrice.toLocaleString("bn-BD")} টাকা
//             </p>
//             <p className="text-[11px] text-gray-500 max-sm:text-[10px]">
//               সবচেয়ে কম দামের বাজার
//             </p>
//           </div>

//           <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 max-md:px-3 max-sm:px-3 max-sm:py-3">
//             <p className="text-xs text-gray-500 max-sm:text-[11px]">
//               সর্বাধিক দাম
//             </p>
//             <p className="mt-1 text-xl font-bold text-red-500 max-md:text-lg max-sm:text-lg">
//               {maxPrice.toLocaleString("bn-BD")} টাকা
//             </p>
//             <p className="text-[11px] text-gray-500 max-sm:text-[10px]">
//               সবচেয়ে বেশি দামের বাজার
//             </p>
//           </div>

//           <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 max-md:px-3 max-sm:px-3 max-sm:py-3">
//             <p className="text-xs text-gray-500 max-sm:text-[11px]">
//               গড় দাম
//             </p>
//             <p className="mt-1 text-xl font-bold text-green-600 max-md:text-lg max-sm:text-lg">
//               {averagePrice.toLocaleString("bn-BD", {
//                 maximumFractionDigits: 2,
//               })}{" "}
//               টাকা
//             </p>
//             <p className="text-[11px] text-gray-500 max-sm:text-[10px]">
//               প্রতি {translateUnit(data.unit)}-এর হিসাবে
//             </p>
//           </div>
//         </div>

//         {/* Market Prices */}
//         <section className="mt-5 max-sm:mt-4">
//           <h2 className="mb-3 text-base font-semibold text-gray-800 max-sm:text-sm">
//             বাজারভিত্তিক আজকের দাম
//           </h2>

//           <div className="overflow-x-auto rounded-xl border border-gray-200">
//             <table className="w-full min-w-162.5 border-collapse text-sm max-sm:text-xs">
//               <thead>
//                 <tr className="border-b border-gray-200 text-left text-gray-500">
//                   <th className="whitespace-nowrap px-4 py-2.5 font-medium max-sm:px-3">
//                     বাজার
//                   </th>
//                   <th className="whitespace-nowrap px-4 py-2.5 font-medium max-sm:px-3">
//                     বিভাগ
//                   </th>
//                   <th className="whitespace-nowrap px-4 py-2.5 text-right font-medium max-sm:px-3">
//                     সর্বনিম্ন
//                   </th>
//                   <th className="whitespace-nowrap px-4 py-2.5 text-right font-medium max-sm:px-3">
//                     সর্বোচ্চ
//                   </th>
//                   <th className="whitespace-nowrap px-4 py-2.5 text-right font-medium max-sm:px-3">
//                     গড়
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {data.markets.map((item: Market, index: number) => {
//                   const average = (item.min + item.max) / 2;

//                   return (
//                     <tr
//                       key={`${item.market}-${item.division}-${index}`}
//                       className="border-b border-gray-200 last:border-b-0 even:bg-gray-50"
//                     >
//                       <td className="whitespace-nowrap px-4 py-2.5 text-gray-700 max-sm:px-3">
//                         {item.market}
//                       </td>

//                       <td className="whitespace-nowrap px-4 py-2.5 text-gray-700 max-sm:px-3">
//                         {item.division}
//                       </td>

//                       <td className="whitespace-nowrap px-4 py-2.5 text-right text-gray-700 max-sm:px-3">
//                         {item.min.toLocaleString("bn-BD")} টাকা
//                       </td>

//                       <td className="whitespace-nowrap px-4 py-2.5 text-right text-gray-700 max-sm:px-3">
//                         {item.max.toLocaleString("bn-BD")} টাকা
//                       </td>

//                       <td className="whitespace-nowrap px-4 py-2.5 text-right font-medium text-gray-800 max-sm:px-3">
//                         {average.toLocaleString("bn-BD", {
//                           maximumFractionDigits: 2,
//                         })}{" "}
//                         টাকা
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Productdetailpage;
