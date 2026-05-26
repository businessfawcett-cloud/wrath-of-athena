import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-background overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <h1 className="text-5xl font-bold-condensed tracking-tighter text-foreground mb-4">
              WRATH OF ATHENA
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl">
              Minimalist streetwear for the modern warrior
            </p>
            <div className="mt-8 flex space-x-4">
              <Link
                href="/shop"
                className="flex h-12 px-8 items-center justify-center rounded-lg bg-accent text-background font-medium hover:bg-accent/90 transition-all"
              >
                Shop Collection
              </Link>
<Link
  href="/about"
  className="flex h-12 px-8 items-center justify-center rounded-lg border border-foreground bg-background/50 text-background font-medium hover:bg-background/70 transition-all"
>
  Our Story
</Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold-condensed text-center mb-12">
              Featured Collection
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 4).map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  className="group flex flex-col items-center justify-between h-full bg-background/50 hover:bg-background/70 transition-all border border-foreground/10"
                >
                  <div className="w-full h-48 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-4 py-6 w-full text-left flex-1">
                    <h3 className="text-lg font-bold-condensed mb-2 text-foreground line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="mt-auto text-xl font-bold text-accent">
                      ${product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
