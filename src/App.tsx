import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { StudyBuddyShowcase } from './components/StudyBuddyShowcase';
import { CreativeWorkSection } from './components/CreativeWorkSection';
import { EducationSection } from './components/EducationSection';
import { LearningRoadmapSection } from './components/LearningRoadmapSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('diya_portfolio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    }
    // Dark theme by default per user request
    return true;
  });

  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('diya_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('diya_portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-violet-600 selection:text-white transition-colors duration-250">
      {/* Top Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          isDark={isDark}
          onOpenCV={() => setIsCVModalOpen(true)}
        />

        {/* 2. About Me Section */}
        <AboutSection onOpenCV={() => setIsCVModalOpen(true)} />

        {/* 3. Skills Section */}
        <SkillsSection />

        {/* 4. Featured Project — Study Buddy */}
        <StudyBuddyShowcase />

        {/* 5. Creative Work Section */}
        <CreativeWorkSection />

        {/* 6. Education Section */}
        <EducationSection />

        {/* 7. What I'm Learning Section */}
        <LearningRoadmapSection />

        {/* 8. Contact Section */}
        <ContactSection onOpenCV={() => setIsCVModalOpen(true)} />
      </main>

      {/* 9. Footer */}
      <Footer onOpenCV={() => setIsCVModalOpen(true)} />

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
