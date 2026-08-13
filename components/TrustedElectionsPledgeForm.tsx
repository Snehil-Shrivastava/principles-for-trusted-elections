"use client";

import { useState } from "react";
import Image from "next/image";
import chevronRightIcon from "@/public/chevron-right-icon.svg";

interface TrustedElectionsPledgeFormProps {
  onComplete?: () => void;
}

const actionOptions = [
  {
    id: "share",
    label: "Share the Principles for Trusted Elections with friends and family",
  },
  {
    id: "video",
    label: "Record a video about why I support trusted elections and share it",
  },
  { id: "register", label: "Register to vote or check my registration status" },
  { id: "plan", label: "Make a plan to vote and vote" },
  { id: "poll-worker", label: "Work at the polls" },
  { id: "observe", label: "Observe an election" },
  { id: "state-rules", label: "Learn my state's rules" },
  {
    id: "conversation",
    label: "Have one thoughtful conversation about elections",
  },
];

const TrustedElectionsPledgeForm = ({
  onComplete,
}: TrustedElectionsPledgeFormProps) => {
  const [pledgeAffirmed, setPledgeAffirmed] = useState(false);
  const [selectedActions, setSelectedActions] = useState<string[]>([]);

  const toggleAction = (id: string) => {
    setSelectedActions((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgeAffirmed) return; // required affirmation guard

    // TODO: send { pledgeAffirmed, selectedActions } to wherever this needs to go

    onComplete?.();
  };

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-x-0 bg-white z-777 shadow-[inset_0px_0px_2px_rgba(0,0,0,0.2)] border border-neutral-300 px-4 py-6 overflow-y-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
          {/* Pledge Affirmation */}
          <div className="flex flex-col gap-y-4">
            <h2 className="font-bold text-lg text-brand-red">
              Pledge Affirmation
            </h2>

            <label className="flex items-start gap-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={pledgeAffirmed}
                onChange={(e) => setPledgeAffirmed(e.target.checked)}
                className="mt-0.5 w-3 h-3 shrink-0 accent-[#4463AA] cursor-pointer"
              />
              <span className="text-xs text-[#0B2545] leading-tight">
                I affirm the Principles for Trusted Elections and commit to
                upholding them in my community.
              </span>
            </label>
          </div>

          {/* Action Selection */}
          <div className="flex flex-col gap-y-4">
            <div>
              <h2 className="font-bold text-lg text-[#4463AA]">
                Action Selection
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Select all that apply — we&apos;ll send you everything you need
                to follow through:
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              {actionOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-start gap-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedActions.includes(option.id)}
                    onChange={() => toggleAction(option.id)}
                    className="mt-0.5 w-3 h-3 shrink-0 accent-[#4463AA] cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-[#0B2545] leading-snug">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!pledgeAffirmed}
            className="w-full bg-[#4463AA] text-white font-bold py-4 flex items-center justify-center gap-x-2 cursor-pointer hover:bg-[#3a5590] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit my commitments
            <Image src={chevronRightIcon} alt="" className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrustedElectionsPledgeForm;
