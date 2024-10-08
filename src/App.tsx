import Banner from "./components/Banner";
import Aboutme from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import './App.css'

function App() {
  return (
    <div className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-1xl mx-auto lg:pt-10">
        <div className="flex flex-col lg:flex-row justify-between align-center">
          <Banner />
          <Experience />
        </div>
        <Aboutme />
        <Skills />
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
