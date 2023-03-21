import Link from "next/link";
import Container from "./Container";
import FooterItem from "./FooterItem";
import FooterLogo from "./FooterLogo";
import Facebook from "./FooterLogo/Facebook";
import Instagram from "./FooterLogo/Instagram";
import Linkedin from "./FooterLogo/Linkedin";
import Medium from "./FooterLogo/Medium";
import Twitter from "./FooterLogo/Twitter";

export default function Footer() {
  return (
    <section id="footer" className="py-[50px]">
      <Container>
        <div className="flex items-center justify-between">
          <FooterLogo />
          <div className="flex items-center space-x-4">
            <h4>Subscibe To Our Newsletter:</h4>
            <div className="flex items-center justify-between py-1 border-b">
              <input
                type="email"
                placeholder="Enter your email address"
                className="pr-12 text-opacity-50 bg-transparent"
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="none"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M7.72 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06-1.06l3.22-3.22H2.25a.75.75 0 110-1.5h8.69L7.72 3.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-[115px] mt-8">
          <FooterItem title="About Us">
            <div className="w-[460px]">
              <p>
                We have the confidence to provide the best service for you, with
                the support of Professional and Certified HR that we currently
                have and the high-quality materials we use and structured work
                techniques, we will be able to realize timely completion of
                work.
              </p>
              <div className="mt-6 flex items-center space-x-[14px]">
                <Link
                  target="_blank"
                  href="http://www.linkedin.com"
                  className="hover:opacity-60"
                >
                  <Linkedin />
                </Link>
                <Link
                  target="_blank"
                  href="http://www.medium.com"
                  className="hover:opacity-60"
                >
                  <Medium />
                </Link>
                <Link
                  target="_blank"
                  href="http://www.instagram.com"
                  className="hover:opacity-60"
                >
                  <Instagram />
                </Link>
                <Link
                  target="_blank"
                  href="http://www.twitter.com"
                  className="hover:opacity-60"
                >
                  <Twitter />
                </Link>
                <Link
                  target="_blank"
                  href="http://www.facebook.com"
                  className="hover:opacity-60"
                >
                  <Facebook />
                </Link>
              </div>
            </div>
          </FooterItem>
          <div className="w-full">
            <FooterItem title="Office">
              <p>18 Office Park Building 21th Floor Unit C.</p>
              <p>Jl. TB Simatupang Kav. 18,</p>
              <p>Jakarta Selatan ,12520</p>
            </FooterItem>
          </div>
          <div className="w-full">
            <FooterItem title="Contact">
              <p>Email : contact@jhontracktor.co</p>
              <p>Phone : (+62) 877-2469-7246</p>
            </FooterItem>
          </div>
          <div className="w-full">
            <FooterItem title="Contact">
              <ul>
                <li className="mt-1">
                  <a href="#home" className=" hover:underline">
                    Home
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#about" className=" hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#service" className=" hover:underline">
                    Service
                  </a>
                </li>
                <li className="mt-1">
                  <a href="#project" className=" hover:underline">
                    Project
                  </a>
                </li>
              </ul>
            </FooterItem>
          </div>
        </div>
      </Container>
    </section>
  );
}
