export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      <div className="aesthetic-wave"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-pink-200 via-pink-300 to-purple-300 -z-10"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 sparkle"></div>
      <div className="absolute bottom-20 left-10 sparkle delay-200"></div>
      <div className="absolute top-1/4 right-1/4 decorative-star delay-300">★</div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="bg-white/80 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-pink-100 
                       hover:shadow-pink-100/20 transition-all duration-500 floating">
          <h2 className="hover-glow text-3xl font-serif text-[#4a4a4a] mb-4">
            ✧ Let's Connect ✧
          </h2>
          <p className="hover-glow text-[#8a8a8a] mb-8 text-lg italic">
            Is there something you want to talk about? I am ready to listen to you!
          </p>
          <a 
            href="mailto:aprilia.mie0304@gmail.com" 
            className="group inline-block px-8 py-4 rounded-lg font-serif bg-gradient-to-r from-pink-100 to-purple-100 text-[#4a4a4a] 
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
            <div className="absolute -bottom-6 right-12 animate-float-slow delay-200">🦢</div>
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