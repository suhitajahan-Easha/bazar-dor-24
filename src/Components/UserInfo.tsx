
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
  const [isOpen, setIsOpen] = useState(false);

  const handlesignout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("আপনি সফলভাবে লগআউট করেছেন। আবার আসবেন! 👋");
          router.push("/auth/Sign-in");
        },
      },
    });
  };

  return (
    <div className="min-w-0">
      {session?.user ? (
        <div className="relative ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="User menu"
            className="flex max-w-full items-center gap-4 rounded-lg px-2 py-1.5 transition hover:bg-[#F1F6F2] max-md:gap-2 max-md:px-1.5 max-sm:gap-1.5 max-sm:py-1"
          >
            <img
              src={session.user.image || "/default-avatar.png"}
              alt={session.user.name || "Profile"}
              className="h-8 w-8 shrink-0 rounded-full border border-[#E0E9E2] object-cover max-sm:h-7 max-sm:w-7"
            />

            <span className="max-w-25 truncate text-xs font-medium text-[#26382D] max-md:max-w-20 max-sm:max-w-16 max-sm:text-[11px]">
              {session.user.name}
            </span>

            <span className="shrink-0 text-[16px] text-gray-500">
              <RxTriangleDown />
            </span>
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-56 max-w-[calc(100vw-1rem)] rounded-xl border border-[#E0E9E2] bg-[#FBFDFC] p-3 shadow-lg">
              <div className="border-b border-[#E8EEE9] pb-3">
                <p className="truncate text-sm font-semibold text-[#26382D]">
                  {session.user.name}
                </p>
                <p className="mt-1 truncate text-xs text-gray-500">
                  {session.user.email}
                </p>
              </div>

              <Link
                href="/profile"
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
        <div className="ml-auto flex items-center gap-2 max-md:gap-1.5 max-sm:gap-1">
          <Link
            href="/auth/Sign-in"
            className="whitespace-nowrap rounded-lg px-4 py-2 text-sm text-[#35443A] transition hover:bg-[#F1F6F2] max-md:px-3 max-md:py-1.5 max-md:text-xs max-sm:px-2 max-sm:text-[11px]"
          >
            সাইন ইন
          </Link>

          <Link
            href="/auth/Sign-up"
            className="whitespace-nowrap rounded-lg bg-[#05893E] px-4 py-2 text-sm text-white shadow-sm transition hover:bg-[#047a37] max-md:px-3 max-md:py-1.5 max-md:text-xs max-sm:px-2 max-sm:text-[11px]"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;


