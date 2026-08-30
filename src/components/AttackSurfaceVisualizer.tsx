import React, { useState } from 'react';

interface LayerNode {
  id: string;
  name: string;
  count: string;
  subtext: string;
  activeMetrics: string;
  technologies: string[];
}

export const AttackSurfaceVisualizer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(3);

  const layers: LayerNode[] = [
    {
      id: '01',
      name: 'INTERNET PERIMETER',
      count: '01 ASN / CIDR',
      subtext: 'BGP routing, IP range discovery & external ingress',
      activeMetrics: '0.0.0.0/0 External Ingress',
      technologies: ['ASN Mapping', 'CIDR Discovery', 'Edge Banners'],
    },
    {
      id: '02',
      name: 'ROOT DOMAINS',
      count: '15+ Primary Targets',
      subtext: 'Core enterprise domains, acquisitions & third-party roots',
      activeMetrics: 'DNS Zone & Certificate Transparency',
      technologies: ['crt.sh', 'Amass', 'DNS Records'],
    },
    {
      id: '03',
      name: 'SUBDOMAINS & HOSTS',
      count: '140+ Assets Resolved',
      subtext: 'Multi-stage discovery via Subfinder, Dnsx & active bruteforce',
      activeMetrics: '100% Validated Live Hosts',
      technologies: ['Subfinder', 'Dnsx', 'Naabu'],
    },
    {
      id: '04',
      name: 'WEB APPLICATIONS',
      count: '10+ Production Apps',
      subtext: 'HTTP probing, tech stack fingerprinting & routing structures',
      activeMetrics: 'Httpx Probing & Port Sweeps',
      technologies: ['Httpx', 'Wappalyzer', 'TLS Handshakes'],
    },
    {
      id: '05',
      name: 'APIS & MICROSERVICES',
      count: '200+ Discovered Routes',
      subtext: 'REST, GraphQL, WebSocket endpoints & auth boundaries',
      activeMetrics: 'BOLA & BAC Testing Matrix',
      technologies: ['Burp Suite', 'Postman', 'GraphQL Introspection'],
    },
    {
      id: '06',
      name: 'VULNERABILITY NODES',
      count: '20+ Verified Findings',
      subtext: 'Manual verification, business logic flaws & reproducible PoCs',
      activeMetrics: 'Zero False Positives',
      technologies: ['BAC Validation', 'Auth Drift', 'Business Logic'],
    },
  ];

  return (
    <div className="relative w-full rounded-xl bg-[#0b0d11] border border-white/10 p-6 sm:p-7 font-mono select-none overflow-hidden group">
      
      {/* Visualizer Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-white font-medium tracking-wider text-[11px]">
            ATTACK-SURFACE ARCHITECTURE
          </span>
        </div>
        <span className="text-[10px] text-neutral-400 tracking-widest font-mono">
          SECURITY RESEARCH / 2026
        </span>
      </div>

      {/* Interactive Layer Flow */}
      <div className="py-6 space-y-2 relative">
        
        {/* Connecting Vertical Hairline with signal animation */}
        <div className="absolute left-[23px] top-8 bottom-8 w-[1px] bg-neutral-800" />
        <div 
          className="absolute left-[23px] w-[1px] bg-gradient-to-b from-emerald-400 to-cyan-400 transition-all duration-300 pointer-events-none"
          style={{
            top: `${(activeLayer / (layers.length - 1)) * 60}%`,
            height: '40px'
          }}
        />

        {layers.map((layer, idx) => {
          const isSelected = activeLayer === idx;
          return (
            <div
              key={layer.id}
              onClick={() => setActiveLayer(idx)}
              onMouseEnter={() => setActiveLayer(idx)}
              className={`relative flex items-center justify-between p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-neutral-900/90 border-emerald-500/40 text-white shadow-sm'
                  : 'bg-transparent border-transparent hover:bg-neutral-900/40 text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {/* Left Node Indicator & Layer Name */}
              <div className="flex items-center gap-3.5 z-10">
                <div
                  className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-emerald-400 bg-emerald-950/80 scale-110 shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                      : 'border-neutral-700 bg-neutral-900'
                  }`}
                >
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>}
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-neutral-400 font-mono">[{layer.id}]</span>
                    <span className={`text-xs font-semibold tracking-wide ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                      {layer.name}
                    </span>
                  </div>
                  {isSelected && (
                    <span className="text-[10px] text-neutral-400 font-sans mt-0.5 max-w-xs sm:max-w-md line-clamp-1">
                      {layer.subtext}
                    </span>
                  )}
                </div>
              </div>

              {/* Right Count Tag */}
              <div className="text-right z-10">
                <span className={`text-[11px] font-mono ${isSelected ? 'text-emerald-400 font-medium' : 'text-neutral-400'}`}>
                  {layer.count}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Layer Detail Drawer (Active Node Telemetry) */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-neutral-400 text-[11px]">
          <span className="text-neutral-400">PIPELINE FOCUS:</span>
          <span className="text-emerald-400 font-medium">{layers[activeLayer].activeMetrics}</span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {layers[activeLayer].technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-[10px] text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};
