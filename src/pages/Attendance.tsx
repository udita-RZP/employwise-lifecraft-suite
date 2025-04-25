
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock } from "lucide-react";

const Attendance = () => {
  // Mock attendance data - in a real app, this would come from an API
  const attendanceData = [
    { 
      id: 1, 
      employee: "John Doe", 
      date: "Apr 25, 2025", 
      checkIn: "09:05 AM", 
      checkOut: "05:30 PM", 
      status: "Present", 
      workHours: "8h 25m" 
    },
    { 
      id: 2, 
      employee: "Jane Smith", 
      date: "Apr 25, 2025", 
      checkIn: "08:45 AM", 
      checkOut: "06:15 PM", 
      status: "Present", 
      workHours: "9h 30m" 
    },
    { 
      id: 3, 
      employee: "Alex Johnson", 
      date: "Apr 25, 2025", 
      checkIn: "09:30 AM", 
      checkOut: "04:45 PM", 
      status: "Present", 
      workHours: "7h 15m" 
    },
    { 
      id: 4, 
      employee: "Emily Davis", 
      date: "Apr 25, 2025", 
      checkIn: "--", 
      checkOut: "--", 
      status: "On Leave", 
      workHours: "--" 
    },
    { 
      id: 5, 
      employee: "Michael Brown", 
      date: "Apr 25, 2025", 
      checkIn: "10:15 AM", 
      checkOut: "06:30 PM", 
      status: "Late", 
      workHours: "8h 15m" 
    }
  ];

  return (
    <div className="container mx-auto pb-8 space-y-6">
      <h1 className="text-2xl font-bold">Attendance Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Today's Present</p>
              <h3 className="text-2xl font-bold">42</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Out of 45 employees
              </p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg text-white">
              <Clock size={24} />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">On Leave</p>
              <h3 className="text-2xl font-bold">2</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Approved leaves today
              </p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg text-white">
              <Calendar size={24} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Late Arrivals</p>
              <h3 className="text-2xl font-bold">1</h3>
              <p className="text-xs text-muted-foreground mt-1">
                More than 15 minutes
              </p>
            </div>
            <div className="bg-amber-500 p-3 rounded-lg text-white">
              <Clock size={24} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Attendance</CardTitle>
          <CardDescription>April 25, 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Work Hours</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.employee}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.checkIn}</TableCell>
                  <TableCell>{record.checkOut}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        record.status === "Present"
                          ? "bg-green-100 text-green-800"
                          : record.status === "On Leave"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {record.status}
                    </span>
                  </TableCell>
                  <TableCell>{record.workHours}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attendance;
