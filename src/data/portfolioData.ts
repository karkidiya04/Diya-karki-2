/**
 * Personal Portfolio Data for Diya Karki
 * 
 * Edit this file to update any text, links, projects, skills, or contact info.
 */

export interface SkillItem {
  id: string;
  name: string;
  category: 'Development' | 'AI & Emerging Tech' | 'Creative & Media';
  levelDescription: string; // Realistic level description (no fake 99% stats)
  progressPercent: number;  // 1-100 visual progress
  highlights: string[];
}

export interface CreativeItem {
  id: string;
  title: string;
  category: 'AI Video' | 'Digital Marketing' | 'Music' | 'Social Media' | 'AI Experiments';
  categoryLabel: string;
  description: string;
  toolsUsed: string[];
  aspectRatio: string;
  accentColor: string;
  previewType: 'video' | 'design' | 'audio' | 'interactive';
  details: string;
}

export interface LearningItem {
  id: string;
  topic: string;
  status: 'In Progress' | 'Active Exploration' | 'Building Projects';
  description: string;
  nextGoal: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Diya karki',
    location: 'Nepal',
    education: "Bachelor's 2nd Semester — Computer Engineering",
    institution: 'Far Western University, Nepal',
    heroHeadline: "Hi, I'm Diya karki",
    heroSubtitle: 'Computer Science Student • Developer • AI & Digital Creator',
    heroDescription:
      'I’m a computer science student passionate about building apps, exploring AI, creating digital content, and turning ideas into real projects.',
    aboutBio:
      "I am a bachelor's second semester Computer Engineering student at Far Western University from Nepal. Driven by curiosity and a genuine passion for technology, I spend my days coding software, exploring Android and Python development, experimenting with generative AI, and crafting digital visual media. As an early-career learner, I focus on building practical applications from the ground up, understanding computer science fundamentals, and turning creative concepts into real, working prototypes.",
    cvPdfPath: '/assets/aistudio/Diya_Karki_CV_4d8d52c6.pdf',
    email: 'karkidiya.04@gmail.com',
    phone: '+977 9743525220',
    socialLinks: {
      github: 'https://github.com/diyakarki', // replace with actual handle
      instagram: 'https://instagram.com/diyakarki', // replace with actual handle
      youtube: 'https://youtube.com/@diyakarki', // replace with actual handle
      linkedin: 'https://linkedin.com/in/diyakarki', // replace with actual handle
      email: 'mailto:karkidiya.04@gmail.com',
    },
  },

  skills: [
    {
      id: 'python',
      name: 'Python',
      category: 'Development',
      levelDescription: 'Object-Oriented Programming, Scripting & App Logic',
      progressPercent: 78,
      highlights: ['OOP Architectures', 'Data Structures', 'Package Management', 'Script Automation'],
    },
    {
      id: 'android',
      name: 'Android Development',
      category: 'Development',
      levelDescription: 'Mobile UI Layouts, App Lifecycle & Runtime',
      progressPercent: 65,
      highlights: ['Android Studio', 'Mobile Architecture', 'Mobile Python Environment Research'],
    },
    {
      id: 'cs-foundations',
      name: 'Computer Science',
      category: 'Development',
      levelDescription: 'Core Academic Engineering Principles',
      progressPercent: 75,
      highlights: ['C Programming', 'Algorithms & Logic', 'System Architecture', 'Discrete Math'],
    },
    {
      id: 'ai-tools',
      name: 'AI Tools & GenAI',
      category: 'AI & Emerging Tech',
      levelDescription: 'Prompt Engineering & Generative Workflows',
      progressPercent: 72,
      highlights: ['LLM Workflow Integration', 'Generative Media', 'API Tooling', 'Vision & Audio AI'],
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      category: 'Creative & Media',
      levelDescription: 'Campaign Ideation, Analytics & Brand Growth',
      progressPercent: 68,
      highlights: ['Content Distribution', 'Audience Engagement', 'Visual Strategy', 'SEO Fundamentals'],
    },
    {
      id: 'graphic-design',
      name: 'Graphic Design',
      category: 'Creative & Media',
      levelDescription: 'Visual Layouts, Brand Identity & UI Craft',
      progressPercent: 74,
      highlights: ['UI/UX Mockups', 'Typography Hierarchy', 'Asset Creation', 'Visual Branding'],
    },
    {
      id: 'video-creation',
      name: 'Video Creation',
      category: 'Creative & Media',
      levelDescription: 'Short-Form Motion, AI Video & Video Editing',
      progressPercent: 70,
      highlights: ['AI Video Generation', 'Video Pacing & Motion', 'Kinetic Typography', 'Storyboarding'],
    },
    {
      id: 'music-creation',
      name: 'Music Creation',
      category: 'Creative & Media',
      levelDescription: 'Audio Sequencing, Beats & Soundtrack Ambience',
      progressPercent: 62,
      highlights: ['DAW Basics', 'Beat Production', 'Atmospheric Audio', 'Background Music for Media'],
    },
  ] as SkillItem[],

  featuredProject: {
    id: 'study-buddy',
    title: 'Study Buddy',
    tagline: 'Python-based Student Productivity & Android IDE Environment',
    primaryGoal:
      'Build a full Android Python IDE that allows users to write and run Python code on Android and install Python packages similar to a modern Python environment.',
    fullDescription:
      "Study Buddy is a Python-based student productivity application designed to help students manage their academic activities efficiently. It allows users to organize study sessions, track tasks, set goals, monitor progress, and analyze study performance through simple data management and analytics features. Its main goal is to improve students' time management, productivity, and learning habits.",
    techStack: ['Python', 'Android', 'Package Management', 'OOP with Python', 'SQLite / Local Storage'],
    keyPillars: [
      {
        title: 'Android Python Environment',
        detail:
          'Prototyping an Android runtime layer capable of interpreting Python code and handling package dependencies locally on mobile devices.',
      },
      {
        title: 'Session & Goal Tracking',
        detail:
          'Built-in focus timer (Pomodoro technique) linked directly with student curriculum modules and customizable targets.',
      },
      {
        title: 'Performance Analytics',
        detail:
          'Clean, quantifiable insight logs illustrating weekly study streaks, subject hour distribution, and task completion velocity.',
      },
      {
        title: 'Lightweight & Offline-First',
        detail:
          'Ensures students in areas with varying internet connectivity can organize coursework and write code completely offline.',
      },
    ],
    // Placeholders for external URLs
    githubUrl: '#', // Diya can replace with real repository link
    demoUrl: '#',   // Diya can replace with real preview link
  },

  creativeWorks: [
    {
      id: 'ai-video',
      title: 'AI Video Creation & Motion Narrative',
      category: 'AI Video',
      categoryLabel: 'AI Video',
      description:
        'Experimenting with text-to-video generation, generative cameras, and cinematic storytelling using cutting-edge multimodal AI tools.',
      toolsUsed: ['Runway / Luma', 'Midjourney', 'Premiere Pro', 'Prompt Engineering'],
      aspectRatio: '16:9',
      accentColor: '#8B5CF6',
      previewType: 'video',
      details:
        'Exploring the intersection of generative video synthesis and creative direction, creating high-impact motion clips with dynamic camera angles and textured lighting.',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Social Campaigns',
      category: 'Digital Marketing',
      categoryLabel: 'Digital Marketing',
      description:
        'Designing conversion-focused campaign graphics, brand style kits, and engagement content tailored for digital platforms.',
      toolsUsed: ['Figma', 'Photoshop', 'Canva Pro', 'Analytics Insights'],
      aspectRatio: '4:3',
      accentColor: '#EC4899',
      previewType: 'design',
      details:
        'Developing multi-channel marketing assets that communicate value clearly with strong visual hierarchy, bold type, and consistent color palettes.',
    },
    {
      id: 'music-beats',
      title: 'Music & Lo-Fi Beat Production',
      category: 'Music',
      categoryLabel: 'Music Creation',
      description:
        'Crafting chill lo-fi study loops, ambient electronic soundscapes, and background melodies designed for deep focus and study sessions.',
      toolsUsed: ['FL Studio', 'Synthesizers', 'Drum Sequencing', 'Audio Mastering'],
      aspectRatio: '1:1',
      accentColor: '#3B82F6',
      previewType: 'audio',
      details:
        'Producing melodic beats and relaxing ambient harmonies tailored to accompany long coding and study sessions.',
    },
    {
      id: 'social-content',
      title: 'Social Media Content & Visual Carousels',
      category: 'Social Media',
      categoryLabel: 'Social Media Content',
      description:
        'Creating informative tech carousels, bite-sized coding tips, and visually engaging graphics for developer and student communities.',
      toolsUsed: ['Graphic Design', 'Content Strategy', 'Copywriting', 'Visual Layouts'],
      aspectRatio: '4:3',
      accentColor: '#10B981',
      previewType: 'design',
      details:
        'Distilling complex computer science and coding topics into scannable, beautifully organized visual carousels.',
    },
    {
      id: 'ai-experiments',
      title: 'AI Experiments & Generative Visuals',
      category: 'AI Experiments',
      categoryLabel: 'AI Experiments',
      description:
        'Exploring prompt chaining, neural visual synthesis, and AI agent workflows to test the boundaries of emerging creative technology.',
      toolsUsed: ['Stable Diffusion', 'Gemini AI', 'Automation Scripts', 'Python'],
      aspectRatio: '16:9',
      accentColor: '#F59E0B',
      previewType: 'interactive',
      details:
        'Probing the creative possibilities of generative AI pipelines, combining Python scripts with modern model APIs to automate generative visual production.',
    },
  ] as CreativeItem[],

  education: {
    degree: "Bachelor's in Computer Engineering",
    stage: '2nd Semester Undergraduate',
    institution: 'Far Western University',
    location: 'Nepal',
    focus: 'Core engineering, algorithmic thinking, software paradigms, and hardware-software integration.',
    coursework: [
      'Object-Oriented Programming (Python & C)',
      'Digital Logic & Computer Systems',
      'Data Structures & Algorithmic Problem Solving',
      'Web Foundations (HTML5, CSS3, Modern JavaScript)',
      'Engineering Mathematics & Discrete Systems',
    ],
  },

  learningRoadmap: [
    {
      id: 'android-dev',
      topic: 'Android App Development',
      status: 'In Progress',
      description:
        'Deepening Android native lifecycle, Jetpack components, and researching embedded Python runtimes on mobile OS.',
      nextGoal: 'Build native prototype of the Study Buddy Android runner interface.',
    },
    {
      id: 'python-dev',
      topic: 'Python Development',
      status: 'Building Projects',
      description:
        'Mastering advanced OOP patterns, virtual environments, custom package bundling, and data persistence with SQLite.',
      nextGoal: 'Complete the core package management engine for Study Buddy.',
    },
    {
      id: 'gen-ai',
      topic: 'AI and Generative AI',
      status: 'Active Exploration',
      description:
        'Investigating LLM APIs, function calling, multimodal prompts, and integrating intelligent assistants into productivity tools.',
      nextGoal: 'Integrate smart study suggestions into Study Buddy.',
    },
    {
      id: 'web-dev',
      topic: 'Web Development',
      status: 'Building Projects',
      description:
        'Expanding responsive UI systems, component-driven architecture with React and modern Tailwind CSS.',
      nextGoal: 'Create accessible, performant web interfaces with clean design standards.',
    },
    {
      id: 'digital-market',
      topic: 'Digital Marketing',
      status: 'In Progress',
      description:
        'Learning digital funnel metrics, SEO best practices, copywriting, and targeted outreach for digital products.',
      nextGoal: 'Launch an organic tech blog and project showcase community.',
    },
    {
      id: 'creative-tech',
      topic: 'Creative Technology',
      status: 'Active Exploration',
      description:
        'Blending code with visual art, generative motion, sound synthesis, and interactive web experiences.',
      nextGoal: 'Produce an interactive multimedia showpiece combining audio and generative art.',
    },
  ] as LearningItem[],
};
