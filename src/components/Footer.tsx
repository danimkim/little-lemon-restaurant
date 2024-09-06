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
            <li>
              {footerMenu.name}
              <ul>
                {footerMenu.children.map((menu) => {
                  return (
                    <li>
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
