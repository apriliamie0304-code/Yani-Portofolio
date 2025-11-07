export default function Navbar() {
  return (
    <nav className="py-6 transition-all duration-500 relative bg-slate-900 text-gray-200">
      {/* Sparkle Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDJsMiA2aDZ2NmgtNmwtMiA2LTItNkg0di02aDZsMi02eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>
      
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-serif tracking-wide">
          ✧ Portfolio
          <span className="block text-sm text-gray-400">Elegant Creations</span>
        </h1>
        
        <ul className="flex gap-8 font-serif text-lg">
          <li>
            <a 
              href="#projects" 
              className="group transition duration-500 hover:text-white inline-flex items-center"
            >
              <span className="mr-2 group-hover:rotate-12 transition-transform">🎨</span>
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="group transition duration-500 hover:text-white inline-flex items-center"
            >
              <span className="mr-2 group-hover:rotate-12 transition-transform">💌</span>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}