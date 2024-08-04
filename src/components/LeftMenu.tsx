"use client"
import { menuItems } from '@/store/Variables';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const LeftMenu = () => {
    const pathname = usePathname();
   
    return (
        <div className='LeftMenu w-64 h-screen bg-custom-color4 flex-none rounded-r-xl flex-col p-6 flex'>
           <div className="Logo">
                <a href="/" className='text-custom-color font-bold text-2xl flex-1'>Sk1wzCinema</a>
                <br />
                <span className='text-custom-color2'>Онлайн-кинотеатр</span>
           </div>
           <div className="flex flex-col gap-10 mt-32">
                {menuItems.map(menu => (
                    <div key={menu.title} className={menu.block}>
                        <h4 className='text-slate-400'>{menu.title}</h4>
                        <ul className='text-md text-custom-color cursor-pointer mt-2'>
                            {menu.items.map(item => (
                                <Link key={item.text} href={item.link}>
                                    <li className={`flex gap-2 pb-1 pt-1 items-center hover:text-custom-color2 duration-300 transition-all ${pathname === item.link ? 'flex gap-2 pb-1 pt-1 items-center text-custom-color2 font-bold' : ''}`}>
                                        {item.icon} {item.text}
                                    </li>
                                </Link>
                            ))}
                        </ul> 
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeftMenu;
