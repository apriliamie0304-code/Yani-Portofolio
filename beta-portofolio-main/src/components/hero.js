export default function Hero() {
  return (
    <section className="relative text-center py-32 overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-200 via-pink-300 to-purple-300 -z-10"></div>

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
            <h1 className="animate-float-slow text-6xl font-serif mb-4 leading-relaxed text-gradient animate-fade-in">
              ✧ Welcome to My Portofolio ✧
            </h1>
            <p className="hover-glow text-2xl font-serif text-[#b83280] animate-fade-in-delay">
              Hallo, Selamat datang di portofolio saya!
            </p>
          </div>
          
          <p className="hover-glow text-xl mb-8 max-w-2xl mx-auto text-[#6a6a6a] italic animate-fade-in-delay-2">
            "Creating beautiful experiences with passion and creativity" ✨
          </p>

          <div className="space-y-6">
            <div className="flex justify-center gap-6">
              <a 
                href="#profile" 
                className="group inline-block px-8 py-4 rounded-lg font-serif text-xl bg-gradient-to-r from-pink-200 to-purple-200 text-[#2d3748]
                         transition-all duration-500 hover:scale-105 
                         border border-pink-300 hover:shadow-xl hover:shadow-pink-300/30"
              >
                View Profile
                <span className="ml-2 inline-block spin-hover decorative-star">✦</span>
              </a>
              <a 
                href="#contact" 
                className="group inline-block px-8 py-4 rounded-lg font-serif text-xl bg-gradient-to-r from-purple-200 to-pink-200 text-[#2d3748]
                         transition-all duration-500 hover:scale-105 
                         border border-purple-300 hover:shadow-xl hover:shadow-purple-300/30"
              >
                Say Hello
                <span className="ml-2 inline-block spin-hover decorative-star">✧</span>
              </a>
              <a 
                href="#hobbies" 
                className="group inline-block px-8 py-4 rounded-lg font-serif text-xl bg-gradient-to-r from-pink-200 to-purple-200 text-[#2d3748]
                         transition-all duration-500 hover:scale-105 
                         border border-pink-300 hover:shadow-xl hover:shadow-pink-300/30"
              >
                My Hobbies
                <span className="ml-2 inline-block spin-hover decorative-star">★</span>
              </a>
              <a 
                href="#education" 
                className="group inline-block px-8 py-4 rounded-lg font-serif text-xl bg-gradient-to-r from-purple-200 to-pink-200 text-[#2d3748]
                         transition-all duration-500 hover:scale-105 
                         border border-purple-300 hover:shadow-xl hover:shadow-purple-300/30"
              >
                Riwayat Pendidikan
                <span className="ml-2 inline-block spin-hover decorative-star">✿</span>
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