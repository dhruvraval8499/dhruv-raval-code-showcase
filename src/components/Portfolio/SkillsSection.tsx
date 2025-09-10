import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skills = [
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 92, category: "Frontend" },
    { name: "HTML5 & CSS3", level: 98, category: "Frontend" },
    { name: "Shopify Liquid", level: 90, category: "E-commerce" },
    { name: "jQuery", level: 85, category: "Frontend" },
    { name: "REST API", level: 88, category: "Backend" },
    { name: "Node.js (Basics)", level: 70, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Database" }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <Card 
              key={category}
              className="bg-surface border-border/50 backdrop-blur-sm animate-fade-in-up"
              style={{ 
                animationDelay: `${categoryIndex * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">{category}</h3>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="space-y-2"
                      style={{ 
                        animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s`,
                        animationFillMode: 'both'
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-muted"
                        />
                        <div 
                          className="absolute top-0 left-0 h-3 rounded-full bg-gradient-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (index * 0.1) + 0.5}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Circular Skills Visualization */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.slice(0, 4).map((skill, index) => (
            <div 
              key={skill.name}
              className="text-center animate-scale-in"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray={`${skill.level}, 100`}
                    className="drop-shadow-[0_0_6px_hsl(var(--primary)/0.6)]"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{skill.level}%</span>
                </div>
              </div>
              <h4 className="font-semibold text-foreground">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;