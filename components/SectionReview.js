import Image from "next/image";
import Container from "./Container";

export default function SectionReview() {
  return (
    <section id="review" className="py-[50px]">
      <Container>
        <div className="text-center">
          <h3 className="text-orange font-semibold text-[28px]">
            What Our Client Says
          </h3>
          <p className="w-10/12 px-24 mx-auto text-xl mt-7">
            I am very satisfied with the services. Their team is very
            professional and efficient in completing our project on time and at
            a very affordable cost. The quality of their work is very good and I
            highly recommend this company for any construction project.
          </p>
          <h4 className="text-xl font-medium mt-[14px]">Tom DeLonge</h4>
          <h5 className="mt-1 text-base font-medium">CEO, Lexmark</h5>
        </div>
        <div className="flex items-center justify-center mt-[27px] space-x-[25px]">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Prev</span>
          </div>
          <Image
            width="50"
            height="50"
            src="/avatar-review-1.png"
            alt=""
            className="rounded-full opacity-50"
          />
          <Image
            width="70"
            height="70"
            src="/avatar-review-2.png"
            alt=""
            className="rounded-full outline outline-4 outline-offset-4 outline-orange"
          />
          <Image
            width="50"
            height="50"
            src="/avatar-review-3.png"
            alt=""
            className="rounded-full opacity-50"
          />
          <div className="flex items-center">
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
              className="flex-shrink-0 rotate-180 "
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
