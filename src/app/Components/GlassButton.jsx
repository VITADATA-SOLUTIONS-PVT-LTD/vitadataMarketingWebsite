import React from "react";

const GlassButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <>
      <style>{`
        .gb-wrapper {
          --anim--hover-time: 400ms;
          --anim--hover-ease: cubic-bezier(0.25, 1, 0.5, 1);
          --angle-1: -75deg;

          position: relative;
          display: inline-flex;
          margin: 1rem;
          border-radius: 999vw;
          pointer-events: none;
        }

        .gb-shadow {
          position: absolute;
          inset: -1em;
          filter: blur(2px);
          pointer-events: none;
        }

        .gb-shadow::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 999vw;
          background: linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.1));
        }

        .gb-btn {
          all: unset;
          cursor: pointer;
          pointer-events: auto;
          position: relative;
          border-radius: 999vw;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6em; /* 🔥 important for icon spacing */

          padding: 0.8em 1.5em;

          background: linear-gradient(-75deg, rgba(255,255,255,0.05), rgba(255,255,255,0.2), rgba(255,255,255,0.05));
          backdrop-filter: blur(6px);

          transition: all var(--anim--hover-time) var(--anim--hover-ease);

          box-shadow:
            inset 0 2px 2px rgba(0,0,0,0.05),
            inset 0 -2px 2px rgba(255,255,255,0.5),
            0 4px 2px -2px rgba(0,0,0,0.2);
        }

        .gb-btn:hover {
          transform: scale(0.97);
        }

        .gb-btn > * {
          display: inline-flex;
          align-items: center;
        }

        .gb-btn svg {
          width: 1.2em;
          height: 1.2em;
        }

        .gb-text {
          font-family: Inter, sans-serif;
          font-weight: 500;
          color: #333;
          text-shadow: 0 4px 2px rgba(0,0,0,0.1);
        }

        .gb-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: conic-gradient(from var(--angle-1), rgba(0,0,0,0.4), transparent, rgba(0,0,0,0.4));
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          transition: 0.5s;
        }

        .gb-btn:hover::after {
          --angle-1: -125deg;
        }
      `}</style>

      <div className={`gb-wrapper ${className}`}>
        <button
          className="gb-btn"
          onClick={onClick}
          disabled={disabled}
          type={type}
        >
          {children}
        </button>

        <div className="gb-shdow shadow" />
      </div>
    </>
  );
};

export default GlassButton;