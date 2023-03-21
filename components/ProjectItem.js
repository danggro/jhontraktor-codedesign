export default function ProjectItem({ step, children }) {
  return (
    <div className="text-center ">
      <p className="text-lg font-medium text-center">{children}</p>
      <p className="mt-3 text-sm font-medium">
        {`Step`}
        {step}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="none"
        viewBox="0 0 35 35"
        className="mt-[19px] mx-auto"
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
