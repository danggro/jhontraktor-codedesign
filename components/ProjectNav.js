import ProjectNavItem from "./ProjectNavItem";

export default function ProjectNav() {
  return (
    <div className="flex items-center 2xl:mt-[50px] mt-[30px] justify-between">
      <h2 className="text-primary font-semibold 2xl:text-[64px] text-[52px]">
        Featured Project
      </h2>
      <ProjectNavItem />
    </div>
  );
}
