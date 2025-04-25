
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RecentEmployees } from "./RecentEmployees";

export const DashboardManager = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Manager Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Team Members",
            value: "12",
            subtitle: "2 on leave today",
          },
          {
            title: "Open Tasks",
            value: "24",
            subtitle: "8 due this week",
          },
          {
            title: "Leave Requests",
            value: "3",
            subtitle: "Pending approval",
          },
        ].map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-muted-foreground">{stat.title}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.subtitle}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
            <CardDescription>Project completion stats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Website Redesign",
                  progress: 75,
                  status: "On track",
                },
                {
                  name: "Mobile App Development",
                  progress: 45,
                  status: "Delayed",
                },
                {
                  name: "CRM Integration",
                  progress: 90,
                  status: "Ahead",
                },
                {
                  name: "Annual Reports",
                  progress: 60,
                  status: "On track",
                },
              ].map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{project.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.status === "On track"
                          ? "bg-blue-100 text-blue-800"
                          : project.status === "Delayed"
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Progress value={project.progress} className="flex-1 h-2" />
                    <span className="ml-2 text-sm">{project.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Leave</CardTitle>
            <CardDescription>Team member time off</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Sarah Johnson",
                  position: "Senior Developer",
                  dates: "May 5 - May 12, 2025",
                  type: "Vacation",
                },
                {
                  name: "Mike Williams",
                  position: "UX Designer",
                  dates: "May 8, 2025",
                  type: "Sick Leave",
                },
                {
                  name: "Emily Davis",
                  position: "Product Manager",
                  dates: "May 15 - May 16, 2025",
                  type: "Personal",
                },
              ].map((leave, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-0 pb-3 last:pb-0"
                >
                  <div className="font-medium">{leave.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {leave.position}
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm">{leave.dates}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        leave.type === "Vacation"
                          ? "bg-blue-100 text-blue-800"
                          : leave.type === "Sick Leave"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {leave.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Your direct reports</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentEmployees />
        </CardContent>
      </Card>
    </div>
  );
};
