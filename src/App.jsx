import { useState } from "react";
import About from "./components/About";
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeaderBlog from "./components/HeaderBlog";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Social from "./components/Social";
import FullBlogPost from "./components/FullBlogPost";
import TransitionPage from "./components/TransitionPage";
import CoverParticules from "./components/CoverParticles";

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const blogPosts = [
    {
      id: "useState-useEffect",
      title: "Dominando useState y useEffect en React",
      excerpt:
        "Aprende a gestionar el estado y los efectos secundarios en tus componentes de React con estos dos hooks fundamentales.",
      date: "2024-03-20",
      category: "React",
    },
    {
      id: "react-hooks-intro",
      title: "Introducción a React Hooks",
      excerpt:
        "Aprende cómo los Hooks de React pueden simplificar tu código y mejorar la reutilización de la lógica en tus componentes.",
      date: "2024-03-15",
      category: "React",
    },
    {
      id: "python-flask-api",
      title: "Creando APIs RESTful con Python y Flask",
      excerpt:
        "Descubre cómo crear APIs robustas y escalables utilizando Python y el framework Flask.",
      date: "2024-03-10",
      category: "Python",
    },
    {
      id: "nextjs-performance",
      title: "Optimización de rendimiento en Next.js",
      excerpt:
        "Explora técnicas avanzadas para mejorar el rendimiento de tus aplicaciones Next.js y ofrecer una experiencia de usuario excepcional.",
      date: "2024-03-05",
      category: "Next.js",
    },
  ];

  return (
    <>
      <Navbar />
      <TransitionPage />
      <div className="flex bg-no-repeat bg-gradient-conver bg-cover">
        {/* <p>
          <CoverParticules />
        </p> */}
        <header className="h-[80vh] max-w-screen-xl mx-auto relative">
          <div className="z-20 md:flex md:items-center h-full p-6">
            <img
              src="/avatar-1.png"
              alt="intro image in header"
              className="w-96 md:w-2/4 md:flex-1 md:order-1 md:rounded-full "
            />
            <div className="w-full text-white mx-auto p-4 h-4/5 md:flex md:flex-col md:justify-center relative flex-1">
              <h1 className="text-3xl">
                <span className="uppercase">{"I'm"}</span>{" "}
                <span className="text-gold-300 text-6xl font-serif">
                  Victor Zuluaga
                </span>
              </h1>
              <p className="text-2xl">Web developer & mobile developer</p>
              <button
                type="button"
                className="text-gold-300 hover:text-white border border-gold-300 hover:bg-gold-500 focus:ring-4 focus:outline-none focus:ring-gold-300 rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-gold-300 dark:text-gold-300 dark:hover:text-white dark:hover:bg-gold-400 dark:focus:ring-gold-400 max-w-fit mt-6"
              >
                Contact me
              </button>
            </div>
          </div>
          <div className="md:absolute z-10 right-0 bottom-0">
            <Social></Social>
          </div>
        </header>
      </div>
      <About />
      <Skills />
      <Portfolio />
      <HeaderBlog />
      <main className="container mx-auto px-4 py-8 flex-grow bg-gray-800">
        {selectedPost ? (
          <FullBlogPost
            post={blogPosts.find((post) => post.id === selectedPost)}
            onBack={() => setSelectedPost(null)}
          />
        ) : (
          <>
            <h1 className="text-gold-300 text-4xl font-bold mb-8">
              Últimos Tutoriales
            </h1>
            {blogPosts.map((post) => (
              <BlogPost
                key={post.id}
                {...post}
                onClick={() => setSelectedPost(post.id)}
              />
            ))}
          </>
        )}
      </main>
      <section className="bg-gray-800">
        <Experience />
      </section>
      <Contact></Contact>
    </>
  );
}

export default App;
