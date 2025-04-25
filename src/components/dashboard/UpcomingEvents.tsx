
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  participants: number;
  location: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Technical Interview - Senior Developer",
    date: "Today",
    time: "10:30 AM - 12:00 PM",
    type: "interview",
    participants: 4,
    location: "Meeting Room 3",
  },
  {
    id: 2,
    title: "New Employee Orientation",
    date: "Today",
    time: "2:00 PM - 4:00 PM",
    type: "onboarding",
    participants: 8,
    location: "Training Center",
  },
  {
    id: 3,
    title: "Performance Review Meeting",
    date: "Tomorrow",
    time: "11:00 AM - 12:30 PM",
    type: "review",
    participants: 2,
    location: "Meeting Room 1",
  },
  {
    id: 4,
    title: "Team Building Workshop",
    date: "Apr 28, 2025",
    time: "1:00 PM - 5:00 PM",
    type: "workshop",
    participants: 25,
    location: "Conference Hall",
  },
  {
    id: 5,
    title: "Recruitment Planning",
    date: "Apr 30, 2025",
    time: "9:30 AM - 11:00 AM",
    type: "planning",
    participants: 6,
    location: "Meeting Room 2",
  },
];

export const UpcomingEvents = () => {
  const getEventColor = (type: string) => {
    switch (type) {
      case "interview":
        return "border-l-blue-500";
      case "onboarding":
        return "border-l-green-500";
      case "review":
        return "border-l-purple-500";
      case "workshop":
        return "border-l-amber-500";
      case "planning":
        return "border-l-gray-500";
      default:
        return "border-l-gray-300";
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className={`p-4 border-l-4 ${getEventColor(
              event.type
            )} bg-gray-50 rounded-md`}
          >
            <div className="flex justify-between items-start">
              <h4 className="font-medium">{event.title}</h4>
              <span className="text-xs font-medium bg-employwise-purple/10 text-employwise-purple px-2 py-1 rounded">
                {event.type}
              </span>
            </div>
            
            <div className="mt-2 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar size={14} className="mr-2" />
                {event.date}
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock size={14} className="mr-2" />
                {event.time}
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Users size={14} className="mr-2" />
                {event.participants} participants
              </div>
              
              <div className="text-sm text-muted-foreground mt-1">
                Location: {event.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
