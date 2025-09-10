import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "React Developer",
      company: "SHV 360 (SHVDevX)",
      location: "Mumbai",
      period: "Aug 2023 – Present",
      type: "Full-time",
      description: "Leading React development projects, implementing modern web solutions, and collaborating with cross-functional teams to deliver high-quality applications."
    },
    {
      title: "React Developer", 
      company: "Appmixo LLC",
      location: "Surat",
      period: "Dec 2021 – June 2023",
      type: "Full-time",
      description: "Developed and maintained React applications, worked on user interface improvements, and contributed to the company's digital transformation initiatives."
    },
    {
      title: "Shopify Developer",
      company: "Appmixo LLC", 
      location: "Surat",
      period: "Dec 2020 – Nov 2021",
      type: "Full-time",
      description: "Specialized in Shopify theme development, custom app creation, and e-commerce solution implementation for various clients."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Experience Timeline
          </h2>
          <p className="text-muted-foreground text-lg">My professional journey</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div 
                  className={`w-full md:w-5/12 ml-12 md:ml-0 animate-fade-in-up`}
                  style={{ 
                    animationDelay: `${index * 0.3}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <Card className="bg-surface border-border/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-primary/10 text-primary border border-primary/20">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-primary" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;