
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash, Clock, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  postedDate: string;
  closingDate: string;
  status: "Open" | "Closed" | "Draft";
  applicants: number;
  description: string;
}

const jobListings: JobListing[] = [
  {
    id: "JOB001",
    title: "Senior Front-end Developer",
    department: "Engineering",
    location: "New York / Remote",
    type: "Full-time",
    postedDate: "Apr 10, 2025",
    closingDate: "May 10, 2025",
    status: "Open",
    applicants: 18,
    description: "We are looking for a talented Senior Front-end Developer with 5+ years of experience in React and modern JavaScript frameworks."
  },
  {
    id: "JOB002",
    title: "Product Manager",
    department: "Product",
    location: "San Francisco",
    type: "Full-time",
    postedDate: "Apr 12, 2025",
    closingDate: "May 12, 2025",
    status: "Open",
    applicants: 24,
    description: "Join our product team to drive vision, strategy, and execution of key product initiatives."
  },
  {
    id: "JOB003",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    postedDate: "Apr 15, 2025",
    closingDate: "May 15, 2025",
    status: "Open",
    applicants: 31,
    description: "Create beautiful, intuitive designs for our products and work closely with our development team."
  },
  {
    id: "JOB004",
    title: "Data Analyst",
    department: "Analytics",
    location: "Boston",
    type: "Full-time",
    postedDate: "Apr 18, 2025",
    closingDate: "May 18, 2025",
    status: "Open",
    applicants: 15,
    description: "Analyze data to drive business decisions, create dashboards, and present insights to stakeholders."
  },
  {
    id: "JOB005",
    title: "Sales Representative",
    department: "Sales",
    location: "Chicago",
    type: "Full-time",
    postedDate: "Apr 20, 2025",
    closingDate: "May 20, 2025",
    status: "Open",
    applicants: 9,
    description: "Drive sales growth by identifying and closing new business opportunities."
  },
  {
    id: "JOB006",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Los Angeles / Remote",
    type: "Part-time",
    postedDate: "Apr 22, 2025",
    closingDate: "May 22, 2025",
    status: "Open",
    applicants: 14,
    description: "Create and execute marketing campaigns across multiple channels."
  },
  {
    id: "JOB007",
    title: "HR Coordinator",
    department: "Human Resources",
    location: "Miami",
    type: "Full-time",
    postedDate: "Apr 05, 2025",
    closingDate: "Apr 20, 2025",
    status: "Closed",
    applicants: 22,
    description: "Support HR operations including recruitment, onboarding, and employee relations."
  },
  {
    id: "JOB008",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    postedDate: "Not published",
    closingDate: "Not set",
    status: "Draft",
    applicants: 0,
    description: "Implement CI/CD pipelines and manage cloud infrastructure."
  },
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredJobs = jobListings.filter(
    (job) =>
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "All" || job.status === statusFilter)
  );

  const handleCreateJob = () => {
    toast.success("Job listing created successfully!");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800";
      case "Closed":
        return "bg-gray-100 text-gray-800";
      case "Draft":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-blue-100 text-blue-800";
      case "Part-time":
        return "bg-purple-100 text-purple-800";
      case "Contract":
        return "bg-orange-100 text-orange-800";
      case "Remote":
        return "bg-teal-100 text-teal-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Postings</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-employwise-purple hover:bg-employwise-purple/90">
              <Plus className="mr-2 h-4 w-4" />
              Create Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Job Posting</DialogTitle>
              <DialogDescription>
                Enter the details for the new job position. Fields marked with * are required.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">
                  Job Title <span className="text-red-500">*</span>
                </Label>
                <Input id="jobTitle" placeholder="e.g. Senior Software Engineer" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">
                    Department <span className="text-red-500">*</span>
                  </Label>
                  <Input id="department" placeholder="e.g. Engineering" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">
                    Location <span className="text-red-500">*</span>
                  </Label>
                  <Input id="location" placeholder="e.g. New York / Remote" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobType">
                    Job Type <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="jobType"
                    className="w-full h-10 border rounded-md px-3"
                  >
                    <option value="">Select Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="closingDate">Closing Date</Label>
                  <Input id="closingDate" type="date" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">
                  Job Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Enter detailed job description..."
                  className="min-h-[150px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="List key requirements for the position..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline">Save as Draft</Button>
              <Button onClick={handleCreateJob} className="bg-employwise-purple hover:bg-employwise-purple/90">
                Publish Job
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search job postings..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center">
              <span className="mr-2 text-sm">Status:</span>
              <select
                className="h-10 border rounded-md px-3"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">{job.title}</h3>
                  <Badge
                    className={getStatusColor(job.status)}
                    variant="outline"
                  >
                    {job.status}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    {job.department} • {job.location}
                  </div>
                  
                  <Badge
                    className={getTypeColor(job.type)}
                    variant="outline"
                  >
                    {job.type}
                  </Badge>
                  
                  <p className="text-sm line-clamp-2">
                    {job.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      Posted: {job.postedDate}
                    </div>
                    
                    {job.status !== "Draft" && (
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        {job.applicants} applicants
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-3 border-t flex justify-between items-center mt-2">
                    <Button variant="link" className="p-0 h-auto text-employwise-purple">
                      View Details
                    </Button>
                    
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-10">
              <p className="text-muted-foreground">
                No job postings found. Try adjusting your search.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Jobs;
