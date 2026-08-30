import type {
  StatItem,
  ExperienceRole,
  SkillCategory,
  ProjectItem,
  MethodologyStep,
  HallOfFameCompany,
  CertificationItem,
  EducationItem,
} from '../types';

export const personalInfo = {
  name: 'Tejas Thorat',
  title: 'Penetration Tester • Bug Hunter • Cybersecurity Researcher',
  tagline: 'Security-focused penetration tester specializing in web applications, APIs, enterprise networks, reconnaissance, and manual vulnerability research.',
  location: 'Aurangabad, Maharashtra, India',
  email: 'thorattejas45@gmail.com',
  phone: '+91-9322480901',
  linkedin: 'https://www.linkedin.com/in/tejas-thorat-542533253/',
  github: 'https://github.com/tejassroot',
  status: 'Open to Cybersecurity Opportunities',
  about:
    'Penetration Tester with hands-on experience conducting comprehensive security assessments across web applications, APIs, and enterprise networks. Skilled in simulating real-world adversary attacks, manually verifying vulnerabilities, assessing business impact, and producing actionable remediation guidance.',
  terminalDefaults: {
    whoami: 'tejas-thorat',
    focus: 'Web Security | API Security | Network Security',
    methodology: 'Manual Testing | Reconnaissance | Business Logic',
    status: 'Open to Cybersecurity Opportunities',
    contact: 'thorattejas45@gmail.com | +91-9322480901',
  },
};

export const statsData: StatItem[] = [
  {
    value: '10+',
    label: 'Web Applications Assessed',
    sublabel: 'Comprehensive client & internal VAPT',
    iconName: 'Globe',
  },
  {
    value: '20+',
    label: 'Vulnerabilities Discovered & Verified',
    sublabel: 'OWASP Top 10, BAC, API flaws with zero FP',
    iconName: 'ShieldAlert',
  },
  {
    value: '15+',
    label: 'Bug Bounty Targets Tested',
    sublabel: 'HackerOne & Bugcrowd authorized scopes',
    iconName: 'Target',
  },
  {
    value: '10+',
    label: 'VAPT Reports Authored',
    sublabel: 'Executive summaries & reproducible PoCs',
    iconName: 'FileText',
  },
  {
    value: '100,000+',
    label: 'Network Packets Analyzed',
    sublabel: 'Deep PCAP dissection via Wireshark',
    iconName: 'Activity',
  },
];

export const experienceData: ExperienceRole[] = [
  {
    role: 'Cyber Security Intern',
    company: 'RudraTech Services',
    period: 'March 2026 – Present',
    location: 'Aurangabad, India',
    type: 'Internship',
    achievements: [
      'Performed Vulnerability Assessment and Penetration Testing (VAPT) across 10+ web applications and internal network environments.',
      'Discovered and verified 20+ security vulnerabilities, including OWASP Top 10 vulnerabilities, Broken Access Control, and API authorization bypasses.',
      'Captured and analyzed 100,000+ network packets using Wireshark to isolate network anomalies and insecure protocol handshakes.',
      'Assessed enterprise wireless infrastructure and helped remediate 5+ critical security weaknesses.',
      'Authored 10+ detailed VAPT remediation reports containing reproducible Proof of Concept (PoC) evidence.',
      'Contributed to a 40% improvement in patch turnaround time by collaborating directly with development and sysadmin teams on actionable remediation steps.',
    ],
    skills: [
      'VAPT',
      'OWASP Top 10',
      'Broken Access Control',
      'API Authorization',
      'Wireshark',
      'Wireless Security',
      'Technical Reporting',
      'Remediation Guidance',
    ],
  },
  {
    role: 'Bug Hunter / Bug Bounty Tester',
    company: 'Freelance Security Researcher',
    period: 'Active Research',
    location: 'Remote',
    type: 'Independent / Freelance',
    achievements: [
      'Conducted independent security assessments across 15+ target web applications under authorized vulnerability disclosure programs.',
      'Reported 10+ valid medium and high-severity vulnerabilities across platforms including HackerOne and Bugcrowd.',
      'Performed manual vulnerability validation and responsible disclosure without causing operational disruption.',
      'Focused deeply on access control, API authorization, business logic flaws, reconnaissance automation, and web application security.',
    ],
    skills: [
      'HackerOne',
      'Bugcrowd',
      'BOLA / IDOR',
      'Business Logic Testing',
      'Attack Surface Mapping',
      'Responsible Disclosure',
      'Burp Suite Pro',
      'Manual Validation',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Web & API Security',
    id: 'web-api',
    iconName: 'ShieldCheck',
    description: 'Manual and structured testing of modern web services and API endpoints.',
    skills: [
      { name: 'Web Application Security', highlight: true },
      { name: 'API Security', highlight: true },
      { name: 'OWASP Top 10', highlight: true },
      { name: 'Broken Access Control (BAC)', highlight: true },
      { name: 'API Authorization Testing', highlight: true },
      { name: 'Business Logic Testing', highlight: true },
      { name: 'Authentication & Authorization Testing', highlight: false },
    ],
  },
  {
    title: 'Network Security',
    id: 'network',
    iconName: 'Network',
    description: 'Auditing internal and external infrastructure, wireless, and network protocols.',
    skills: [
      { name: 'Network Security', highlight: true },
      { name: 'Vulnerability Assessment', highlight: true },
      { name: 'Enterprise Network Testing', highlight: false },
      { name: 'Wireless Security', highlight: true },
      { name: 'Packet Analysis', highlight: true },
    ],
  },
  {
    title: 'Reconnaissance',
    id: 'recon',
    iconName: 'Radar',
    description: 'Systematic external footprinting, asset discovery, and endpoint intelligence.',
    skills: [
      { name: 'Reconnaissance', highlight: true },
      { name: 'Attack Surface Mapping', highlight: true },
      { name: 'Subdomain Enumeration', highlight: true },
      { name: 'Endpoint Discovery', highlight: true },
      { name: 'JavaScript Analysis', highlight: true },
      { name: 'API Discovery', highlight: false },
    ],
  },
  {
    title: 'Tools & Utilities',
    id: 'tools',
    iconName: 'Wrench',
    description: 'Industry-standard penetration testing suites and high-throughput CLI scanners.',
    skills: [
      { name: 'Burp Suite', highlight: true },
      { name: 'Nmap', highlight: true },
      { name: 'Wireshark', highlight: true },
      { name: 'Metasploit', highlight: false },
      { name: 'Subfinder', highlight: true },
      { name: 'Dnsx', highlight: false },
      { name: 'Httpx', highlight: true },
      { name: 'Katana', highlight: false },
      { name: 'Naabu', highlight: false },
    ],
  },
  {
    title: 'Programming & OS',
    id: 'programming',
    iconName: 'TerminalSquare',
    description: 'Custom scripting, asynchronous tooling, protocol automation, and systems.',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'Bash Scripting', highlight: true },
      { name: 'Linux (Kali / Debian)', highlight: true },
      { name: 'Windows Security', highlight: false },
      { name: 'Asyncio', highlight: true },
      { name: 'Regex Pattern Matching', highlight: false },
      { name: 'REST APIs', highlight: true },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'reconautomator',
    name: 'ReconAutomator',
    tagline: 'Multi-Stage External Attack-Surface Pipeline',
    description:
      'An automated multi-stage reconnaissance framework designed to accelerate external attack-surface discovery and security testing.',
    stack: ['Bash', 'Python', 'Subfinder', 'Dnsx', 'Httpx', 'Katana', 'Naabu'],
    highlights: [
      'Reduced external attack-surface mapping time by 60%.',
      'Automated extraction and classification of 200+ REST and GraphQL endpoints.',
      'Identified exposed API credentials and misconfigurations during authorized reconnaissance.',
      'Combines passive/active subdomain discovery, DNS resolution, HTTP probing, crawling, port discovery, and structured endpoint extraction.',
    ],
    githubUrl: 'https://github.com/tejassroot',
    cliCommand: './recon.sh -d target.com -o results/ --full-pipeline',
    cliOutput: [
      '[+] [STAGE 1] Running Subfinder + Dnsx passive & active enum...',
      '[+] Found 142 distinct live subdomains (resolved in 4.2s)',
      '[+] [STAGE 2] Probing HTTP services via Httpx (Tech: Nginx, Node.js, Spring)',
      '[+] [STAGE 3] Crawling endpoints via Katana & Naabu port sweep...',
      '[+] Extracted 218 API endpoints (GraphQL introspection enabled on /v1/gql)',
      '[✓] Recon pipeline complete. Results indexed in structured output.',
    ],
    metrics: [
      { label: 'Time Reduction', value: '60%' },
      { label: 'Endpoints Extracted', value: '200+' },
      { label: 'Workflow Stages', value: '6 Phases' },
    ],
  },
  {
    id: 'jsfinder',
    name: 'JSFinder',
    tagline: 'Asynchronous JavaScript Asset & Endpoint Miner',
    description:
      'A modular CLI tool for analyzing JavaScript assets and discovering hidden application routes and source maps.',
    stack: ['Python', 'Asyncio', 'Regex', 'REST APIs'],
    highlights: [
      'Parses 500+ JavaScript files per run with asynchronous high-concurrency fetching.',
      'Extracts hidden application routes, API endpoints, and sensitive parameter references.',
      'Identifies unbundled source maps (.map files) and potentially interesting internal resources.',
      'Supports deep crawling across 50+ subdomains simultaneously.',
      'Implements dynamic rate limiting and respectful concurrency thresholds.',
      'Includes built-in scope guardrails to prevent out-of-scope network requests.',
    ],
    githubUrl: 'https://github.com/tejassroot',
    cliCommand: 'python jsfinder.py -u https://target.com -c 20 --extract-maps',
    cliOutput: [
      '[+] [JSFinder v2.1] Initializing async workers (Concurrency: 20)...',
      '[+] Discovered 512 JS script tags across target domains',
      '[+] Parsing AST & Regex route tables...',
      '[+] Found 3 exposed .map source files in /static/chunks/',
      '[+] Discovered 87 unpublished internal endpoints (e.g. /api/internal/v2/tenant)',
      '[✓] Audit log saved to output/endpoints.json',
    ],
    metrics: [
      { label: 'JS Files / Run', value: '500+' },
      { label: 'Subdomains Crawled', value: '50+' },
      { label: 'Async Engine', value: 'Python 3.12' },
    ],
  },
];

export const methodologyData: MethodologyStep[] = [
  {
    step: '01',
    title: 'Scope & Authorization',
    summary: 'Define clear target boundaries, rules of engagement, and authorization gates.',
    details: [
      'Verify written permission and explicit rules of engagement.',
      'Establish in-scope domains, IP ranges, APIs, and prohibited exclusions.',
      'Ensure safe testing boundaries to eliminate any risk of service disruption.',
    ],
    deliverable: 'Approved RoE & Target Boundary Manifest',
    icon: 'Shield',
  },
  {
    step: '02',
    title: 'Reconnaissance',
    summary: 'Systematically map the full external digital footprint.',
    details: [
      'Map domains, subdomains, DNS records, and open network ports.',
      'Profile running server technologies, web frameworks, and CMS engines.',
      'Mine JavaScript assets, exposed APIs, and public infrastructure records.',
    ],
    deliverable: 'Comprehensive Asset & Subdomain Matrix',
    icon: 'Radar',
  },
  {
    step: '03',
    title: 'Attack Surface Analysis',
    summary: 'Catalog all interactive interfaces and trust boundaries.',
    details: [
      'Map all HTTP/REST/GraphQL endpoints and query parameters.',
      'Identify role matrices (Admin, Manager, User, Anonymous).',
      'Analyze trust boundaries, state transitions, and session tokens.',
    ],
    deliverable: 'Endpoint & Authorization Mapping Graph',
    icon: 'Layers',
  },
  {
    step: '04',
    title: 'Manual Penetration Testing',
    summary: 'Perform rigorous human-led vulnerability verification.',
    details: [
      'Deep manual testing for Broken Access Control (BAC) and BOLA/IDOR.',
      'Evaluate authentication bypasses, session management, and JWTs.',
      'Probe business logic flaws, price/quantity tampering, and race conditions.',
      'Test API authorization drift and unhandled error boundaries.',
    ],
    deliverable: 'Raw Validated Vulnerability Findings',
    icon: 'Terminal',
  },
  {
    step: '05',
    title: 'Validation & PoC Crafting',
    summary: 'Reproduce findings manually and eliminate all false positives.',
    details: [
      'Develop step-by-step reproducible Proof of Concept (PoC) scripts or curl requests.',
      'Strict zero-false-positive standard: verify real exploitation viability.',
      'Ensure zero destructive commands and protect system integrity.',
    ],
    deliverable: 'Clean, Reproducible PoC Evidence Artifacts',
    icon: 'CheckCircle2',
  },
  {
    step: '06',
    title: 'Business Impact Assessment',
    summary: 'Evaluate real-world risk, blast radius, and data exposure.',
    details: [
      'Calculate realistic security impact on confidentiality, integrity, and availability.',
      'Map exploit paths to real-world business risks and regulatory consequences.',
      'Prioritize findings based on actual exploitability rather than theoretical scoring.',
    ],
    deliverable: 'Risk & Impact Severity Matrix',
    icon: 'Flame',
  },
  {
    step: '07',
    title: 'Remediation & Reporting',
    summary: 'Produce executive summaries and developer-ready fix instructions.',
    details: [
      'Author structured VAPT reports with executive and technical sections.',
      'Provide clear, code-level remediation guidance and configuration hardening.',
      'Collaborate with developers during re-testing and verification cycles.',
    ],
    deliverable: 'Actionable VAPT Report & Retest Signoff',
    icon: 'FileCheck',
  },
];

export const hallOfFameData: HallOfFameCompany[] = [
  {
    name: 'Microsoft',
    domain: 'microsoft.com',
    category: 'Enterprise Tech',
    description: 'Acknowledged for responsible vulnerability disclosure in Microsoft online services.',
    verified: true,
    type: 'Responsible Disclosure',
  },
  {
    name: 'Bosch',
    domain: 'bosch.com',
    category: 'Industrial & IoT',
    description: 'Recognized for identifying and safely reporting security weaknesses in web assets.',
    verified: true,
    type: 'VDP',
  },
  {
    name: 'TU Delft',
    domain: 'tudelft.nl',
    category: 'Higher Education / Research',
    description: 'Hall of Fame acknowledgment for responsible security disclosure.',
    verified: true,
    type: 'Responsible Disclosure',
  },
  {
    name: "Victoria's Secret",
    domain: 'victoriassecret.com',
    category: 'E-Commerce / Retail',
    description: 'Security acknowledgment for web application vulnerability reporting.',
    verified: true,
    type: 'Bug Bounty',
  },
  {
    name: 'Adore Me',
    domain: 'adoreme.com',
    category: 'E-Commerce / Consumer',
    description: 'Recognized in security Hall of Fame for valid vulnerability findings.',
    verified: true,
    type: 'Bug Bounty',
  },
  {
    name: "Dick's Sporting Goods",
    domain: 'dickssportinggoods.com',
    category: 'Retail & Consumer',
    description: 'Responsible disclosure recognition for identifying online platform vulnerabilities.',
    verified: true,
    type: 'VDP',
  },
  {
    name: 'Genius',
    domain: 'genius.com',
    category: 'Media & Web Platform',
    description: 'Security acknowledgment for reporting web security weaknesses.',
    verified: true,
    type: 'Responsible Disclosure',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: 'Certified Red Team Analyst (CRTA)',
    issuer: 'CyberWarFare Laboratories',
    date: 'Expected 2026',
    status: 'In Progress',
    description:
      'Active Directory attacks, privilege escalation, Kerberoasting, AS-REP roasting, ACL abuse, and lateral movement.',
    badgeCode: 'CRTA-CANDIDATE',
  },
  {
    title: 'Multi-Cloud Red Team Analyst (MCRTA)',
    issuer: 'CyberWarFare Laboratories',
    date: 'Expected 2026',
    status: 'In Progress',
    description:
      'Cloud red teaming across AWS, Azure, and GCP; IAM privilege escalation, metadata exploitation, and cloud post-exploitation.',
    badgeCode: 'MCRTA-CANDIDATE',
  },
  {
    title: 'IBM Cybersecurity Fundamentals',
    issuer: 'IBM',
    date: 'June 2026',
    status: 'Completed',
    description:
      'Core principles of information security, threat intelligence, network defense, incident response, and security architecture.',
    badgeCode: 'IBM-CYBER-2026',
  },
  {
    title: 'Cisco Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    date: 'May 2026',
    status: 'Completed',
    description:
      'Offensive security techniques, network penetration testing, perimeter assessment, reconnaissance, and defense auditing.',
    badgeCode: 'CISCO-EH-2026',
  },
];

export const honorsData = [
  {
    title: 'Intern of the Month',
    organization: 'RudraTech Services',
    date: '2026',
    description:
      'Awarded Intern of the Month at RudraTech Services for exceptional performance in VAPT engagements.',
    highlights: [
      'Demonstrated superior manual testing methodology across critical client web applications.',
      'Authored high-clarity VAPT reports resulting in rapid remediation turnarounds.',
      'Identified complex Broken Access Control vulnerabilities that evaded automated scans.',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Dr. Babasaheb Ambedkar Marathwada University',
    period: 'June 2022 – January 2026',
    location: 'Aurangabad, Maharashtra, India',
    details: 'Coursework in Operating Systems, Computer Networks, Data Structures, Algorithms, Cryptography, and Network Security.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Vivekanand Arts, Sardar Dalip Singh Commerce and Science College',
    period: 'Completed 2022',
    location: 'Maharashtra, India',
    details: 'Focus on Science, Mathematics, and Computer Science fundamentals.',
  },
];
