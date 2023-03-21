export default function NavItem() {
  return (
    <ul className="flex justify-center space-x-6">
      <li className="p-[10px]">
        <a
          href="#home"
          className="text-2xl text-medium underline underline-offset-[25px] text-orange"
        >
          Home
        </a>
      </li>
      <li className="p-[10px]">
        <a
          href="#about"
          className="text-2xl text-medium hover:text-orange hover:underline hover:underline-offset-[25px] "
        >
          About Us
        </a>
      </li>
      <li className="p-[10px]">
        <a
          href="#service"
          className="text-2xl text-medium hover:text-orange hover:underline hover:underline-offset-[25px] "
        >
          Service
        </a>
      </li>
      <li className="p-[10px]">
        <a
          href="#project"
          className="text-2xl text-medium hover:text-orange hover:underline hover:underline-offset-[25px] "
        >
          Project
        </a>
      </li>
    </ul>
  );
}
