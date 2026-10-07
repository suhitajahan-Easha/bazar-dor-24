import React from "react";

const Footer = () => {
  return (
    <div className=" border-t border-gray-200">
      <footer className="max-w-300 mx-auto flex flex-col gap-2 px-5 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        <p className="sm:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </footer>
    </div>
  );
};

export default Footer;
