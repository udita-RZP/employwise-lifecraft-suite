
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { DashboardHR } from "@/components/dashboard/DashboardHR";
import { DashboardManager } from "@/components/dashboard/DashboardManager";
import { DashboardEmployee } from "@/components/dashboard/DashboardEmployee";

const Dashboard = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user info from localStorage
    const userStr = localStorage.getItem("employwise-user");
    if (userStr) {
      const user = JSON.parse(userStr);
      setUserRole(user.role);
    }
    setLoading(false);
  }, []);

  // If not logged in, redirect to login page
  if (!loading && !userRole) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto pb-8">
      {userRole === "hr" && <DashboardHR />}
      {userRole === "manager" && <DashboardManager />}
      {userRole === "employee" && <DashboardEmployee />}
    </div>
  );
};

export default Dashboard;
