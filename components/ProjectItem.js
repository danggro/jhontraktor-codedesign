export default function ProjectItem({ step, children }) {
  return (
    <div className="text-center ">
      <p className="text-base font-medium text-center 2xl:text-lg">
        {children}
      </p>
      <p className="mt-3 text-xs font-medium 2xl:text-sm">
        {`Step`}
        {step}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="none"
        viewBox="0 0 35 35"
        className="2xl:mt-[19px] mt-[10px] mx-auto 2xl:scale-75 scale-75"
      >
        <circle
          cx="17.5"
          cy="17.5"
          r="17.5"
          fill="#fff"
          fillOpacity="0.2"
        ></circle>
        <circle cx="17.5" cy="17.5" r="9.5" fill="#fff"></circle>
      </svg>
    </div>
  );
}
