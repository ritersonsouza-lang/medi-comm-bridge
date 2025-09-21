import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ManagerDashboard from "@/components/ManagerDashboard";
import AttendantPanel from "@/components/AttendantPanel";
import { UserMenu } from "@/components/UserMenu";
import { useAuth } from "@/hooks/useAuth";
import { Users, MessageCircle, Clock, TrendingUp } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("manager");
  const { profile } = useAuth();

  // Set default tab based on user role
  useEffect(() => {
    if (profile?.role === 'attendant') {
      setActiveTab("attendant");
    } else if (profile?.role === 'manager') {
      setActiveTab("manager");
    }
  }, [profile]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">OmniClinic</h1>
                <p className="text-sm text-muted-foreground">Sistema Omnichannel para Clínicas</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                Sistema Online
              </Badge>
              <UserMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pacientes Ativos</p>
                  <p className="text-2xl font-bold">127</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Conversas Hoje</p>
                  <p className="text-2xl font-bold">43</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tempo Médio</p>
                  <p className="text-2xl font-bold">2.5min</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Taxa Conversão</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle>Painel de Controle</CardTitle>
            <CardDescription>
              Gerencie atendimentos e monitore performance da equipe
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className={`grid w-full ${profile?.role === 'attendant' ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {profile?.role === 'manager' && (
                  <TabsTrigger value="manager">Visão Gerente</TabsTrigger>
                )}
                <TabsTrigger value="attendant">
                  {profile?.role === 'attendant' ? 'Painel de Atendimento' : 'Visão Atendente'}
                </TabsTrigger>
              </TabsList>
              
              {profile?.role === 'manager' && (
                <TabsContent value="manager" className="mt-6">
                  <ManagerDashboard />
                </TabsContent>
              )}
              
              <TabsContent value="attendant" className="mt-6">
                <AttendantPanel />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;