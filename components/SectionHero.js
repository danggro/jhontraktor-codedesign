import Arrow from "./Arrow";
import Button from "./Button";
import Container from "./Container";
import SectionHeroItem from "./SectionHeroItem";

export default function SectionHero() {
  return (
    <section className="w-full bg-hero pt-[160px] pb-[200px] relative">
      <Container>
        <div className="w-5/12">
          <h1 className="text-[64px] font-semibold pr-40">
            We Prepare For The <span className="text-orange">Future</span>
          </h1>
          <h4 className="mt-6 text-xl font-medium mb-[75px]">
            We provide the best architectural design, contruction, and building
            maintance services for you.
          </h4>
          <div className="flex space-x-10">
            <Button variant="orange" padding="px-[30px]">
              <div className="flex items-center ">
                Our Servies
                <span className="ml-4">
                  <Arrow variant="white" />
                </span>
              </div>
            </Button>
            <Button variant="white" padding="px-[30px]">
              View Project
            </Button>
          </div>
        </div>
        <div className=" rounded-[15px] p-[50px] bg-orange absolute right-[113px] translate-y-[40%]">
          <div className="flex flex-col space-y-5 ">
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
