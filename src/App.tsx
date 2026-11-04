import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { StudyBuddyShowcase } from './components/StudyBuddyShowcase';
import { BrandSystemSection } from './components/BrandSystemSection';
import { ProcessSection } from './components/ProcessSection';
import { CreativeWorkSection } from './components/CreativeWorkSection';
import { EducationSection } from './components/EducationSection';
import { LearningRoadmapSection } from './components/LearningRoadmapSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { LiveConstructionCurtain } from './components/LiveConstructionCurtain';
import { useScrollProgress } from './hooks/useScrollProgress';

export default function App() {
  const [isBuilding, setIsBuilding] = useState<boolean>(true);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const scrollData = useScrollProgress();

  const handleConstructionComplete = () => {
    setIsBuilding(false);
  };

  const handleSkipConstruction = () => {
    setIsBuilding(false);
  };

  const handleReplayConstruction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsBuilding(true);
  };

  return (
    <div className="min-h-screen bg-[#120D11] text-[#F8EFEB] antialiased selection:bg-[#D98A84] selection:text-[#120D11] transition-colors duration-250 relative">
      {/* Live Interactive Construction Curtain Overlay */}
      <LiveConstructionCurtain
        isBuilding={isBuilding}
        onComplete={handleConstructionComplete}
        onSkip={handleSkipConstruction}
      />

      {/* Persistent Bidirectional Scroll Tech Ribbon */}
      <div className="fixed bottom-4 left-4 z-30 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B131A]/90 border border-[#D98A84]/30 backdrop-blur-md shadow-lg text-[10px] font-mono text-[#D5C7C1]">
        <span
          className={`w-2 h-2 rounded-full ${
            scrollData.direction === 'down' ? 'bg-[#D98A84] animate-pulse' : 'bg-[#E89D97]'
          }`}
        />
        <span>
          SCROLL: {Math.round(scrollData.progress * 100)}% [{scrollData.direction.toUpperCase()}]
        </span>
        <span className="text-[#D98A84]">· TECH REVERSIBLE</span>
      </div>

      {/* Top Navigation */}
      <Navbar
        onOpenCV={() => setIsCVModalOpen(true)}
        onReplayConstruction={handleReplayConstruction}
      />

      {/* Main Content Sections */}
      <main>
        {/* 01. Hero Section */}
        <HeroSection onOpenCV={() => setIsCVModalOpen(true)} />

        {/* 02. About Me Section */}
        <AboutSection onOpenCV={() => setIsCVModalOpen(true)} />

        {/* 03. Brand & Architecture Systems Section (Inspired by Reference) */}
        <BrandSystemSection />

        {/* 04. Technical & Creative Skills Matrix */}
        <SkillsSection />

        {/* 05. Featured Project — Study Buddy (Android Python IDE) */}
        <StudyBuddyShowcase />

        {/* 06. The Process (Inspired by Reference Image 01-04 + Moodboard Note) */}
        <ProcessSection />

        {/* 07. Creative Work & Media (Numbered Case Studies 01-05) */}
        <CreativeWorkSection />

        {/* 08. Education Section */}
        <EducationSection />

        {/* 09. What I'm Learning Roadmap */}
        <LearningRoadmapSection />

        {/* 10. Contact Section */}
        <ContactSection onOpenCV={() => setIsCVModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenCV={() => setIsCVModalOpen(true)}
        onReplayConstruction={handleReplayConstruction}
      />

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
