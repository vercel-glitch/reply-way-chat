import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-8 md:py-12 lg:py-20 flex items-center justify-center overflow-hidden">

      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50"></div>

      {/* Content container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Get ready for the future
          <br />
          of work with
          <br />
          <span className="text-[var(--color-primary)]">Replyway</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform the way you work with next-generation AI capabilities and
          bring together your physical and digital worlds.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/signup">
            <button className="bg-primary  hover:bg-[#7c3aed] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </Link>
          <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200">
            Download
          </button>
        </div>
      </div>
    </section>
  );
}
