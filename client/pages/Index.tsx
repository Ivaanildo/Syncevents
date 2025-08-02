import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  MapPin,
  Bell,
  Smartphone,
  Globe,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Event Management",
      description:
        "Create, organize, and manage events with intelligent scheduling and automated reminders.",
      highlight: "AI-Powered",
    },
    {
      icon: Users,
      title: "Seamless Collaboration",
      description:
        "Invite team members, assign roles, and collaborate in real-time on event planning.",
      highlight: "Team-Ready",
    },
    {
      icon: Smartphone,
      title: "Mobile-First PWA",
      description:
        "Access your events anywhere with our progressive web app that works offline.",
      highlight: "Offline Mode",
    },
    {
      icon: Bell,
      title: "Real-Time Notifications",
      description:
        "Keep attendees informed with instant updates and smart notification scheduling.",
      highlight: "Instant",
    },
    {
      icon: MapPin,
      title: "Location Integration",
      description:
        "Interactive maps, venue details, and navigation assistance for all your events.",
      highlight: "GPS-Enabled",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Multi-timezone support and multilingual interface for international events.",
      highlight: "Worldwide",
    },
  ];

  const stats = [
    { number: "50K+", label: "Events Created", icon: Calendar },
    { number: "2M+", label: "Happy Attendees", icon: Users },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-40'
          }
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                ✨ The Future of Event Management
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Sync Events,
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Sync Success
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Transform your event management experience with our intelligent
                platform. From planning to execution, we make every event
                unforgettable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gradient-primary group">
                  Start Creating Events
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative z-10 glass rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Upcoming Events</h3>
                    <Badge className="bg-success/10 text-success border-success/20">
                      3 Active
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        name: "Tech Conference 2024",
                        date: "Mar 15",
                        attendees: 250,
                        color: "bg-primary",
                      },
                      {
                        name: "Product Launch",
                        date: "Mar 22",
                        attendees: 150,
                        color: "bg-accent",
                      },
                      {
                        name: "Team Building",
                        date: "Mar 28",
                        attendees: 45,
                        color: "bg-success",
                      },
                    ].map((event, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50"
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${event.color}`}
                        ></div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{event.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {event.date} • {event.attendees} attendees
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              🚀 Powerful Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything you need to create
              <br />
              <span className="text-primary">amazing events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and features you
              need to plan, manage, and execute successful events of any size.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="event-card border-0 shadow-lg h-full"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E\')] opacity-20'
          }
        ></div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to revolutionize your events?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of event organizers who trust Sync Eventos to deliver
            exceptional experiences every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
