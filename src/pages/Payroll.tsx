
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

const Payroll = () => {
  // Mock payroll data - in a real app, this would come from an API
  const payrollData = [
    {
      id: 1,
      employee: "John Doe",
      position: "Senior Developer",
      basicSalary: 5000,
      allowances: 1500,
      deductions: 1200,
      netPay: 5300,
      status: "Processed"
    },
    {
      id: 2,
      employee: "Jane Smith",
      position: "Product Manager",
      basicSalary: 6000,
      allowances: 1800,
      deductions: 1500,
      netPay: 6300,
      status: "Processed"
    },
    {
      id: 3,
      employee: "Alex Johnson",
      position: "UX Designer",
      basicSalary: 4500,
      allowances: 1200,
      deductions: 1000,
      netPay: 4700,
      status: "Pending"
    },
    {
      id: 4,
      employee: "Emily Davis",
      position: "HR Specialist",
      basicSalary: 3800,
      allowances: 900,
      deductions: 750,
      netPay: 3950,
      status: "Processed"
    },
    {
      id: 5,
      employee: "Michael Brown",
      position: "Marketing Lead",
      basicSalary: 4200,
      allowances: 1100,
      deductions: 950,
      netPay: 4350,
      status: "Pending"
    }
  ];

  return (
    <div className="container mx-auto pb-8 space-y-6">
      <h1 className="text-2xl font-bold">Payroll Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Total Payroll</p>
              <h3 className="text-2xl font-bold">$24,600</h3>
              <p className="text-xs text-muted-foreground mt-1">
                For April 2025
              </p>
            </div>
            <div className="bg-employwise-purple p-3 rounded-lg text-white">
              <DollarSign size={24} />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Processed</p>
              <h3 className="text-2xl font-bold">3</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Payslips generated
              </p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg text-white">
              <DollarSign size={24} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Pending</p>
              <h3 className="text-2xl font-bold">2</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Awaiting processing
              </p>
            </div>
            <div className="bg-amber-500 p-3 rounded-lg text-white">
              <DollarSign size={24} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>April 2025 Payroll</CardTitle>
              <CardDescription>Payslips due for processing by April 30</CardDescription>
            </div>
            <Button>Process All Pending</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Basic Salary</TableHead>
                <TableHead>Allowances</TableHead>
                <TableHead>Deductions</TableHead>
                <TableHead>Net Pay</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payrollData.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.employee}</TableCell>
                  <TableCell>{record.position}</TableCell>
                  <TableCell>${record.basicSalary}</TableCell>
                  <TableCell>${record.allowances}</TableCell>
                  <TableCell>${record.deductions}</TableCell>
                  <TableCell className="font-bold">${record.netPay}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        record.status === "Processed"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {record.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      {record.status === "Processed" ? "View" : "Process"}
                    </Button>
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

export default Payroll;
