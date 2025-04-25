
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Users, 
  Briefcase, 
  Calendar, 
  DollarSign, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  FileText,
  UserPlus
} from "lucide-react";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
      roles: ["hr", "manager", "employee"],
    },
    { 
      title: "Employees", 
      path: "/employees", 
      icon: Users, 
      roles: ["hr", "manager"]
    },
    { 
      title: "Job Postings", 
      path: "/jobs", 
      icon: Briefcase,
      roles: ["hr", "manager"] 
    },
    { 
      title: "Recruitment", 
      path: "/recruitment", 
      icon: UserPlus,
      roles: ["hr"] 
    },
    { 
      title: "Attendance", 
      path: "/attendance", 
      icon: Calendar,
      roles: ["hr", "manager", "employee"] 
    },
    { 
      title: "Leave Requests", 
      path: "/leaves", 
      icon: FileText,
      roles: ["hr", "manager", "employee"] 
    },
    { 
      title: "Payroll", 
      path: "/payroll", 
      icon: DollarSign,
      roles: ["hr", "employee"] 
    },
    { 
      title: "Settings", 
      path: "/settings", 
      icon: Settings,
      roles: ["hr", "manager", "employee"] 
    },
  ];

  // Mock user role - would come from auth in real implementation
  const userRole = "hr";

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={cn(
        "bg-sidebar text-sidebar-foreground flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
        {!collapsed && (
          <h2 className="text-lg font-bold">
            Employ<span className="text-employwise-light-purple">Wise</span>
          </h2>
        )}
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-sidebar-accent"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {menuItems
            .filter(item => item.roles.includes(userRole))
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-2 py-3 rounded-md transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "hover:bg-sidebar-accent hover:bg-opacity-50",
                    collapsed ? "justify-center" : "space-x-3"
                  )
                }
              >
                <item.icon size={20} />
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            ))}
        </nav>
      </div>

      <div className="p-4 border-t border-sidebar-border">
        {!collapsed && (
          <div className="text-xs text-opacity-60">
            LifeCraft Suite v1.0
          </div>
        )}
      </div>
    </aside>
  );
};
