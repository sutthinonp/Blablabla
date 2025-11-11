import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LogOutIcon, BellIcon, HomeIcon, CalendarDays, ChartNoAxesCombined, Store, Book, Headphones, Send } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@heroui/dropdown";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/popover"
import { Input } from "@heroui/input"
import { Divider } from "@heroui/divider"
import { Avatar } from "@heroui/react";
import { Button } from "@heroui/button";

type BubblePosition = "single" | "start" | "middle" | "end"

function getBubblePosition(isFirst: boolean, isLast: boolean): BubblePosition {
  if (isFirst && isLast) return "single"
  if (isFirst) return "start"
  if (isLast) return "end"
  return "middle"
}

function getBubbleRadiusClasses(isSelf: boolean, position: BubblePosition) {
  const classes = ["rounded-2xl"]

  if (position === "single") {
    return classes.join(" ")
  }

  if (isSelf) {
    if (position === "start") classes.push("rounded-br-sm")
    if (position === "middle") classes.push("rounded-br-sm", "rounded-tr-sm")
    if (position === "end") classes.push("rounded-tr-sm")
  } else {
    if (position === "start") classes.push("rounded-bl-sm")
    if (position === "middle") classes.push("rounded-bl-sm", "rounded-tl-sm")
    if (position === "end") classes.push("rounded-tl-sm")
  }

  return classes.join(" ")
}

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname);

  useEffect(() => {
    setIsActive(location.pathname);
  }, [location.pathname]);

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

  const handleNavigate = (route: string) => {
    setIsActive(route);
    navigate(route);
  }

  type NavbarItemProps = {
    label: string;
    Icon: React.ElementType;
    color: string;
    size: "lg" | "sm" | "default" | "icon" | "icon-sm" | "icon-lg";
    to: string;
  }

  const NavbarItem = ({ label, Icon, color, size, to }: NavbarItemProps) => {
    const isCurrent = isActive === to;

    return (
      <div className="flex justify-start items-center space-x-4">
        <Button
          aria-label={label}
          aria-current={isCurrent ? "page" : undefined}
          size={size as "lg" | "sm" | "md"}
          color={isCurrent ? "primary" : "default"}
          className={`shadow-none rounded-xl border-none ${isCurrent ? "bg-primary text-primary-foreground" : ""}`}
          onPress={() => handleNavigate(to)}
        >
          <Icon className={isCurrent ? "text-primary-foreground" : `text-${color}`} />
          <span className={isCurrent ? "text-primary-foreground" : `text-${color}`}>{label}</span>
        </Button>
      </div>
    )
  }

  type ChatMessage = {
    id: number;
    sender: string;
    message: string;
    time: string;
    avatar?: string;
    isSelf?: boolean;
  };

  const initialChatMessages: ChatMessage[] = [
    {
      id: 1,
      sender: "ฝ่ายสนับสนุน",
      message: "สวัสดีค่ะ มีอะไรให้ดิฉันช่วยเหลือไหมคะ?",
      time: "เมื่อครู่",
      avatar: "https://i.pravatar.cc/300?img=45",
    },
    {
      id: 2,
      sender: "Namphuu Dev",
      message: "เว็ปไซต์ โหลดข้อมูลนานมากๆครับ ช่วยตรวจสอบด้วยครับ ",
      time: "1 นาทีที่แล้ว",
      isSelf: true,
    },
    {
      id: 3,
      sender: "ฝ่ายสนับสนุน",
      message: "รับทราบค่ะ กำลังส่งปัญหาให้ developer ตรวจสอบค่ะ",
      time: "2 นาทีที่แล้ว",
      avatar: "https://i.pravatar.cc/300?img=45",
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialChatMessages);
  const [chatInput, setChatInput] = useState("");

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!chatInput.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "Namphuu Dev",
        message: chatInput.trim(),
        time: "ตอนนี้",
        isSelf: true,
      },
    ]);
    setChatInput("");
  };

  return (
    <header className="w-full py-4 px-8 flex items-center justify-between shadow-none">
      <div className="flex justify-start items-center space-x-8">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <div className="flex justify-start items-center space-x-4">
          <NavbarItem label="Home" Icon={HomeIcon} color="gray-700" size="lg" to="/home" />
          <NavbarItem label="Meal Plan" Icon={CalendarDays} color="gray-700" size="lg" to="/meal-plan" />
          <NavbarItem label="Analytics" Icon={ChartNoAxesCombined} color="gray-700" size="lg" to="/analytics" />
          <NavbarItem label="Order Groceries" Icon={Store} color="gray-700" size="lg" to="/order-groceries" />
          <NavbarItem label="Recipes" Icon={Book} color="gray-700" size="lg" to="/recipes" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                size="lg"
                aria-label="ติดต่อฝ่ายสนับสนุน"
                isIconOnly
                color="default"
                variant="bordered"
                radius="full"
              >
                <Headphones className="text-gray-700" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[26rem] p-0 overflow-hidden rounded-2xl shadow-none border-none bg-background"
            >
              <div className="flex flex-col h-[28rem]">
                <div className="flex items-center justify-between px-5 py-4">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      ติดต่อฝ่ายสนับสนุน
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      เจ้าหน้าที่ตอบกลับใน 5 นาที · ช่องทางแชทสด
                    </p>
                  </div>
                </div>
                <Divider />
                <div className="h-[200px] flex-1">
                  <div className="px-5 py-4 space-y-2">
                    {messages.map((chat, index) => {
                      const previousSender = messages[index - 1]?.sender
                      const nextSender = messages[index + 1]?.sender

                      const isFirstOfGroup = previousSender !== chat.sender
                      const isLastOfGroup = nextSender !== chat.sender
                      const position = getBubblePosition(isFirstOfGroup, isLastOfGroup)
                      const isSelf = Boolean(chat.isSelf)
                      const bubbleRadius = getBubbleRadiusClasses(isSelf, position)

                      const bubbleClasses = [
                        "w-fit max-w-xs px-4 py-2 text-sm leading-relaxed break-words whitespace-pre-line text-left",
                        isSelf ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                        bubbleRadius,
                      ].join(" ")

                      const messagesClasses = [
                        "flex",
                        isSelf ? "justify-end" : "justify-start",
                        !isFirstOfGroup ? "-mt-1" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")

                      return (
                        <div
                          key={chat.id}
                          className={messagesClasses}
                        >
                          <div
                            className={`flex items-end gap-3 ${isSelf ? "flex-row-reverse" : ""}`}
                          >
                            {!isSelf && isFirstOfGroup && (
                              <Avatar className="size-8">
                                {chat.avatar ? (
                                  <Avatar src={chat.avatar} alt={chat.sender} />
                                ) : (
                                  <Avatar>
                                    {chat.sender
                                      .split(" ")
                                      .map((word: string) => word.charAt(0))
                                      .join("")
                                      .slice(0, 2)
                                      .toUpperCase()
                                    }
                                  </Avatar>
                                )}
                              </Avatar>
                            )}
                            <div
                              className={`flex flex-col ${isSelf ? "items-end" : ""}`}
                            >
                              <div className={bubbleClasses}>{chat.message}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Divider />
                <form
                  onSubmit={handleSendMessage}
                  className="px-5 py-4 flex items-center space-x-2"
                >
                  <Input
                    type="text"
                    value={chatInput}
                    onChange={(event) => setChatInput(event.target.value)}
                    placeholder="Aa"
                    className="rounded-lg w-full"
                  />
                  <Button
                    type="submit"
                    className="rounded-lg border-none shadow-none"
                  >
                    <Send />
                  </Button>
                </form>
              </div>
            </PopoverContent>
          </Popover>
          <Button size="lg" aria-label="Submit" isIconOnly color="default" variant="bordered" radius="full">
            <BellIcon className="text-gray-700" />
          </Button>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <div className="flex justify-center items-center gap-2">
              <Avatar className="size-10">
                <Avatar src="https://github.com/shadcn.png" />
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
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions">
            <DropdownItem key="profile" className="h-14 gap-2">
              <div className="flex justify-center items-center gap-2">
                <Avatar className="size-10">
                  <Avatar src="https://github.com/shadcn.png" />
                </Avatar>
                <div className="flex flex-col justify-center items-start">
                  <span className="text-sm font-medium">Namphuu Dev</span>
                  <span
                    className="block text-sm font-medium text-muted-foreground truncate"
                  >
                    Admin
                  </span>
                </div>
              </div>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="logout" onPress={handleLogout}>
              <LogOutIcon className="size-4" />
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
}

export default Navbar;
