
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", spending: 2400, income: 3200 },
  { month: "Feb", spending: 2100, income: 3200 },
  { month: "Mar", spending: 2800, income: 3400 },
  { month: "Apr", spending: 2300, income: 3200 },
  { month: "May", spending: 2600, income: 3500 },
  { month: "Jun", spending: 2200, income: 3200 },
];

const SpendingChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending vs Income</CardTitle>
        <CardDescription>Your financial flow over the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200" />
            <XAxis dataKey="month" className="text-slate-600" />
            <YAxis className="text-slate-600" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="income" 
              stackId="1"
              stroke="#10b981" 
              fill="#10b981" 
              fillOpacity={0.6}
            />
            <Area 
              type="monotone" 
              dataKey="spending" 
              stackId="2"
              stroke="#ef4444" 
              fill="#ef4444" 
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SpendingChart;
