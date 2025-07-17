"use client";

import { useTranslation } from "react-i18next";
import HighlightHeading from "../../atoms/HighlightHeading/HighlightHeading";
import ParagraphText from "../../atoms/ParagraphText/ParagraphText";
import TitleText from "../../atoms/TitleText/TitleText";
import ChoiceList from "../../molecules/ChoiceList/ChoiceList";

type AboutUsData = {
  title: string;
  highlightHeading: string;
  subheading: string;
  paragraph: string;
  choices: string[];
};

type Translations = {
  [lang: string]: AboutUsData;
};

interface Props {
  data: {
    imageUrl: string;
    translations: Translations;
  };
}

const AboutUsSectionClient: React.FC<Props> = ({ data }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const lang = data.translations?.[currentLang] ? currentLang : "en";
  const content = data.translations?.[lang];

  if (!content) return null;

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-[1240px] mx-auto px-4 md:px-6 lg:px-0 py-8">
      <div>
        <TitleText label={content.title} lang={lang} />
        <div className="mt-2">
          <HighlightHeading text={content.highlightHeading} lang={lang} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mt-8 lg:mt-12 w-full">
        <img
          src={data.imageUrl}
          alt="About Us"
          className="w-full max-w-[714px] h-auto rounded-[50px] md:rounded-[30px] sm:rounded-[20px] sm:max-w-full"
        />

        <div
          className={`mt-6 lg:mt-0 lg:ml-8 text-center  max-w-[600px] space-y-4`}
        >
          <h4
            className={`text-[#eb6f2d] text-[16px] font-bold uppercase text-left max-[1024px]:text-center ${lang=="ar"?"text-right":""}`}
          >
            {content.subheading}
          </h4>
          <ChoiceList choices={content.choices} />
          <ParagraphText text={content.paragraph} lang={lang} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSectionClient;
