"use client";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Navbar() {
    const router = useRouter();

    const handleLogout = () => {
        router.push("/");
    }

    return (
        <header className="w-full py-4 px-12 flex items-center justify-between bg-white shadow-none">

            <h1 className="text-xl font-semibold">Microsoft Gemimi</h1>

            <div className="flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar className="w-12 h-12">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/30373425?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent aria-label="User Actions">
                        <DropdownMenuItem>
                            <Avatar className="w-12 h-12">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/30373425?v=4" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuItem>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>My Settings</DropdownMenuItem>
                            <DropdownMenuItem>Team Settings</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOutIcon className="h-4 w-4" />
                            Log Out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}

export default Navbar;
