import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  Send,
  Clock,
  User,
  Calendar,
  FileText,
  Paperclip
} from "lucide-react";

const AttendantPanel = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      patient: "Maria Oliveira",
      channel: "WhatsApp",
      icon: MessageSquare,
      lastMessage: "Gostaria de agendar uma consulta com cardiologista",
      time: "14:32",
      unread: 2,
      status: "waiting",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      patient: "Carlos Santos",
      channel: "Instagram",
      icon: Instagram,
      lastMessage: "Vocês atendem convênio Unimed?",
      time: "14:15",
      unread: 1,
      status: "active",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      patient: "Ana Costa",
      channel: "E-mail",
      icon: Mail,
      lastMessage: "Preciso remarcar minha consulta de amanhã",
      time: "13:45",
      unread: 0,
      status: "resolved",
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      patient: "João Silva",
      channel: "Facebook",
      icon: Facebook,
      lastMessage: "Quais documentos preciso levar?",
      time: "13:20",
      unread: 3,
      status: "waiting",
      avatar: "/placeholder.svg"
    }
  ];

  const currentChat = conversations.find(c => c.id === selectedChat);

  const chatMessages = [
    {
      id: 1,
      sender: "patient",
      message: "Olá, boa tarde!",
      time: "14:30",
      type: "text"
    },
    {
      id: 2,
      sender: "attendant",
      message: "Boa tarde! Em que posso ajudá-la?",
      time: "14:31",
      type: "text"
    },
    {
      id: 3,
      sender: "patient",
      message: "Gostaria de agendar uma consulta com cardiologista. Tenho sentido algumas dores no peito.",
      time: "14:32",
      type: "text"
    }
  ];

  const quickReplies = [
    "Olá! Como posso ajudá-lo(a)?",
    "Vou verificar a disponibilidade para você.",
    "Preciso de alguns dados para o agendamento.",
    "Consulta agendada com sucesso!",
    "Obrigado pelo contato!"
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Enviando mensagem:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Conversations List */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Conversas Ativas
          </CardTitle>
          <CardDescription>Selecione uma conversa para responder</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[480px]">
            <div className="space-y-1 p-4">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedChat === conversation.id 
                      ? 'bg-primary/10 border border-primary/20' 
                      : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setSelectedChat(conversation.id)}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={conversation.avatar} />
                      <AvatarFallback>
                        {conversation.patient.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{conversation.patient}</span>
                          <conversation.icon className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          {conversation.unread > 0 && (
                            <Badge variant="destructive" className="w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground truncate mt-1">
                        {conversation.lastMessage}
                      </p>
                      <Badge 
                        variant="outline" 
                        className={`mt-2 text-xs ${
                          conversation.status === 'active' ? 'border-success text-success' :
                          conversation.status === 'waiting' ? 'border-warning text-warning' :
                          'border-muted text-muted-foreground'
                        }`}
                      >
                        {conversation.status === 'active' ? 'Em atendimento' :
                         conversation.status === 'waiting' ? 'Aguardando' :
                         'Resolvido'}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {currentChat && (
                <>
                  <Avatar>
                    <AvatarImage src={currentChat.avatar} />
                    <AvatarFallback>
                      {currentChat.patient.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{currentChat.patient}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <currentChat.icon className="w-4 h-4" />
                      {currentChat.channel} • Online
                    </CardDescription>
                  </div>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4" />
                Agendar
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4" />
                Histórico
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col h-[480px]">
          {/* Messages */}
          <ScrollArea className="flex-1 mb-4">
            <div className="space-y-4">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'attendant' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'attendant'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <Clock className="w-3 h-3 opacity-60" />
                      <span className="text-xs opacity-60">{message.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Quick Replies */}
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Respostas Rápidas:</p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => setNewMessage(reply)}
                >
                  {reply}
                </Button>
              ))}
            </div>
          </div>

          <Separator className="mb-4" />

          {/* Message Input */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Paperclip className="w-4 h-4" />
            </Button>
            <Input
              placeholder="Digite sua mensagem..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} className="bg-gradient-to-r from-primary to-secondary">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendantPanel;