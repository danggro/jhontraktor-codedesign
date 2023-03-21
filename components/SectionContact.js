import Button from "./Button";
import ContactInput from "./ContactInput";
import ContactItem from "./ContactItem";
import Container from "./Container";

export default function SectionContact() {
  return (
    <section id="service" className="w-screen bg-contact ">
      <div className="gradient-contact py-[50px]">
        <Container>
          <h1 className="text-center font-semibold text-[64px]">
            Leading Way In Building & Civil Construction
          </h1>
          <div className="flex items-center justify-center mx-auto w-10/12 space-x-[34px] mt-[15px]">
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
          <div className="flex mt-[50px] space-x-[45px]">
            <div className="w-8/12">
              <div className="bg-orange rounded-[15px] py-10 px-[60px]">
                <h3 className="text-2xl font-medium">Request A Quote</h3>
                <p className="mt-6 text-xl pr-14">
                  Complete control over products allow us to our customers the
                  best quality prices and services. We take great pride in
                  everything that we do in Jhontraktor
                </p>
                <div className="flex flex-wrap mt-7 -mx-[14px] ">
                  <div className="w-6/12 px-[14px] mb-7">
                    <ContactInput place="Name" />
                  </div>
                  <div className="w-6/12 px-[14px] mb-7">
                    <ContactInput place="Email" />
                  </div>
                  <div className="w-6/12 px-[14px] mb-7">
                    <ContactInput place="Phone" />
                  </div>
                  <div className="w-6/12 px-[14px] mb-7">
                    <ContactInput place="Select Your Service" />
                  </div>
                  <div className="w-full px-4 mb-7">
                    <textarea
                      cols="30"
                      rows="3"
                      placeholder="Additional Details!"
                      className="rounded-[15px] px-16 text-xl text-primary/50 py-6 w-full"
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
                <h3 className="text-2xl font-medium">Contact Info</h3>
                <div className="mt-[55px] mb-[60px]">
                  <div className="">
                    <h4 className="text-xl">Our Location</h4>
                    <p className="mt-1 text-base font-light">
                      18 Office Park Building 21th Floor Unit C. Jl. TB
                      Simatupang Kav. 18, Jakarta Selatan ,12520
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-xl">Quick Contact</h4>
                    <p className="mt-1 text-base font-light ">
                      <p>Email : (+62) 877-2469-7246</p>
                      <p>Call Us : contact@jhontraktor.co</p>
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-xl">Opening Hours</h4>
                    <p className="mt-1 text-base font-light">
                      <p>Monday - Friday</p>
                      <p>09:00 AM - 06:00 PM</p>
                    </p>
                  </div>
                  <div className="mt-6 text-xl">
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
