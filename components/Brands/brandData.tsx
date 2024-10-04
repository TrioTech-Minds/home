import { Brand } from "@/types/brand";
import flutter from './assets/flutter.svg';
import node from './assets/nodejs.svg';
import python from './assets/python.svg';
import pytorch from './assets/pytorch.svg'
import react  from './assets/react.svg';
import tensorFlow from './assets/tensorflow.svg'

const brandData: Brand[] = [
  {
    id: 0.25,
    name: "Client",
    href: "#",
    image: flutter,
    imageLight: "/images/brand/brand-dark-01.svg",
  },
  {
    id: 0.3,
    name: "Client",
    href: "#",
    image: node,
    imageLight: "/images/brand/brand-dark-02.svg",
  },
  {
    id: 0.4,
    name: "Client",
    href: "#",
    image: python,
    imageLight: "/images/brand/brand-dark-03.svg",
  },
  {
    id: 0.5,
    name: "Client",
    href: "#",
    image: pytorch,
    imageLight: "/images/brand/brand-dark-04.svg",
  },
  {
    id: 0.6,
    name: "Client",
    href: "#",
    image: react,
    imageLight: "/images/brand/brand-dark-05.svg",
  },
  {
    id: 0.7,
    name: "Client",
    href: "#",
    image: tensorFlow,
    imageLight: "/images/brand/brand-dark-06.svg",
  },
];

export default brandData;
