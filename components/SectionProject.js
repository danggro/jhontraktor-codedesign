import Link from "next/link";
import Arrow from "./Arrow";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import ProjectItem from "./ProjectItem";
import ProjectNav from "./ProjectNav";

export default function SectionProject() {
  return (
    <section id="project" className="w-screen bg-orange pt-[35px] pb-24">
      <Container>
        <div className="flex 2xl:px-[111px] px-[80px] 2xl:space-x-[150px] space-x-[120px] relative">
          <div className="2xl:w-[233px] w-[255px]">
            <ProjectItem step="1">
              Evaluation And Signing Of The Contract
            </ProjectItem>
          </div>
          <div className="2xl:w-[189px] w-[200px]">
            <ProjectItem step="2">Preparation Of The Work Plan</ProjectItem>
          </div>
          <div className="2xl:w-[191px] w-[220px]">
            <ProjectItem step="3">Implementation Of Quality Work</ProjectItem>
          </div>
          <div className="2xl:w-[217px] w-[240px]">
            <ProjectItem step="4">
              Delivering The Project To The Customer
            </ProjectItem>
          </div>
        </div>
        <hr className="text-lg -translate-y-[19px]" />
        <ProjectNav />
      </Container>
      <div className="2xl:mt-[50px] mt-[30px] flex 2xl:space-x-[19px] space-x-[12px] overflow-x-auto ml-[113px]">
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
        <Link href="" className="hover:underline text-primary">
          <h4 className="2xl:text-xl text-base flex justify-end items-center font-semibold text-primary mr-[113px]">
            Explore All Projects
            <span className="inline-block ml-1 2xl:ml-3">
              <Arrow variant="black" />
            </span>
          </h4>
        </Link>
      </div>
    </section>
  );
}
