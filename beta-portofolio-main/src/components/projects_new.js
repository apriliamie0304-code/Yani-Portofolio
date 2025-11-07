export default function Projects() {
  const projectsData = {
    title: "✧ My Projects ✧",
    description: "A collection of elegant creations",
    projects: [
      {
        name: "Web Development",
        desc: "Creating sophisticated and functional digital experiences",
        icon: "🎨"
      },
      {
        name: "UI/UX Design",
        desc: "Designing interfaces that delight and inspire",
        icon: "✨"
      },
      {
        name: "Mobile Apps",
        desc: "Crafting elegant solutions for modern lifestyles",
        icon: "🎭"
      }
    ],
    skills: [
      { name: "Frontend Magic", desc: "Creating beautiful user experiences", icon: "🌟" },
      { name: "Backend Craft", desc: "Building robust digital foundations", icon: "⚡" },
      { name: "Creative Design", desc: "Bringing elegance to every pixel", icon: "🎠" }
    ],
    qualities: [
      "Attention to Detail ✧",
      "Creative Innovation ✨",
      "Elegant Solutions 🌟"
    ]
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 animate-float-slow opacity-50">🌟</div>
      <div className="absolute bottom-40 left-20 animate-bounce-slow opacity-50">✨</div>
      <div className="absolute top-1/3 right-20 animate-spin-slow opacity-30">⭐</div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-200 mb-4">{projectsData.title}</h2>
          <p className="text-lg text-gray-400 italic">{projectsData.description}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projectsData.projects.map((project, index) => (
            <div key={index} 
                 className="group bg-white/5 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-gray-300/20 
                          hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
              <div className="text-4xl mb-4 group-hover:animate-bounce">{project.icon}</div>
              <h3 className="text-xl font-serif text-gray-200 mb-3">{project.name}</h3>
              <p className="text-gray-400">{project.desc}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projectsData.skills.map((skill, index) => (
            <div key={index} 
                 className="group bg-white/5 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-gray-300/20 
                          hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center gap-4">
                <span className="text-3xl group-hover:rotate-12 transition-transform">
                  {skill.icon}
                </span>
                <div>
                  <h3 className="text-xl font-serif text-gray-200">{skill.name}</h3>
                  <p className="text-gray-400">{skill.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Qualities Section */}
        <div className="bg-white/5 p-8 rounded-lg shadow-xl backdrop-blur-sm border border-gray-300/20">
          <h3 className="text-2xl font-serif text-gray-200 mb-8 text-center">Special Qualities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projectsData.qualities.map((quality, index) => (
              <div key={index} 
                   className="text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 
                            transition-all duration-500 transform hover:-translate-y-1">
                <p className="text-gray-300 text-lg">{quality}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent"></div>
    </section>
  );
}