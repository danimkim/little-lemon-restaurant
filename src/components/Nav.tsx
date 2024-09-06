import { NavMenu } from "../constants";

interface INavMenu {
  id: number;
  name: string;
  link: string;
}

export default function Nav() {
  return (
    <nav>
      <ul>
        {NavMenu.map((menu: INavMenu) => (
          <li key={menu.id}>
            <a href="#">{menu.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
