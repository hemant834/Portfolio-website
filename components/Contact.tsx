import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_98eyvcd",          // ✅ SERVICE_ID
        "template_869p1zj",         // ✅ CORRECT TEMPLATE_ID
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        {
          publicKey: "HJZ-6ucHJGkPt_BUm", // ✅ PUBLIC_KEY
        }
      )
      .then(() => {
        alert("Message sent successfully ✅");
        setFormState({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Message send failed ❌");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-zinc-100"
          >
            Contact Me 😊
          </motion.h2>

          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
           Let’s connect! Feel free to reach out for projects, collaborations, or any frontend development work.

          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
                Message
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your project..."
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 resize-none focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-emerald-500 text-white rounded-2xl font-bold disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-xl">📧 hemantkumar809499@gmail.com</p>
          <p className="text-lg mt-2">📍 Sirohi, Rajasthan, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
