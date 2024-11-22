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

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

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
      <header className="shadow-xl h-[90vh]">
        <Navbar />
        <div className="max-w-screen-xl text-white mx-auto p-4 h-4/5 flex flex-col justify-center relative">
          <h1 className="text-3xl">
            <span className="uppercase">{"I'm"}</span>{" "}
            <span className="text-gold-300 text-6xl font-serif">
              Victor Zuluaga
            </span>
          </h1>
          <p className="text-2xl">Web developer & mobile developer</p>
          <button
            type="button"
            className="text-gold-400 hover:text-white border border-gold-400 hover:bg-gold-500 focus:ring-4 focus:outline-none focus:ring-gold-300 rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-gold-300 dark:text-gold-300 dark:hover:text-white dark:hover:bg-gold-400 dark:focus:ring-gold-900 max-w-fit mt-6"
          >
            Contact me
          </button>
          <div className="absolute z-10 right-32 bottom-0">
            <Social></Social>
          </div>
          {/* <div className="bg-image absolute bottom-[-160px] right-48 w-full h-full"></div> */}
        </div>
      </header>
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
