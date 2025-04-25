
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Leaves = () => {
  // Mock leave requests data - in a real app, this would come from an API
  const leaveRequests = [
    {
      id: 1,
      employee: "John Doe",
      department: "Engineering",
      type: "Vacation",
      startDate: "May 15, 2025",
      endDate: "May 22, 2025",
      days: 6,
      status: "Pending",
      reason: "Annual family vacation"
    },
    {
      id: 2,
      employee: "Jane Smith",
      department: "Product",
      type: "Sick Leave",
      startDate: "Apr 28, 2025",
      endDate: "Apr 29, 2025",
      days: 2,
      status: "Approved",
      reason: "Medical appointment"
    },
    {
      id: 3,
      employee: "Alex Johnson",
      department: "Design",
      type: "Personal",
      startDate: "May 5, 2025",
      endDate: "May 5, 2025",
      days: 1,
      status: "Approved",
      reason: "Family obligation"
    },
    {
      id: 4,
      employee: "Emily Davis",
      department: "HR",
      type: "Vacation",
      startDate: "Jun 10, 2025",
      endDate: "Jun 17, 2025",
      days: 6,
      status: "Pending",
      reason: "Summer break"
    },
    {
      id: 5,
      employee: "Michael Brown",
      department: "Marketing",
      type: "Sick Leave",
      startDate: "Apr 26, 2025",
      endDate: "Apr 26, 2025",
      days: 1,
      status: "Rejected",
      reason: "Not feeling well"
    }
  ];

  return (
    <div className="container mx-auto pb-8 space-y-6">
      <h1 className="text-2xl font-bold">Leave Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Pending Requests</p>
              <h3 className="text-2xl font-bold">2</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Awaiting approval
              </p>
            </div>
            <div className="bg-amber-500 p-3 rounded-lg text-white">
              <Calendar size={24} />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Approved This Month</p>
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-xs text-muted-foreground mt-1">
                16 working days affected
              </p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg text-white">
              <Calendar size={24} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">On Leave Today</p>
              <h3 className="text-2xl font-bold">2</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Apr 25, 2025
              </p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg text-white">
              <Calendar size={24} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Leave Requests</CardTitle>
              <CardDescription>Manage employee time off requests</CardDescription>
            </div>
            <Button>New Request</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.employee}</TableCell>
                  <TableCell>{request.department}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        request.type === "Vacation"
                          ? "bg-blue-100 text-blue-800"
                          : request.type === "Sick Leave"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {request.type}
                    </span>
                  </TableCell>
                  <TableCell>{`${request.startDate}${request.startDate !== request.endDate ? ` - ${request.endDate}` : ''}`}</TableCell>
                  <TableCell>{request.days}</TableCell>
                  <TableCell className="max-w-[200px] truncate" title={request.reason}>{request.reason}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        request.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : request.status === "Rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {request.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {request.status === "Pending" && (
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm" className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200">
                          Approve
                        </Button>
                        <Button variant="outline" size="sm" className="bg-red-50 hover:bg-red-100 text-red-700 border-red-200">
                          Reject
                        </Button>
                      </div>
                    )}
                    {request.status !== "Pending" && (
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaves;
