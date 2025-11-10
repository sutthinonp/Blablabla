import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LogOutIcon, MessageCircle, BellIcon, HomeIcon, Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";

function Navbar() {
  const navigate = useNavigate();
  const pathname = useLocation();
  const [isActive, setIsActive] = useState(false);

  const email = "Sutthinon203@gmail.com";
  const displayEmail = (() => {
    const [localPart, domainPart] = email.split("@");
    if (!domainPart) return email;
    const firstDomainChar = domainPart.slice(0, 1);
    return `${localPart}@${firstDomainChar}...`;
  })();

  const handleLogout = () => {
    navigate("/login");
  }

  return (
    <header className="w-full py-4 px-16 flex items-center justify-between shadow-none">
      <div className="flex justify-start items-center space-x-8">
        <h1 className="text-xl font-semibold">Microsoft Google</h1>
        <div className="flex justify-start items-center space-x-4">
          <Button aria-label="Home" variant="outline" className="shadow-none rounded-xl" onClick={() => setIsActive(true)}>
            <HomeIcon /> Home
          </Button>
          <Button aria-label="Meal Plan" variant="outline" className="shadow-none rounded-xl" onClick={() => setIsActive(false)}>
            <Calendar /> Meal Plan
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button size="icon-lg" aria-label="Submit" variant="outline" className="shadow-none rounded-full">
            <MessageCircle />
          </Button>
          <Button size="icon-lg" aria-label="Submit" variant="outline" className="shadow-none rounded-full">
            <BellIcon />
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex justify-center items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://github.com/shadcn.png" />s
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center items-start">
                <span className="text-sm font-medium">Namphuu Dev</span>
                <span
                  className="block text-sm font-medium text-muted-foreground truncate"
                  title={email}
                >
                  {displayEmail}
                </span>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent aria-label="User Actions">
            <DropdownMenuItem key="profile" className="h-14 gap-2">
              <Avatar className="size-12">
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
