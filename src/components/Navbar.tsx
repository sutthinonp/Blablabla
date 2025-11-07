
import { useNavigate } from "react-router-dom";
import { LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  }

  return (
    <header className="w-full py-4 px-16 flex items-center justify-between bg-white shadow-none">
      <h1 className="text-xl font-semibold">Microsoft Google</h1>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="size-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent aria-label="User Actions">
            <DropdownMenuItem key="profile" className="h-14 gap-2">
              <Avatar className="size-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem key="settings">My Settings</DropdownMenuItem>
            <DropdownMenuItem key="team_settings">Team Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem key="logout" onClick={handleLogout}>
              <LogOutIcon className="size-4" />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Navbar;
