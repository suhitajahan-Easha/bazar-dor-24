

export default function Loading() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-[#F8FAF7] px-4 text-center">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F4EA] text-2xl">
          🛒
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-[#1B4332] sm:text-3xl">
          বাজার<span className="text-[#2D9D62]">দর</span>
        </h1>
      </div>

      <span className="h-10 w-10 animate-spin rounded-full border-4 border-[#DCE8DE] border-t-[#2D9D62]" />

      <div className="space-y-1">
        <p className="text-sm font-semibold text-[#1B4332]">
          বাজারদরের তথ্য লোড হচ্ছে...
        </p>
        <p className="text-xs text-gray-500">
          সর্বশেষ পণ্যের দাম দেখতে একটু অপেক্ষা করুন।
        </p>
      </div>
    </main>
  );
}
