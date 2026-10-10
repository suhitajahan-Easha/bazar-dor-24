
import { RxTriangleDown } from "react-icons/rx";
import { GoTriangleUp } from "react-icons/go";
import Productdisplay from "./Productdisplay";
import { Product } from "@/lib/type";

const Homeproducts = async () => {
  // const res = await fetch(
  //   "https://api.api-store.workers.dev/api/bazardor/products",
  // );
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
  );

  const data = await res.json();

  return (
    <div className="mx-auto  mt-15 max-w-300 px-3 sm:px-4 lg:px-0">
      <div>
        <p className="my-3 flex items-center gap-2 text-xl font-bold sm:text-2xl">
          <GoTriangleUp className="shrink-0 text-2xl text-red-600" />
          আজ দাম বেড়েছে
        </p>

        <div className="grid grid-cols-1 gap-5 mx-4 lg:mx-0 lg:gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data
            .filter((product: Product) => product.change.dir === "up")
            .sort(
              (a: Product, b: Product) =>
                Number(b.change.pct) - Number(a.change.pct),
            )
            .slice(0, 6)
            .map((product: Product) => (
              <Productdisplay key={product.slug} product={product} />
            ))}
        </div>
      </div>

      <div>
        <p className="my-5 flex items-center gap-2 text-xl font-bold sm:text-2xl">
          <RxTriangleDown className="shrink-0 text-2xl text-green-600" />
          আজ দাম কমেছে
        </p>

        <div className="grid grid-cols-1 gap-5 mx-4 lg:mx-0 lg:gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data
            .filter((product: Product) => product.change.dir === "down")
            .sort(
              (a: Product, b: Product) =>
                Number(a.change.pct) - Number(b.change.pct),
            )
            .slice(0, 6)
            .map((product: Product) => (
              <Productdisplay key={product.slug} product={product} />
            ))}
        </div>
      </div>

      <div id="সব পণ্য">
        <p className="mt-6 text-xl font-bold sm:text-2xl">সব পণ্য</p>

        <p className="my-3 text-sm sm:text-base">
          মোট {data.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="grid grid-cols-1 gap-5 mx-4 lg:mx-0 lg:gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((product: Product) => (
            <Productdisplay key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homeproducts;