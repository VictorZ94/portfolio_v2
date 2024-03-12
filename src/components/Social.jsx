import { GitHub, Linkedin, Twitter } from "react-feather";

const Social = () => {
  return (
    <ul className="flex flex-col items-center space-y-3">
      <li className="w-0.5 h-32 bg-gold-300 mb-4"></li>
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
      <li className="">
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
