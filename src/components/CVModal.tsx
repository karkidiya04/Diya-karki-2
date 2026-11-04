import React, { useEffect } from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfUrl = PORTFOLIO_DATA.personal.cvPdfPath;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#120D11]/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#1B131A] border border-[#D98A84]/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D98A84]/20 bg-[#161015]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#8E3E47]/30 border border-[#D98A84]/40 text-[#E89D97] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cv-modal-title" className="text-base font-serif font-bold text-[#F8EFEB]">
                Diya Karki — Curriculum Vitae
              </h3>
              <p className="text-xs font-mono text-[#D98A84]">
                Computer Engineering Student · Far Western University
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="Diya_Karki_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#120D11] bg-gradient-to-r from-[#D98A84] to-[#E89D97] hover:brightness-110 rounded-lg transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#D5C7C1] hover:text-[#F8EFEB] bg-[#231A22] rounded-lg border border-[#D98A84]/30 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#D98A84]" />
              <span>Open Tab</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#D5C7C1] hover:text-[#F8EFEB] rounded-lg hover:bg-[#231A22] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full h-[70vh] bg-[#120D11] p-2 sm:p-4 overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title="Diya Karki CV Document"
            className="w-full h-full rounded-lg border border-[#D98A84]/20 bg-white"
          />
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-[#D98A84]/20 bg-[#161015] flex items-center justify-between text-xs font-mono text-[#D5C7C1]">
          <span>Official CV document for internship & technical opportunities</span>
          <span className="text-[#D98A84]">Far Western University, Nepal</span>
        </div>
      </div>
    </div>
  );
};
