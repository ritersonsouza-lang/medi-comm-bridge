import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReportsPanel from "./ReportsPanel";
import { 
  Users, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  AlertTriangle,
  TrendingUp,
  FileText
} from "lucide-react";

const ManagerDashboard = () => {
  const attendants = [
    {
      id: 1,
      name: "Maria Silva",
      avatar: "/placeholder.svg",
      status: "online",
      activeChats: 5,
      avgResponseTime: "1.2min",
      todayChats: 23,
      satisfaction: 4.8
    },
    {
      id: 2,
      name: "João Santos",
      avatar: "/placeholder.svg",
      status: "busy",
      activeChats: 3,
      avgResponseTime: "2.1min",
      todayChats: 18,
      satisfaction: 4.6
    },
    {
      id: 3,
      name: "Ana Costa",
      avatar: "/placeholder.svg",
      status: "online",
      activeChats: 4,
      avgResponseTime: "1.8min",
      todayChats: 31,
      satisfaction: 4.9
    }
  ];

  const queueStats = [
    { channel: "WhatsApp", icon: MessageSquare, waiting: 8, color: "text-success" },
    { channel: "Instagram", icon: Instagram, waiting: 3, color: "text-warning" },
    { channel: "Facebook", icon: Facebook, waiting: 2, color: "text-primary" },
    { channel: "E-mail", icon: Mail, waiting: 5, color: "text-secondary" },
    { channel: "Telefone", icon: Phone, waiting: 1, color: "text-destructive" }
  ];

  return (
    <Tabs defaultValue="dashboard" className="space-y-6">
      <TabsList>
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="reports">
          <FileText className="w-4 h-4 mr-2" />
          Relatórios Detalhados
        </TabsTrigger>
      </TabsList>

      <TabsContent value="dashboard" className="space-y-6">
        {/* Team Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Equipe de Atendimento
              </CardTitle>
              <CardDescription>Performance da equipe em tempo real</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {attendants.map((attendant) => (
                  <div key={attendant.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={attendant.avatar} />
                        <AvatarFallback>{attendant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{attendant.name}</span>
                          <Badge 
                            variant={attendant.status === 'online' ? 'default' : 'secondary'}
                            className={attendant.status === 'online' ? 'bg-success' : ''}
                          >
                            {attendant.status === 'online' ? 'Online' : 'Ocupado'}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {attendant.activeChats} conversas ativas • Tempo médio: {attendant.avgResponseTime}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{attendant.todayChats} atendimentos</div>
                      <div className="text-sm text-muted-foreground">★ {attendant.satisfaction}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Fila de Atendimento
              </CardTitle>
              <CardDescription>Distribuição por canal de comunicação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {queueStats.map((stat) => (
                  <div key={stat.channel} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      <span className="font-medium">{stat.channel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{stat.waiting} aguardando</Badge>
                      {stat.waiting > 5 && <AlertTriangle className="w-4 h-4 text-warning" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                SLA de Resposta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Meta: 2 minutos</span>
                  <span className="text-success font-medium">89% atingido</span>
                </div>
                <Progress value={89} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  Tempo médio atual: 1.8 minutos
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Taxa de Resolução
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Meta: 80%</span>
                  <span className="text-success font-medium">94% atingido</span>
                </div>
                <Progress value={94} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  Casos resolvidos no primeiro contato
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Conversão em Consultas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Meta: 70%</span>
                  <span className="text-success font-medium">78% atingido</span>
                </div>
                <Progress value={78} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  43 consultas agendadas hoje
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button className="bg-gradient-to-r from-primary to-secondary text-white">
            Gerar Relatório Completo
          </Button>
          <Button variant="outline">
            Configurar Alertas
          </Button>
          <Button variant="outline">
            Redistribuir Fila
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="reports">
        <ReportsPanel />
      </TabsContent>
    </Tabs>
  );
};

export default ManagerDashboard;