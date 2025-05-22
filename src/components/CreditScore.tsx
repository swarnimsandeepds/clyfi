
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, CreditCard } from "lucide-react";

const CreditScore = () => {
  const score = 742;
  const maxScore = 850;
  const progress = (score / maxScore) * 100;
  
  const getScoreCategory = (score: number) => {
    if (score >= 800) return { label: "Excellent", color: "bg-emerald-100 text-emerald-800" };
    if (score >= 740) return { label: "Very Good", color: "bg-blue-100 text-blue-800" };
    if (score >= 670) return { label: "Good", color: "bg-green-100 text-green-800" };
    if (score >= 580) return { label: "Fair", color: "bg-yellow-100 text-yellow-800" };
    return { label: "Poor", color: "bg-red-100 text-red-800" };
  };

  const category = getScoreCategory(score);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <CreditCard className="h-5 w-5 text-purple-600 mr-2" />
            Credit Score
          </div>
          <Badge className={category.color}>
            {category.label}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-slate-900 mb-2">{score}</div>
          <Progress value={progress} className="h-3" />
          <div className="flex justify-between text-sm text-slate-500 mt-1">
            <span>300</span>
            <span>850</span>
          </div>
        </div>
        
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
          <div className="flex items-center text-emerald-700 mb-1">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">+18 points this month</span>
          </div>
          <p className="text-xs text-emerald-600">
            Great job! Your on-time payments are improving your score.
          </p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-slate-900">Next Steps to Improve:</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Keep credit utilization below 30%</li>
            <li>• Continue making on-time payments</li>
            <li>• Consider increasing your credit limit</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditScore;
