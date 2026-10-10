"use client";

import { useState } from "react";
import { Product } from "@/lib/type";
import Productdisplay from "./Productdisplay";

const CategoryProductlist = ({ data }:{data:Product[]}) => {
  const [sort, setSort] = useState("default");

  const sortedData = [...data].sort((a, b) => {
    if (sort === "low") {
      return a.today - b.today;
    }

    if (sort === "high") {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <>
      {/* Sorting */}
      <div className="flex justify-end">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 outline-none"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      {/* Product Count */}
      <p className="mt-3 text-[10px] text-gray-500">
        মোট {data.length} টি পণ্য পাওয়া গেছে
      </p>

      {/* Products */}
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sortedData.map((product) => (
          <Productdisplay
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryProductlist;

///responsive
// "use client";

// import { useState } from "react";
// import { Product } from "@/lib/type";
// import Productdisplay from "./Productdisplay";

// const CategoryProductlist = ({ data }: { data: Product[] }) => {
//   const [sort, setSort] = useState("default");

//   const sortedData = [...data].sort((a, b) => {
//     if (sort === "low") {
//       return a.today - b.today;
//     }

//     if (sort === "high") {
//       return b.today - a.today;
//     }

//     return 0;
//   });

//   return (
//     <>
//       {/* Sorting */}
//       <div className="flex justify-end">
//         <select
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 outline-none"
//         >
//           <option value="default">ডিফল্ট</option>
//           <option value="low">দাম: কম থেকে বেশি</option>
//           <option value="high">দাম: বেশি থেকে কম</option>
//         </select>
//       </div>

//       {/* Product Count */}
//       <p className="mt-3 text-[10px] text-gray-500">
//         মোট {data.length.toLocaleString("bn-BD")} টি পণ্য পাওয়া গেছে
//       </p>

//       {/* Products */}
//       <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
//         {sortedData.map((product) => (
//           <Productdisplay key={product.id} product={product} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default CategoryProductlist;