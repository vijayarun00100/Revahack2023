/*"use client";

import { SidebarItem } from "./items";

const guestRoutes =[
    {
        icon:Layout,
        label:"Dashboard",
        href:"/",
    },
    {
        icon:Compass,
        label:"Browse",
        href:"/search",
    }
]

export const SidebarRoutes =()=> {
    const routes=guestRoutes;
    return (
        <div className="flex flex-col w-full">
            {
                routes.map(route)=>
                <SidebarItem 
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={routes.href}
                />
            }
        </div>
    )
}*/