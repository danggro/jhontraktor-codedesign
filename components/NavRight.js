import Button from "./Button";
import Globe from "./Globe";

export default function NavRight() {
  return (
    <div className="flex items-center justify-end 2xl:text-2xl xl:text-xl 2xl:space-x-6 xl:space-x-3">
      <div className="flex items-center">
        <Globe />
        <h4 className="p-[10px] ">English</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 30 30"
          className="-ml-2 scale-75 2xl:scale-100"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7.5 11.25l7.5 7.5 7.5-7.5"
          ></path>
        </svg>
      </div>
      <div>
        <Button variant="orange" padding="2xl:px-[30px] px-[15px]">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
