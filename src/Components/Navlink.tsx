
import { Product } from "@/lib/type";
import Link from "next/link";
import React from "react";
import CategoryNavLinks from "./CategoryNavLinks";

const Navlinks = async () => {
  //1st api
  // const res = await fetch(
  //   "https://api.api-store.workers.dev/api/bazardor/categories",
  // );
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  
  const data = await res.json();


  //console.log(data);

  return (
    <CategoryNavLinks categories={data}></CategoryNavLinks>
    
  );
};

export default Navlinks;





