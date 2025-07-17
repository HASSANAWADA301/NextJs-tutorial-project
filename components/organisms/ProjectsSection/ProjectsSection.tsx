import { getProjects } from "@/src/services/projectService";
import ProjectsSectionClient from "./ProjectsSectionClient";


const ProjectsSection = async () => {
  const projectsConfig = await getProjects();

  if (!projectsConfig) return null;

  return <ProjectsSectionClient data={projectsConfig} />;
};

export default ProjectsSection;
