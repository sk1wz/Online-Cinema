"use client"
import { usePathname } from 'next/navigation';
import { menuItems } from "@/store/Variables";


export default function Navbar() {
    const pathname = usePathname();

    // Функция для поиска соответствующего пункта меню по текущему пути
    const findMenuItemByPath = (path:string) => {
        for (const item of menuItems) {
            for (const menuItem of item.items) {
                if (menuItem.link === path) {
                    return {
                        icon: menuItem.icon,
                        text: menuItem.text
                    };
                }
            }
        }
        return '';
    };

    const currentMenuItem = findMenuItemByPath(pathname);

    return (
        <div className="Navbar h-16 w-full flex justify-between align-center">

            {currentMenuItem && (
                <div className="flex items-center gap-2">
                    <span className="text-custom-color2 font-bold text-xl">
                    {currentMenuItem.icon} 
                    </span>
                    <h1 className="text-custom-color2 font-bold text-xl">
                    {currentMenuItem.text}
                    </h1>
                </div>
            )}
        </div>
    );
}