"use client";

import { X, Info } from "lucide-react";
import { useState } from "react";

interface InfoPopupProps {
  title: string;
  triggerText: string;
  children: React.ReactNode;
}

export const InfoPopup = ({ title, triggerText, children }: InfoPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm underline decoration-dotted underline-offset-4 transition-colors"
      >
        <Info size={16} />
        {triggerText}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-3xl flex items-center justify-between">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Info size={24} />
                </div>
                {title}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="סגור"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-8">
              {children}
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 rounded-b-3xl">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                הבנתי, תודה!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
