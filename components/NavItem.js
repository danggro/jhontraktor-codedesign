export default function NavItem() {
  return (
    <ul className="flex justify-center 2xl:space-x-6 xl:space-x-3">
      <li className="2xl:p-[10px] xl:p-[5px]">
        <a
          href="#home"
          className=" 2xl:text-2xl xl:text-xl text-medium underline 2xl:underline-offset-[25px] underline-offset-[18px] text-orange"
        >
          Home
        </a>
      </li>
      <li className="2xl:p-[10px] xl:p-[5px]">
        <a
          href="#about"
          className=" 2xl:text-2xl xl:text-xl text-medium hover:text-orange hover:underline 2xl:hover:underline-offset-[25px] hover:underline-offset-[18px] "
        >
          About Us
        </a>
      </li>
      <li className="2xl:p-[10px] xl:p-[5px]">
        <a
          href="#service"
          className=" 2xl:text-2xl xl:text-xl text-medium hover:text-orange hover:underline 2xl:hover:underline-offset-[25px] hover:underline-offset-[18px] "
        >
          Service
        </a>
      </li>
      <li className="2xl:p-[10px] xl:p-[5px]">
        <a
          href="#project"
          className=" 2xl:text-2xl xl:text-xl text-medium hover:text-orange hover:underline 2xl:hover:underline-offset-[25px] hover:underline-offset-[18px] "
        >
          Project
        </a>
      </li>
    </ul>
  );
}
