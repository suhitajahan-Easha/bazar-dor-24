

import CategoryProductlist from "@/Components/CategoryProductlist";

interface Product {
  id: number;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: "kg" | "litre" | "dozen";
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
}

const Categorywisepage = async ({params,}: {params: Promise<{ slug: string }>;}) => {
  const { slug } = await params;

  // const res = await fetch(
  //   `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`,
  // );
   const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${slug}`,
  );
  const data: Product[] = await res.json();
  const category = data[0];

  return (
    <div className="mx-auto max-w-300 px-4 py-6 sm:px-6 lg:px-0">
      {/* Category Header */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F1F6F3]">
            <span className="text-3xl">{category?.categoryIcon}</span>
          </div>

          <div className="min-w-0">
            <h1 className="text-lg font-bold text-gray-800 sm:text-xl">
              {category?.categoryNameBn}
            </h1>

            <p className="mt-0.5 text-[10px] text-gray-500 sm:text-xs">
              {data.length.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>

      {/* Sort */}
      <div className="mt-4">
        <CategoryProductlist data={data} />
      </div>
     
    </div>
  );
};

export default Categorywisepage;