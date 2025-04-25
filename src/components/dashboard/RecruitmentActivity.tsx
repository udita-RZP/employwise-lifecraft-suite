
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ActivityItem {
  id: number;
  type: string;
  title: string;
  time: string;
  description: string;
  user: {
    name: string;
    initials: string;
  };
}

const activities: ActivityItem[] = [
  {
    id: 1,
    type: "interview",
    title: "Interview scheduled",
    time: "Today, 10:30 AM",
    description: "Technical interview for Senior Developer position with candidate Michael Brown",
    user: {
      name: "Sarah Reynolds",
      initials: "SR",
    },
  },
  {
    id: 2,
    type: "application",
    title: "New application received",
    time: "Today, 9:15 AM",
    description: "Emily Davis applied for UX/UI Designer position",
    user: {
      name: "James Wilson",
      initials: "JW",
    },
  },
  {
    id: 3,
    type: "offer",
    title: "Offer sent",
    time: "Yesterday, 2:45 PM",
    description: "Offer letter sent to John Smith for Product Manager position",
    user: {
      name: "Sarah Reynolds",
      initials: "SR",
    },
  },
  {
    id: 4,
    type: "feedback",
    title: "Interview feedback submitted",
    time: "Yesterday, 11:20 AM",
    description: "Technical team provided feedback for David Wilson's interview",
    user: {
      name: "Robert Johnson",
      initials: "RJ",
    },
  },
  {
    id: 5,
    type: "job",
    title: "New job posting created",
    time: "Apr 23, 2025",
    description: "Marketing Specialist position opened for the Growth team",
    user: {
      name: "Sarah Reynolds",
      initials: "SR",
    },
  },
];

export const RecruitmentActivity = () => {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "interview":
        return "bg-blue-100 text-blue-800";
      case "application":
        return "bg-green-100 text-green-800";
      case "offer":
        return "bg-purple-100 text-purple-800";
      case "feedback":
        return "bg-amber-100 text-amber-800";
      case "job":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-x-4 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0"
          >
            <Avatar>
              <AvatarFallback className="bg-employwise-purple text-white">
                {activity.user.initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium">{activity.title}</h4>
                  <Badge className={`${getBadgeColor(activity.type)}`} variant="outline">
                    {activity.type}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">
                  {activity.time}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {activity.description}
              </p>
              <div className="mt-2 text-xs text-muted-foreground">
                By {activity.user.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
