
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("hr");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Check if user is already logged in
  const isLoggedIn = localStorage.getItem("employwise-user");
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Mock login - in a real app, this would connect to an authentication service
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Store user info
      localStorage.setItem(
        "employwise-user",
        JSON.stringify({ email, role, name: "Demo User" })
      );

      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Brand/Product info */}
      <div className="bg-employwise-purple text-white p-8 flex-1 flex flex-col justify-center items-center">
        <div className="max-w-lg text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            EmployWise LifeCraft Suite
          </h1>
          <p className="text-xl mb-6 text-opacity-80">
            Complete employee lifecycle management from recruitment to payroll
          </p>
          <ul className="space-y-3">
            {[
              "Streamlined recruitment process",
              "Digital onboarding experience",
              "Automated payroll management",
              "Attendance & leave tracking",
              "Comprehensive employee database",
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Welcome to EmployWise
            </h2>
            <p className="text-muted-foreground mt-2">
              Sign in to manage your HR operations
            </p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="demo">Demo Login</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-sm employwise-link">
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-employwise-purple hover:bg-employwise-purple/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="demo">
              <div className="space-y-4">
                <p className="text-sm text-center text-muted-foreground mb-6">
                  Select a role to try out the demo
                </p>
                
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "hr", label: "HR Admin" },
                    { id: "manager", label: "Manager" },
                    { id: "employee", label: "Employee" }
                  ].map((option) => (
                    <Button
                      key={option.id}
                      type="button"
                      variant={role === option.id ? "default" : "outline"}
                      className={role === option.id ? "bg-employwise-purple" : ""}
                      onClick={() => setRole(option.id)}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
                
                <Button
                  className="w-full bg-employwise-purple hover:bg-employwise-purple/90"
                  disabled={isLoading}
                  onClick={handleLogin}
                >
                  {isLoading ? "Loading Demo..." : "Continue as " + role.toUpperCase()}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
