import Navigation from "@/components/Portfolio/Navigation";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ExperienceSection from "@/components/Portfolio/ExperienceSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import AchievementsSection from "@/components/Portfolio/AchievementsSection";
import ContactSection from "@/components/Portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>
      
      {/* Experience Section */}
      <div id="experience">
        <ExperienceSection />
      </div>
      
      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>
      
      {/* Skills Section */}
      <div id="skills">
        <SkillsSection />
      </div>
      
      {/* Achievements Section */}
      <div id="achievements">
        <AchievementsSection />
      </div>
      
      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
      
      {/* Footer */}
      <footer className="bg-surface py-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Dhruv Raval. Built with passion using React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
