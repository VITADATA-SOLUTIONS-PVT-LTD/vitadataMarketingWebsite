import { Button } from "@/components/ui/button"
import MobileFrontierSection from "../Components/FrontierSection"
import SpecializationsSection from "../Components/TechSec2"
import StackSection from "../Components/Stacks"
export default function Tech(){
     return (
        <>
          <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[620px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/web-hero.png" alt="Web Hero" className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(193,53,8,0.2), rgba(193,53,8,0.2))' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(67,36,26,0.18) 0%, rgba(67,36,26,0.14) 50%, rgba(67,36,26,0) 100%)' }} />
        </div>
        <div className="relative max-w-[1280px] mx-auto h-full px-5 md:px-8 flex items-center">
          <div className="max-w-[90%]  sm:max-w-[600px] lg:max-w-[700px] flex flex-col items-start p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px]"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="inline-flex items-start py-1 px-3.5 rounded-full w-fit" style={{ background: '#FCDCC9' }}>
                <span className="font-bold text-[10px] sm:text-[11px] leading-4 uppercase" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.6px', color: '#28180C' }}>Expertise</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] m-0" style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: '-1px', color: '#43241A' }}>
                Mobile Application Development
              </h1>
              <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 m-0 max-w-[560px]" style={{ fontFamily: "'Inter', sans-serif", color: '#000000' }}>
               Building seamless mobile experiences for modern users. We transform concepts into tactile digital masterpieces.
              </p>
            </div>
            <Button size="lg" className="mt-2 rounded-full p-5">Download app</Button>
          </div>
        </div>
      </section>
      <MobileFrontierSection />
      <SpecializationsSection />
      <StackSection />
        </>
     )




}