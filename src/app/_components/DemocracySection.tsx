import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DemocracySection() {
  return (
    <div className="hero bg-neutral-950 text-white py-12">
      <div className="hero-content flex-col gap-6 lg:flex-row lg:gap-12">
        <div className="relative">
          <Image
            className="rounded-lg shadow-2xl h-120 object-cover"
            src="/assets/painting-democracy.jpg"
            height={600}
            width={400}
            alt="Democracy painting"
          />
          
          {/* Circular text overlay */}
          <div className="absolute bottom-4 -right-4 w-32 h-32 bg-neutral-950 rounded-full flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <path
                id="circlePath"
                fill="none"
                d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              />
              <text fill="#f4f4f4" fontSize="11">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  REDEFINE GOVERNANCE | REGAIN DEMOCRACY |
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        
        <div>
          <p className="max-w-2xl py-6 text-2xl lg:text-3xl">
            With a predefined constitution, decisions are made efficiently and transparently, ensuring that every member's voice is heard. <span className="opacity-40">Empower Your Organization with AI-Driven Autonomous Management and Governance.</span>
          </p>
          <Link href="/contact" className="btn btn-primary">
            Read Whitepaper
          </Link>
        </div>
      </div>
    </div>
  );
}