// const TrustedElectionsBadgeForm = () => {
//   return (
//     <div className="w-full h-full overflow-hidden relative">
//       <div className="absolute inset-0 bg-white z-777 shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2)] border border-neutral-300 p-4">
//         {/* form here */}
//       </div>
//     </div>
//   );
// };

// export default TrustedElectionsBadgeForm;

// --------------------------------------------------

"use client";

import { useState } from "react";
import Image from "next/image";

import userIcon from "@/public/user-icon.svg";
import mailIcon from "@/public/mail-icon.svg";
import phoneIcon from "@/public/phone-icon.svg";
import locationIcon from "@/public/phone-icon.svg";
import eyeOffIcon from "@/public/eye-off-icon.svg";
import chevronRightIcon from "@/public/chevron-right-icon.svg";

interface TrustedElectionsBadgeFormProps {
  onComplete?: () => void;
}

interface ConfidenceSliderProps {
  question: string;
  value: number;
  onChange: (value: number) => void;
}

const ConfidenceSlider = ({
  question,
  value,
  onChange,
}: ConfidenceSliderProps) => {
  const fillPercent = ((value - 1) / 4) * 100;

  return (
    <div className="flex flex-col gap-y-3">
      <p className="font-bold text-sm text-[#0B2545] leading-snug">
        {question}
      </p>

      <div className="relative h-5 flex items-center">
        {/* Track background */}
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-neutral-200" />
        {/* Track fill */}
        <div
          className="absolute h-1.5 rounded-full bg-[#4463AA]"
          style={{ width: `${fillPercent}%` }}
        />
        <input
          type="range"
          min={1}
          max={5}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="relative w-full appearance-none bg-transparent cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-[#4463AA]
            [&::-webkit-slider-thumb]:shadow
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-[#4463AA]"
        />
      </div>

      <div className="flex justify-between text-xs text-neutral-500">
        <span className="font-bold text-[#0B2545]">1</span>
        <span className="font-bold text-[#0B2545]">2</span>
        <span className="font-bold text-[#0B2545]">3</span>
        <span className="font-bold text-[#0B2545]">4</span>
        <span className="font-bold text-[#0B2545]">5</span>
      </div>
      <div className="flex justify-between text-[10px] text-[#BAABAB] select-none">
        <span className="text-left w-20">Not at all confident</span>
        <span className="text-right w-24">Very Confident</span>
      </div>
    </div>
  );
};

const TrustedElectionsBadgeForm = ({
  onComplete,
}: TrustedElectionsBadgeFormProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [confidenceApplying, setConfidenceApplying] = useState(3);
  const [confidenceChanged, setConfidenceChanged] = useState(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!fullName.trim() || !email.trim()) return; // required fields guard

    // TODO: send { fullName, email, phone, zip, confidenceApplying, confidenceChanged }
    // to wherever this needs to go (API route, email service, etc.)

    onComplete?.();
  };

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-x-0 bg-white z-777 shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2)] border border-neutral-300 p-4 overflow-y-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
          {/* Full Name */}
          <div className="flex flex-col gap-y-2">
            <label className="font-bold text-sm text-[#0B2545]">
              Full Name<span className="text-brand-red">*</span>
            </label>
            <div className="flex items-center gap-x-3 border border-neutral-300 px-4 py-3">
              <Image src={userIcon} alt="" className="w-5 h-5" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full outline-none placeholder:text-neutral-400 text-sm text-[#0B2545]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-y-2">
            <label className="font-bold text-sm text-[#0B2545]">
              Email<span className="text-brand-red">*</span>
            </label>
            <div className="flex items-center gap-x-3 border border-neutral-300 px-4 py-3">
              <Image src={mailIcon} alt="" className="w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full outline-none placeholder:text-neutral-400 text-sm text-[#0B2545]"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-y-2">
            <label className="font-bold text-sm text-[#0B2545]">
              Phone Number{" "}
              <span className="text-neutral-400 font-normal text-[10px] select-none">
                (Optional)
              </span>
            </label>
            <div className="flex items-center gap-x-3 border border-neutral-300 px-4 py-3">
              <Image src={phoneIcon} alt="" className="w-5 h-5" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full outline-none placeholder:text-neutral-400 text-sm text-[#0B2545]"
              />
              <Image src={eyeOffIcon} alt="" className="w-5 h-5 shrink-0" />
            </div>
          </div>

          {/* Zip Code */}
          <div className="flex flex-col gap-y-2">
            <label className="font-bold text-sm text-[#0B2545]">
              Zip Code{" "}
              <span className="text-[#BAABAB] font-normal text-[10px] select-none">
                (optional — helps us understand where our champions are)
              </span>
            </label>
            <div className="flex items-center gap-x-3 border border-neutral-300 px-4 py-3">
              <Image src={locationIcon} alt="" className="w-5 h-5" />
              <input
                type="text"
                inputMode="numeric"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Enter your zip code"
                className="w-full outline-none placeholder:text-neutral-400 text-sm text-[#0B2545]"
              />
            </div>
          </div>

          {/* Confidence sliders */}
          <ConfidenceSlider
            question="After completing this module, how confident do you feel applying the five Principles for Trusted Elections in your daily life?"
            value={confidenceApplying}
            onChange={setConfidenceApplying}
          />

          <ConfidenceSlider
            question="After completing this module, how has your confidence in the election process changed?"
            value={confidenceChanged}
            onChange={setConfidenceChanged}
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#4463AA] text-white font-bold py-4 flex items-center justify-center gap-x-2 cursor-pointer hover:bg-[#3a5590] transition-colors select-none"
          >
            Send me my badge
            <Image src={chevronRightIcon} alt="" className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrustedElectionsBadgeForm;
