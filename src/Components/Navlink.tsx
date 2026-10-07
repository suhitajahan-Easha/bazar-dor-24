import Link from "next/link";
import React from "react";
interface navs {
  nameBn: string;
  slug: string;
  icon: string;
  id: string;
}

const Navlinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const data: navs[] = await res.json();

  //console.log(data);

  return (
    <div className="flex items-center gap-7 px-4 py-2 ml-5 font-bold">
      {data.map((n, i) => (
        <Link
          key={i}
          href={n.slug}
          className="flex items-center gap-1.5 text-sm whitespace-nowrap hover:text-[#05893E]"
        >
          <span>{n.icon}</span>
          <span>{n.nameBn}</span>
        </Link>
      ))}
    </div>
    // <div className='flex gap-5 mt-5 '>

    //     {
    //         data.map((n,i)=><Link key={i} href={n.slug}>
    //             <div className='flex gap-1'>
    //                 <p>{n.icon}</p>
    //                 <h1>{n.nameBn}</h1>
    //             </div>
    //         </Link>)
    //     }
    // </div>
  );
};

export default Navlinks;
