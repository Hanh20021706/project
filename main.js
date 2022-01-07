import { menuList } from "./data";

const showMenu = () => {
    const menuElement = document.getElementById("#menu");

    if (menuElement) {
        const result = menuList.map((item) => `
            <li>
            <a href="" class="text-white pr-5 ">${item}</a>
          </li>
            `).join("");
        menuElement.innerHTML = result;
    }
};
showMenu();
