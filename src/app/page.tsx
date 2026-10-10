import Hero from "@/Components/Hero";
import Homeproducts from "@/Components/Homeproducts";
import LoginSuccessToast from "@/Components/loginsuccess";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mb-30">
      <LoginSuccessToast></LoginSuccessToast>
      <Hero></Hero>
      <Homeproducts></Homeproducts>

    </div>
  );
}
