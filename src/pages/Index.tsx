
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, PiggyBank, MessageCircle, Bell, Target, Zap, Shield } from "lucide-react";
import SpendingChart from "@/components/SpendingChart";
import SubscriptionCard from "@/components/SubscriptionCard";
import ChatInterface from "@/components/ChatInterface";
import SavingsGoal from "@/components/SavingsGoal";
import CreditScore from "@/components/CreditScore";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const mockSubscriptions = [
    { name: "Netflix", amount: 15.99, category: "Entertainment", lastCharged: "2 days ago", cancelable: false },
    { name: "Spotify Premium", amount: 9.99, category: "Entertainment", lastCharged: "1 week ago", cancelable: false },
    { name: "Adobe Creative Suite", amount: 52.99, category: "Professional", lastCharged: "3 days ago", cancelable: true },
    { name: "Planet Fitness", amount: 24.99, category: "Health", lastCharged: "1 week ago", cancelable: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-lg px-3 py-2 font-bold text-xl">
                CLYFI
              </div>
              <span className="text-slate-600 text-sm">Your AI Financial CFO</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Good morning, Jordan! 👋</h1>
          <p className="text-slate-600">Here's what's happening with your finances today</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Current Balance</p>
                  <p className="text-2xl font-bold">$3,247.82</p>
                </div>
                <DollarSign className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">This Month Saved</p>
                  <p className="text-2xl font-bold">$324.15</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-emerald-200 mr-1" />
                    <span className="text-emerald-200 text-sm">+12%</span>
                  </div>
                </div>
                <PiggyBank className="h-8 w-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Credit Score</p>
                  <p className="text-2xl font-bold">742</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-purple-200 mr-1" />
                    <span className="text-purple-200 text-sm">+18 pts</span>
                  </div>
                </div>
                <CreditCard className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Potential Savings</p>
                  <p className="text-2xl font-bold">$127.98</p>
                  <p className="text-orange-200 text-sm">Per month</p>
                </div>
                <Target className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="savings">Savings</TabsTrigger>
            <TabsTrigger value="coaching">AI Coach</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SpendingChart />
              </div>
              <div className="space-y-6">
                <CreditScore />
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Review subscription renewals
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <PiggyBank className="h-4 w-4 mr-2" />
                      Set up automatic savings
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Check credit report
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="subscriptions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Subscriptions</CardTitle>
                <CardDescription>
                  We found {mockSubscriptions.length} active subscriptions totaling $103.96/month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSubscriptions.map((subscription, index) => (
                    <SubscriptionCard key={index} {...subscription} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="savings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SavingsGoal 
                title="Emergency Fund"
                current={2847}
                target={5000}
                monthlyContribution={200}
              />
              <SavingsGoal 
                title="Vacation Fund"
                current={1250}
                target={3000}
                monthlyContribution={150}
              />
            </div>
          </TabsContent>

          <TabsContent value="coaching" className="space-y-6">
            <ChatInterface />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
