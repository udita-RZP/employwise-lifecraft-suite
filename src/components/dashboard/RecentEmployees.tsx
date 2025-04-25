
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Employee {
  id: string;
  name: string;
  initials: string;
  position: string;
  department: string;
  joinDate: string;
  status: "Active" | "Onboarding" | "Pending";
}

const employees: Employee[] = [
  {
    id: "EMP001",
    name: "Alex Johnson",
    initials: "AJ",
    position: "Senior Developer",
    department: "Engineering",
    joinDate: "Apr 15, 2025",
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Maria Garcia",
    initials: "MG",
    position: "Product Manager",
    department: "Product",
    joinDate: "Apr 20, 2025",
    status: "Onboarding",
  },
  {
    id: "EMP003",
    name: "David Smith",
    initials: "DS",
    position: "UI/UX Designer",
    department: "Design",
    joinDate: "Apr 22, 2025",
    status: "Onboarding",
  },
  {
    id: "EMP004",
    name: "Lisa Brown",
    initials: "LB",
    position: "Marketing Specialist",
    department: "Marketing",
    joinDate: "Apr 25, 2025",
    status: "Pending",
  },
  {
    id: "EMP005",
    name: "Thomas Wilson",
    initials: "TW",
    position: "HR Coordinator",
    department: "Human Resources",
    joinDate: "May 01, 2025",
    status: "Pending",
  },
];

export const RecentEmployees = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Onboarding":
        return "bg-blue-100 text-blue-800";
      case "Pending":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Join Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="py-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-employwise-purple/20 text-employwise-purple text-xs">
                      {employee.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{employee.name}</div>
                    <div className="text-xs text-muted-foreground">{employee.id}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.joinDate}</TableCell>
              <TableCell>
                <Badge 
                  className={getStatusColor(employee.status)} 
                  variant="outline"
                >
                  {employee.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
