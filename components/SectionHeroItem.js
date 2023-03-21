export default function SectionHeroItem({ children }) {
  return (
    <div className="flex items-center space-x-2 2xl:space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
        className="scale-90 2xl:scale-100"
      >
        <path
          fill="#fff"
          d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-4.963-3.787a.937.937 0 00-1.35.027l-4.34 5.531L6.73 9.154a.938.938 0 00-1.325 1.325l3.308 3.309a.94.94 0 001.348-.026l4.99-6.237a.938.938 0 00-.012-1.313h-.002z"
        ></path>
      </svg>
      <h4 className="text-base font-medium 2xl:text-xl">{children}</h4>
    </div>
  );
}
