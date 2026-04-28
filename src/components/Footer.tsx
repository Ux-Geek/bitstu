export default function Footer() {
  const transitionLines = Array.from({ length: 12 });

  return (
    <div className="bg-[#121212]">
      {/* Transition Section */}
      <div className="w-full flex flex-col bg-white">
        {transitionLines.map((_, i) => (
          <div 
            key={i} 
            className="w-full bg-[#121212]" 
            style={{ 
              height: `${1 + (3 * i) / 11}px`, 
              opacity: (i + 1) / 12 
            }} 
          />
        ))}
      </div>

      {/* CTA Section wrapper */}
      <section className="py-24 px-6 md:px-12 bg-[#121212] relative">
        <div className="max-w-7xl mx-auto">
          {/* Dark CTA Block */}
          <div className="bg-[#18181A] rounded-2xl p-12 md:p-20 relative overflow-hidden flex flex-col items-start justify-center min-h-[400px] border border-gray-800">
            {/* Decorative pixels top-left */}
            <div className="absolute top-0 left-0 grid grid-cols-4 grid-rows-3 w-32 h-24 opacity-80">
              <div className="bg-brand-orange"></div>
              <div className="bg-transparent"></div>
              <div className="bg-transparent"></div>
              <div className="bg-transparent"></div>
              <div className="bg-brand-orange/60"></div>
              <div className="bg-brand-orange/40"></div>
              <div className="bg-transparent"></div>
              <div className="bg-transparent"></div>
              <div className="bg-transparent"></div>
              <div className="bg-brand-orange/20"></div>
            </div>
            
            {/* Decorative pixels top-right */}
            <div className="absolute top-12 right-12 grid grid-cols-4 grid-rows-3 w-32 h-24 opacity-80 hidden md:grid">
              <div className="bg-brand-blue"></div>
              <div className="bg-brand-blue/80"></div>
              <div className="bg-brand-blue/60"></div>
              <div className="bg-transparent"></div>
              <div className="bg-transparent"></div>
              <div className="bg-transparent"></div>
              <div className="bg-brand-blue/40"></div>
              <div className="bg-brand-blue/20"></div>
              <div className="bg-transparent"></div>
              <div className="bg-transparent"></div>
              <div className="bg-transparent"></div>
              <div className="bg-transparent"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl relative z-10 leading-[1.1]">
              Ground floor is open.
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl relative z-10 font-body">
              We’re in our pre-seed stage and looking for people who believe AI should serve people — not replace them.
            </p>
            
            <div className="flex flex-wrap gap-4 relative z-10 mb-12">
              <button className="cta-primary !rounded-lg !px-8">
                Book a Call
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-lg font-medium transition-colors">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#121212] text-white pt-20 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
            
            {/* Left Column */}
            <div className="lg:col-span-4 space-y-12">
              <div className="flex items-center gap-2.5 opacity-90">
                <img src={Logo} alt="BitStu logo" className="h-[24px] w-auto brightness-0 invert" />
                <span className="font-heading font-bold tracking-[-0.4px] text-[20px] leading-none">
                  BitStu
                </span>
              </div>
              
              {/* Badges placeholder (mimicking G2 awards) */}
              <div className="grid grid-cols-2 gap-4 max-w-[240px]">
                {["Designers", "Early Customers", "Pre-Seed Investors", "Engineers"].map((category) => (
                  <div 
                    key={category} 
                    className="aspect-square bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg flex flex-col items-center justify-center p-3 relative overflow-hidden group transition-all duration-300 opacity-40 hover:opacity-100 hover:border-brand-orange/50 hover:shadow-[0_0_20px_rgba(255,92,0,0.1)]"
                  >
                    <div className="absolute top-0 right-0 w-6 h-6 bg-white/10 group-hover:bg-brand-orange rounded-bl-lg flex items-center justify-center transition-colors">
                      <span className="text-[10px] font-bold text-white">B</span>
                    </div>
                    <span className="text-[10px] text-white/40 mb-1">OPEN NOW</span>
                    <span className="text-xs font-bold text-center leading-tight uppercase tracking-tight group-hover:text-white transition-colors">{category}</span>
                    <div className="w-full h-1 bg-white/5 group-hover:bg-brand-orange absolute bottom-0 left-0 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Newsletter & Links */}
            <div className="lg:col-span-8">
              {/* Newsletter */}
              <div className="mb-16">
                <p className="text-sm text-white/60 mb-4">Join our newsletter to be en-lightened</p>
                <div className="flex max-w-md">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="bg-[#2A2A2A] border-none rounded-l text-sm w-full focus:outline-none focus:ring-1 focus:ring-white/30 text-white placeholder-white/40 px-4"
                  />
                  <button className="bg-white text-black px-6 py-3 rounded-r text-sm font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                <div>
                  <h4 className="text-white/80 font-medium mb-6 text-sm">Product</h4>
                  <ul className="space-y-4 text-sm text-white/50">
                    <li><a href="#" className="hover:text-white transition-colors">Get started</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Live demo</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Cloud status</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white/80 font-medium mb-6 text-sm">Company</h4>
                  <ul className="space-y-4 text-sm text-white/50">
                    <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Media kit</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white/80 font-medium mb-6 text-sm">Resources</h4>
                  <ul className="space-y-4 text-sm text-white/50">
                    <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">BitStu University</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
