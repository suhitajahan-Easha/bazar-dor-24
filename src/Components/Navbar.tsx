import Image from "next/image";
import Navlinks from "./Navlink";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className=" bg-base-100">
      <div className="navbar max-w-300 mx-auto px-4 min-h-20">
        {/* Logo + Brand */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="bg-[#05893E] p-2.5 rounded-xl">
              <Image
                src="/logo-icon.png"
                alt="বাজার দর"
                width={38}
                height={38}
                className="w-9 h-9"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold leading-tight">বাজার দর</h1>
              <p className="text-md text-gray-500">{date}</p>
            </div>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
            সাইন ইন
          </button>

          <button className="px-5 py-2 rounded-lg text-sm text-white bg-[#05893E] shadow-sm hover:bg-[#047a37]">
            সাইন আপ
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-300 mx-auto border-t border-gray-100">
        <Navlinks />
      </div>
    </div>
    // <div className=" ">
    //   <div className="navbar bg-base-100 shadow-sm max-w-300 mx-auto m-2">
    //     <div className="flex-1">
    //          <div className="flex items-center gap-3">
    //           <div className="bg-[#05893E] p-3 rounded-2xl">
    //             <Image className=" w-10 h-10"
    //                src={"/logo-icon.png"}
    //                alt="logo"
    //                height={10}
    //                width={10}
    //             ></Image></div>
    //           <div>
    //             <h1 className="font-bold">বাজার দর</h1>
    //             <p>{date}</p>
    //           </div>
    //         </div>

    //     </div>
    //     <div className="flex-none  ">
    //       <button className="btn p-3 px-5 mr-3 rounded-xl ">সাইন ইন</button>
    //       <button className="btn p-3 px-5 text-white bg-[#05893E] rounded-xl">সাইন আপ</button>
    //       {/* <ul className="menu menu-horizontal px-1">
    //         <li>
    //           <a>Link</a>
    //         </li>
    //         <li>
    //           <details>
    //             <summary>Parent</summary>
    //             <ul className="bg-base-100 rounded-t-none p-2">
    //               <li>
    //                 <a>Link 1</a>
    //               </li>
    //               <li>
    //                 <a>Link 2</a>
    //               </li>
    //             </ul>
    //           </details>
    //         </li>
    //       </ul> */}
    //     </div>
    //   </div>
    //   <div className="max-w-300 mx-auto pl-10"><Navlinks></Navlinks></div>
    // </div>
  );
};

export default Navbar;
