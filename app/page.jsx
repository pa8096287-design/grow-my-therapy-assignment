'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#090d16] text-slate-100">
      
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/85 border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="font-semibold text-lg tracking-tight text-white">Dr. Maya Reynolds</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-teal-400 transition-colors">Services</a>
            <a href="#office" className="hover:text-teal-400 transition-colors">Our Office</a>
            <a href="#approach" className="hover:text-teal-400 transition-colors">Approach</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-teal-500 text-slate-950 font-semibold text-sm hover:bg-teal-400 transition-all shadow-sm">
            Free Consult
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main>
        
        {/* Hero Section */}
        <section className="py-24 lg:py-32 px-6 text-center border-b border-[#1e293b]">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
              Safe & Confidential Space
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Trusted Therapist in Dehradun | <span className="text-teal-400">Dr. Maya Reynolds Counseling</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Taking the first step toward healing can feel overwhelming, but you don't have to navigate it alone. We provide a warm, safe, and evidence-based space to help you manage daily stress, heal from past wounds, and build healthier relationships at your own pace.
            </p>

            <div className="pt-4">
              <a href="#contact" className="inline-block px-8 py-4 rounded-xl bg-teal-500 text-slate-950 font-semibold hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/20 text-base">
                Schedule a free consult
              </a>
            </div>
          </div>
        </section>

        {/* Clinical Services Section */}
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-white">Clinical Services</h2>
            <p className="text-slate-400 text-sm sm:text-base">Tailored, evidence-based therapeutic interventions structured for personal growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <article className="bg-[#131c2e] border border-[#1e293b] p-8 rounded-2xl hover:border-teal-500/40 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold group-hover:bg-teal-500 group-hover:text-slate-950 transition-all">
                  01
                </div>
                <h3 className="text-xl font-semibold text-white">Anxiety therapy in Dehradun</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Feeling constantly overwhelmed or trapped by racing thoughts? Our specialized sessions utilize proven, evidence-based approaches to help you quiet your mind, manage daily stress, and regain full control over your life.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#1e293b] text-xs font-medium text-teal-400">
                Personalized CBT Framework &rarr;
              </div>
            </article>

            <article className="bg-[#131c2e] border border-[#1e293b] p-8 rounded-2xl hover:border-teal-500/40 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold group-hover:bg-teal-500 group-hover:text-slate-950 transition-all">
                  02
                </div>
                <h3 className="text-xl font-semibold text-white">Trauma-informed counseling</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Healing from difficult experiences requires a deeply compassionate and secure environment. Through gentle, trauma-informed care, you can process past hardships safely and rebuild a solid sense of inner peace.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#1e293b] text-xs font-medium text-teal-400">
                Gentle Pacing & Safety &rarr;
              </div>
            </article>

            <article className="bg-[#131c2e] border border-[#1e293b] p-8 rounded-2xl hover:border-teal-500/40 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold group-hover:bg-teal-500 group-hover:text-slate-950 transition-all">
                  03
                </div>
                <h3 className="text-xl font-semibold text-white">Couples therapy in Dehradun</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Communication roadblocks, resentment, or growing apart can put a heavy strain on any relationship. Our couples sessions provide a neutral, safe space for both partners to be truly heard and foster a resilient connection.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#1e293b] text-xs font-medium text-teal-400">
                Communication Alignment &rarr;
              </div>
            </article>

          </div>
        </section>

        {/* Custom Section: "Our Office" */}
        <section id="office" className="py-24 px-6 bg-[#05080f] border-t border-[#1e293b]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">A Calm Space for Healing</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Our Office Environment</h2>
                <p className="text-slate-400 text-base leading-relaxed">
                  We believe that the physical environment plays a crucial role in healing. Our consultation space in Dehradun has been thoughtfully designed with warm lighting, acoustic privacy, and comfortable seating to ensure you feel entirely at ease the moment you arrive.
                </p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">✓ Private, soundproof consulting rooms</li>
                  <li className="flex items-center gap-2">✓ Hybrid session flexibility (In-person & online)</li>
                  <li className="flex items-center gap-2">✓ Peaceful, low-stimulus waiting lounge</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#131c2e] border border-[#1e293b] h-64 rounded-2xl flex items-center justify-center text-slate-500 text-sm p-4 text-center">
                  [Consulting Room Interior]
                </div>
                <div className="bg-[#131c2e] border border-[#1e293b] h-64 rounded-2xl flex items-center justify-center text-slate-500 text-sm p-4 text-center mt-8">
                  [Calming Waiting Lounge]
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Consultation Contact Form */}
        <section id="contact" className="py-24 px-6 border-t border-[#1e293b]">
          <div className="max-w-xl mx-auto text-center bg-[#131c2e] border border-[#1e293b] p-8 sm:p-12 rounded-3xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Begin Your Healing Journey Today</h2>
            <p className="text-slate-400 text-sm">Reach out for a zero-pressure initial consultation session to see how we can work together.</p>
            
            <form className="space-y-4 pt-2" onSubmit={(e) => { e.preventDefault(); alert('Consultation request submitted successfully!'); }}>
              <input type="text" placeholder="Your Full Name" required className="w-full px-4 py-3 bg-[#090d16] border border-[#1e293b] rounded-xl text-white text-sm outline-none focus:border-teal-500 transition-colors" />
              <input type="email" placeholder="Your Email Address" required className="w-full px-4 py-3 bg-[#090d16] border border-[#1e293b] rounded-xl text-white text-sm outline-none focus:border-teal-500 transition-colors" />
              <button type="submit" className="w-full py-4 rounded-xl bg-teal-500 text-slate-950 font-semibold hover:bg-teal-400 transition-all text-sm">
                Schedule a free consult
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1e293b] text-center text-xs text-slate-500">
        <p>&copy; 2026 Dr. Maya Reynolds Counseling. All rights reserved.</p>
      </footer>

    </div>
  );
}