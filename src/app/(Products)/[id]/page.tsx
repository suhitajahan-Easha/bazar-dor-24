import Image from "next/image";
import Link from "next/link";
import React from "react";
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
  console.log("Status:", res.status);

  const data = await res.json();

  console.log(data);
  

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
                  প্রতি{" "}
                  {data.unit === "kg"
                    ? "কেজি"
                    : data.unit === "litre"
                      ? "লিটার"
                      : "ডজন"}{" "}
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
                টাকা /{" "}
                {data.unit === "kg"
                  ? "কেজি"
                  : data.unit === "litre"
                    ? "লিটার"
                    : "ডজন"}
              </p>

              <p
                className={`mt-0.5 text-[10px] font-medium ${
                  data.change.dir === "up" ? "text-red-500" : "text-green-600"
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

            <p className="text-[11px] text-gray-500">প্রতি কেজি-এর হিসাবে</p>
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
