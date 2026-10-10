import Image from "next/image";
import React from "react";

const Hero = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="max-w-300 mx-auto my-5 ">
      <div className="flex items-center justify-between gap-20 rounded-3xl border border-gray-200 bg-[#FCFAFC] px-10 py-7">
        {/* Left side */}
        <div className="flex-1">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1  text-sm text-[#05893E]">
            {date}
          </span>

          <h1 className="mt-6 text-3xl font-bold text-gray-800">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-500 mb-7">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-
            <br />
            সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a href="#সব পণ্য" className=" rounded-lg bg-[#05893E] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#047a37]">
            সব পণ্য দেখুন
          </a>
        </div>

        {/* Right side */}
        <div className="shrink-0 pr-5">
          <Image
            src="/bazar-hero.png"
            alt="বাজার দর"
            width={220}
            height={220}
            className="h-52 w-52 object-contain"
          />
        </div>
      </div>
    </div>
    // <div className="max-w-300 mx-auto my-5 px-5">
    //   <div className="flex items-center justify-between gap-10 rounded-3xl border border-gray-200 bg-[#FCFAFC] px-10 py-7">
    //     {/* Content */}
    //     <div className="flex-1">
    //       <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-[#05893E]">
    //         {date}
    //       </span>

    //       <h1 className="mt-2 text-3xl font-bold text-gray-800">
    //         আজকের বাজারের দাম এক নজরে
    //       </h1>

    //       <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-500">
    //         চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
    //         বিস্তারিত, গড়, সর্বনিম্ন- <br/>সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
    //       </p>

    //       <button className="mt-4 rounded-lg bg-[#05893E] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#047a37]">
    //         সব পণ্য দেখুন
    //       </button>
    //     </div>

    //     {/* Hero Image */}
    //     <div className="shrink-0">
    //       <Image
    //         src="/bazar-hero.png"
    //         alt="বাজার দর"
    //         width={180}
    //         height={180}
    //         className="h-40 w-40 object-contain"
    //       />
    //     </div>
    //   </div>
    // </div>

    // <div>
    //     <div className=' flex gap-6 max-w-300 mx-auto rounded-3xl bg-[#FCFAFC] py-5 my-5 px-5'>
    //         <div>
    //             <h1>{date}</h1>
    //             <h2>আজকের বাজারের দাম এক নজরে</h2>
    //             <p>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
    //             <button>সব পণ্য দেখুন</button>
    //         </div>
    //         <div>
    //             <Image src="/bazar-hero.png"
    //             alt="বাজার দর"
    //             width={50}
    //             height={50}
    //             className="w-30 h-30"></Image>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Hero;
// /////responsive 
// import Image from "next/image";
// import React from "react";

// const Hero = () => {
//   const date = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });

//   return (
//     <div className="mx-auto my-5 max-w-300 max-sm:px-3">
//       <div className="flex items-center justify-between gap-20 rounded-3xl border border-gray-200 bg-[#FCFAFC] px-10 py-7 max-md:gap-8 max-md:px-6 max-md:py-6 max-sm:flex-col-reverse max-sm:gap-4 max-sm:rounded-2xl max-sm:px-5 max-sm:py-5">
//         {/* Left side */}
//         <div className="min-w-0 flex-1 max-sm:w-full">
//           <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-[#05893E] max-sm:text-xs">
//             {date}
//           </span>

//           <h1 className="mt-6 text-3xl font-bold text-gray-800 max-md:text-2xl max-sm:mt-3 max-sm:text-xl">
//             আজকের বাজারের দাম এক নজরে
//           </h1>

//           <p className="mb-7 mt-2 max-w-3xl text-sm leading-6 text-gray-500 max-sm:mb-5 max-sm:text-xs max-sm:leading-5">
//             চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
//             বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
//           </p>

//           <a
//             href="#সব পণ্য"
//             className="inline-block rounded-lg bg-[#05893E] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#047a37] max-sm:px-4 max-sm:py-2 max-sm:text-xs"
//           >
//             সব পণ্য দেখুন
//           </a>
//         </div>

//         {/* Right side — image */}
//         <div className="shrink-0 pr-5 max-md:pr-0 max-sm:flex max-sm:w-full max-sm:justify-center">
//           <Image
//             src="/bazar-hero.png"
//             alt="বাজার দর"
//             width={220}
//             height={220}
//             className="h-52 w-52 object-contain max-md:h-44 max-md:w-44 max-sm:h-36 max-sm:w-36"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;