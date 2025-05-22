import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/egbuchajoseph@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Failed to send message, please try again.");
      }
    } catch {
      alert("Network error, please try again.");
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="w-full max-w-lg mx-auto p-6 rounded-xl shadow-xl text-center text-white bg-gradient-to-r from-slate-500 to-purple-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Thank you!</h2>
        <p>Your message has been sent successfully. I will get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-6 rounded-xl shadow-xl space-y-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Hidden Fields not needed with AJAX submit */}
      <h2 className="text-2xl font-semibold text-white text-center">Contact Me</h2>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Your Email"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Message</label>
        <textarea
          name="message"
          required
          rows="5"
          className="w-full px-4 py-2 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Your Message"
        ></textarea>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-2 px-4 rounded bg-gradient-to-r from-slate-700 to-purple-900 hover:bg-purple-700 text-white font-semibold transition duration-200"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}
