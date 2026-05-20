import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const ContactPage = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      toast.error("Contact form is not configured yet.");
      return;
    }

    emailjs
      .sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        emailConfig.publicKey
      )
      .then(
        () => {
          toast.success(" Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          toast.error(" Failed to send. Try again.");
          console.error(error);
        }
      );
  };

  // Variants for staggered animations
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <ToastContainer />
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold italic text-blue-200 text-center md:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          Get in touch
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl mt-4 font-light italic text-center md:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          Open for Internships & full-time roles
        </motion.p>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="mt-8 space-y-6 bg-neutral-950/40 p-6 sm:p-8 rounded-xl shadow-md"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <motion.div variants={fadeUp} custom={3}>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-blue-400"
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={4}>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              required
              placeholder="awesome-brand@email.com"
              className="w-full px-4 py-2 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-blue-400"
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={5}>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="4"
              name="message"
              required
              placeholder="Please write your project brief"
              className="w-full px-4 py-2 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-blue-400"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-2 hover:bg-white rounded-lg font-medium border border-white hover:text-gray-900 transition"
            variants={fadeUp}
            custom={6}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactPage;
