import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/pro pic.png";
import { MapPin, Mail, Phone } from "lucide-react";

const AboutSection = () => {
  const strengths = [
    "Quick Learner", "Management Skills", "Patience", 
    "Passion for Coding", "Honesty", "Problem Solving"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg">Get to know who I am</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src={profileImage} 
                alt="Dhruv Raval - React & Shopify Developer"
                className="relative w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="animate-slide-in-right space-y-8">
            <Card className="bg-surface border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Personal Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Surat, Gujarat, India</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <a 
                      href="mailto:ravaldhruv70@gmail.com" 
                      className="hover:text-primary transition-colors"
                    >
                      ravaldhruv70@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <a 
                      href="tel:+918780945877" 
                      className="hover:text-primary transition-colors"
                    >
                      +91 8780945877
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-surface border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Core Strengths</h3>
                
                <div className="flex flex-wrap gap-3">
                  {strengths.map((strength, index) => (
                    <Badge 
                      key={strength}
                      variant="secondary" 
                      className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: 'both'
                      }}
                    >
                      {strength}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;