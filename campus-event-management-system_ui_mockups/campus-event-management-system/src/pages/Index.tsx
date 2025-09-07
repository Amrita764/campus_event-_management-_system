import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, TrendingUp, BookOpen, Trophy, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [userType, setUserType] = useState<"admin" | "student" | null>(null);

  const stats = {
    totalEvents: 24,
    activeStudents: 1250,
    totalRegistrations: 3400,
    averageRating: 4.6
  };

  const featuredEvents = [
    {
      title: "Tech Innovation Hackathon 2024",
      type: "Hackathon",
      date: "March 20, 2024",
      registrations: 156
    },
    {
      title: "AI & Machine Learning Workshop", 
      type: "Workshop",
      date: "March 22, 2024",
      registrations: 45
    },
    {
      title: "Spring Cultural Fest",
      type: "Festival", 
      date: "March 25, 2024",
      registrations: 320
    }
  ];

  if (userType) {
    return (
      <div className="min-h-screen bg-background">
        {userType === "admin" ? (
          <div>
            <div className="bg-gradient-primary text-primary-foreground p-6">
              <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Admin Portal</h1>
                <p className="text-xl opacity-90">Manage campus events and track performance</p>
                <div className="mt-8">
                  <Link to="/admin">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                      Go to Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-gradient-primary text-primary-foreground p-6">
              <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Student Portal</h1>
                <p className="text-xl opacity-90">Discover and register for amazing campus events</p>
                <div className="mt-8">
                  <Link to="/student">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                      Browse Events
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Campus Event
              <br />
              <span className="text-primary-glow">Management</span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Streamline event creation, student registration, and attendance tracking 
              for your entire campus community
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
                onClick={() => setUserType("admin")}
              >
                <Users className="mr-2 h-5 w-5" />
                Admin Portal
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
                onClick={() => setUserType("student")}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Student Portal
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Overview</h2>
            <p className="text-lg text-muted-foreground">Real-time insights from our campus event ecosystem</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stats.totalEvents}</h3>
                <p className="text-muted-foreground">Active Events</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stats.activeStudents.toLocaleString()}</h3>
                <p className="text-muted-foreground">Active Students</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stats.totalRegistrations.toLocaleString()}</h3>
                <p className="text-muted-foreground">Total Registrations</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-warning mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stats.averageRating}</h3>
                <p className="text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Events</h2>
            <p className="text-lg text-muted-foreground">Don't miss these upcoming campus events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{event.type}</Badge>
                    <span className="text-sm text-muted-foreground">{event.registrations} registered</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.date}</p>
                  <Button className="w-full bg-gradient-primary">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground">Everything you need to manage campus events efficiently</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Easy Event Creation</h3>
              <p className="text-muted-foreground">Create and manage events with intuitive forms and scheduling tools</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Student Registration</h3>
              <p className="text-muted-foreground">Streamlined registration process with capacity management</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Analytics & Reports</h3>
              <p className="text-muted-foreground">Track attendance, engagement, and generate detailed reports</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Trophy className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Attendance Tracking</h3>
              <p className="text-muted-foreground">QR code check-ins and real-time attendance monitoring</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Feedback System</h3>
              <p className="text-muted-foreground">Collect and analyze student feedback to improve future events</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Multi-College Support</h3>
              <p className="text-muted-foreground">Scalable solution supporting multiple colleges and campuses</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose your role to access the appropriate portal and start managing or participating in campus events
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-lg px-8 py-4"
              onClick={() => setUserType("admin")}
            >
              <Users className="mr-2 h-5 w-5" />
              I'm an Administrator
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4"
              onClick={() => setUserType("student")}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              I'm a Student
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
