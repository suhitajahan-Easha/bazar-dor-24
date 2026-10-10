// import Image from "next/image";
// import Navlinks from "./Navlink";
// import UserInfo from "./UserInfo";
// import Link from "next/link";

// const Navbar = () => {
//   const date = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });
//   return (
//     <div className=" bg-base-100">
//       <div className="navbar max-w-300 mx-auto  min-h-20">
//         {/* Logo + Brand */}
//         <div className="flex-1">
//           <div className="flex items-center gap-3">
//             <div className="bg-[#05893E] p-2.5 rounded-xl">
//               <Image
//                 src="/logo-icon.png"
//                 alt="বাজার দর"
//                 width={38}
//                 height={38}
//                 className="w-9 h-9"
//                 loading="eager"
//               />
//             </div>

//             <div>
//               <h1 className="text-2xl font-bold leading-tight">বাজার দর</h1>
//               <p className="text-md text-gray-500">{date}</p>
//             </div>
//           </div>
//         </div>
//         <UserInfo></UserInfo>
//       </div>

//       {/* Navigation */}
//       <div className="max-w-300 mx-auto border-t border-gray-100">
//         <Navlinks />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

//responsive added
import Image from "next/image";
import Navlinks from "./Navlink";
import UserInfo from "./UserInfo";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="bg-base-100">
      <div className="navbar mx-auto min-h-20 max-w-300 max-md:min-h-16 max-sm:min-h-14 max-sm:px-3">
        {/* Logo + Brand */}
        <div className="flex-1 min-w-0">
          <div className="flex min-w-0 items-center gap-3 max-md:gap-2 max-sm:gap-1.5">
            <div className="shrink-0 rounded-xl bg-[#05893E] p-2.5 max-md:rounded-lg max-md:p-2 max-sm:p-1.5">
              <Image
                src="/logo-icon.png"
                alt="বাজার দর"
                width={38}
                height={38}
                className="h-9 w-9 max-md:h-8 max-md:w-8 max-sm:h-7 max-sm:w-7"
                loading="eager"
              />
            </div>

            <div className="min-w-0">
              <h1 className="truncate text-2xl font-bold leading-tight max-md:text-xl max-sm:text-base">
                বাজার দর
              </h1>
              <p className="truncate text-md text-gray-500 max-md:text-sm max-sm:text-[10px]">
                {date}
              </p>
            </div>
          </div>
        </div>

        <UserInfo />
      </div>

      {/* Navigation */}
      <div className="mx-auto max-w-300 overflow-hidden border-t border-gray-100">
        <Navlinks />
      </div>
    </div>
  );
};

export default Navbar;


