# raghu-manohar-portfolio

Personal portfolio website for **Raghu Manohar Sakuru** — Senior Technical Program Manager & DataOps Architect with 9+ years at Apple.

## Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS**
- **No external UI libraries** — custom components throughout

## Design

Dark, data-pipeline-inspired aesthetic with:
- Animated particle canvas hero section
- Live metric counters (Intersection Observer)
- Skill bars with scroll-triggered fill animations
- Hover glow effects on all cards
- Pipeline visualization widget
- Monospace + display font pairing (JetBrains Mono + Syne)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

Outputs a fully static site to the `out/` directory.

## Project Structure

```
src/
  app/
    globals.css        # Design tokens, animations, global styles
    layout.tsx         # Root layout + metadata
    page.tsx           # Page composition
  components/
    Nav.tsx            # Fixed navigation with scroll state
    Hero.tsx           # Full-screen hero with particle canvas + pipeline widget
    Metrics.tsx        # Animated counter metrics strip
    About.tsx          # About section with value pillars
    Projects.tsx       # Featured work / case studies
    Experience.tsx     # Timeline-based career history
    Skills.tsx         # Skill bars + tech cloud
    Contact.tsx        # Contact info + open-to-work card
    Footer.tsx
    ScrollAnimator.tsx # IntersectionObserver scroll reveal
```

## Sections

1. **Hero** — Strong tagline, animated pipeline visualization, particle background
2. **Metrics** — Key impact numbers (animated on scroll)
3. **About** — Narrative + core capability pillars
4. **Featured Work** — 3 flagship Apple projects + 1 prior engagement
5. **Experience** — Timeline: Apple → Infosys → Polaris
6. **Skills** — Animated bars by category + full tech badge cloud
7. **Contact** — Contact details + open-to-work CTA
