import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, TrendingUp, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  userType: "admin" | "student";
}

const Navigation = ({ userType }: NavigationProps) => {
  const location = useLocation();
  
  const adminNavItems = [
    { href: "/admin", label: "Dashboard", icon: TrendingUp },
    { href: "/admin/events", label: "Events", icon: Calendar },
    { href: "/admin/students", label: "Students", icon: Users },
  ];

  const studentNavItems = [
    { href: "/student", label: "Dashboard", icon: TrendingUp },
    { href: "/student/events", label: "Browse Events", icon: Calendar },
    { href: "/student/profile", label: "Profile", icon: Users },
  ];

  const navItems = userType === "admin" ? adminNavItems : studentNavItems;

  return (
    <nav className="bg-card border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Calendar className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">CampusEvents</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link key={item.href} to={item.href}>
                  <Button 
                    variant={isActive ? "default" : "ghost"} 
                    size="sm"
                    className={isActive ? "bg-primary" : ""}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Badge variant={userType === "admin" ? "default" : "secondary"} className="bg-gradient-primary">
            {userType === "admin" ? "Admin" : "Student"}
          </Badge>
          
          <Button variant="outline" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;