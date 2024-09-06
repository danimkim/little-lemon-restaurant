import Logo from "./../assets/Logo .svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="Little Lemon" />
      </div>
      <Nav />
    </header>
  );
}
