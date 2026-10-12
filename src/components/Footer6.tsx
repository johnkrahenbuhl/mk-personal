import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";
import logoSvg from "../assets/radiant-self-worth.svg";

// Import your external content components
import { PrivacyPolicy } from "./PrivacyPolicy2";
import { EarningsDisclaimer } from "./EarningsDisclaimer";
import { TermsAndConditions } from "./TermsAndConditions4";

type PolicyType = "privacy" | "earnings" | "terms" | null;
type TermsNavigationProps = {
  onNavigateToPrivacy?: () => void;
};

const TermsAndConditionsWithNavigation =
  TermsAndConditions as React.ComponentType<TermsNavigationProps>;

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activePolicy) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [activePolicy]);

  // Helper to get the correct title
  const getPolicyTitle = () => {
    switch (activePolicy) {
      case "privacy":
        return "Privacy Policy";
      case "earnings":
        return "Earnings Disclaimer";
      case "terms":
        return "Terms & Conditions";
      default:
        return "";
    }
  };

  // Helper to render the correct external component
  const renderPolicyContent = () => {
    switch (activePolicy) {
      case "privacy":
        return <PrivacyPolicy />;
      case "earnings":
        return <EarningsDisclaimer />;
      case "terms":
        return (
          <TermsAndConditionsWithNavigation
            onNavigateToPrivacy={() => setActivePolicy("privacy")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <footer id="contact" className="w-full bg-white font-sans text-radiant">
        {/* Upper Section: Logo & Heading */}
        <div className="flex flex-col items-center pb-4 px-4 text-center">
          <img
            src={logoSvg}
            alt="Radiant Self Worth Logo"
            className="h-48 sm:h-72 w-auto object-contain"
          />
        </div>

        <div className="brightness-60 font-serif text-[28px] sm:text-[36px] font-normal tracking-[0.1em] text-radiant -mt-8 sm:-mt-18 mb-8 sm:mb-12 text-center">
          Contact Melissa
        </div>

        {/* Upper Section: Contact Information */}
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 pt-8 pb-16 sm:pb-24 border-b border-gray-100">
          {/* Email link */}
          <a
            href="mailto:radiantselfworth@gmail.com"
            className="flex items-center gap-2 py-3 px-2 min-h-[44px] text-[14px] sm:text-[18px] brightness-50 hover:opacity-80 transition-opacity tracking-wide"
          >
            <Mail size={18} strokeWidth={1.5} className="shrink-0" />
            <span className="hover:underline transition-all">
              radiantselfworth@gmail.com
            </span>
          </a>

          {/* Phone Link */}
          <a
            href="tel:847-208-0978"
            className="flex items-center gap-2 py-3 px-2 min-h-[44px] text-[15px] sm:text-[18px] brightness-50 text-radiant hover:opacity-80 transition-opacity tracking-wide"
          >
            <Phone size={18} strokeWidth={1.5} className="shrink-0" />
            <span className="hover:underline transition-all">847-208-0978</span>
          </a>

          {/* Website Link */}
          <a
            href="https://radiantselfworth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-3 px-2 min-h-[44px] text-[14px] sm:text-[18px] brightness-50 hover:opacity-80 transition-opacity tracking-wide"
          >
            <MapPin size={18} strokeWidth={1.5} className="shrink-0" />
            <span className="hover:underline transition-all">
              www.radiantselfworth.com
            </span>
          </a>
        </div>

        {/* Bottom Section: Copyright & Policy */}
        <div className="mx-auto w-full max-w-4xl px-4 border-t border-[#a88d52]/20 flex flex-col items-center justify-center gap-2 pt-4 pb-6 text-[#4a5568]/75 tracking-wide text-[12px] font-light">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <button
              onClick={() => setActivePolicy("privacy")}
              className="hover:underline transition-all uppercase cursor-pointer"
            >
              PRIVACY POLICY
            </button>
            <button
              onClick={() => setActivePolicy("earnings")}
              className="hidden hover:underline transition-all uppercase cursor-pointer"
            >
              EARNINGS DISCLAIMER
            </button>
            <button
              onClick={() => setActivePolicy("terms")}
              className="hidden hover:underline transition-all uppercase cursor-pointer"
            >
              TERMS & CONDITIONS
            </button>
          </div>

          <div className="text-[10px] font-thin text-[#4a5568]/75 mt-1 text-center">
            © 2026 Radiant Self Worth, LLC
          </div>
        </div>
      </footer>

      {/* Full Screen Responsive Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white overflow-hidden animate-in fade-in duration-200">
          {/* Modal Header */}
          <div
            onClick={() => setActivePolicy(null)}
            className="relative flex items-center justify-center border-b border-gray-200 px-6 py-4 md:px-12 md:py-6 bg-white shadow-sm shrink-0 cursor-pointer"
          >
            <h2 className="text-xl md:text-3xl font-serif text-radiant tracking-wide text-center">
              {getPolicyTitle()}
            </h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePolicy(null);
              }}
              className="absolute right-6 md:right-12 p-2 md:p-3 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-all flex items-center justify-center cursor-pointer"
              aria-label="Close modal"
            >
              <X size={28} strokeWidth={2} />
            </button>
          </div>

          {/* Modal Content body with Visual Fade Affordances */}
          <div className="relative flex-1 overflow-hidden bg-white">
            <div className="pointer-events-none absolute top-0 left-0 right-4 h-[1.875rem] bg-gradient-to-b from-white to-transparent z-10" />

            {/* Scrollable Container injecting external components */}
            <div className="h-full w-full overflow-y-auto px-6 md:px-16 pt-8 pb-12 text-left space-y-4 text-sm leading-relaxed text-gray-600">
              {renderPolicyContent()}
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-4 h-[1.875rem] bg-gradient-to-t from-white to-transparent z-10" />
          </div>

          {/* Modal Footer Actions */}
          <div
            onClick={() => setActivePolicy(null)}
            className="shrink-0 mt-auto flex justify-center border-t border-gray-100 pt-4 pb-6 px-6 bg-white cursor-pointer z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePolicy(null);
              }}
              className="px-6 py-2 bg-[#a88d52] text-white text-sm rounded-lg hover:opacity-90 transition-all cursor-pointer shadow-sm pointer-events-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
