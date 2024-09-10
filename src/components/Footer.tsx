import { FooterNavMenu } from "../constants";

interface IFooterMenu {
  id: number;
  name: string;
  children: {
    id: number;
    name: string;
    link: string;
  }[];
}

export default function Footer() {
  return (
    <footer>
      <img src="" alt="" />
      <ul>
        {FooterNavMenu.map((footerMenu: IFooterMenu) => {
          return (
            <li key={footerMenu.id}>
              {footerMenu.name}
              <ul>
                {footerMenu.children.map((menu) => {
                  return (
                    <li key={menu.id}>
                      <a href={menu.link}>{menu.name}</a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
