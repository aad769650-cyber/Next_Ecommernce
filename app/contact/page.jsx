'use client'
import React, { useState } from 'react';

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    newsletter: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    
    // Reset form after showing popup
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
        newsletter: false
      });
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-rose-400/8 rounded-full blur-3xl"></div>
      </div>

      {/* Grain Texture */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-2xl w-full animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-amber-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 animate-fade-in">
            Exclusive Membership
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-delay-1">
            Join Our Elite Circle
          </h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed animate-fade-in-delay-2">
            Experience luxury shopping with early access to collections, private sales, and personalized service.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden animate-fade-in-delay-3">
          {/* Top Border Gradient */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>

          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-xs uppercase tracking-wider text-gray-400 mb-3 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] focus:ring-4 focus:ring-amber-500/10 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs uppercase tracking-wider text-gray-400 mb-3 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] focus:ring-4 focus:ring-amber-500/10 transition-all duration-300"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-400 mb-3 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] focus:ring-4 focus:ring-amber-500/10 transition-all duration-300"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-gray-400 mb-3 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] focus:ring-4 focus:ring-amber-500/10 transition-all duration-300"
              />
            </div>

            {/* Interest Dropdown */}
            <div>
              <label htmlFor="interest" className="block text-xs uppercase tracking-wider text-gray-400 mb-3 font-medium">
                Primary Interest
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] focus:ring-4 focus:ring-amber-500/10 transition-all duration-300"
              >
                <option value="" className="bg-zinc-900">Select your interest</option>
                <option value="fashion" className="bg-zinc-900">Fashion & Apparel</option>
                <option value="accessories" className="bg-zinc-900">Luxury Accessories</option>
                <option value="jewelry" className="bg-zinc-900">Fine Jewelry</option>
                <option value="home" className="bg-zinc-900">Home & Lifestyle</option>
                <option value="beauty" className="bg-zinc-900">Beauty & Wellness</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-400 mb-3 font-medium">
                Tell Us About Yourself (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your style preferences or what you're looking for..."
                rows={4}
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-amber-500 focus:bg-white/[0.05] focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 resize-y"
              />
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-start gap-3 py-4">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="mt-1 w-4 h-4 accent-amber-500 cursor-pointer"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-400 font-light leading-relaxed cursor-pointer">
                I would like to receive exclusive offers, styling tips, and updates about new collections.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-semibold uppercase tracking-widest text-sm py-5 rounded-lg hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-amber-500/30 active:translate-y-0 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Submit Application</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-8 animate-fade-in"
          onClick={closePopup}
        >
          <div 
            className="bg-zinc-900 border border-white/10 rounded-3xl max-w-lg w-full p-12 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-500 to-rose-400 rounded-3xl opacity-30 -z-10"></div>

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <div className="w-5 h-0.5 bg-white rotate-45 absolute"></div>
              <div className="w-5 h-0.5 bg-white -rotate-45 absolute"></div>
            </button>

            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-amber-500 to-rose-400 rounded-full flex items-center justify-center animate-scale-bounce">
              <svg 
                className="w-10 h-10 text-zinc-950" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 13l4 4L19 7"
                  className="animate-draw-check"
                />
              </svg>
            </div>

            {/* Content */}
            <h2 className="text-4xl font-serif font-bold text-center mb-4 animate-fade-in-delay-1">
              Welcome Aboard!
            </h2>
            <p className="text-gray-400 text-center text-lg leading-relaxed mb-8 animate-fade-in-delay-2">
              Your application has been received. We're thrilled to have you join our exclusive community. Check your email for your welcome package and VIP access details.
            </p>

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="w-full bg-white/5 border border-white/10 text-white font-medium uppercase tracking-wider text-sm py-4 rounded-lg hover:bg-white/10 hover:border-amber-500 transition-all duration-300 animate-fade-in-delay-3"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Work+Sans:wght@300;400;500;600&display=swap');
        
        * {
          font-family: 'Work Sans', sans-serif;
        }
        
        h1, h2 {
          font-family: 'Playfair Display', serif;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes scale-bounce {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes draw-check {
          from {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          to {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 0.8s ease-out 0.3s backwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s backwards;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.5s backwards;
        }

        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-scale-bounce {
          animation: scale-bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s backwards;
        }

        .animate-draw-check {
          animation: draw-check 0.6s ease 0.5s backwards;
        }
      `}</style>
    </div>
  );
}