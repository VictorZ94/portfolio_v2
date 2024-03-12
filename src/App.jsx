import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Social from "./components/Social";

function App() {
  return (
    <>
      <header className="shadow-xl h-[90vh]">
        <Navbar />
        <div className="max-w-screen-xl text-white mx-auto p-4 h-4/5 flex flex-col justify-center relative">
          <h1 className="text-3xl">
            <span className="uppercase">{"I'm"}</span>{" "}
            <span className="text-gold-300 text-6xl">Victor Zuluaga</span>
          </h1>
          <p className="text-2xl">Web developer & mobile developer</p>
          <button
            type="button"
            className="text-gold-400 hover:text-white border border-gold-400 hover:bg-gold-500 focus:ring-4 focus:outline-none focus:ring-gold-300 rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-gold-300 dark:text-gold-300 dark:hover:text-white dark:hover:bg-gold-400 dark:focus:ring-gold-900 max-w-fit mt-6"
          >
            Contact me
          </button>
          <div className="absolute right-32 bottom-0">
            <Social></Social>
          </div>
        </div>
      </header>
      <About />
      <Skills />
      <Portfolio />
    </>
  );
}

export default App;
