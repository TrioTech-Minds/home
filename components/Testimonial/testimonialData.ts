import { Testimonial } from "@/types/testimonial";
import aarij from './assets/aarij.png';
import arham from './assets/arham.png';
import arhamJohar from './assets/arhamJohar.png';
import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import rafay from './assets/rafay.png';

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Aarij",
    designation: "Founder @ CapCart",
    image: aarij,
    content:
      "Trio Tech Minds transformed our content generation process with their Gen AI solutions. We now create high-quality marketing content in a fraction of the time, and the results have been phenomenal. Their expertise in AI is unmatched!",
  },
  {
    id: 2,
    name: "Arham Bin Johar",
    designation: "Founder @ VisualsByArham",
    image: arhamJohar,
    content:
      "The chatbot Trio Tech Minds developed for us has completely changed the way we interact with our customers. It’s responsive, intelligent, and perfectly tailored to our industry. Our customer support team is thrilled with the reduction in workload!",
  },
  {
    id: 3,
    name: "Abdul Rafay",
    designation: "Founder @contractWala",
    image: rafay,
    content:
      "Trio Tech Minds built a stunning mobile app for our business that exceeded all our expectations. Their attention to detail and ability to deliver a seamless experience on both Android and iOS was impressive. We highly recommend them!",
  },
  {
    id: 4,
    name: "Syed Arham Bin Imran",
    designation: "Founder @Codable",
    image: arham,
    content:
      "Our website and backend systems needed a major upgrade, and Trio Tech Minds delivered. The team provided an intuitive, fast, and scalable solution that has improved our website performance and customer experience significantly",
  },
];
