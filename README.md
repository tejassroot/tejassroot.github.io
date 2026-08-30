# Tejas Thorat — Cybersecurity & Offensive Security Portfolio

A modern, high-performance cybersecurity portfolio website for **Tejas Thorat** (Penetration Tester • Bug Hunter • Cybersecurity Researcher). Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

## 🛡️ Key Portfolio Highlights

- **Aesthetic**: Premium dark cybersecurity aesthetic (`#080c14` charcoal/carbon backdrop with electric emerald & cyan accents, subtle terminal elements, zero cheesy hacker tropes).
- **Interactive Terminal Widget**: Authentic `$ whoami`, `$ focus`, `$ methodology`, `$ status` console with live commands (`tools`, `certs`, `contact`, `clear`) and 1-click clipboard copy.
- **Quantified Impact Metrics**: 10+ Web Apps Assessed, 20+ Verified Vulns, 15+ Bug Bounty Targets, 10+ VAPT Reports Authored, 100,000+ Network Packets Analyzed.
- **Professional Timeline**: Cyber Security Intern at *RudraTech Services* (+40% patch turnaround improvement) & Freelance Bug Hunter (*HackerOne* & *Bugcrowd*).
- **Categorized Skills**: Categorized into *Web & API Security*, *Network Security*, *Reconnaissance*, *Tools & Utilities*, and *Programming & OS* with interactive instant search & category filtering.
- **Featured Projects**:
  - **ReconAutomator**: Multi-stage external attack-surface discovery pipeline (Bash, Python, Subfinder, Dnsx, Httpx, Katana, Naabu) with interactive workflow/terminal logs.
  - **JSFinder**: Asynchronous JavaScript asset & hidden endpoint discovery tool (Python, Asyncio, Regex) with live sample output previews.
- **Methodology ("How I Hunt")**: 7-stage security lifecycle (01 Scope, 02 Recon, 03 Attack Surface, 04 Manual Testing, 05 Validation, 06 Impact, 07 Reporting) emphasizing manual validation over automated noise.
- **Hall of Fame**: Responsible disclosure recognition badges for *Microsoft*, *Bosch*, *Adore Me*, *Victoria's Secret*, *TU Delft*, *Dick's Sporting Goods*, and *Genius*.
- **Certifications & Honors**: CRTA (In Progress), MCRTA (In Progress), IBM Cybersecurity Fundamentals, Cisco Ethical Hacker, and *Intern of the Month* award at RudraTech.
- **Interactive Resume / CV Modal**: Full formatted CV viewer with 1-click **Print / Save PDF** (`window.print()`) and **ATS Plain-Text Copy**.
- **Contact Channel**: Direct inquiry dispatcher, WhatsApp/Phone link, Location, LinkedIn, and GitHub links.

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Production Build & Preview
```bash
npm run build
npm run preview
```

## 📁 Architecture

```
src/
├── components/
│   ├── About.tsx           # Narrative & 4 core security pillars
│   ├── Certifications.tsx  # Certifications, Honors, Education
│   ├── Contact.tsx         # Direct dispatcher, phone, email, socials
│   ├── Experience.tsx       # RudraTech & Freelance Bug Hunter timeline
│   ├── Footer.tsx          # Security philosophy quote & copyright
│   ├── Hero.tsx            # Headline, CTAs, status badges
│   ├── icons.tsx           # Pixel-perfect GitHub & LinkedIn icons
│   ├── Methodology.tsx     # 7-stage "How I Hunt" interactive pipeline
│   ├── Navbar.tsx          # Frosted sticky nav with live status badge
│   ├── Projects.tsx        # ReconAutomator & JSFinder deep-dive cards
│   ├── ResearchHoF.tsx     # Bug bounty achievements & Hall of Fame
│   ├── ResumeModal.tsx     # Printable CV & ATS text copy modal
│   ├── Skills.tsx          # Categorized competencies with instant search
│   ├── StatsBar.tsx        # 5 verified metric callout cards
│   └── TerminalWidget.tsx  # Interactive terminal status panel
├── data/
│   └── portfolioData.ts    # Single source of truth for portfolio data
├── types.ts                # TypeScript domain models
├── App.tsx                 # Root layout assembler
├── index.css               # Tailwind CSS v4 & custom cyber themes
└── main.tsx                # React entrypoint
```
