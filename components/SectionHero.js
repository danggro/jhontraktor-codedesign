import Arrow from "./Arrow";
import Button from "./Button";
import Container from "./Container";
import SectionHeroItem from "./SectionHeroItem";

export default function SectionHero() {
  return (
    <section className="w-full bg-hero pt-[160px]  pb-[200px]  relative">
      <Container>
        <div className="w-5/12">
          <h1 className="2xl:text-[64px] text-5xl leading-[72px] 2xl:leading-[96px] font-semibold pr-40">
            We Prepare For The <span className="text-orange">Future</span>
          </h1>
          <h4 className="mt-6 2xl:text-xl text-lg font-medium 2xl:mb-[75px] mb-[36px]">
            We provide the best architectural design, contruction, and building
            maintance services for you.
          </h4>
          <div className="flex space-x-5 2xl:space-x-10">
            <Button variant="orange" padding=" 2xl:px-[30px] px-[20px]">
              <div className="flex items-center ">
                Our Servies
                <span className="ml-1 2xl:ml-4">
                  <Arrow variant="white" />
                </span>
              </div>
            </Button>
            <Button variant="white" padding=" 2xl:px-[30px] px-[20px]">
              View Project
            </Button>
          </div>
        </div>
        <div className=" rounded-[15px] 2xl:p-[50px] p-[35px] bg-orange absolute right-[113px] bottom-0 translate-y-[50%]">
          <div className="flex flex-col space-y-3 2xl:space-y-5 ">
            <SectionHeroItem>
              Quality Control System, 100% Satisfaction Guarantee
            </SectionHeroItem>
            <SectionHeroItem>
              Highly Proffesional Staff, Accurate Testing Processes
            </SectionHeroItem>
            <SectionHeroItem>
              Unrivalled Workmanship, Proffesional and Qualified
            </SectionHeroItem>
          </div>
        </div>
      </Container>
    </section>
  );
}
