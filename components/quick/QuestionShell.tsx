"use client";

import Navbar from "../Navbar";
import Footer from "../footer";
import BackButton from "../BackButton";

export default function QuestionShell({
  title,
  subtitle,
  children,
  showBack = true,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  showBack?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navbar />
      <div className="flex-1 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-bottom bg-repeat-x"
          style={{ backgroundImage: "url('/questions.png')", backgroundSize: "100%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-20 pb-10 sm:pb-24 pt-28 sm:pt-36">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-black">{title}</h2>
              {subtitle && <p className="text-gray-500">{subtitle}</p>}
            </div>
            {children}
            {showBack && <BackButton />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function OptionButtons({
  options,
  selected,
  onSelect,
  columns = 2,
}: {
  options: string[];
  selected?: string;
  onSelect: (value: string) => void;
  columns?: 2 | 3;
}) {
  return (
    <div className={`w-full max-w-2xl grid grid-cols-1 gap-4 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`w-full py-5 rounded-xl border transition shadow-sm text-lg font-semibold text-black cursor-pointer ${
            selected === option
              ? "bg-[#EBF2FB] border-[#2B5BA8]"
              : "bg-white border-gray-200 hover:border-[#378ADD] hover:bg-[#EBF2FB]"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
