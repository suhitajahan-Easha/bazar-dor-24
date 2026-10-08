import React from "react";
import { RxTriangleDown } from "react-icons/rx";
import { GoTriangleUp } from "react-icons/go";
import Productdisplay from "./Productdisplay";
interface navs {
  id: string;
  nameBn: string;
  image: string;
  today: number;
  categoryNameBn: string;
  unit:string;
  change: {
    dir: string;
    pct: number;
  };
}

const Homeproducts = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const data = await res.json();
  console.log(data);
  return (
    <div className="max-w-300 mx-auto mt-15 ">
      <div >
        <p className="flex items-center  gap-2 font-bold text-2xl my-3">
          <GoTriangleUp className="text-2xl text-red-600" />
          আজ দাম বেড়েছে
        </p>
        <div className="grid grid-cols-3 gap-3">
          {data
            .filter((product: navs) => product.change.dir === "up")
            .sort((a:navs, b:navs) => Number(b.change.pct) - Number(a.change.pct))
            .slice(0, 6)
            .map((product: navs, i: number) => (
              <Productdisplay key={i} product={product} />
            ))}
        </div>
      </div>
      <div >
        <p className="flex items-center gap-2 font-bold text-2xl my-5">
          <RxTriangleDown className="text-2xl text-green-600" />
          আজ দাম কমেছে
        </p>
        <div className="grid grid-cols-3 gap-3">
            {data
            .filter((product: navs) => product.change.dir === "down")
            .sort((a:navs, b:navs) => Number(b.change.pct) - Number(a.change.pct))
            .slice(0, 6)
            .map((product: navs, i: number) => (
              <Productdisplay key={i} product={product} />
            ))}

        </div>
      </div>
      <div className="" id="সব পণ্য">
        <p className=" font-bold text-2xl mt-6">সব পণ্য</p>
        <p className="my-3">
          মোট {data.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
        </p>
        <div className="grid grid-cols-3 gap-3">
          {data.map((product: navs, i: number) => (
            <Productdisplay key={i} product={product}></Productdisplay>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homeproducts;
