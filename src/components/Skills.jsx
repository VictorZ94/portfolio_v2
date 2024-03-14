import iconSkills from "../data/skills.js";

const Skills = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-4 mt-16">
      <h2 className="text-4xl font-serif dark:text-white text-center font-bold">
        My Skills
      </h2>
      <div className="grid gap-4 grid-cols-custom mt-8">
        {iconSkills.map((icon) => (
          <div
            key={icon.alt}
            className="w-full h-64 p-6 bg-white border border-gray-200 rounded-xl shadow dark:bg-slate-800 opacity-1 dark:border-gray-800 justify-center items-stretch hover:cursor-pointer hover:bg-gold-300"
          >
            <div className="flex flex-col h-full items-center justify-around">
              <img
                src={icon.image}
                alt={icon.alt}
                className="h-auto max-w-sm w-32"
              />
              <p className="text-white text-2xl">{icon?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
