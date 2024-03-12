// @Icons
import HtmlIcon from "../assets/icons/html5-icon.svg";
import CssIcon from "../assets/icons/css3-icon.svg";
import ReactIcon from "../assets/icons/reactjs-icon.svg";
import JsIcon from "../assets/icons/js-icon.svg";
import PythonIcon from "../assets/icons/python-icon.png";
import MongoIcon from "../assets/icons/mongodb-icon.svg";
import DjangoIcon from "../assets/icons/django-icon.svg";
import ApiIcon from "../assets/icons/api-icon.png";
import JsonIcon from "../assets/icons/json-icon.svg";
import GrapqhqlIcon from "../assets/icons/graphql-icon.png";
import DockerIcon from "../assets/icons/docker-logo.png";
import UbuntuIcon from "../assets/icons/ubuntu-icon.png";
import DrfIcon from "../assets/icons/drf.webp";
import PostgresqlIcon from "../assets/icons/postgresql-icon.png";
import GitIcon from "../assets/icons/git.png";

const defaultHeight = 100;

const iconSkills = [
  {
    image: HtmlIcon,
    alt: "Html icon",
    order: 1,
    target: ["front-end"],
    height: defaultHeight,
    name: "Html",
  },
  {
    image: CssIcon,
    alt: "Css icon",
    order: 2,
    target: ["front-end"],
    height: defaultHeight,
    name: "Css",
  },
  {
    image: ReactIcon,
    alt: "React icon",
    order: 4,
    target: ["front-end", "full-stack"],
    height: defaultHeight,
    name: "React js",
  },
  {
    image: JsIcon,
    alt: "Javascript programming language icon",
    order: 3,
    target: ["front-end", "full-stack"],
    height: defaultHeight,
    name: "Javascript",
  },
  {
    image: PythonIcon,
    alt: "Python lenguage programming icon",
    order: 5,
    target: ["back-end"],
    height: defaultHeight,
    name: "Python",
  },
  {
    image: MongoIcon,
    alt: "Mongo DB icon",
    order: 9,
    target: ["back-end", "full-stack"],
    height: defaultHeight,
    name: "Mongo Db",
  },
  {
    image: DjangoIcon,
    alt: "Django Backend icon",
    order: 6,
    target: ["back-end"],
    height: defaultHeight,
    name: "Django",
  },
  {
    image: ApiIcon,
    alt: "API icon",
    order: 8,
    target: ["full-stack", "back-end", "front-end"],
    height: defaultHeight,
    name: "API",
  },
  {
    image: JsonIcon,
    alt: "Json icon",
    order: 11,
    target: ["full-stack", "back-end", "front-end"],
    height: defaultHeight,
    name: "Json",
  },
  {
    image: GrapqhqlIcon,
    alt: "Grapql query language icon",
    order: 9,
    target: ["full-stack", "back-end", "front-end"],
    height: defaultHeight,
    name: "Graphql",
  },
  {
    image: DockerIcon,
    alt: "Docker compose icon",
    order: 10,
    target: ["back-end"],
    height: defaultHeight,
    name: "Docker",
  },
  {
    image: PostgresqlIcon,
    alt: "Postgresql icon",
    order: 7,
    target: ["back-end"],
    height: defaultHeight,
    name: "Postgresql ",
  },
  {
    image: UbuntuIcon,
    alt: "Ubuntu OS",
    order: 11,
    target: ["back-end"],
    height: defaultHeight,
    name: "Ubuntu",
  },
  {
    image: DrfIcon,
    alt: "Django rest framework",
    order: 11,
    target: ["back-end"],
    height: defaultHeight,
    name: "Django Rest Framework",
  },
  {
    image: GitIcon,
    alt: "Git control",
    order: 11,
    target: ["back-end"],
    height: defaultHeight,
    name: "Git Source Control",
  },
];

export default iconSkills;
