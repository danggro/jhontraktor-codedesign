import Container from "./Container";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import NavRight from "./NavRight";

export default function NavBar() {
  return (
    <nav className="py-12  min-w-screen bg-primary">
      <Container>
        <div className="flex items-center ">
          <div className="w-[30%]">
            <NavLogo />
          </div>
          <div className="w-[40%]">
            <NavItem />
          </div>
          <div className="w-[30%]">
            <NavRight />
          </div>
        </div>
      </Container>
    </nav>
  );
}
