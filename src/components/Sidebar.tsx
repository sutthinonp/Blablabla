import React, { useState } from "react";
import {
    LayoutDashboard,
    Zap,
    ChevronLeft,
    ChevronRight,
    ServerIcon,
    Code2,
    GitCommitIcon,
    Settings2Icon,
    CloudUpload,
    Database
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const menu = [
        {
            title: "General",
            items: [
                { icon: LayoutDashboard, label: "Home", to: "/home" },
            ],
        },
        {
            title: "Tools",
            items: [
                { icon: Code2, label: "SVG exporter", to: "/svg" },
            ],
        },
        {
            title: "Settings",
            items: [
                { icon: Settings2Icon, label: "Settings", to: "/settings" },
            ],
        },
    ];

    return (
        <aside
            className={`${collapsed ? "w-16" : "w-60"} h-screen bg-white flex flex-col justify-between transition-all duration-300 shadow-none`}
        >
            <div>
                <div className="flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-2">
                        {!collapsed && <span className="text-lg font-bold">Microsoft Google</span>}
                        <Zap className="text-primary-500" size={22} />
                    </div>
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>
                </div>
                <div className="flex flex-col gap-6 mt-2">
                    {menu.map((section) => (
                        <div key={section.title}>
                            <div className={`mb-2 ${collapsed ? "flex justify-center" : "px-4"}`}>
                                {collapsed ? (
                                    <div className="text-[10px] text-gray-400 font-semibold tracking-wider">
                                        {section.title}
                                    </div>
                                ) : (
                                    <div className="text-xs text-gray-400 font-semibold">{section.title}</div>
                                )}
                            </div>
                            <nav className="flex flex-col">
                                {section.items.map((item) => (
                                    <SidebarItem key={item.label} {...item} collapsed={collapsed} />
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t p-4 text-sm">
                {!collapsed ? (
                    <>
                        <div className="text-xs text-gray-400 text-center mt-4">
                            © 2025 Hopeful.co.th
                        </div>
                    </>
                ) : (
                    <Zap size={20} className="mx-auto text-gray-400" />
                )}
            </div>
        </aside>
    );
};

export default Sidebar;

interface SidebarItemProps {
    icon: React.ElementType;
    label: string;
    to: string;
    collapsed?: boolean;
}

const SidebarItem = ({
    icon: Icon,
    label,
    to,
    collapsed,
}: SidebarItemProps) => {
    const { pathname } = useLocation();
    const isActive = pathname === to || pathname.startsWith(to + "/");

    return (
        <Link
            to={to}
            className={`flex items-center ${collapsed ? "justify-center" : "justify-between"
                } px-3 py-2 transition group ${isActive
                    ? "bg-blue-50 text-black font-medium"
                    : "text-black hover:bg-blue-50"
                }`}
        >
            <div
                className={`flex items-center ${collapsed ? "justify-center w-full" : "gap-3"
                    }`}
            >
                <Icon size={collapsed ? 24 : 24} />
                {!collapsed && <span>{label}</span>}
            </div>
        </Link>
    );
};
