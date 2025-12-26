export default function Footer() {
  return (
    <footer className="bg-[#1A0F2E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://public.readdy.ai/ai/img_res/ebcc8368-5b0d-4c39-960f-5a304064988b.png"
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold">Digital Growth</span>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Freelance Digital Marketing</p>
              <p>Specialized in Spiritual Businesses</p>
              <p>contact@digitalgrowth.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Stay Updated
            </h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border-b border-white/30 py-2 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer">
                <i className="ri-arrow-right-line text-[#D4AF37]"></i>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 underline cursor-pointer">Privacy Policy</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              <a href="#overview" className="block text-sm hover:text-[#D4AF37] transition-colors cursor-pointer">
                Proposal Overview
              </a>
              <a href="#timeline" className="block text-sm hover:text-[#D4AF37] transition-colors cursor-pointer">
                Timeline
              </a>
              <a href="#resources" className="block text-sm hover:text-[#D4AF37] transition-colors cursor-pointer">
                Investment
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm hover:text-[#D4AF37] transition-colors cursor-pointer">
                LinkedIn
              </a>
              <a href="#" className="block text-sm hover:text-[#D4AF37] transition-colors cursor-pointer">
                Instagram
              </a>
              <a href="#" className="block text-sm hover:text-[#D4AF37] transition-colors cursor-pointer">
                Portfolio
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Digital Growth. All rights reserved.
            </p>
            <a 
              href="https://readdy.ai/?ref=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#0D0618] py-12 overflow-hidden">
        <div className="text-center">
          <h2 
            className="text-8xl md:text-9xl font-bold text-transparent"
            style={{
              WebkitTextStroke: '2px rgba(212, 175, 55, 0.2)',
              letterSpacing: '-0.05em',
              fontFamily: 'Playfair Display, serif'
            }}
          >
            DIGITAL GROWTH
          </h2>
        </div>
      </div>
    </footer>
  );
}
