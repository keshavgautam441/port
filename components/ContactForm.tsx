
import React, { useState } from 'react';
import { Loader2, Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-8 flex flex-col items-center justify-center text-center h-full">
        <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter message subject" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Enter your message" required className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all resize-none"></textarea>
      </div>
      <button type="submit" disabled={isLoading} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-all">
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
