import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  Star,
  Heart,
  Share2,
  MoreHorizontal
} from "lucide-react";

export default function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Mock event data
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      description: "Join industry leaders for cutting-edge technology discussions and networking.",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco, CA",
      attendees: 250,
      price: "Free",
      category: "Technology",
      image: "/api/placeholder/400/200",
      tags: ["AI", "Innovation", "Networking"],
      featured: true,
      rating: 4.8
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      description: "Learn the latest digital marketing strategies from industry experts.",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "New York, NY",
      attendees: 150,
      price: "$99",
      category: "Marketing",
      image: "/api/placeholder/400/200",
      tags: ["Marketing", "Digital", "Strategy"],
      featured: false,
      rating: 4.6
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      description: "Watch innovative startups pitch their ideas to top investors.",
      date: "March 28, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Austin, TX",
      attendees: 300,
      price: "$25",
      category: "Business",
      image: "/api/placeholder/400/200",
      tags: ["Startup", "Investment", "Pitch"],
      featured: true,
      rating: 4.9
    },
    {
      id: 4,
      title: "UX/UI Design Workshop",
      description: "Hands-on workshop covering modern design principles and tools.",
      date: "April 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Seattle, WA",
      attendees: 75,
      price: "$149",
      category: "Design",
      image: "/api/placeholder/400/200",
      tags: ["Design", "UX", "Workshop"],
      featured: false,
      rating: 4.7
    },
    {
      id: 5,
      title: "Cloud Computing Conference",
      description: "Explore the future of cloud infrastructure and DevOps practices.",
      date: "April 12, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Denver, CO",
      attendees: 400,
      price: "$199",
      category: "Technology",
      image: "/api/placeholder/400/200",
      tags: ["Cloud", "DevOps", "Infrastructure"],
      featured: false,
      rating: 4.5
    },
    {
      id: 6,
      title: "Sustainability & Green Tech Summit",
      description: "Discuss environmental solutions and sustainable technology innovations.",
      date: "April 18, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Portland, OR",
      attendees: 200,
      price: "Free",
      category: "Environment",
      image: "/api/placeholder/400/200",
      tags: ["Sustainability", "Green Tech", "Environment"],
      featured: true,
      rating: 4.8
    }
  ];

  const categories = ["all", "Technology", "Marketing", "Business", "Design", "Environment"];
  const locations = ["all", "San Francisco, CA", "New York, NY", "Austin, TX", "Seattle, WA", "Denver, CO", "Portland, OR"];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || event.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const featuredEvents = filteredEvents.filter(event => event.featured);
  const allEvents = filteredEvents;

  const EventCard = ({ event }: { event: typeof events[0] }) => (
    <Card className="event-card overflow-hidden h-full">
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <Calendar className="w-16 h-16 text-primary/40" />
        </div>
        {event.featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-white">
            Featured
          </Badge>
        )}
        <div className="absolute top-3 right-3 flex gap-2">
          <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
            <Heart className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2 line-clamp-2">{event.title}</CardTitle>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1 text-sm font-medium">{event.rating}</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {event.category}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
        <CardDescription className="line-clamp-2">
          {event.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2" />
            <span>{event.attendees} attendees</span>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-3">
            {event.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-lg font-semibold text-primary">
              {event.price}
            </div>
            <Button size="sm">
              Join Event
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Amazing Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find and join events that match your interests and connect with like-minded people.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
            <div className="relative flex-1 w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search events, tags, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>
                    {location === "all" ? "All Locations" : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="all">All Events ({allEvents.length})</TabsTrigger>
            <TabsTrigger value="featured">Featured ({featuredEvents.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-8">
            {allEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No events found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or browse all events.
                </p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedLocation("all");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="featured" className="space-y-8">
            {featuredEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Star className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No featured events found</h3>
                <p className="text-muted-foreground">
                  Check back later for featured events that match your criteria.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
