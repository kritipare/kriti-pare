import Banner from "./components/Banner";
import Aboutme from "./components/AboutMe";
import Experience from "./components/Experience";
import './App.css'

function App() {
  return (
    <div className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <div className="flex justify-between align-center">
          <Banner />
          <Experience />
        </div>
        <Aboutme />
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
