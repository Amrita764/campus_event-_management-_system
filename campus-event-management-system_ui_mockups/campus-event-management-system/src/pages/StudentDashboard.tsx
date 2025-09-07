import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Users, Clock, Search, Trophy, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentDashboard = () => {
  const [registeredEvents, setRegisteredEvents] = useState([1, 3]);
  const [attendedEvents] = useState([
    { id: 4, title: "Winter Coding Challenge", rating: 5, feedback: "Amazing event!" },
    { id: 5, title: "Design Thinking Workshop", rating: 4, feedback: "Very informative" }
  ]);

  const availableEvents = [
    {
      id: 1,
      title: "Tech Innovation Hackathon 2024",
      type: "Hackathon",
      date: "2024-03-20",
      time: "09:00",
      venue: "Main Auditorium",
      capacity: 200,
      registered: 156,
      description: "Join us for an exciting 48-hour hackathon featuring cutting-edge technology challenges, mentorship from industry experts, and amazing prizes!",
      organizer: "Computer Science Department",
      prizes: "₹50,000 in prizes",
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      type: "Workshop",
      date: "2024-03-22",
      time: "14:00",
      venue: "Computer Lab 1",
      capacity: 50,
      registered: 45,
      description: "Learn the fundamentals of AI and ML with hands-on projects using Python and TensorFlow.",
      organizer: "Tech Club",
      prizes: "Certificate + Internship opportunities",
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "Spring Cultural Fest",
      type: "Festival",
      date: "2024-03-25",
      time: "18:00",
      venue: "Open Ground",
      capacity: 500,
      registered: 320,
      description: "Celebrate spring with music, dance, food stalls, and cultural performances from students across all departments.",
      organizer: "Cultural Committee",
      prizes: "Fun activities + Food",
      image: "/api/placeholder/400/200"
    },
    {
      id: 6,
      title: "Entrepreneurship Summit",
      type: "Seminar",
      date: "2024-03-28",
      time: "10:00",
      venue: "Business Hall",
      capacity: 150,
      registered: 89,
      description: "Meet successful entrepreneurs, learn about startup ecosystems, and network with like-minded peers.",
      organizer: "Entrepreneurship Cell",
      prizes: "Networking + Mentorship",
      image: "/api/placeholder/400/200"
    }
  ];

  const { toast } = useToast();

  const handleRegister = (eventId: number, eventTitle: string) => {
    if (registeredEvents.includes(eventId)) {
      toast({
        title: "Already Registered",
        description: `You're already registered for ${eventTitle}`,
        variant: "destructive"
      });
      return;
    }

    setRegisteredEvents([...registeredEvents, eventId]);
    toast({
      title: "Registration Successful!",
      description: `You've been registered for ${eventTitle}`,
    });
  };

  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case "Hackathon": return "bg-primary";
      case "Workshop": return "bg-accent";
      case "Festival": return "bg-success";
      case "Seminar": return "bg-warning";
      default: return "bg-secondary";
    }
  };

  const studentStats = {
    eventsAttended: attendedEvents.length,
    eventsRegistered: registeredEvents.length,
    averageRating: attendedEvents.reduce((sum, event) => sum + event.rating, 0) / attendedEvents.length || 0
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-16 w-16 border-2 border-primary-foreground/20">
              <AvatarImage src="/api/placeholder/64/64" />
              <AvatarFallback className="text-primary bg-primary-foreground/10">JS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, John!</h1>
              <p className="text-primary-foreground/80">Computer Science Engineering • 3rd Year</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Student Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Events Attended</p>
                  <p className="text-2xl font-bold">{studentStats.eventsAttended}</p>
                </div>
                <Trophy className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Registered Events</p>
                  <p className="text-2xl font-bold">{studentStats.eventsRegistered}</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Rating Given</p>
                  <p className="text-2xl font-bold">{studentStats.averageRating.toFixed(1)}</p>
                </div>
                <Star className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browse">Browse Events</TabsTrigger>
            <TabsTrigger value="registered">My Events</TabsTrigger>
            <TabsTrigger value="history">Event History</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search events by title, type, or venue..."
                className="pl-10"
              />
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableEvents.map((event) => (
                <Card key={event.id} className="shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gradient-card relative">
                    <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getEventBadgeColor(event.type)} text-white`}>
                        {event.type}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                      <p className="text-sm opacity-90">{event.organizer}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.registered}/{event.capacity} registered</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span>{event.prizes}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-gradient-primary"
                        onClick={() => handleRegister(event.id, event.title)}
                        disabled={registeredEvents.includes(event.id)}
                      >
                        {registeredEvents.includes(event.id) ? "Registered" : "Register Now"}
                      </Button>
                      <Button variant="outline">Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="registered" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>My Registered Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableEvents
                    .filter(event => registeredEvents.includes(event.id))
                    .map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{event.title}</h3>
                          <Badge className={getEventBadgeColor(event.type)}>{event.type}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {event.date} at {event.time}
                          </p>
                          <p className="flex items-center gap-2 mt-1">
                            <MapPin className="h-4 w-4" />
                            {event.venue}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Clock className="h-4 w-4 mr-2" />
                          Check-in
                        </Button>
                        <Button variant="outline" size="sm">Details</Button>
                      </div>
                    </div>
                  ))}
                  {registeredEvents.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      No registered events yet. Browse available events to get started!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Event History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendedEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-warning text-warning" />
                            <span>{event.rating}/5</span>
                          </div>
                          <span>"{event.feedback}"</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        Completed
                      </Badge>
                    </div>
                  ))}
                  {attendedEvents.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      No completed events yet. Attend some events to see your history!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;