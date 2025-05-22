
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PiggyBank, TrendingUp } from "lucide-react";

interface SavingsGoalProps {
  title: string;
  current: number;
  target: number;
  monthlyContribution: number;
}

const SavingsGoal = ({ title, current, target, monthlyContribution }: SavingsGoalProps) => {
  const progress = (current / target) * 100;
  const remaining = target - current;
  const monthsToGoal = Math.ceil(remaining / monthlyContribution);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <PiggyBank className="h-5 w-5 text-emerald-600 mr-2" />
            {title}
          </div>
          <span className="text-2xl font-bold text-slate-900">
            ${current.toLocaleString()}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Progress</span>
            <span className="font-medium">{progress.toFixed(1)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-slate-500">
            <span>${current.toLocaleString()}</span>
            <span>${target.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="bg-slate-50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-slate-600">Monthly contribution:</span>
            <span className="text-sm font-medium">${monthlyContribution}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-slate-600">Months to goal:</span>
            <span className="text-sm font-medium flex items-center">
              {monthsToGoal} months
              <TrendingUp className="h-3 w-3 text-emerald-600 ml-1" />
            </span>
          </div>
        </div>
        
        <Button className="w-full" variant="outline">
          Adjust Goal
        </Button>
      </CardContent>
    </Card>
  );
};

export default SavingsGoal;
