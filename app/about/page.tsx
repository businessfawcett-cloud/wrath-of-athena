export default function About() {
  return (
    <main className="flex-1 w-full">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold-condensed mb-8 text-center">
            About Wrath of ATHENA
          </h1>
          
          <div className="space-y-12">
            {/* Brand Story */}
            <div className="prose prose-lg:prose-xl max-w-none">
              <p className="text-foreground/90 leading-relaxed mb-6">
                Wrath of ATHENA was forged from a simple philosophy: true strength lies in restraint. 
                We create minimalist streetwear that speaks through quality, not noise.
              </p>
              
              <p className="text-foreground/90 leading-relaxed mb-6">
                Each piece is designed to be worn, lived in, and made better with time. 
                We focus on the essentials—heavyweight cotton, precise construction, and timeless silhouettes 
                that transcend seasons and trends.
              </p>
              
              <p className="text-foreground/90 leading-relaxed mb-6">
                Inspired by the warrior spirit of Athena—goddess of wisdom, courage, and strategic warfare—our 
                collections embody the balance between softness and strength, between refinement and rawness.
              </p>
            </div>
            
            {/* Values */}
            <div>
              <h2 className="text-2xl font-bold-condensed mb-6">Our Values</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col items-center text-center p-6 bg-background/50 rounded-lg border border-foreground/10">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/20 text-accent mb-4">
                    ●
                  </div>
                  <h3 className="text-lg font-bold-condensed mb-2">Quality First</h3>
                  <p className="text-foreground/60 text-center">
                    We source the finest materials and partner with skilled artisans to ensure every garment 
                    meets our exacting standards.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-background/50 rounded-lg border border-foreground/10">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/20 text-accent mb-4">
                    ●
                  </div>
                  <h3 className="text-lg font-bold-condensed mb-2">Timeless Design</h3>
                  <p className="text-foreground/60 text-center">
                    We reject fast fashion in favor of enduring style. Our pieces are made to be worn for years, 
                    not seasons.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-background/50 rounded-lg border border-foreground/10">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/20 text-accent mb-4">
                    ●
                  </div>
                  <h3 className="text-lg font-bold-condensed mb-2">Ethical Production</h3>
                  <p className="text-foreground/60 text-center">
                    We maintain transparent relationships with our manufacturers and ensure fair wages and 
                    safe working conditions throughout our supply chain.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-background/50 rounded-lg border border-foreground/10">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/20 text-accent mb-4">
                    ●
                  </div>
                  <h3 className="text-lg font-bold-condensed mb-2">Minimal Impact</h3>
                  <p className="text-foreground/60 text-center">
                    From eco-friendly packaging to waste-reducing cut patterns, we strive to minimize our 
                    environmental footprint at every step.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Closing */}
            <div className="text-center">
              <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-6">
                Wrath of ATHENA is more than a clothing brand—it's a mindset. 
                It's about choosing quality over quantity, intention over impulse, and strength that comes from within.
              </p>
              
              <a href="/shop" className="inline-block px-8 py-4 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-all">
                Explore the Collection
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}