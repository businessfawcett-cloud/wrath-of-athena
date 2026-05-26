import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity/groq";
import Image from "next/image";

// GROQ queries to fetch data
const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    storeName,
    tagline,
    heroHeading,
    heroSubheading
  }
`;

const featuredProductsQuery = groq`
  *[_type == "product" && featured == true] {
    _id,
    name,
    slug,
    price,
    description,
    image,
    category
  } | order(_createdAt desc) [0...4]
`;

interface SiteSettings {
  storeName: string;
  tagline: string;
  heroHeading: string;
  heroSubheading: string;
}

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  description: string;
  image: { asset: { url: string } };
  category: string;
}

export default async function Home() {
  // Fetch data in parallel
  const [siteSettings, featuredProducts] = await Promise.all([
    client.fetch(siteSettingsQuery),
    client.fetch(featuredProductsQuery)
  ]);
  
  // Debug: Check all document types
  const allDocuments = await client.fetch('*[]{_type}');
  console.log('All document types:', JSON.stringify(allDocuments, null, 2));
  
  // Debug: Check specific product query
  const allProducts = await client.fetch(`*[_type == "product"]`);
  console.log('Sanity products:', JSON.stringify(allProducts, null, 2));

  const { storeName, tagline, heroHeading, heroSubheading } = siteSettings || {
    storeName: "WRATH OF ATHENA",
    tagline: "Minimalist streetwear for the modern warrior",
    heroHeading: "WRATH OF ATHENA",
    heroSubheading: "Minimalist streetwear for the modern warrior"
  };

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
              {heroHeading}
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl">
              {heroSubheading}
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
                className="flex h-12 px-8 items-center justify-center rounded-lg border border-foreground bg-background text-white font-medium hover:bg-background/70 hover:text-white transition-all"
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
              {featuredProducts?.map((product: Product) => (
                <Link
                  key={product._id}
                  href={`/shop/${product.slug.current}`}
                  className="group flex flex-col items-center justify-between h-full bg-background/50 hover:bg-background/70 transition-all border border-foreground/10"
                >
                  <div className="w-full h-48 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image.asset.url}
                      alt={product.name}
                      fill
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
