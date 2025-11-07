export default function Hero() {
  return (
    <section className="relative text-center py-32 overflow-hidden transition-all duration-500">
      {/* Aesthetic Wave Background */}
      <div className="aesthetic-wave"></div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZkNmQ2IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 sparkle"></div>
        <div className="absolute bottom-10 left-10 sparkle delay-200"></div>
        <div className="absolute top-1/4 left-1/4 decorative-star delay-300">★</div>
        <div className="absolute bottom-1/4 right-1/4 sparkle delay-100"></div>
        <div className="absolute top-20 left-20 decorative-star delay-150">✦</div>
        <div className="absolute bottom-20 right-20 decorative-star delay-250">✧</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-8 floating">
            <h1 className="text-6xl font-serif mb-4 leading-relaxed text-[#4a4a4a] animate-fade-in">
              ✧ Welcome to My Portfolio ✧
            </h1>
            <p className="text-2xl font-serif text-[#8a8a8a] animate-fade-in-delay">
              Where Dreams Take Shape
            </p>
          </div>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#6a6a6a] italic animate-fade-in-delay-2">
            "Creating beautiful experiences with passion and creativity" ✨
          </p>

          <div className="space-y-6">
            <div className="flex justify-center gap-6">
              <a 
                href="#projects" 
                className="group inline-block px-8 py-4 rounded-lg font-serif text-xl bg-gradient-to-r from-pink-50 to-purple-50 text-[#4a4a4a]
                         transition-all duration-500 hover:scale-105 
                         border border-pink-100 hover:shadow-xl hover:shadow-pink-100/20"
              >
                View Projects
                <span className="ml-2 inline-block transition-transform group-hover:rotate-12 decorative-star">✦</span>
              </a>
              <a 
                href="#contact" 
                className="group inline-block px-8 py-4 rounded-lg font-serif text-xl bg-white/80 text-[#4a4a4a]
                         transition-all duration-500 hover:scale-105 
                         border border-pink-100 hover:shadow-xl hover:shadow-pink-100/20"
              >
                Say Hello
                <span className="ml-2 inline-block transition-transform group-hover:rotate-12 decorative-star">✧</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-200/30 to-transparent"></div>
    </section>
  );
}