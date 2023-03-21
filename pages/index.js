import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SectionAbout from "@/components/SectionAbout";
import SectionContact from "@/components/SectionContact";
import SectionHero from "@/components/SectionHero";
import SectionProject from "@/components/SectionProject";
import SectionReview from "@/components/SectionReview";

export default function Home() {
  return (
    <>
      <NavBar />
      <SectionHero />
      <SectionAbout />
      <SectionProject />
      <SectionReview />
      <SectionContact />
      <Footer />
    </>
  );
}
