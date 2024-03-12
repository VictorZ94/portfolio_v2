const About = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-4 mt-16">
      <h2 className="text-3xl dark:text-white font-bold">ABOUT</h2>
      <div className="flex justify-between space-x-3 mt-4">
        <span className="block mt-2 w-16 h-0.5 bg-gold-300"></span>
        <div className="dark:text-white">
          <p>
            I'm a <strong className="text-gold-300">web developer</strong>, with
            experience turning ideas into functional web products. I have been
            seasoned working with{" "}
            <strong className="text-gold-300">Python and Django</strong> in
            Back-end alongside with{" "}
            <strong className="text-gold-300">React and Javascript</strong> in
            Front-end
          </p>
          <p>
            I have worked for several startups, always maintaining as a priority
            the idea that it is better to do things well than to do them
            perfect. I love to work iteratively, constantly improving the
            product through feedback and new ideas.
          </p>
          <p>
            If you need help in the development of your web project, I will be
            happy to work with you and help you bring your ideas to reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
