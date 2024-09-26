import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import { PrismaClient, Products } from "@prisma/client";

const db = new PrismaClient();

const ProductList = async ({ Limit }: { Limit: number }) => {
  const allProducts = await db.products.findMany();
  const formattedProducts = allProducts.map((product) => ({
    ...product,
  }));
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {allProducts.map((product: Products) => (
        <Link
          href={"/" + product.id}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:[22%]"
          key={product.id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.image || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 easy duration-500"
            />
            {/* {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )} */}
          </div>
          <div className="flex">
            <span className="font-medium">{product.name}</span>
          </div>
          {product.description && (
            <div className="text-sm text-gray-500">{product.description}</div>
          )}
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Ajouter au pannier
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
