"use client"

import { useState } from "react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="flex-1 w-full">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold-condensed mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-foreground/80 mb-12 text-center max-w-2xl mx-auto">
            We'd love to hear from you
          </p>
          
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-foreground/20 text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-foreground/20 text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-foreground/20 text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Issue</option>
                <option value="wholesale">Wholesale</option>
                <option value="press">Press</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-background border border-foreground/20 text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}