export default function Projects() {
  // Data profil
  const profileData = {
    title: "✧ Profil Saya 🌝",
    description: "Saya Yani Aprilia, siswi kelas XI di SMK Negeri 1 Probolinggo. Saya tumbuh sebagai pribadi yang menghargai proses, ketekunan, dan pembelajaran berkelanjutan. Bagi saya, setiap langkah kecil memiliki arti, karena dari sanalah karakter, kemampuan, dan perspektif terbentuk. Dengan sikap yang tenang namun berorientasi pada perkembangan diri, saya berusaha menjaga keseimbangan antara pemahaman, kreativitas, dan tanggung jawab dalam setiap hal yang saya lakukan.",
    projects: []
  };

  const hobbyData = {
    title: "Hobi 💁🏻‍♀🐱",
    description: "What I Love to Do",
    items: [
      {
        name: "Membaca Buku",
        desc: "Saya suka membaca komik dan novel di waktu luang saya",
        icon: "📚📖"
      },
      {
        name: "Mendengarkan Musik",
        desc: "Musik adalah penghibur jiwa saya",
        icon: "🎧🎶"
      }
    ]
  };

  const educationData = {
    title: "Riwayat Pendidikan 🏫",
    description: "Perjalanan Pendidikan Saya",
    items: [
      {
        school: "SD",
        year: "2015 - 2021",
        place: "SD Negeri Mangunharjo 2",
        icon: "🌸"
      },
      {
        school: "SMP",
        year: "2021 - 2024",
        place: "SMP Negeri 3 Probolinggo",
        icon: "🌷"
      },
      {
        school: "SMK",
        year: "2024 - Sekarang",
        place: "SMK Negeri 1 Probolinggo",
        icon: "🪻"
      }
    ]
  };


  return (
    <>
      {/* Profile Section */}
      <section id="profile" className="min-h-screen relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-200 via-pink-300 to-purple-300 -z-10"></div>
        <div className="aesthetic-wave bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="hover-glow text-4xl font-serif text-gradient mb-8">{profileData.title}</h1>
            
            {/* Profile Image */}
            <div className="hover-glow w-48 h-48 mx-auto mb-8 relative">
              <img 
                src="images/foto.jpg" 
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-pink-200 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 opacity-20"></div>
              <div className="absolute -top-2 -right-2 sparkle"></div>
              <div className="absolute -bottom-2 -left-2 sparkle delay-150"></div>
            </div>

            <p className="animate-float-slow text-lg text-pink-600 italic mt-4">{profileData.description}</p>
          </div>

          {/* Profile Content */}
          <div className="mb-16">
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="min-h-screen relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-200 via-pink-300 to-purple-300 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="hover-glow text-4xl font-serif text-gradient mb-4">{educationData.title}</h1>
          <p className="hover-glow text-lg text-pink-600 italic mb-8">{educationData.description}</p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
        {educationData.items.map((edu, index) => (
        <div key={index} className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg border border-pink-200 hover:scale-105 transition-all hover:shadow-pink-300/40 text-center">
          <div className="text-5xl mb-4 animate-float-slow">{edu.icon}</div>
          <h3 className="text-2xl font-serif text-pink-700 mb-2">{edu.school}</h3>
          <p className="text-pink-600 text-sm mb-1">{edu.year}</p>
          <p className="text-pink-500 text-sm italic">{edu.place}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Hobbies Section */}
      <section id="hobbies" className="min-h-screen relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-200 via-pink-300 to-purple-300 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="hover-glow text-4xl font-serif text-gradient mb-4">{hobbyData.title}</h1>
            <p className="hover-glow text-lg text-pink-600 italic mb-8">{hobbyData.description}</p>
            <div className="flex justify-center gap-4">
            </div>
          </div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {hobbyData.items.map((hobby, index) => (
              <div key={index} 
                   className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-xl shadow-lg backdrop-blur-sm border-2 border-pink-200 
                            hover:from-pink-100 hover:to-pink-50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-pink-300/30">
                <div className="text-5xl mb-6 floating">{hobby.icon}</div>
                <h3 className="text-2xl font-serif font-semibold text-pink-700 mb-4">{hobby.name}</h3>
                <p className="text-lg text-pink-600">{hobby.desc}</p>
                <div className="absolute -top-2 -right-2 sparkle"></div>
                <div className="absolute -bottom-2 -left-2 sparkle delay-150"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}