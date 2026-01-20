import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactFormData } from '../types';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    flavorOfInterest: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', phone: '', flavorOfInterest: 'General Inquiry', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-cream relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4"
          >
            Planning a Party?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We take bulk orders for parties, events, and gatherings! Zegel is the perfect milk-based treat to delight your guests. Fill out the form below with your details and we'll get back to you.
          </motion.p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-gray-100"
        >
          {isSent ? (
            <div className="text-center py-12">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6"
              >
                <CheckCircle size={40} />
              </motion.div>
              <h3 className="text-2xl font-bold text-chocolate mb-2">Enquiry Sent!</h3>
              <p className="text-gray-500">We'll reach out to discuss your Zegel needs shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-chocolate focus:ring-2 focus:ring-chocolate/20 outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-chocolate focus:ring-2 focus:ring-chocolate/20 outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-chocolate focus:ring-2 focus:ring-chocolate/20 outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="flavorOfInterest" className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
                  <select
                    id="flavorOfInterest"
                    name="flavorOfInterest"
                    value={formData.flavorOfInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-chocolate focus:ring-2 focus:ring-chocolate/20 outline-none transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Bulk Order / Party</option>
                    <option>Chocolate</option>
                    <option>Butterscotch</option>
                    <option>Choco-Banana</option>
                    <option>Strawberry</option>
                    <option>Coffee</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message & Party Details</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-chocolate focus:ring-2 focus:ring-chocolate/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your event, quantity needed, or any questions..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-chocolate text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-coffee transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : (
                    <>
                        Send Enquiry <Send size={18} />
                    </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;