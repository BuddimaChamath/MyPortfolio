import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mqaqdbdz', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: new FormData(e.target as HTMLFormElement)
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-16 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all duration-200"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all duration-200"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg flex items-center gap-2 disabled:opacity-70 transform hover:scale-105"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </div>
            {submitMessage && (
              <div className="mt-4 p-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-lg shadow-sm">
                {submitMessage}
              </div>
            )}
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can also reach me directly at:
            </p>
            <a
              href="mailto:buddimachamathlive@gmail.com"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline block mb-2 transition-colors duration-200"
            >
              buddimachamathlive@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/buddima-chamath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
            >
              linkedin.com/in/buddima-chamath
            </a>
          </div>
        </div>

        <section
  id="contact"
  className="
    relative 
    py-16 
    pb-40 
    bg-gray-50 dark:bg-gray-800 
    min-h-screen
  "
>
  <div className="container mx-auto px-4">
    {/* ...your content... */}
  </div>
</section>
        
      </div>
    </section>
  );
};