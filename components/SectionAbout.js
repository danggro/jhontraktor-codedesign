import Image from "next/image";
import AboutItem from "./AboutItem";
import Container from "./Container";
import Signature from "./Signature";

export default function SectionAbout() {
  return (
    <section className="" id="about">
      <Container>
        <div className="flex items-center space-x-[30px] 2xl:mt-16 mt-10">
          <div className="2xl:w-[200px] xl:w-[160px]">
            <AboutItem text="Years of Experience" num="25" />
          </div>
          <div className="2xl:w-[225px] w-[180px]">
            <AboutItem text="Project Complete" num="378" />
          </div>
          <div className="2xl:w-[215px] w-[185px]">
            <AboutItem text="Winning Global Award" num="69" />
          </div>
        </div>
        <div className="flex items-start 2xl:mt-[110px] mt-[80px]">
          <div className="w-5/12 ">
            <Image
              width="1570"
              height="884"
              src="/mandor-2.png"
              alt=""
              className="origin-bottom scale-90"
            />
          </div>
          <div className="w-7/12 pl-14">
            <h1 className="font-semibold 2xl:text-[64px] text-[52px] w-7/12">
              <span className="block text-orange">25 Years</span>
              <span>of experience!</span>
            </h1>
            <p className="pr-3 mt-10 text-base 2xl:pr-20 2xl:text-lg">
              We have a team of experienced professionals who have been in the
              industry for over 25 years. Our contractors have a wealth of
              knowledge and skills that they have acquired over the years,
              making them experts in their field.
            </p>
            <br />
            <p className="pr-3 mb-8 text-base 2xl:pr-20 2xl:text-lg">
              With 25 years of experience, our contractors have a deep
              understanding of industry standards and regulations. We ensure
              that all our projects comply with the latest safety and building
              codes, and that the final product meets or exceeds our
              client&apos;s expectations.
            </p>
            <Signature />
            <p className="2xl:text-sm text-xs font-medium mt-[8px]">
              Henry Kurnia Adhi - Founder
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
