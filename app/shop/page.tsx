"use client";

import Link from "next/link";
import { products, categories } from "@/lib/products";
import { useState } from "react";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <main className="flex-1 w-full">
        {/* Header */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold-condensed text-center mb-6">
              Shop Collection
            </h1>
            <p className="text-center text-foreground/60 max-w-2xl mx-auto">
              Explore our curated selection of minimalist streetwear essentials
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-background/50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              {/* Search */}
              <div className="flex-1 min-w-[200px]">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                />
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium 
                           ${selectedCategory === null 
                             ? 'bg-accent text-background' 
                             : 'border border-foreground/20 text-foreground/80'}
                           hover:bg-accent/10 transition-all`}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium 
                             ${selectedCategory === category.id 
                               ? 'bg-accent text-background' 
                               : 'border border-foreground/20 text-foreground/80'}
                             hover:bg-accent/10 transition-all`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-foreground/60 py-12">
                No products match your filters. Try adjusting your search.
              </p>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
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
            )}
          </div>
        </section>
      </main>
    </>
  );
}