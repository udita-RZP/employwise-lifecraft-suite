
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  UserPlus, 
  Users, 
  Calendar, 
  FileText, 
  DollarSign,
  BriefcaseBusiness
} from "lucide-react";
import { RecruitmentActivity } from "./RecruitmentActivity";
import { RecentEmployees } from "./RecentEmployees";
import { UpcomingEvents } from "./UpcomingEvents";

export const DashboardHR = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">HR Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Total Employees",
            value: "245",
            change: "+3 this month",
            icon: Users,
            color: "bg-blue-500",
          },
          {
            title: "Open Positions",
            value: "12",
            change: "4 in final stages",
            icon: BriefcaseBusiness,
            color: "bg-purple-500",
          },
          {
            title: "New Applications",
            value: "38",
            change: "Last 7 days",
            icon: UserPlus,
            color: "bg-green-500",
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </p>
                <h3 className="text-2xl font-bold">{item.value}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.change}
                </p>
              </div>
              <div className={`${item.color} p-3 rounded-lg text-white`}>
                <item.icon size={24} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Recruitment Pipeline</CardTitle>
            <CardDescription>Current hiring stats across departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  role: "Software Engineer",
                  department: "Engineering",
                  applications: 28,
                  interviews: 12,
                  offers: 3,
                  progress: 65,
                },
                {
                  role: "UI/UX Designer",
                  department: "Design",
                  applications: 16,
                  interviews: 8,
                  offers: 2,
                  progress: 80,
                },
                {
                  role: "Product Manager",
                  department: "Product",
                  applications: 22,
                  interviews: 9,
                  offers: 1,
                  progress: 45,
                },
                {
                  role: "Sales Representative",
                  department: "Sales",
                  applications: 34,
                  interviews: 15,
                  offers: 4,
                  progress: 70,
                },
              ].map((role, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">{role.role}</p>
                      <p className="text-xs text-muted-foreground">
                        {role.department}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-4 text-xs">
                        <span>Applications: {role.applications}</span>
                        <span>Interviews: {role.interviews}</span>
                        <span>Offers: {role.offers}</span>
                      </div>
                    </div>
                  </div>
                  <Progress value={role.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Onboarding Status</CardTitle>
            <CardDescription>New employees this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Alex Morgan", position: "Data Analyst", progress: 100, status: "Completed" },
                { name: "Jamie Rodriguez", position: "Marketing", progress: 80, status: "In Progress" },
                { name: "Taylor Swift", position: "Customer Success", progress: 45, status: "Documentation" },
                { name: "Riley Cooper", position: "HR Specialist", progress: 20, status: "Just Started" },
              ].map((employee, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-medium">{employee.name}</p>
                      <p className="text-xs text-muted-foreground">{employee.position}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      employee.progress === 100
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}>
                      {employee.status}
                    </span>
                  </div>
                  <Progress value={employee.progress} className="h-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recruitment">
        <TabsList className="mb-4 w-full justify-start">
          <TabsTrigger value="recruitment">Recruitment Activity</TabsTrigger>
          <TabsTrigger value="employees">Recent Employees</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recruitment">
          <RecruitmentActivity />
        </TabsContent>
        
        <TabsContent value="employees">
          <RecentEmployees />
        </TabsContent>
        
        <TabsContent value="events">
          <UpcomingEvents />
        </TabsContent>
      </Tabs>
    </div>
  );
};
