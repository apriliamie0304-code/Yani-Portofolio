export default function Footer() {
  return (
    <footer className="py-6 text-center bg-slate-900 text-gray-400 border-t border-gray-300/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-2 left-1/4 animate-float-slow opacity-30">✨</div>
        <div className="absolute -bottom-2 right-1/4 animate-float-slow delay-100 opacity-30">⭐</div>
      </div>

      <p className="font-serif relative z-10">
        © {new Date().getFullYear()} 
        <span className="mx-2 text-gray-300 animate-pulse">
          ✧
        </span> 
        Portfolio — Crafted with 
        <span className="mx-2 group inline-block">
          <span className="inline-block transition-transform group-hover:scale-125 group-hover:rotate-12">💫</span>
        </span> 
        + React Magic
      </p>
    </footer>
  );
}