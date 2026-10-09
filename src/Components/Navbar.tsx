import Image from "next/image";
import Navlinks from "./Navlink";
import UserInfo from "./UserInfo";
import Link from "next/link";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className=" bg-base-100">
      <div className="navbar max-w-300 mx-auto  min-h-20">
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
        <UserInfo></UserInfo>
      </div>

      {/* Navigation */}
      <div className="max-w-300 mx-auto border-t border-gray-100">
        <Navlinks />
      </div>
    </div>
  );
};

export default Navbar;
