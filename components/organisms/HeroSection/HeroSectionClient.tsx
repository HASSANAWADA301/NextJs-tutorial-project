"use client";

import { useTranslation } from "react-i18next";
import CardWithImage from "../../molecules/CardWithImage/CardWithImage";
import Tab from "../../molecules/Tab/Tab";

type TabData = { label: string; lighted?: boolean };
type CardData = { title: string; imageUrl: string };

type HeroSectionData = {
  heading: string;
  highlightWords: string[];
  tabs: TabData[];
  cards: CardData[];
};

type Translations = {
  [lang: string]: HeroSectionData;
};

interface Props {
  data: {
    translations: Translations;
  };
}

const HeroSectionClient: React.FC<Props> = ({ data }) => {
  const { i18n } = useTranslation();
  const lang = data.translations[i18n.language]
    ? i18n.language
    : "en"; // fallback

  const section = data.translations[lang];

  if (!section) return <div>Loading ...</div>;

  const renderHeading = () => {
    return section.heading.split(" ").map((word, idx) => {
      const cleanWord = word.replace(/[^a-zA-Z\u0600-\u06FF]/g, ""); // handle Arabic letters too
      const isHighlighted = section.highlightWords.includes(cleanWord);
      return (
        <span key={idx} className={isHighlighted ? "text-[#eb6f2d]" : ""}>
          {word + " "}
        </span>
      );
    });
  };

  return (
    <section
      className={`
        flex flex-col gap-5 max-h-[600px]
        px-0 max-[1335px]:px-10 max-[1024px]:px-5
        items-start max-[1335px]:items-center max-[1024px]:items-center
      `}
    >
      <div
        className={`
          w-[662px] h-[294px] mb-[50px]
          max-[1335px]:w-[90%] max-[1335px]:h-auto max-[1335px]:text-center
          max-[1024px]:w-[90%] max-[768px]:w-full max-[768px]:h-auto
        `}
      >
        <h1
          className={`
            text-[#353232] text-[65px] font-medium
            max-[1335px]:text-[56px] max-[1335px]:text-center leading-[1.2]
            max-[1024px]:text-[48px] max-[768px]:text-[36px] max-[768px]:text-center 
          `}
        >
          {renderHeading()}
        </h1>
      </div>

      <div
        className={`
          h-[40px] flex gap-[30px]
          max-[1335px]:gap-[25px] max-[1335px]:justify-center max-[1335px]:flex-wrap
          max-[1024px]:gap-[20px] max-[768px]:flex-col max-[768px]:items-center max-[768px]:h-auto
        `}
      >
        {section.tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} lighted={tab.lighted} lang={lang}/>
        ))}
      </div>

      <div
        className={`
          flex h-[400px] mt-5 gap-2
          max-[1335px]:justify-center max-[1335px]:gap-[30px] max-[1335px]:h-auto
          max-[1024px]:flex-wrap max-[1024px]:gap-[20px]
          max-[768px]:flex-col max-[768px]:w-full max-[768px]:items-center
          max-[768px]:mb-[150px] 
        `}
      >
        {section.cards.map((card, index) => (
          <CardWithImage key={index} title={card.title} imageUrl={card.imageUrl} lang={lang}/>
        ))}
      </div>
    </section>
  );
};

export default HeroSectionClient;
