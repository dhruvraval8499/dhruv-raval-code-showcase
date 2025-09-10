import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Building } from "lucide-react";

const AchievementsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Achievements
          </h2>
          <p className="text-muted-foreground text-lg">Recognition for excellence</p>
        </div>

        <div className="flex justify-center">
          <Card className="bg-surface border-border/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group max-w-2xl animate-scale-in">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-20 animate-glow-pulse"></div>
                <div className="relative bg-gradient-primary rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center">
                  <Trophy className="w-12 h-12 text-background" />
                </div>
              </div>
              
              <Badge className="bg-primary/10 text-primary border border-primary/20 mb-4 px-4 py-2 text-sm font-medium">
                🏆 Employee Recognition
              </Badge>
              
              <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                Employee of the Month
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">February 2023</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Building className="w-5 h-5 text-primary" />
                  <span className="font-medium">Appmixo LLC</span>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                Recognized for exceptional performance, dedication to quality deliverables, 
                and outstanding contribution to team success during challenging project deadlines.
              </p>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-primary font-medium">
                  "Dhruv consistently delivered high-quality React applications and demonstrated 
                  exceptional problem-solving skills throughout the month."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="text-3xl font-bold text-secondary mb-2">3.7+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <p className="text-muted-foreground">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;