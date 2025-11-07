export default function Hero() {
  return (
    <section className="relative text-center py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Sparkle Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDJsMiA2aDZ2NmgtNmwtMiA2LTItNkg0di02aDZsMi02eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvc3ZnPg==')] opacity-20"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 text-4xl animate-float">🎭</div>
        <div className="absolute bottom-10 left-10 text-4xl animate-float delay-200">✨</div>
        <div className="absolute top-1/4 left-1/4 text-3xl animate-float delay-300">🎨</div>
        <div className="absolute bottom-1/4 right-1/4 text-3xl animate-float delay-100">🌟</div>
        <div className="absolute top-20 left-20 text-3xl animate-float delay-150">🎠</div>
        <div className="absolute bottom-20 right-20 text-3xl animate-float delay-250">✧</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl font-serif mb-4 leading-relaxed text-gray-200 animate-fade-in">
              Welcome to My Portfolio
            </h1>
            <p className="text-2xl text-gray-400 animate-fade-in-delay">
              ✧ Where Elegance Meets Creativity ✧
            </p>
          </div>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300 italic animate-fade-in-delay-2">
            "Crafting digital experiences with style and charm" ✨
          </p>
          
          <div className="space-y-6">
            <div className="flex justify-center gap-6">
              <a 
                href="#projects" 
                className="group inline-block px-8 py-4 rounded-lg font-serif bg-white/10 text-gray-200 
                         transition-all duration-500 hover:bg-white/20 hover:scale-105 border border-gray-300/30
                         hover:shadow-xl hover:shadow-white/10"
              >
                View Projects
                <span className="ml-2 inline-block transition-transform group-hover:rotate-12">🎨</span>
              </a>
              <a 
                href="#contact" 
                className="group inline-block px-8 py-4 rounded-lg font-serif bg-white/5 text-gray-200 
                         transition-all duration-500 hover:bg-white/15 hover:scale-105 border border-gray-300/30
                         hover:shadow-xl hover:shadow-white/10"
              >
                Contact Me
                <span className="ml-2 inline-block transition-transform group-hover:rotate-12">💌</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>
    </section>
  );
}