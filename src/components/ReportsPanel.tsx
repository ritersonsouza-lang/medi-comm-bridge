import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MessageCircle, 
  Clock, 
  Target,
  Calendar,
  Download,
  Filter,
  Star,
  Phone,
  Mail
} from "lucide-react";

const ReportsPanel = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("7days");
  const [selectedChannel, setSelectedChannel] = useState("all");

  // Mock data for charts
  const attendantPerformance = [
    { name: "Ana Silva", atendimentos: 45, tempoMedio: 2.3, satisfacao: 4.8, conversao: 85 },
    { name: "Carlos Santos", atendimentos: 38, tempoMedio: 3.1, satisfacao: 4.5, conversao: 78 },
    { name: "Maria Costa", atendimentos: 52, tempoMedio: 2.8, satisfacao: 4.9, conversao: 92 },
    { name: "João Oliveira", atendimentos: 41, tempoMedio: 2.5, satisfacao: 4.6, conversao: 81 }
  ];

  const channelData = [
    { name: "WhatsApp", atendimentos: 89, satisfacao: 4.7, conversao: 82 },
    { name: "Instagram", atendimentos: 34, satisfacao: 4.4, conversao: 76 },
    { name: "Facebook", atendimentos: 28, satisfacao: 4.3, conversao: 71 },
    { name: "E-mail", atendimentos: 45, satisfacao: 4.8, conversao: 88 },
    { name: "Telefone", atendimentos: 67, satisfacao: 4.6, conversao: 85 }
  ];

  const dailyTrends = [
    { dia: "Seg", atendimentos: 42, consultas: 18, satisfacao: 4.5 },
    { dia: "Ter", atendimentos: 38, consultas: 22, satisfacao: 4.7 },
    { dia: "Qua", atendimentos: 51, consultas: 28, satisfacao: 4.6 },
    { dia: "Qui", atendimentos: 45, consultas: 24, satisfacao: 4.8 },
    { dia: "Sex", atendimentos: 48, consultas: 26, satisfacao: 4.5 },
    { dia: "Sáb", atendimentos: 35, consultas: 19, satisfacao: 4.4 },
    { dia: "Dom", atendimentos: 28, consultas: 15, satisfacao: 4.3 }
  ];

  const satisfactionDistribution = [
    { name: "5 Estrelas", value: 65, color: "#10B981" },
    { name: "4 Estrelas", value: 25, color: "#F59E0B" },
    { name: "3 Estrelas", value: 8, color: "#EF4444" },
    { name: "2 Estrelas", value: 2, color: "#DC2626" }
  ];

  const hourlyVolume = [
    { hora: "08h", volume: 12 },
    { hora: "09h", volume: 24 },
    { hora: "10h", volume: 31 },
    { hora: "11h", volume: 28 },
    { hora: "12h", volume: 15 },
    { hora: "13h", volume: 8 },
    { hora: "14h", volume: 35 },
    { hora: "15h", volume: 42 },
    { hora: "16h", volume: 38 },
    { hora: "17h", volume: 25 },
    { hora: "18h", volume: 12 }
  ];

  return (
    <div className="space-y-6">
      {/* Header and Filters */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Relatórios Detalhados</h2>
          <p className="text-muted-foreground">Análise completa de performance e métricas</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="7days">7 dias</SelectItem>
              <SelectItem value="30days">30 dias</SelectItem>
              <SelectItem value="90days">90 dias</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedChannel} onValueChange={setSelectedChannel}>
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos canais</SelectItem>
              <SelectItem value="whatsapp">WhatsApp</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="email">E-mail</SelectItem>
              <SelectItem value="phone">Telefone</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Volume Total</p>
                <p className="text-2xl font-bold">1,247</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-success" />
                  <span className="text-xs text-success">+12.5%</span>
                </div>
              </div>
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Taxa Conversão</p>
                <p className="text-2xl font-bold">84.2%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-success" />
                  <span className="text-xs text-success">+3.1%</span>
                </div>
              </div>
              <Target className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tempo Médio</p>
                <p className="text-2xl font-bold">2.7min</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="w-3 h-3 text-success" />
                  <span className="text-xs text-success">-8.3%</span>
                </div>
              </div>
              <Clock className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Satisfação</p>
                <p className="text-2xl font-bold">4.6★</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-success" />
                  <span className="text-xs text-success">+0.2</span>
                </div>
              </div>
              <Star className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance da Equipe</TabsTrigger>
          <TabsTrigger value="channels">Análise por Canal</TabsTrigger>
          <TabsTrigger value="trends">Tendências Temporais</TabsTrigger>
          <TabsTrigger value="satisfaction">Satisfação do Cliente</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Individual</CardTitle>
                <CardDescription>Métricas por atendente nos últimos 7 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendantPerformance.map((attendant, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{attendant.name}</span>
                        <Badge variant={attendant.conversao >= 85 ? "default" : "secondary"}>
                          {attendant.conversao}% conversão
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Atendimentos: </span>
                          <span className="font-medium">{attendant.atendimentos}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Tempo: </span>
                          <span className="font-medium">{attendant.tempoMedio}min</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Satisfação: </span>
                          <span className="font-medium">{attendant.satisfacao}★</span>
                        </div>
                      </div>
                      <Progress value={attendant.conversao} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Volume por Atendente</CardTitle>
                <CardDescription>Distribuição de atendimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={attendantPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={12} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="atendimentos" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="channels" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance por Canal</CardTitle>
                <CardDescription>Métricas comparativas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {channelData.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {channel.name === "WhatsApp" && <MessageCircle className="w-5 h-5 text-green-500" />}
                        {channel.name === "Instagram" && <MessageCircle className="w-5 h-5 text-purple-500" />}
                        {channel.name === "Facebook" && <MessageCircle className="w-5 h-5 text-blue-500" />}
                        {channel.name === "E-mail" && <Mail className="w-5 h-5 text-orange-500" />}
                        {channel.name === "Telefone" && <Phone className="w-5 h-5 text-gray-500" />}
                        <div>
                          <p className="font-medium">{channel.name}</p>
                          <p className="text-sm text-muted-foreground">{channel.atendimentos} atendimentos</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{channel.conversao}%</p>
                        <p className="text-sm text-muted-foreground">{channel.satisfacao}★</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Volume por Hora</CardTitle>
                <CardDescription>Distribuição do volume de atendimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={hourlyVolume}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hora" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="volume" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tendências da Semana</CardTitle>
              <CardDescription>Evolução de atendimentos e conversões</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={dailyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dia" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="atendimentos" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    name="Atendimentos"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="consultas" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={2}
                    name="Consultas Agendadas"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="satisfaction" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Distribuição de Satisfação</CardTitle>
                <CardDescription>Avaliações dos últimos 7 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={satisfactionDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {satisfactionDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Evolução da Satisfação</CardTitle>
                <CardDescription>Média semanal de avaliações</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dailyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dia" />
                    <YAxis domain={[4.0, 5.0]} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="satisfacao" 
                      stroke="hsl(var(--warning))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportsPanel;