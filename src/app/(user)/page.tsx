//"use client"

import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Nos Produits</h1>
        <Suspense fallback={"loading"}>
          <ProductList Limit={3} />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
