import Button from "./Button";
import ContactInput from "./ContactInput";
import ContactItem from "./ContactItem";
import Container from "./Container";

export default function SectionContact() {
  return (
    <section id="service" className="w-screen bg-contact ">
      <div className="gradient-contact 2xl:py-[50px] py-[30px]">
        <Container>
          <h1 className="text-center font-semibold 2xl:text-[64px] text-[52px]">
            Leading Way In Building & Civil Construction
          </h1>
          <div className="flex items-center justify-center mx-auto w-10/12 2xl:space-x-[34px] space-x-7 2xl:mt-[15px] mt-2">
            <div className="p-[10px]">
              <ContactItem>Professional Staff</ContactItem>
            </div>
            <div className="p-[10px]">
              <ContactItem>100% Satifaction</ContactItem>
            </div>
            <div className="p-[10px]">
              <ContactItem>Accurate Testing</ContactItem>
            </div>
            <div className="p-[10px]">
              <ContactItem>Transparent Pricing</ContactItem>
            </div>
          </div>
          <div className="flex 2xl:mt-[50px] mt-[30px] space-x-[45px]">
            <div className="w-8/12">
              <div className="bg-orange rounded-[15px] py-10 px-[60px]">
                <h3 className="text-lg font-medium 2xl:text-2xl">
                  Request A Quote
                </h3>
                <p className="mt-6 text-base pr-18 2xl:text-xl 2xl:pr-14">
                  Complete control over products allow us to our customers the
                  best quality prices and services. We take great pride in
                  everything that we do in Jhontraktor
                </p>
                <div className="flex flex-wrap mt-7 2xl:-mx-[14px] -mx-2 ">
                  <div className="w-6/12 2xl:px-[14px] px-[8px] 2xl:mb-7 mb-4">
                    <ContactInput place="Name" />
                  </div>
                  <div className="w-6/12 2xl:px-[14px] px-[8px] 2xl:mb-7 mb-4">
                    <ContactInput place="Email" />
                  </div>
                  <div className="w-6/12 2xl:px-[14px] px-[8px] 2xl:mb-7 mb-4">
                    <ContactInput place="Phone" />
                  </div>
                  <div className="w-6/12 2xl:px-[14px] px-[8px] 2xl:mb-7 mb-4">
                    <ContactInput place="Select Your Service" />
                  </div>
                  <div className="w-full px-2 2xl:px-4 mb-7">
                    <textarea
                      cols="30"
                      rows="3"
                      placeholder="Additional Details!"
                      className="rounded-[15px] 2xl:px-16 px-8 2xl:text-xl text-base text-primary/50 py-6 w-full"
                    ></textarea>
                  </div>
                  <div className="w-full text-center">
                    <Button variant="black">Submit Request</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="bg-orange py-10 px-[60px] rounded-[15px]">
                <h3 className="text-lg font-medium 2xl:text-2xl">
                  Contact Info
                </h3>
                <div className="2xl:mt-[55px] mt-[40px] 2xl:mb-[60px] mb-[45px]">
                  <div className="">
                    <h4 className="text-base 2xl:text-xl">Our Location</h4>
                    <p className="mt-1 text-xs font-light 2xl:text-base">
                      18 Office Park Building 21th Floor Unit C. Jl. TB
                      Simatupang Kav. 18, Jakarta Selatan ,12520
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-base 2xl:text-xl">Quick Contact</h4>
                    <p className="mt-1 text-xs font-light 2xl:text-base ">
                      <p>Email : (+62) 877-2469-7246</p>
                      <p>Call Us : contact@jhontraktor.co</p>
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-base 2xl:text-xl">Opening Hours</h4>
                    <p className="mt-1 text-xs font-light 2xl:text-base">
                      <p>Monday - Friday</p>
                      <p>09:00 AM - 06:00 PM</p>
                    </p>
                  </div>
                  <div className="mt-6 text-base 2xl:text-xl">
                    <h3>
                      Do You Have Any Question, Just Contact Us To Get Help!
                    </h3>
                  </div>
                </div>
                <div className="mt-[45px]">
                  <Button variant="black">Contact Us</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
