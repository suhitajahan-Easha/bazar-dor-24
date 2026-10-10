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
    <div className="ml-5 flex min-w-0 items-center gap-3 overflow-x-auto whitespace-nowrap py-2 font-bold overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-7 md:px-4 max-md:ml-0 max-md:w-full max-md:gap-5 max-md:px-3 max-sm:gap-4 max-sm:px-2">
      {categories.map((n) => {
        const isActive = pathname === `/Category/${n.slug}`;

        return (
          <Link
            key={n.slug}
            href={`/Category/${n.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm transition-colors ${
              isActive
                ? "border-b-2 border-[#058A43] pb-1 text-[#058A43]"
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

