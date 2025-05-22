
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, X } from "lucide-react";

interface SubscriptionCardProps {
  name: string;
  amount: number;
  category: string;
  lastCharged: string;
  cancelable: boolean;
}

const SubscriptionCard = ({ name, amount, category, lastCharged, cancelable }: SubscriptionCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      Entertainment: "bg-purple-100 text-purple-800",
      Professional: "bg-blue-100 text-blue-800",
      Health: "bg-green-100 text-green-800",
      Shopping: "bg-orange-100 text-orange-800",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
              <span className="text-lg font-semibold text-slate-700">
                {name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">{name}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Badge className={getCategoryColor(category)}>
                  {category}
                </Badge>
                <span className="text-sm text-slate-500">Last charged {lastCharged}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-lg font-bold text-slate-900">${amount}</p>
              <p className="text-sm text-slate-500">per month</p>
            </div>
            {cancelable ? (
              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                <X className="h-4 w-4 mr-1" />
                Cancel
              </Button>
            ) : (
              <div className="flex items-center text-amber-600">
                <AlertTriangle className="h-4 w-4 mr-1" />
                <span className="text-xs">High usage</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
