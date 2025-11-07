import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Profile from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="islamic-theme">
      <Navbar />
      <Hero />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;