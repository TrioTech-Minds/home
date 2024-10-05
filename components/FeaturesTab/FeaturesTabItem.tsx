import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import React from "react";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark, descHeader1,descHeader2 } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19" >
        <div className="md:w-1/2" style={{paddingLeft:'1rem'}}>
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5"><span className='font-bold' >{descHeader1}</span> {desc1}</p>
          <p className="w-11/12"><span className='font-bold' >{descHeader2}</span>{desc2}</p>
        </div>
        <div className="relative aspect-[366/366] max-w-[450px] md:block md:w-1/2">
          <Image src={image} alt={title} fill className="dark:hidden" />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
