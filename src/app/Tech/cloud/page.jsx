'use client'
import React, { useState } from 'react';
import { ShieldCheck, CloudUpload, Database, Zap } from 'lucide-react';


/* ─────────────── CLOUD PAGE ─────────────── */
export default function CloudPage() {
  const features = [
    { icon: ShieldCheck, title: 'HIPAA Compliant Encryption', description: 'End-to-end AES-256 bit encryption at rest and in transit. Fully audited pathways that exceed HIPAA and HITECH requirements.' },
    { icon: CloudUpload, title: 'Automated Backups', description: 'Point-in-time recovery with continuous data protection. Our system maintains multiple geographic replicates to prevent any single point of failure.' },
    { icon: Database, title: 'Scalable Data Lakes', description: 'Scale from terabytes to petabytes instantly. Unified object storage designed for high-performance AI research and longitudinal data analysis.' },
  ];

  return (
    <div className="flex flex-col items-start w-full" style={{ background: '#FCF9F7' }}>
     

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[620px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/cloud-hero.png" alt="Cloud Hero" className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(193,53,8,0.2), rgba(193,53,8,0.2))' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(67,36,26,0.18) 0%, rgba(67,36,26,0.14) 50%, rgba(67,36,26,0) 100%)' }} />
        </div>
        {/* Content */}
        <div className="relative max-w-[1280px] mx-auto h-full px-5 md:px-8 flex items-center">
          <div className="max-w-[90%] sm:max-w-[600px] lg:max-w-[700px] flex flex-col items-start p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px]"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="inline-flex items-start py-1 px-3.5 rounded-full w-fit" style={{ background: '#FCDCC9' }}>
                <span className="font-bold text-[10px] sm:text-[11px] leading-4 uppercase" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.6px', color: '#28180C' }}>CLINICAL GRADE PLATFORM</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] m-0" style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: '-1px', color: '#43241A' }}>
                Secure Clinical Cloud Storage
              </h1>
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 m-0 max-w-[600px]" style={{ fontFamily: "'Inter', sans-serif", color: '#0E1011' }}>
                Scale your clinical data effortlessly with Vitadata's enterprise-grade storage. Built for high-frequency access and long-term archival with medical-grade precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section className="w-full px-5 md:px-8 py-14 md:py-20" style={{ background: '#DDC8BE' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8 md:mb-10">
            <div className="max-w-[560px] flex flex-col gap-3">
              <h2 className="text-2xl md:text-[30px] font-bold leading-tight m-0" style={{ fontFamily: "'Manrope', sans-serif", color: '#280F06' }}>Precision Engineered Resilience</h2>
              <p className="text-sm md:text-[15px] leading-6 m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#504440' }}>
                Our storage solutions are designed to meet the rigorous demands of clinical environments, ensuring data is always available and eternally secure.
              </p>
            </div>
            <div className="flex items-start gap-1.5 mt-2 sm:mt-4">
              <div className="w-10 h-[3px] rounded-full" style={{ background: '#280F06' }} />
              <div className="w-3.5 h-[3px] rounded-full" style={{ background: '#D5C3BD' }} />
              <div className="w-3.5 h-[3px] rounded-full" style={{ background: '#D5C3BD' }} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-start gap-3.5 hover-lift">
                <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center" style={{ background: '#FCDCC9' }}>
                  <f.icon className="h-6 w-6" strokeWidth={2} style={{ color: '#280F06' }} />
                </div>
                <div className="pt-3">
                  <h3 className="font-bold text-[17px] leading-6 m-0" style={{ fontFamily: "'Manrope', sans-serif", color: '#280F06' }}>{f.title}</h3>
                </div>
                <p className="font-normal text-sm leading-[22px] m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#504440' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BENTO SECTION ── */}
      <section className="w-full px-5 md:px-8" style={{ background: '#FCF9F7' }}>
        <div className="max-w-[1280px] mx-auto my-8 md:my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_280px_280px] gap-3">
          {/* Large dark card */}
          <div className="sm:col-span-2 lg:col-span-1 rounded-[20px] p-8 md:p-10 flex flex-col justify-between min-h-[240px] md:min-h-[280px]" style={{ background: '#402318' }}>
            <span className="font-semibold text-xs leading-[18px] uppercase" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '1.2px', color: '#B38879' }}>PERFORMANCE METRICS</span>
            <div className="mt-auto">
              <div className="flex items-end gap-1 mb-2">
                <span className="font-extrabold text-4xl md:text-[48px] leading-none text-white" style={{ fontFamily: "'Manrope', sans-serif" }}>2.4</span>
                <span className="font-extrabold text-2xl md:text-[28px] leading-8" style={{ fontFamily: "'Manrope', sans-serif", color: '#FCDCC9' }}>PB</span>
              </div>
              <p className="text-[15px] leading-6 m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#B38879' }}>
                Current clinical data managed across our global node network.
              </p>
            </div>
          </div>
          {/* SOC2 */}
          <div className="rounded-[20px] flex flex-col justify-center items-center py-12 md:py-16 px-7" style={{ background: '#F0EDEB' }}>
            <ShieldCheck className="h-9 w-9 mb-3" strokeWidth={1.8} fill="currentColor" style={{ color: '#280F06' }} />
            <span className="font-bold text-[17px] leading-6 text-center" style={{ fontFamily: "'Manrope', sans-serif", color: '#280F06' }}>SOC2 Type II</span>
            <span className="font-normal text-[13px] leading-[18px] text-center mt-1.5" style={{ fontFamily: "'Inter', sans-serif", color: '#504440' }}>Certified Security</span>
          </div>
          {/* 100bps */}
          <div className="rounded-[20px] flex flex-col justify-center items-center py-12 md:py-16 px-7" style={{ background: '#FCDCC9' }}>
            <Zap className="h-9 w-9 mb-3" strokeWidth={1.8} fill="currentColor" style={{ color: '#28180C' }} />
            <span className="font-bold text-[17px] leading-6 text-center" style={{ fontFamily: "'Manrope', sans-serif", color: '#28180C' }}>100bps</span>
            <span className="font-normal text-[13px] leading-[18px] text-center mt-1.5" style={{ fontFamily: "'Inter', sans-serif", color: '#574235' }}>Low-Latency Uplink</span>
          </div>
        </div>
      </section>

      
    </div>
  );
}