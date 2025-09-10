import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = {
    React: [
      "Niyogin", "iScreening", "Autolister", "Kristagram", 
      "Edelytics Online", "Finland School Thane", "Finland School Sobo"
    ],
    Shopify: [
      "Plum Diamond", "Pet4ever", "Gift Tree", "Manucurist"
    ],
    JavaScript: [
      "Hautcarate"
    ]
  };

  const getProjectDescription = (project: string, tech: string) => {
    const descriptions: Record<string, string> = {
      "Niyogin": "Modern fintech application with React, featuring dynamic dashboards and secure payment integrations.",
      "iScreening": "Advanced screening platform with real-time data processing and intuitive user interface.",
      "Autolister": "Automated listing management system with advanced filtering and search capabilities.",
      "Kristagram": "Social media platform with real-time messaging and content sharing features.",
      "Edelytics Online": "Analytics dashboard with comprehensive data visualization and reporting tools.",
      "Finland School Thane": "Educational management system with student portal and administrative features.",
      "Finland School Sobo": "Comprehensive school management platform with parent-teacher communication tools.",
      "Plum Diamond": "Luxury e-commerce store with custom Shopify theme and advanced product filtering.",
      "Pet4ever": "Pet accessories e-commerce platform with subscription-based services.",
      "Gift Tree": "Custom gift store with personalization features and seamless checkout experience.",
      "Manucurist": "Beauty products e-commerce site with virtual try-on features.",
      "Hautcarate": "Skincare consultation platform with AI-powered recommendations."
    };
    return descriptions[project] || `${tech} project with modern features and responsive design.`;
  };

  return (
    <section className="py-20 px-4 bg-gradient-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">Showcasing my development expertise</p>
        </div>

        {Object.entries(projects).map(([tech, projectList], techIndex) => (
          <div key={tech} className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              {tech} Projects
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectList.map((project, index) => (
                <Card 
                  key={project}
                  className="bg-surface border-border/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group hover:-translate-y-2 animate-scale-in"
                  style={{ 
                    animationDelay: `${(techIndex * 0.2) + (index * 0.1)}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        className={`${
                          tech === 'React' ? 'bg-cyan-glow/10 text-cyan-glow border-cyan-glow/20' :
                          tech === 'Shopify' ? 'bg-secondary/10 text-secondary border-secondary/20' :
                          'bg-primary/10 text-primary border-primary/20'
                        } font-medium`}
                      >
                        {tech}
                      </Badge>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/20">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/20">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project}
                    </h4>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {getProjectDescription(project, tech)}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {tech === 'React' && (
                        <>
                          <Badge variant="outline" className="text-xs">React</Badge>
                          <Badge variant="outline" className="text-xs">TypeScript</Badge>
                          <Badge variant="outline" className="text-xs">Tailwind</Badge>
                        </>
                      )}
                      {tech === 'Shopify' && (
                        <>
                          <Badge variant="outline" className="text-xs">Liquid</Badge>
                          <Badge variant="outline" className="text-xs">JavaScript</Badge>
                          <Badge variant="outline" className="text-xs">CSS</Badge>
                        </>
                      )}
                      {tech === 'JavaScript' && (
                        <>
                          <Badge variant="outline" className="text-xs">Vanilla JS</Badge>
                          <Badge variant="outline" className="text-xs">HTML5</Badge>
                          <Badge variant="outline" className="text-xs">CSS3</Badge>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;