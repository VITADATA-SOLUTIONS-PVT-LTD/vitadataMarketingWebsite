export default function PageFooter() {
  return (
    <footer className="w-full pt-0 pb-8" style={{ background: '#F8EBE7', borderTop: '1px solid rgba(217,194,184,0.15)' }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 md:px-8 py-8 md:py-10 w-full max-w-[1280px] mx-auto gap-6 md:gap-0">
        <div className="flex flex-col gap-1.5">
          <span className="font-bold text-base leading-6" style={{ fontFamily: "'Public Sans', sans-serif", color: '#201A18' }}>VITADATA SOLUTIONS</span>
          <span className="font-normal text-xs leading-[18px] uppercase" style={{ fontFamily: "'Public Sans', sans-serif", letterSpacing: '1.2px', color: 'rgba(32,26,24,0.7)' }}>CURATING HEALTHCARE INTELLIGENCE.</span>
        </div>
        <div className="flex gap-4 md:gap-6 flex-wrap">
          {['PRIVACY POLICY', 'TERMS OF SERVICE', 'DATA SECURITY', 'COOKIE SETTINGS'].map((link) => (
            <a key={link} href="#" className="font-medium text-xs leading-[18px] uppercase no-underline" style={{ fontFamily: "'Public Sans', sans-serif", letterSpacing: '1.2px', color: 'rgba(32,26,24,0.7)' }}>{link}</a>
          ))}
        </div>
      </div>
      <div className="w-full text-center opacity-60">
        <span className="font-normal text-[11px] leading-4 uppercase" style={{ fontFamily: "'Public Sans', sans-serif", letterSpacing: '1px', color: '#201A18' }}>
          &copy; 2024 VITADATA SOLUTIONS. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}