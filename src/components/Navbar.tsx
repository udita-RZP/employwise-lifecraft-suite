
import { useState } from "react";
import { Bell, Search, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Navbar = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New leave request",
      message: "John Doe requested a leave approval",
      time: "10m ago",
      read: false,
    },
    {
      id: 2,
      title: "Payroll processed",
      message: "March 2025 payroll has been processed",
      time: "1h ago",
      read: false,
    },
    {
      id: 3,
      title: "New job application",
      message: "New application for Frontend Developer",
      time: "3h ago",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center w-72">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search..."
              className="pl-10 h-9 w-full bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="relative">
              <Bell className="text-gray-600 hover:text-employwise-purple transition-colors" size={20} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.map((notification) => (
                <DropdownMenuItem
                  key={notification.id}
                  className="p-0"
                  onClick={() => markAsRead(notification.id)}
                >
                  <div
                    className={`p-3 w-full ${
                      !notification.read ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="font-medium text-sm">{notification.title}</div>
                    <div className="text-gray-500 text-xs mt-1">
                      {notification.message}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      {notification.time}
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-employwise-purple text-white">
                  HR
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sarah Reynolds</DropdownMenuLabel>
              <DropdownMenuLabel className="text-xs font-normal text-gray-500">
                HR Director
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
