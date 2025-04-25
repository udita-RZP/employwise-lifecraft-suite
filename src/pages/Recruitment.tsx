
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Recruitment = () => {
  // Mock recruitment data - in a real app, this would come from an API
  const candidates = [
    {
      id: 1,
      name: "James Wilson",
      position: "Senior Developer",
      appliedDate: "Apr 15, 2025",
      stage: "Interview",
      score: 4.5,
      status: "Active"
    },
    {
      id: 2,
      name: "Sarah Miller",
      position: "UX Designer",
      appliedDate: "Apr 18, 2025",
      stage: "Technical Test",
      score: 4.2,
      status: "Active"
    },
    {
      id: 3,
      name: "Robert Lewis",
      position: "Product Manager",
      appliedDate: "Apr 20, 2025",
      stage: "Screening",
      score: 3.8,
      status: "Active"
    },
    {
      id: 4,
      name: "Jessica Adams",
      position: "Marketing Lead",
      appliedDate: "Apr 12, 2025",
      stage: "Final Interview",
      score: 4.7,
      status: "Active"
    },
    {
      id: 5,
      name: "David Chen",
      position: "Data Analyst",
      appliedDate: "Apr 10, 2025",
      stage: "Offer",
      score: 4.9,
      status: "Active"
    }
  ];

  const stages = ["Screening", "Technical Test", "Interview", "Final Interview", "Offer"];

  return (
    <div className="container mx-auto pb-8 space-y-6">
      <h1 className="text-2xl font-bold">Recruitment Pipeline</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Active Candidates</p>
              <h3 className="text-2xl font-bold">24</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Across all positions
              </p>
            </div>
            <div className="bg-employwise-purple p-3 rounded-lg text-white">
              <UserPlus size={24} />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">New Applications</p>
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Last 7 days
              </p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg text-white">
              <UserPlus size={24} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Offers Extended</p>
              <h3 className="text-2xl font-bold">3</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Pending response: 1
              </p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg text-white">
              <UserPlus size={24} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Active Candidates</CardTitle>
              <CardDescription>Track applicant progress through recruitment stages</CardDescription>
            </div>
            <Button>Add Candidate</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Current Stage</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell className="font-medium">{candidate.name}</TableCell>
                  <TableCell>{candidate.position}</TableCell>
                  <TableCell>{candidate.appliedDate}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        candidate.stage === "Offer"
                          ? "bg-green-100 text-green-800"
                          : candidate.stage === "Final Interview"
                          ? "bg-blue-100 text-blue-800"
                          : candidate.stage === "Technical Test"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {candidate.stage}
                    </span>
                  </TableCell>
                  <TableCell className="w-[180px]">
                    <div className="flex items-center">
                      <Progress 
                        value={((stages.indexOf(candidate.stage) + 1) / stages.length) * 100} 
                        className="h-2" 
                      />
                      <span className="ml-2 text-xs">
                        {Math.round(((stages.indexOf(candidate.stage) + 1) / stages.length) * 100)}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`h-4 w-4 ${
                              star <= candidate.score
                                ? "text-yellow-400"
                                : "text-gray-200"
                            } ${
                              star === Math.ceil(candidate.score) && 
                              candidate.score % 1 !== 0
                                ? "text-yellow-400"
                                : ""
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            {star === Math.ceil(candidate.score) && 
                            candidate.score % 1 !== 0 ? (
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 15.92L4.22 19.13L5.5 12.64L0.5 8.07L7.11 7.32L10 1.5L12.89 7.32L19.5 8.07L14.5 12.64L15.78 19.13L10 15.92Z"
                                style={{
                                  clipPath: "inset(0 50% 0 0)",
                                }}
                              />
                            ) : (
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 15.92L4.22 19.13L5.5 12.64L0.5 8.07L7.11 7.32L10 1.5L12.89 7.32L19.5 8.07L14.5 12.64L15.78 19.13L10 15.92Z"
                              />
                            )}
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium">
                        {candidate.score}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      candidate.status === "Active" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {candidate.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View</Button>
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

export default Recruitment;
