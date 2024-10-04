import { Feature } from "@/types/feature";
import icon1 from './assets/genAI.svg';
import icon2 from './assets/chatbot.svg';
import icon3 from './assets/website.svg';
import icon4 from './assets/machinelearning.svg';
import icon5 from './assets/mobiledev.svg';
import icon6 from './assets/integration.svg';

const featuresData: Feature[] = [
  {
    id: 1,
    icon: icon1,
    title: "Gen AI Solutions",
    description:
      "Unlock the power of generative AI with tailored solutions that revolutionize the way your business creates, analyzes, and automates content.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Specialized ChatBots",
    description:
      "Elevate customer interactions with intelligent, customized chatbots designed to enhance user engagement and streamline support.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Website and Backend Development",
    description:
      "From dynamic websites to scalable backends, we provide robust development services that ensure seamless functionality and performance.",
  },
  {
    id: 4,
    icon: icon4,
    title: "Machine Learning",
    description:
    "Empower your business with data-driven insights and predictive models using advanced machine learning techniques tailored to your needs.",
  },
  {
    id: 5,
    icon: icon5,
    title: "Mobile Application Development",
    description:
      "Build sleek, high-performance mobile apps using Flutter that deliver exceptional user experiences across Android and iOS platforms.",
  },
  {
    id: 6,
    icon: icon6,
    title: "Application Integrations",
    description:
      "Seamlessly integrate applications to enhance workflow efficiency and data synchronization across platforms, ensuring smooth operations.",
  },
];

export default featuresData;
