"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Product } from "@/lib/type";

interface CategoryNavLinksProps {
  categories: Product[];
}

const CategoryNavLinks = ({ categories }: CategoryNavLinksProps) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-7 px-4 py-2 ml-5 font-bold">
      {categories.map((n) => {
        const isActive = pathname === `/Category/${n.slug}`;

        return (
          <Link
            key={n.slug}
            href={`/Category/${n.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`flex items-center gap-1.5 text-sm whitespace-nowrap transition-colors ${
              isActive
                ? "text-[#058A43] border-b-2 border-[#058A43] pb-1"
                : "text-gray-700 hover:text-[#058A43]"
            }`}
          >
            <span>{n.icon}</span>
            <span>{n.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryNavLinks;

///responsive
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Product } from "@/lib/type";

// interface CategoryNavLinksProps {
//   categories: Product[];
// }

// const CategoryNavLinks = ({ categories }: CategoryNavLinksProps) => {
//   const pathname = usePathname();

//   return (
//     <div className="ml-5 flex items-center gap-7 overflow-x-auto whitespace-nowrap px-4 py-2 font-bold max-md:ml-0 max-md:gap-5 max-md:px-3 max-sm:gap-4 max-sm:px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//       {categories.map((n) => {
//         const isActive = pathname === `/Category/${n.slug}`;

//         return (
//           <Link
//             key={n.slug}
//             href={`/Category/${n.slug}`}
//             aria-current={isActive ? "page" : undefined}
//             className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm transition-colors max-sm:gap-1 max-sm:text-xs ${
//               isActive
//                 ? "border-b-2 border-[#058A43] pb-1 text-[#058A43]"
//                 : "text-gray-700 hover:text-[#058A43]"
//             }`}
//           >
//             <span>{n.icon}</span>
//             <span>{n.nameBn}</span>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default CategoryNavLinks;