import React, { useState, useEffect } from 'react';
import './App.css';
import { Download, ExternalLink, Ruler, Building, MapPin, Mail, Phone, FileText, Calendar, Award } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = ['AutoCAD','SketchUp', 'Drafting'];
  const specializations = ['Architectural Plans'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-teal-500/5 rounded-full blur-2xl animate-ping"></div>
        
        {/* Cursor glow */}
        <div 
          className="absolute w-80 h-80 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-300"
          style={{ 
            left: mousePosition.x - 160, 
            top: mousePosition.y - 160,
            opacity: mousePosition.x > 0 ? 0.4 : 0 
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className={`max-w-4xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            {/* Professional Avatar with Engineering Theme */}
            <div className="relative mb-8 inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <Building size={48} className="text-blue-400" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <Ruler size={12} className="text-white" />
              </div>
            </div>

            {/* Professional Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent">
              Jishnu's Portfolio
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-2 font-semibold">Civil Draftsman & CAD Specialist</p>
            <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Creating precise technical drawings and construction plans with expertise in AutoCAD, Civil 3D, and architectural drafting
            </p>

            {/* Technical Skills */}
            <div className="flex flex-wrap gap-2 justify-center mt-6 mb-8">
              {skills.map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-xs md:text-sm text-blue-200 border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Main Professional Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-[1.02]">
            
            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-xs md:text-sm text-slate-300">Projects</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">3+</div>
                <div className="text-xs md:text-sm text-slate-300">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 flex items-center justify-center gap-1">
                  <Award size={20} className="text-yellow-400" />
                </div>
                <div className="text-xs md:text-sm text-slate-300">Certified</div>
              </div>
            </div>

            {/* Specializations */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FileText size={18} className="text-blue-400" />
                Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {specializations.map((spec, index) => (
                  <div key={spec} className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    {spec}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Portfolio CTA */}
            <div className="text-center mb-8">
              <a
                href="/JISHNU PORTFOLIO.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                View Technical Portfolio
                <ExternalLink size={16} className="opacity-70" />
              </a>
            </div>

            {/* Contact & Professional Info */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Mail size={18} className="text-blue-400" />
                  Professional Contact
                </h3>
                <div className="space-y-3">
                  <a href="mailto:jishnu.civil@example.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                    <Mail size={16} className="text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm md:text-base">Jishnukallingal449@gmail.com</span>
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                    <Phone size={16} className="text-green-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm md:text-base">8073100366</span>
                  </a>
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin size={16} className="text-teal-400" />
                    <span className="text-sm md:text-base">Available for Projects</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Calendar size={16} className="text-purple-400" />
                    <span className="text-sm md:text-base">Mon-Fri, 9AM-6PM</span>
                  </div>
                </div>
              </div>

              {/* Services & Availability */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Building size={18} className="text-teal-400" />
                  Services Offered
                </h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    Architectural Drafting
                  </div>
                  
                </div>                
              </div>
               <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Building size={18} className="text-teal-400" />
                  Software Proficiency
                </h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                   D5 render 
                  </div>
                   <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                   Photoshop
                  </div>
                </div>                
              </div>
            </div>
          </div>

          {/* Professional Footer */}
          <div className="text-center mt-8 text-slate-400 text-sm">
            <p>© 2025 Jishnu - Civil Draftsman | Licensed Professional | Quality Technical Drawings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;