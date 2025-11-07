export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 animate-float-slow opacity-50 text-4xl">🌟</div>
      <div className="absolute bottom-20 left-10 animate-bounce-slow opacity-50 text-3xl">✨</div>
      <div className="absolute top-1/4 right-1/4 animate-pulse opacity-30 text-2xl">⭐</div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="bg-white/5 p-8 rounded-lg shadow-xl backdrop-blur-sm border border-gray-300/20 
                       hover:shadow-white/10 transition-all duration-500">
          <h2 className="text-3xl font-serif text-gray-200 mb-4">
            ✧ Let's Connect ✧
          </h2>
          <p className="text-gray-400 mb-8 text-lg italic">
            Interested in working together or just want to say hello?
          </p>
          <a 
            href="mailto:emailkamu@gmail.com" 
            className="group inline-block px-8 py-4 rounded-lg font-serif bg-white/10 text-gray-200 
                     border border-gray-300/30 hover:bg-white/20 transition-all duration-300 transform 
                     hover:scale-105 hover:shadow-xl hover:shadow-white/10"
          >
            <span className="flex items-center justify-center">
              <span className="mr-2 group-hover:animate-bounce">💌</span>
              Send Email
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
            </span>
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center">
          <div className="relative">
            <div className="absolute -top-6 left-12 animate-float-slow delay-100">🎨</div>
            <div className="absolute -bottom-6 right-12 animate-float-slow delay-200">🎭</div>
            <div className="w-32 h-32 opacity-20 animate-spin-slow text-6xl">
              ✧
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>
    </section>
  );
}