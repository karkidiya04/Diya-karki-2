# High-Editorial Live-Construction Portfolio

A high-editorial developer and creator portfolio for Diya Karki, featuring an interactive multi-cursor live construction sequence on initial load and bidirectional scroll-driven blueprint-to-component transformations, visually styled after the rich dark espresso and rose-terracotta reference aesthetic.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following directions have been confirmed and are locked for the execution phase:
> - **Construction Behavior**: On landing, the website plays a choreographed multi-cursor auto-assembly sequence that visibly builds header, hero, project, and creative modules with animated cursors, selection boxes, and live typing. A visible **"Skip to Portfolio"** action allows instant access. Users can also trigger a **"Replay Construction"** or toggle **"Blueprint Mode"** anytime.
> - **Visual Identity**: High-editorial dark espresso (`#120D11`, `#181216`) canvas with dusty rose and terracotta accents (`#D98A84`, `#E89D97`, `#8E3E47`), cream paper highlights (`#F8EFEB`), circular badge stamps ("LET'S WORK TOGETHER", "COMPUTER ENGINEERING"), and refined editorial typography pairing.
> - **Bidirectional Scroll Tech Effects**: As the user scrolls down, sections transition smoothly from schematic wireframe blueprints with coordinate markers into fully rendered polished editorial cards. Scrolling up reverses the transition seamlessly without performance hitches.

---

## 1. Overview & Core Concept

- **What It Does**: Presents Diya Karki as an undergraduate Computer Engineering student, developer, and AI/digital creator. Rather than loading as a static site, the app loads with multiple simulated collaborative cursors (e.g. `Diya (Code)`, `Blueprint Bot`, `UI Engine`) actively laying out grid lines, drawing containers, and dropping in components before yielding full interactive control.
- **Target Audience**: Technical recruiters, internship coordinators, open-source collaborators, and creative media clients looking for a student developer who stands out with exceptional taste, frontend craft, and real Python/Android engineering focus.
- **Key Value**: Delivers the exact high-fashion editorial aesthetic of the reference image while demonstrating advanced frontend engineering through hardware-accelerated SVG cursor paths, state machines, and bidirectional scroll choreography.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Initial Landing & Live Construction Sequence**:
   - The screen opens in an architectural blueprint grid.
   - Three animated cursors with distinct nametags and pastel indicators spawn on screen:
     - `Diya (Engineering)`: Draws the navigation bar and hero headline *"Hi, I'm Diya karki"*.
     - `Studio Engine`: Measures and expands the *Study Buddy* Python IDE card with coordinate lines.
     - `Creative Bot`: Drops in the creative work gallery and circular typography stamps.
   - A quiet top-right control offers **"Skip Assembly"** or speed-up controls.
   - Upon completion, the cursors complete the layout, celebrate with a subtle pulse, and seamlessly unlock full scrolling and interaction.

2. **Bidirectional Scroll & Blueprint Tech Effects**:
   - As sections enter the viewport, an ambient scroll listener drives a CSS custom property / progress value (`0` to `1`).
   - At `progress < 0.3`, components show architectural hairline grid lines, technical coordinate callouts (`W: 100%`, `H: 480px`), and monospace outlines.
   - Between `0.3` and `0.8`, textures, typography weights, and color fills materialize.
   - At `> 0.8`, the component is fully rendered in rich editorial espresso and rose gold.
   - Reversing the scroll smoothly dissolves components back into structural blueprints.

3. **CV & Technical Deep-Dive**:
   - A persistent floating action and hero button trigger the high-resolution CV modal embedding Diya's verified PDF (`Diya_Karki_CV_4d8d52c6.pdf`) with one-click download.

4. **Interactive Python IDE Simulator & Creative Gallery**:
   - Interactive *Study Buddy* Android Python terminal simulator allows visitors to execute mock study-tracker scripts and pip package installation commands.
   - Audio beat sampler for music creation with Web Audio synth chimes and animated frequency bars.
   - Validated contact form with simulated dispatch receipt.

### Visual Identity & Theme

- **Palette**:
  - Dominant Canvas: Deep espresso & obsidian (`#120D11`, `#191217`, `#0E090C`).
  - Secondary Structural Surfaces: Charcoal plum & muted mahogany (`#231A21`, `#2D212A`).
  - High-Fidelity Accents: Dusty rose (`#D98A84`), terracotta blush (`#E89D97`), and wine crimson (`#8E3E47`).
  - Text & Accents: Warm cream paper (`#F8EFEB`, `#DDD0C8`) for high contrast readability and accessibility.
- **Typography**:
  - Headings & Editorial Display: High-impact condensed/editorial serif and geometric display (`Outfit` and `Fraunces` / `Playfair Display`).
  - Body & Reading: Clean geometric sans (`DM Sans`).
  - Technical Overlays & Blueprint Coordinates: Tabular monospace (`JetBrains Mono`).
- **Signature Editorial Details from Reference**:
  - Rotating circular badge stamps ("LET'S WORK TOGETHER", "COMPUTER ENGINEERING • NEPAL").
  - Numbered editorial case studies ("01 STUDY BUDDY", "02 AI VIDEO SYNTHESIS", "03 AUDIO & BEATS").
  - "The Process" editorial split-step layout (01 Discover, 02 Define, 03 Design, 04 Deliver).
  - Editorial color palette swatch bar and typography specimen card.

---

## 3. Key Product Decisions & Trade-Offs

- **Performance-First Cursor Animation Engine**:
  - *Chosen Approach*: Pure CSS keyframes and RAF-driven SVG cursor transforms without heavy third-party physics packages.
  - *Why*: Ensures 60fps buttery execution across mobile phones and low-power laptops without dropped frames.
  - *Alternative Considered*: Canvas-only rendering (rejected because HTML accessibility and text selection would be broken during construction).

- **Bidirectional Scroll Architecture**:
  - *Chosen Approach*: `IntersectionObserver` coupled with throttled `scrollY` calculation to modulate component render states without layout thrashing.
  - *Why*: Zero layout repaints (`transform` and `opacity` only), fully reversible on scroll up.

- **Non-Destructive Experience**:
  - *Chosen Approach*: Providing a prominent "Skip" button and remembering state in session storage so repeat visitors or recruiters can jump straight to reading the content immediately.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                       App Container                         │
│   (Theme: Espresso/Rose, CV Modal State, Blueprint State)   │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
               ▼                              ▼
┌──────────────────────────────┐ ┌────────────────────────────┐
│ Multi-Cursor Construction    │ │ Bidirectional Scroll       │
│ Controller (RAF & Timers)    │ │ Progression Controller     │
│ - Cursor 1: Diya (Dev)       │ │ - Viewport Observers       │
│ - Cursor 2: Studio Bot       │ │ - Blueprint Matrix State   │
│ - Skip / Replay State        │ │ - Reversible Transforms    │
└──────────────┬───────────────┘ └────────────┬───────────────┘
               │                              │
               └──────────────┬───────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Portfolio Views                        │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ 00. Top Navigation (Brand, Nav links, Blueprint toggle)│ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 01. Hero Section (Editorial Title, Multi-Cursor Stage) │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 02. About & Editorial Identity (CV Facts, Far Western) │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 03. Brand & Engineering System (Color Swatches, Type)  │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 04. Technical Skills (Visual gauges & realistic specs) │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 05. Study Buddy Showcase (Interactive Python Simulator)│ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 06. Creative Works & Process (Media lightbox & audio)  │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 07. Education & Roadmap (2nd Sem BE Computer Eng)     │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 08. Editorial Contact & Stamp ("Let's Work Together")  │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Component & State Flow

- `constructionState`: `'building' | 'completed' | 'skipped'`
- `blueprintMode`: boolean toggle to preview raw architectural blueprints at any time.
- `scrollProgress`: per-section normalized `[0, 1]` value modulating hairline wireframe opacity vs. solid editorial surfaces.
- `portfolioData.ts`: Central source of truth preserving all authentic details from Diya's CV and academic career.
