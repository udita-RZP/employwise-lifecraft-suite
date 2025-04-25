
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus, MoreHorizontal, Download, Filter } from "lucide-react";

interface Employee {
  id: string;
  name: string;
  initials: string;
  email: string;
  position: string;
  department: string;
  location: string;
  joinDate: string;
  status: "Active" | "Onboarding" | "Offboarding" | "On Leave";
}

const employees: Employee[] = [
  {
    id: "EMP001",
    name: "Alex Johnson",
    initials: "AJ",
    email: "alex.johnson@example.com",
    position: "Senior Developer",
    department: "Engineering",
    location: "New York",
    joinDate: "Jan 15, 2023",
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Maria Garcia",
    initials: "MG",
    email: "maria.garcia@example.com",
    position: "Product Manager",
    department: "Product",
    location: "San Francisco",
    joinDate: "Mar 10, 2023",
    status: "Active",
  },
  {
    id: "EMP003",
    name: "David Smith",
    initials: "DS",
    email: "david.smith@example.com",
    position: "UI/UX Designer",
    department: "Design",
    location: "Boston",
    joinDate: "Apr 05, 2023",
    status: "On Leave",
  },
  {
    id: "EMP004",
    name: "Lisa Brown",
    initials: "LB",
    email: "lisa.brown@example.com",
    position: "Marketing Specialist",
    department: "Marketing",
    location: "Chicago",
    joinDate: "May 18, 2023",
    status: "Active",
  },
  {
    id: "EMP005",
    name: "Thomas Wilson",
    initials: "TW",
    email: "thomas.wilson@example.com",
    position: "HR Coordinator",
    department: "Human Resources",
    location: "Seattle",
    joinDate: "Jul 01, 2023",
    status: "Active",
  },
  {
    id: "EMP006",
    name: "Sarah Davis",
    initials: "SD",
    email: "sarah.davis@example.com",
    position: "Finance Manager",
    department: "Finance",
    location: "Austin",
    joinDate: "Sep 15, 2023",
    status: "Active",
  },
  {
    id: "EMP007",
    name: "James Martinez",
    initials: "JM",
    email: "james.martinez@example.com",
    position: "Sales Representative",
    department: "Sales",
    location: "Denver",
    joinDate: "Oct 20, 2023",
    status: "Onboarding",
  },
  {
    id: "EMP008",
    name: "Emily Taylor",
    initials: "ET",
    email: "emily.taylor@example.com",
    position: "Customer Success",
    department: "Support",
    location: "Miami",
    joinDate: "Dec 05, 2023",
    status: "Active",
  },
  {
    id: "EMP009",
    name: "Robert Jackson",
    initials: "RJ",
    email: "robert.jackson@example.com",
    position: "Backend Developer",
    department: "Engineering",
    location: "Portland",
    joinDate: "Jan 22, 2024",
    status: "Active",
  },
  {
    id: "EMP010",
    name: "Jennifer Lopez",
    initials: "JL",
    email: "jennifer.lopez@example.com",
    position: "Data Analyst",
    department: "Analytics",
    location: "Los Angeles",
    joinDate: "Feb 14, 2024",
    status: "Offboarding",
  },
];

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedDepartment === "" || employee.department === selectedDepartment)
  );

  const departments = Array.from(new Set(employees.map((e) => e.department)));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "On Leave":
        return "bg-blue-100 text-blue-800";
      case "Onboarding":
        return "bg-purple-100 text-purple-800";
      case "Offboarding":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employees</h1>
        
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-employwise-purple hover:bg-employwise-purple/90">
                <Plus className="mr-2 h-4 w-4" />
                Add Employee
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Employee</DialogTitle>
                <DialogDescription>
                  Enter the details to add a new employee to the system.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@company.com" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="position" className="text-sm font-medium">
                      Position
                    </label>
                    <Input id="position" placeholder="Software Developer" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="department" className="text-sm font-medium">
                      Department
                    </label>
                    <Input id="department" placeholder="Engineering" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Location
                  </label>
                  <Input id="location" placeholder="New York" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="joinDate" className="text-sm font-medium">
                    Join Date
                  </label>
                  <Input id="joinDate" type="date" />
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button className="bg-employwise-purple hover:bg-employwise-purple/90">Add Employee</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search employees..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center">
              <Filter className="mr-2 h-4 w-4 text-gray-400" />
              <span className="mr-2 text-sm">Department:</span>
              <select
                className="h-10 border rounded-md px-3"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-employwise-purple/20 text-employwise-purple text-xs">
                            {employee.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{employee.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {employee.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.location}</TableCell>
                    <TableCell>{employee.joinDate}</TableCell>
                    <TableCell>
                      <Badge
                        className={getStatusColor(employee.status)}
                        variant="outline"
                      >
                        {employee.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Transfer</DropdownMenuItem>
                          <DropdownMenuItem>Change Status</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            Offboard
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Showing <strong>{filteredEmployees.length}</strong> of{" "}
              <strong>{employees.length}</strong> employees
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Employees;
