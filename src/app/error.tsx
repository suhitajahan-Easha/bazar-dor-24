

"use client";

import Link from "next/link";

export default function Error() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAF7] px-4 py-10 text-[#1B4332] sm:px-6">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E6F4EA]">
          <span className="text-3xl font-bold text-[#2D9D62]">!</span>
        </div>

        <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-[#2D9D62]">
          কিছু একটা সমস্যা হয়েছে
        </p>

        <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
          দুঃখিত! আবার চেষ্টা করুন।
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#647067] sm:text-base">
          পৃষ্ঠাটি লোড করার সময় একটি অপ্রত্যাশিত সমস্যা হয়েছে।
          অনুগ্রহ করে আবার চেষ্টা করুন অথবা হোম পেজে ফিরে যান।
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="rounded-xl border border-[#D8E5DA] bg-white px-6 py-3 text-sm font-semibold text-[#1B4332] transition-colors hover:bg-[#EAF3EB]"
          >
            আবার চেষ্টা করুন
          </button>

          <Link
            href="/"
            className="rounded-xl bg-[#2D9D62] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#238451]"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>

        <p className="mt-10 text-xs text-[#9AA59C]">
          বাজারদর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
      </div>
    </main>
  );
}

