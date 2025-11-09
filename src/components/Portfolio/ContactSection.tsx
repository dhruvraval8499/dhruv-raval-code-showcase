import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, Phone, MapPin, Github, Linkedin, 
  Twitter, Copy, CheckCircle, Send 
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied to clipboard!",
      description: `${field} has been copied successfully.`,
    });
    
    setTimeout(() => setCopiedField(null), 2000);
  };

  const socialLinks = [
    // { 
    //   icon: Github, 
    //   label: "GitHub", 
    //   href: "https://github.com/dhruv", 
    //   color: "hover:text-foreground" 
    // },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/dhruv-raval-034b161b6/", 
      color: "hover:text-primary" 
    },
    // { 
    //   icon: Twitter, 
    //   label: "Twitter", 
    //   href: "https://twitter.com/dhruv", 
    //   color: "hover:text-accent" 
    // }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">Let's discuss your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left space-y-8">
            <Card className="bg-surface border-border/50 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between group cursor-pointer p-3 rounded-lg hover:bg-primary/5 transition-colors"
                     onClick={() => handleCopy("ravaldhruv70@gmail.com", "Email")}>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">ravaldhruv70@gmail.com</p>
                    </div>
                  </div>
                  {copiedField === "Email" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>

                <div className="flex items-center justify-between group cursor-pointer p-3 rounded-lg hover:bg-primary/5 transition-colors"
                     onClick={() => handleCopy("+918780945877", "Phone")}>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 8780945877</p>
                    </div>
                  </div>
                  {copiedField === "Phone" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>

                <div className="flex items-center gap-3 p-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Surat, Gujarat, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-surface border-border/50 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">Follow Me</h3>
              </CardHeader>
              
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-muted/50 ${color} transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group`}
                      title={label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-surface border-border/50 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
              </CardHeader>
              
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input 
                        placeholder="Your name"
                        className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      placeholder="Project discussion"
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.8)] transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Availability Badge */}
            <div className="mt-6 text-center">
              <Badge className="bg-green-500/10 text-green-400 border border-green-500/20 px-4 py-2">
                🟢 Available for new projects
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;