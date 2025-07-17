"use client";

import React, { useState } from "react";
import HighLightSpan from "../../atoms/HighlightSpan/HighLightSpan";
import PassIcon from "../../atoms/PassIcon/PassIcon";
import ProjectCard from "../../molecules/ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";

type Project = {
  title: string;
  description: string;
};



type Props = {
  data: {
    translations: {
      [lang: string]: {
        title: string;
        highlight: string;
        projects: Project[];
      };
    };
  };
};

const ProjectsSectionClient: React.FC<Props> = ({ data }) => {
  const { i18n } = useTranslation();
  const lang = data.translations?.[i18n.language] ? i18n.language : "en";

  const { title, highlight, projects } = data.translations?.[lang] || {
    title: "",
    highlight: "",
    projects: [],
  };

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    if (startIndex + visibleCount < projects.length) {
      setStartIndex((prev) => prev + 1);
    } else if (startIndex < projects.length - 1) {
      setStartIndex(projects.length - visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleCards = projects.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="mt-[100px] max-w-[1297px] mx-auto text-center px-4">
      <div className="flex justify-center items-center mb-[100px]">
        <h1 className={`${lang=='ar'?"text-[64px]":"text-[50px]"} font-medium h-[96px] w-[480px] max-[1335px]:text-[56px] max-[1024px]:text-[48px] max-[768px]:text-[32px] max-[480px]:text-[24px] max-[320px]:text-[20px] max-[768px]:h-auto`}>
          <HighLightSpan>{highlight} </HighLightSpan>
          {title.replace(highlight, "").trim()}
        </h1>
      </div>

      <div className="flex justify-center flex-wrap gap-[50px] max-[1335px]:gap-[40px] max-[1024px]:gap-[30px] max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-[150px] max-[480px]:gap-[80px] max-[320px]:gap-[60px]">
        {visibleCards.map((project, index) => {
          const isMiddleCard = index === 1;
          return (
            <ProjectCard
              key={startIndex + index}
              title={project.title}
              description={project.description}
              offset={isMiddleCard}
              lang={lang}
            />
          );
        })}
      </div>

      <div className="mt-[-250px] max-[1335px]:mt-0 max-[1024px]:mt-[30px] max-[768px]:mt-[20px] flex justify-between items-center max-w-[1297px] mx-auto px-4">
        <div
          onClick={handlePrev}
          className={`w-[64px] h-[64px] border border-[#eb6f2d] rounded-full flex items-center justify-center cursor-pointer ${
            startIndex === 0 ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <PassIcon direction={`${lang=='ar'?"right":"left"}`} />
        </div>

        <div
          onClick={handleNext}
          className={`w-[64px] h-[64px] border border-[#eb6f2d] rounded-full flex items-center justify-center cursor-pointer ${
            startIndex + visibleCount >= projects.length
              ? "opacity-50 pointer-events-none"
              : ""
          }`}
        >
          <PassIcon direction={`${lang=='ar'?"left":"right"}`} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSectionClient;
