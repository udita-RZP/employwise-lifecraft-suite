
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, File } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const DashboardEmployee = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Employee Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground">Today's Status</p>
                <h3 className="text-xl font-bold">Checked In</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  09:05 AM - Present
                </p>
              </div>
              <Clock className="h-10 w-10 text-employwise-purple" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground">Leave Balance</p>
                <h3 className="text-xl font-bold">12 days</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  4 used, 12 remaining
                </p>
              </div>
              <Calendar className="h-10 w-10 text-employwise-purple" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground">Upcoming Payroll</p>
                <h3 className="text-xl font-bold">Apr 30, 2025</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  5 days remaining
                </p>
              </div>
              <File className="h-10 w-10 text-employwise-purple" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Training Progress</CardTitle>
            <CardDescription>Your assigned modules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Company Policies",
                  progress: 100,
                  status: "Completed",
                  dueDate: "Completed on Apr 15",
                },
                {
                  name: "Data Security",
                  progress: 75,
                  status: "In Progress",
                  dueDate: "Due Apr 28",
                },
                {
                  name: "Project Management Tools",
                  progress: 30,
                  status: "In Progress",
                  dueDate: "Due May 5",
                },
                {
                  name: "Compliance Training",
                  progress: 0,
                  status: "Not Started",
                  dueDate: "Due May 15",
                },
              ].map((training, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{training.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        training.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : training.status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {training.status}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Progress value={training.progress} className="flex-1 h-2" />
                    <span className="ml-2 text-sm">{training.progress}%</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {training.dueDate}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Time Off</CardTitle>
                <CardDescription>Leave requests and status</CardDescription>
              </div>
              <Button size="sm">Request Leave</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: "Vacation",
                  dates: "Jun 12 - Jun 19, 2025",
                  days: "5 days",
                  status: "Approved",
                },
                {
                  type: "Personal Leave",
                  dates: "May 5, 2025",
                  days: "1 day",
                  status: "Pending",
                },
                {
                  type: "Sick Leave",
                  dates: "Mar 15, 2025",
                  days: "1 day",
                  status: "Taken",
                },
              ].map((leave, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <div>
                    <div className="font-medium">{leave.type}</div>
                    <div className="text-sm text-muted-foreground">
                      {leave.dates}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {leave.days}
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      leave.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : leave.status === "Pending"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {leave.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payslips</CardTitle>
          <CardDescription>Your salary information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                month: "March 2025",
                amount: "$4,850.00",
                date: "Mar 31, 2025",
                status: "Paid",
              },
              {
                month: "February 2025",
                amount: "$4,850.00",
                date: "Feb 28, 2025",
                status: "Paid",
              },
              {
                month: "January 2025",
                amount: "$4,700.00",
                date: "Jan 31, 2025",
                status: "Paid",
              },
            ].map((payslip, index) => (
              <div
                key={index}
                className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div>
                  <div className="font-medium">{payslip.month}</div>
                  <div className="text-sm text-muted-foreground">
                    Paid on {payslip.date}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{payslip.amount}</div>
                  <Button variant="outline" size="sm" className="mt-1">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
