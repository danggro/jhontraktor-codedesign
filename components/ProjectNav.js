import ProjectCard from "./ProjectCard";
import ProjectNavItem from "./ProjectNavItem";

export default function ProjectNav() {
  return (
    <div className="flex items-center mt-[50px] justify-between">
      <h2 className="text-primary font-semibold text-[64px]">
        Featured Project
      </h2>
      <ProjectNavItem />
    </div>
  );
}
