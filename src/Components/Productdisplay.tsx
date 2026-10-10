
import { RxTriangleDown } from "react-icons/rx";
import { GoTriangleUp } from "react-icons/go";
import Link from "next/link";
import { translateUnit } from "@/lib/unitMap";
import { Product } from "@/lib/type";

const Productdisplay = ({ product }: { product: Product }) => {
  return (
    <Link href={`/Products/${product.id}`} className="block h-full">
      <div className="h-full rounded-3xl border border-gray-200 bg-[#FCFAFC] p-5 max-md:rounded-2xl max-md:p-4 max-sm:rounded-xl max-sm:p-3">
        {/* Top section */}
        <div className="flex items-center gap-4 max-md:gap-3 max-sm:gap-2.5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F1F6F3] max-md:h-14 max-md:w-14 max-sm:h-11 max-sm:w-11 max-sm:rounded-xl">
            <span className="text-4xl max-md:text-3xl max-sm:text-2xl">
              {product.image}
            </span>
          </div>

          <div className="min-w-0">
            <h2 className="wrap-break-word text-xl font-semibold text-gray-800 max-md:text-lg max-sm:text-base">
              {product.nameBn}
            </h2>
            <p className="text-base text-gray-700 max-md:text-sm max-sm:text-xs">
              প্রতি {translateUnit(product.unit)}
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-5 flex items-end justify-between gap-2 max-md:mt-4 max-sm:mt-3 max-sm:gap-1.5">
          <div className="min-w-0">
            <p className="text-sm text-gray-700 max-sm:text-xs">আজকের দাম</p>

            <p className="mt-1 wrap-break-word text-2xl font-bold text-gray-800 max-md:text-xl max-sm:text-base">
              {product.today.toLocaleString("bn-BD")} টাকা
            </p>
          </div>

          <span
            className={`flex shrink-0 items-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium max-md:px-2.5 max-md:py-1 max-md:text-xs max-sm:px-2 max-sm:text-[10px] ${
              Number(product.change.pct) === 0
                ? "bg-gray-100 text-gray-500"
                : product.change.dir === "up"
                  ? "bg-red-50 text-green-600"
                  : "bg-green-50 text-red-600"
            }`}
          >
            {Number(product.change.pct) === 0 ? (
              "− ০.০%"
            ) : (
              <>
                {product.change.dir === "up" ? (
                  <GoTriangleUp className="mr-1 text-base max-sm:mr-0.5 max-sm:text-xs" />
                ) : (
                  <RxTriangleDown className="mr-1 text-base max-sm:mr-0.5 max-sm:text-xs" />
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

export default Productdisplay;


