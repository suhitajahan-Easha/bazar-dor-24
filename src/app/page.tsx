import Hero from "@/Components/Hero";
import Homeproducts from "@/Components/Homeproducts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mb-30">
      <Hero></Hero>
      <Homeproducts></Homeproducts>
    </div>
  );
}
