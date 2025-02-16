import { GitHub, Linkedin, Twitter } from "react-feather";

const Social = () => {
  return (
    <ul className="flex md:flex-col items-center space-x-3 md:space-y-3">
      <li className="w-32 h-0.5 md:w-0.5 md:h-32 bg-gold-300 ml-3 md:mb-4 order-1 md:order-none"></li>
      <li className="text-white">
        <a
          href="https://www.linkedin.com/in/victorzuluaga/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin size={30} />
        </a>
      </li>
      <li className="text-white">
        <a
          href="https://twitter.com/VictorZulRam94"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter size={30} />
        </a>
      </li>
      <li className="text-white">
        <a
          href="https://github.com/VictorZ94"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHub size={30} />
        </a>
      </li>
    </ul>
  );
};

export default Social;
