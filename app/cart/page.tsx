import Link from "next/link"

export default function Cart() {
  return (
    <main className="flex-1 w-full">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold-condensed mb-12 text-center">
            Your Cart
          </h1>
          
          <div className="flex flex-col items-center justify-center py-16 bg-background/50 rounded-lg border border-foreground/10">
            {/* Cart icon */}
            <div className="w-16 h-16 mb-6 text-accent/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            
            <h2 className="text-xl font-bold-condensed mb-4 text-foreground">
              Your cart is empty
            </h2>
            
            <p className="text-foreground/60 mb-8 text-center max-w-md">
              Browse our collection and add some items to get started
            </p>
            
            <Link
              href="/shop"
              className="px-8 py-4 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-all"
            >
              Shop the Collection
            </Link>
          </div>
          
          {/* 
            Cart items would go here in a future implementation:
            <div className="mt-12 space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          */}
        </div>
      </section>
    </main>
  )
}