export default function Footer() {
  return (
    <footer className="py-6 text-center bg-white/80 text-[#6a6a6a] border-t border-pink-100 relative overflow-hidden backdrop-blur-sm">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-2 left-1/4 sparkle opacity-50"></div>
        <div className="absolute -bottom-2 right-1/4 sparkle delay-100 opacity-50"></div>
      </div>

      <p className="font-serif relative z-10">
        © {new Date().getFullYear()} 
        <span className="mx-2 text-pink-300 floating inline-block">
          ✧
        </span> 
        Portfolio — Made with Love 
        <span className="mx-2 group inline-block">
          <span className="inline-block transition-transform group-hover:scale-125 group-hover:rotate-12 decorative-star">★</span>
        </span> 
        & Creativity
      </p>
    </footer>
  );
}