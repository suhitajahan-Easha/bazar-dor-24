

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#F8FAF7] px-4 py-12 sm:px-6">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E6F4EA] text-3xl">
          🛒
        </div>

        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#2D9D62]">
          ERROR 404
        </p>

        <h1 className="text-7xl font-extrabold tracking-tight text-[#1B4332] sm:text-8xl">
          404
        </h1>

        <h2 className="mt-5 text-xl font-bold text-[#1B4332] sm:text-2xl">
          পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#647067]">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি।
          লিংকটি ভুল হতে পারে অথবা পৃষ্ঠাটি সরানো হয়েছে।
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#2D9D62] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#238451] focus:outline-none focus:ring-2 focus:ring-[#2D9D62] focus:ring-offset-2"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>

        <p className="mt-10 text-xs font-medium tracking-wide text-[#9AA59C]">
          বাজারদর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
      </div>
    </main>
  );
}

