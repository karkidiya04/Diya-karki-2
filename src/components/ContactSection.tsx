import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, FileText, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { EditorialStamp } from './EditorialStamp';

interface ContactSectionProps {
  onOpenCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCV }) => {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@example.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Message must be at least 8 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 700);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative border-t border-[#D98A84]/20 bg-[#120D11]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Circular Stamp */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D98A84] mb-2">
              <span>07</span>
              <span aria-hidden="true">/</span>
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8EFEB] text-balance">
              Have an idea or want to connect? Let's build something interesting.
            </h2>
            <p className="text-sm text-[#D5C7C1] mt-2 max-w-xl">
              Open to student internships, technical collaborations, and creative projects. Drop a note below!
            </p>
          </div>

          <div className="shrink-0">
            <EditorialStamp
              text="• GET IN TOUCH • LET'S WORK TOGETHER • NEPAL •"
              size={110}
              icon="arrow"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Coordinates & CV Access */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1B131A] border border-[#D98A84]/30 shadow-xl space-y-6">
              <h3 className="text-lg font-serif font-bold text-[#F8EFEB]">
                Contact Coordinates
              </h3>

              <div className="space-y-4 text-sm font-mono">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-[#D5C7C1] hover:text-[#D98A84] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#231A22] border border-[#D98A84]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4 text-[#D98A84]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#D98A84] block">DIRECT EMAIL</span>
                    <span className="text-xs text-[#F8EFEB]">{personal.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-[#D5C7C1]">
                  <div className="w-10 h-10 rounded-xl bg-[#231A22] border border-[#D98A84]/30 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#E89D97]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#D98A84] block">PHONE / WHATSAPP</span>
                    <span className="text-xs text-[#F8EFEB]">{personal.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[#D5C7C1]">
                  <div className="w-10 h-10 rounded-xl bg-[#231A22] border border-[#D98A84]/30 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#D98A84]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#D98A84] block">LOCATION</span>
                    <span className="text-xs text-[#F8EFEB]">{personal.location} (Far Western Region)</span>
                  </div>
                </div>
              </div>

              {/* Resume / CV Card */}
              <div className="pt-4 border-t border-[#D98A84]/15 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D98A84] block">
                  Official CV Document
                </span>
                <p className="text-xs text-[#D5C7C1]">
                  Download or inspect Diya's verified resume detailing education and technical background.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={onOpenCV}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono text-[#D5C7C1] hover:text-[#F8EFEB] bg-[#231A22] hover:bg-[#2D212A] rounded-lg transition-colors border border-[#D98A84]/30"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#D98A84]" />
                    <span>View CV</span>
                  </button>
                  <a
                    href={personal.cvPdfPath}
                    download="Diya_Karki_CV.pdf"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#120D11] bg-gradient-to-r from-[#D98A84] to-[#E89D97] rounded-lg transition-colors shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1B131A] border border-[#D98A84]/30 shadow-xl">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#8E3E47]/30 border border-[#D98A84]/40 text-[#E89D97] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#F8EFEB]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#D5C7C1] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Diya will review your message and reply via email shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-mono text-[#120D11] bg-[#D98A84] rounded-lg hover:bg-[#E89D97] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-[#D5C7C1] mb-1.5"
                    >
                      YOUR NAME <span className="text-[#D98A84]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-[#120D11] border ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-[#D98A84]/30 focus:border-[#D98A84]'
                      } text-[#F8EFEB] placeholder:text-[#D5C7C1]/40 focus:outline-hidden focus:ring-2 focus:ring-[#D98A84]/20 transition-all font-sans`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-[#D5C7C1] mb-1.5"
                    >
                      EMAIL ADDRESS <span className="text-[#D98A84]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-[#120D11] border ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-[#D98A84]/30 focus:border-[#D98A84]'
                      } text-[#F8EFEB] placeholder:text-[#D5C7C1]/40 focus:outline-hidden focus:ring-2 focus:ring-[#D98A84]/20 transition-all font-sans`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-[#D5C7C1] mb-1.5"
                    >
                      MESSAGE <span className="text-[#D98A84]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your project idea, collaboration, or internship inquiry..."
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-[#120D11] border ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-[#D98A84]/30 focus:border-[#D98A84]'
                      } text-[#F8EFEB] placeholder:text-[#D5C7C1]/40 focus:outline-hidden focus:ring-2 focus:ring-[#D98A84]/20 transition-all resize-y font-sans`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-[#120D11] bg-gradient-to-r from-[#D98A84] to-[#E89D97] hover:brightness-110 disabled:opacity-60 rounded-xl transition-all shadow-md shadow-[#D98A84]/20 inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
