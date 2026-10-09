"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxTriangleDown } from "react-icons/rx";
import { toast } from "react-toastify";


const UserInfo = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;
  const [isOpen, setIsOpen] = useState(false);

  const handlesignout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("আপনি সফলভাবে লগআউট করেছেন। আবার আসবেন! 👋");
          router.push("/auth/Sign-in"); // redirect to login page
        },
      },
    });
  };
  return (
    <div>
      {session?.user ? (
        <div className="relative ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-4 rounded-lg px-2 py-1.5 transition hover:bg-[#F1F6F2]"
          >
            <img
              src={session.user.image || "/default-avatar.png"}
              alt={session?.user?.name || "Profile"}
              className="h-8 w-8 rounded-full border border-[#E0E9E2] object-cover"
            />

            <span className="max-w-[100px] truncate text-xs font-medium text-[#26382D]">
              {session.user.name}
            </span>

            <span className="text-[16px] text-gray-500"><RxTriangleDown /></span>
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-[#E0E9E2] bg-[#FBFDFC] p-3 shadow-lg">
              <div className="border-b border-[#E8EEE9] pb-3">
                <p className="truncate text-sm font-semibold text-[#26382D]">
                  {session.user.name}
                </p>
                <p className="mt-1 truncate text-xs text-gray-500">
                  {session.user.email}
                </p>
              </div>

              <Link
                href="/Profile"
                onClick={() => setIsOpen(false)}
                className="mt-2 block rounded-md px-2 py-2 text-xs text-[#35443A] hover:bg-[#F1F6F2]"
              >
                👤 আমার প্রোফাইল
              </Link>

              <button
                onClick={async () => {
                  setIsOpen(false);
                  await handlesignout();
                }}
                className="w-full rounded-md px-2 py-2 text-left text-xs text-red-500 hover:bg-red-50"
              >
                ↪ সাইন আউট
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/auth/Sign-in"
            className="rounded-lg px-4 py-2 text-sm text-[#35443A] hover:bg-[#F1F6F2]"
          >
            সাইন ইন
          </Link>

          <Link
            href="/auth/Sign-up"
            className="rounded-lg bg-[#05893E] px-4 py-2 text-sm text-white shadow-sm hover:bg-[#047a37]"
          >
            সাইন আপ
          </Link>
        </div>
      )}
      {/* {session?.user ? (
        <div className="flex items-center gap-2">
          <h1>Welcome {session?.user.name}</h1>
          <button
            onClick={handlesignout}
            className="px-5 py-2 rounded-lg text-sm text-white bg-[#05893E] shadow-sm hover:bg-[#047a37]"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link href="/auth/Sign-in">
            <button className="px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
              সাইন ইন
            </button>
          </Link>

          <Link href="/auth/Sign-up">
            <button className="px-5 py-2 rounded-lg text-sm text-white bg-[#05893E] shadow-sm hover:bg-[#047a37]">
              সাইন আপ
            </button>
          </Link>
        </div>
      )} */}
    </div>
  );
};
export default UserInfo;
