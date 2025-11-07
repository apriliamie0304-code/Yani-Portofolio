export default function Navbar() {
  return (
    <nav className="py-6 transition-all duration-500 relative bg-white/20 backdrop-blur-md">
      {/* Glass Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/60 to-purple-500/60"></div>
      
      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-200/50 to-transparent"></div>
      
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="hover-glow text-2xl font-serif tracking-wide text-[#4a4a4a] relative">
          Portfolio
          <span className="block text-sm text-[#8a8a8a]">Creative Space</span>
          <div className="absolute -top-1 -right-1 sparkle"></div>
        </h1>
        
        <div className="font-serif text-lg">
          <span className="hover-glow text-purple-600 tracking-wide relative">Nice To Meet You 🤗</span>
        </div>
      </div>
    </nav>
  );
}