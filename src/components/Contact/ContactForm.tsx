'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle2, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '@/context/ThemeContext';

export function ContactForm() {
  const { isDay } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const targetEmail = 'saurabh2732006@gmail.com';
    const emailSubject = encodeURIComponent(
      formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : `[Portfolio Inquiry] Message from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'General Inquiry'}\n\nMessage:\n${formData.message}`
    );

    // 1. Direct Mailto link dispatch (opens client email client / Gmail)
    const mailtoUrl = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoUrl;

    // 2. Also send via FormSubmit API to ensure email arrives in inbox even if mailto app isn't configured
    try {
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application.json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message
        })
      });
    } catch {
      console.log('FormSubmit fallback triggered via mailto');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#06B6D4', '#60A5FA', '#22D3EE']
      });
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className={`p-8 rounded-3xl text-center space-y-4 shadow-xl ${
        isDay
          ? 'bg-white/90 border border-sky-300 shadow-sky-900/10'
          : 'bg-[#061426] border border-cyan-400/40 shadow-cyan-500/10'
      }`}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto ${
          isDay ? 'bg-blue-100 text-blue-600' : 'bg-cyan-500/20 text-cyan-400'
        }`}>
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className={`text-xl font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>Message Dispatched!</h3>
        <p className={`text-sm font-light max-w-md mx-auto ${isDay ? 'text-slate-700' : 'text-slate-300'}`}>
          Your message has been sent to <span className={`font-mono font-bold ${isDay ? 'text-blue-700' : 'text-cyan-300'}`}>saurabh2732006@gmail.com</span>. I will review it and reply as soon as possible!
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }}
          className={`text-xs font-mono hover:underline pt-2 block mx-auto ${isDay ? 'text-blue-600' : 'text-cyan-400'}`}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 sm:p-8 rounded-3xl shadow-xl space-y-5 transition-all duration-300 ${
        isDay
          ? 'bg-white/80 border border-sky-200/80 shadow-sky-900/5'
          : 'bg-[#061426] border border-blue-500/20 shadow-blue-950/20'
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className={`text-lg font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>
          Send a Message
        </h3>
        <span className={`text-xs font-mono flex items-center gap-1 ${isDay ? 'text-blue-700' : 'text-cyan-400'}`}>
          <Mail className="w-3.5 h-3.5" />
          <span>Direct to Gmail</span>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className={`block text-xs font-mono ${isDay ? 'text-slate-700 font-semibold' : 'text-slate-300'}`}>
            Name <span className={isDay ? 'text-blue-600' : 'text-cyan-400'}>*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your Name"
            className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm focus:outline-none focus:ring-1 transition-all font-sans ${
              isDay
                ? 'bg-sky-50/80 border-sky-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 focus:bg-white'
                : 'bg-[#020617] border-blue-500/30 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400'
            }`}
          />
        </div>

        <div className="space-y-1.5">
          <label className={`block text-xs font-mono ${isDay ? 'text-slate-700 font-semibold' : 'text-slate-300'}`}>
            Email <span className={isDay ? 'text-blue-600' : 'text-cyan-400'}>*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@domain.com"
            className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm focus:outline-none focus:ring-1 transition-all font-sans ${
              isDay
                ? 'bg-sky-50/80 border-sky-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 focus:bg-white'
                : 'bg-[#020617] border-blue-500/30 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400'
            }`}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={`block text-xs font-mono ${isDay ? 'text-slate-700 font-semibold' : 'text-slate-300'}`}>Subject</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Project collaboration, inquiry, security research..."
          className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm focus:outline-none focus:ring-1 transition-all font-sans ${
            isDay
              ? 'bg-sky-50/80 border-sky-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 focus:bg-white'
              : 'bg-[#020617] border-blue-500/30 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400'
          }`}
        />
      </div>

      <div className="space-y-1.5">
        <label className={`block text-xs font-mono ${isDay ? 'text-slate-700 font-semibold' : 'text-slate-300'}`}>
          Message <span className={isDay ? 'text-blue-600' : 'text-cyan-400'}>*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Write your message here..."
          className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm focus:outline-none focus:ring-1 transition-all font-sans resize-none ${
            isDay
              ? 'bg-sky-50/80 border-sky-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 focus:bg-white'
              : 'bg-[#020617] border-blue-500/30 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400'
          }`}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full mt-2"
        icon={<Send className="w-4 h-4" />}
      >
        {isSubmitting ? 'Sending to Gmail...' : 'Send Message to Gmail'}
      </Button>
    </form>
  );
}

