
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Civil Structure & RCC',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct Email mailto link
    const emailTo = "info@myconstructions.com";
    const subject = encodeURIComponent(`New Proposal Request: ${formData.service}`);
    const body = encodeURIComponent(
      `Hello MY Constructions,\n\nI am interested in a proposal.\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Details:\n${formData.details}`
    );
    
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-construction-deep relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute bottom-0 right-0 w-full h-64 bg-white/5 skew-y-6 translate-y-32"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Info */}
          <div className="text-white space-y-10 md:space-y-12">
            <div>
              <h4 className="text-construction-safety uppercase tracking-widest font-bold text-sm mb-4">Get In Touch</h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black leading-tight mb-6">
                Ready to Start Your <br /> Next Masterpiece?
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-md">
                Consult with our experts for turnkey solutions, reinforced RCC structures, and professional interior finishing.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="bg-white/10 p-3 md:p-4 rounded-sm text-construction-safety group-hover:bg-construction-safety group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Visit Us</h5>
                  <p className="text-gray-400 text-sm">Survey No. 111, Shed No. 3, Nelagadarahalli, Sandekapa Road, Bangalore North – 560073</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="bg-white/10 p-3 md:p-4 rounded-sm text-construction-safety group-hover:bg-construction-safety group-hover:text-white transition-all">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Call Us</h5>
                  <p className="text-gray-400 text-sm">+91 99459 30894<br />Mon - Sat: 9am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="bg-white/10 p-3 md:p-4 rounded-sm text-construction-safety group-hover:bg-construction-safety group-hover:text-white transition-all">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Email Us</h5>
                  <p className="text-gray-400 text-sm">info@myconstructions.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 md:p-10 lg:p-12 shadow-2xl rounded-sm">
            <h3 className="text-2xl font-display font-bold text-construction-deep mb-6 md:mb-8 uppercase tracking-wide">Request a Proposal</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-construction-steel uppercase mb-2">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-construction-safety transition-colors" 
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-construction-steel uppercase mb-2">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-construction-safety transition-colors" 
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-construction-steel uppercase mb-2">Service Required</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-construction-safety transition-colors appearance-none"
                >
                  <option>Civil Structure & RCC</option>
                  <option>Interior Finishing</option>
                  <option>Turnkey Projects</option>
                  <option>Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-construction-steel uppercase mb-2">Project Details</label>
                <textarea 
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-construction-safety transition-colors" 
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-construction-safety text-white font-black py-4 uppercase text-sm tracking-[0.2em] hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
                Send Request via Email
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
