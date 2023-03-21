import Arrow from "./Arrow";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import ProjectItem from "./ProjectItem";
import ProjectNav from "./ProjectNav";

export default function SectionProject() {
  return (
    <section className="w-screen bg-orange pt-[35px] pb-24">
      <Container>
        <div className="flex px-[111px] space-x-[150px] relative">
          <div className="w-[233px]">
            <ProjectItem step="1">
              Evaluation And Signing Of The Contract
            </ProjectItem>
          </div>
          <div className="w-[189px]">
            <ProjectItem step="2">Preparation Of The Work Plan</ProjectItem>
          </div>
          <div className="w-[191px]">
            <ProjectItem step="3">Implementation Of Quality Work</ProjectItem>
          </div>
          <div className="w-[217px]">
            <ProjectItem step="4">
              Delivering The Project To The Customer
            </ProjectItem>
          </div>
        </div>
        <hr className="text-lg -translate-y-[19px]" />
        <ProjectNav />
      </Container>
      <div className="mt-[50px] flex space-x-[19px] overflow-x-auto ml-[113px]">
        <div className="flex-shrink-0">
          <ProjectCard
            image="/project-1.png"
            title="Skyskuy Tower"
            text="Renovaion & Architecture"
          />
        </div>
        <div className="flex-shrink-0">
          <ProjectCard
            image="/project-2.png"
            title="The Fallingwater House"
            text="Building & Interior"
          />
        </div>
        <div className="flex-shrink-0">
          <ProjectCard
            image="/project-3.png"
            title="The Orange Apartemen"
            text="Construction & Interior"
          />
        </div>
        <div className="flex-shrink-0">
          <ProjectCard
            image="/project-4.png"
            title="The Fallingwater House"
            text="Building & Interior"
          />
        </div>
      </div>
      <div className="p-[10px] mt-[22px]">
        <h4 className="text-xl flex justify-end items-center font-semibold text-primary mr-[113px]">
          Explore All Projects
          <span className="inline-block ml-3">
            <Arrow variant="black" />
          </span>
        </h4>
      </div>
    </section>
  );
}
