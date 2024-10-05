import { FeatureTab } from "@/types/featureTab";
import sideImage0 from './assets/sideImage0.jpeg';
import sideImage1 from './assets/sideImage1.jpeg';
import try1 from './assets/1.gif';
import try2 from './assets/2.gif';
import website from './assets/sideImage2.jpeg';

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "AI Technologies We Leverage",

    desc1: ` TensorFlow, PyTorch, Hugging Face, LangChain, and LlamaIndex: We build AI solutions using Python for development, TensorFlow and PyTorch for deep learning, Hugging Face for NLP, and LangChain/LlamaIndex for advanced LLM-powered applications.`,
    desc2: ` Our AI models are deployed using AWS SageMaker, Azure AI, and Google Cloud, with Docker and Kubernetes ensuring scalable and seamless deployment.`,
    image: sideImage0,
    imageDark: "/images/features/features-dark-01.svg",
    descHeader1: "TensorFlow, PyTorch, Hugging Face, LangChain, and LlamaIndex: ",
    descHeader2: "Cloud AI and Efficient Deployment:"
  },
  {
    id: "tabTwo",
    title: "Tools and Frameworks for Mobile Development",
    desc1: ` We develop high-performance mobile apps using Flutter and Dart, and enhance native features with Swift (iOS) and Java/Kotlin (Android).`,
    desc2: ` Our mobile apps utilize Firebase for real-time data and secure authentication, along with AWS Amplify and Google Cloud for backend integration and scalability.`,
    image: sideImage1,
    imageDark: "/images/features/features-dark-01.svg",
    descHeader1: "Flutter, Dart, Swift, and Java for Cross-Platform Development:",
    descHeader2: "Firebase and Cloud Backends:"
  },
  {
    id: "tabThree",
    title: "Web Development Platforms and Technologies",
    desc1: ` We build fast, interactive websites with React and Next.js, while leveraging Node.js and Django for scalable backend services.`,
    desc2: ` We handle data efficiently with PostgreSQL and MongoDB, deploying on AWS and Azure to ensure high availability and performance.`,
    image: website,
    imageDark: "/images/features/features-dark-01.svg",
    descHeader1: "React, Next.js, Node.js, and Django:",
    descHeader2: "PostgreSQL, MongoDB, and Cloud Hosting:"
  },
];

export default featuresTabData;
