import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, FileText, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

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

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 700);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-2">
            <span>07</span>
            <span aria-hidden="true">/</span>
            <span>Reach Out</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading text-balance">
            Have an idea or want to connect? Let's build something interesting.
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
            Open to student internships, technical collaborations, and creative projects. Drop a note below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Coordinates & CV Access */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                Contact Coordinates
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4 text-violet-500" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Direct Email</span>
                    <span className="font-mono text-xs">{personal.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Phone / WhatsApp</span>
                    <span className="font-mono text-xs">{personal.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Location</span>
                    <span className="text-xs">{personal.location} (Far Western Region)</span>
                  </div>
                </div>
              </div>

              {/* Resume / CV Card */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                  Curriculum Vitae Document
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Download or inspect Diya's verified resume detailing education and technical background.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={onOpenCV}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-violet-500" />
                    <span>View CV</span>
                  </button>
                  <a
                    href={personal.cvPdfPath}
                    download="Diya_Karki_CV.pdf"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors shadow-xs"
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
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Diya will review your message and reply via email shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-900/60 transition-colors"
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
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-violet-500'
                      } text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-violet-500/20 transition-all`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-violet-500'
                      } text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-violet-500/20 transition-all`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your thoughts, project idea, or internship inquiry..."
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-violet-500'
                      } text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-violet-500/20 transition-all resize-y`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-60 rounded-xl transition-all shadow-md shadow-violet-500/20 inline-flex items-center justify-center gap-2 cursor-pointer"
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
