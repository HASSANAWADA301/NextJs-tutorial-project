"use client";

import HighLightSpan from "../../atoms/HighlightSpan/HighLightSpan";
import PackageCard from "../../molecules/PackageCard/PackageCard";
import { useTranslation } from "react-i18next";

type Package = {
  title: string;
  price: string;
  features: string[];
};

type Props = {
  data: {
    translations: {
      [key: string]: {
        heading: string;
        highlight: string;
        packages: Package[];
      };
    };
  };
};

const BestPriceSectionClient: React.FC<Props> = ({ data }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  if (!data) {
    return (
      <div className="text-center text-red-500">No pricing data found.</div>
    );
  }

  const content = data.translations?.[currentLang] || data.translations?.["en"];

  if (!content || !Array.isArray(content.packages)) {
    return (
      <div className="text-center text-red-500">
        Pricing data not available.
      </div>
    );
  }

  return (
    <div className="w-full px-4 max-[1024px]:px-5 mt-[150px]">
      <div className="mt-[50px] flex justify-center items-center flex-col text-center">
        <h1 className="text-[80px] font-medium w-[690px] h-[120px] max-[1335px]:text-[64px] max-[1335px]:w-[90%] max-[1024px]:text-[48px] max-[1024px]:w-full max-[768px]:text-[32px] max-[768px]:h-auto">
          {content.heading} <HighLightSpan>{content.highlight}</HighLightSpan>
        </h1>
      </div>

      <div className="flex justify-center items-center gap-[100px] flex-wrap mt-10 w-full max-[1335px]:gap-[25px] max-[768px]:flex-col max-[768px]:gap-[30px] max-[768px]:pt-[30px] max-[768px]:w-[90%] mx-auto">
        {content.packages.map((pkg, index) => (
          <div
            key={index}
            className="max-w-[300px] flex-1 max-[1024px]:flex-[1_1_300px]"
          >
            <PackageCard lang={currentLang} {...pkg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPriceSectionClient;
