import { StaticImageData } from "next/image";

export type FeatureTab = {
  id: string;
  title: string;
  descHeader1: string;
  desc1: string;
  descHeader2: string;
  desc2: string;
  image: StaticImageData;
  imageDark: string;
};
