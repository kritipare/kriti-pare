import Banner from "./components/Banner";
import Aboutme from "./components/AboutMe";
import './App.css'

function App() {
  return (
    <div className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme />
        {/* <Experience /> */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
