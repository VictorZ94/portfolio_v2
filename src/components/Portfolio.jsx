import Projects from "../data/portfolio";

const Portfolio = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-4 mt-16">
      <h2 className="text-5xl my-4 dark:text-white text-center font-bold font-serif">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="h-96 w-full">
              <img
                className="h-full w-full object-fill transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={project?.image}
                alt="Indicadores colombia project"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                {project?.title}
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {project?.description}
              </p>
              <button className="rounded-lg bg-gold-300 py-2 px-3.5 font-com text-sm capitalize text-white">
                See More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
