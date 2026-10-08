import React from "react";
import { RxTriangleDown } from "react-icons/rx";
import { GoTriangleUp } from "react-icons/go";
import Link from "next/link";
interface navs {
   id: number;
   nameBn: string;
   category: string;
   categoryNameBn: string;
   unit: string;
   image:string;
   today: number;
   change: {
    dir: string;
    pct: number;
  };
}

const Categoryproductcard = ({ product }: { product: navs }) => {
  return (
    <Link href={`${product.id}`}>
      <div className="rounded-3xl border border-gray-200 bg-[#FCFAFC] p-5">
        {/* Top section */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F1F6F3]">
            <span className="text-4xl">{product.image}</span>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {product.nameBn}
            </h2>
            <p className="text-base text-gray-700">
              {product.unit === "dozen"
                ? "প্রতি ডজন"
                : product.unit === "litre"
                  ? "প্রতি লিটার"
                  : "প্রতি কেজি"}
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-sm text-gray-700">আজকের দাম</p>

            <p className="mt-1 text-2xl font-bold text-gray-800">
              {product.today.toLocaleString("bn-BD")} টাকা
            </p>
          </div>

          <span
            className={`flex items-center rounded-full px-3 py-1.5 text-sm font-medium ${
              Number(product.change.pct) === 0
                ? "bg-gray-100 text-gray-500"
                : product.change.dir === "up"
                  ? "bg-green-50 text-red-600"
                  : "bg-red-50 text-green-600"
            }`}
          >
            {Number(product.change.pct) === 0 ? (
              "− ০.০%"
            ) : (
              <>
                {product.change.dir === "up" ? (
                  <GoTriangleUp className="mr-1 text-base" />
                ) : (
                  <RxTriangleDown className="mr-1 text-base" />
                )}
                {Math.abs(Number(product.change.pct)).toLocaleString("bn-BD")}%
              </>
            )}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Categoryproductcard;
