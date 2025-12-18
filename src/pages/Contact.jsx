import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiMail, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdMailOutline } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thanks for contacting me. I will get back to you soon!",
            icon: "success",
            confirmButtonColor: "#00ADB5",
          });
          formRef.current.reset();
        },
        (error) => {
          Swal.fire({
            title: "Oops...",
            text: "Something went wrong! " + error,
            icon: "error",
            confirmButtonColor: "#FF5722",
          });
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 md:px-0" id="contact">
      <h2 className="text-4xl font-bold my-20 text-center text-accent divider max-w-md mx-auto">
        Contact <span className="text-secondary">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Send Message Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-primary/80 rounded-xl p-8 shadow-lg border border-secondary/30 flex flex-col gap-6"
        >
          <h3 className="text-2xl font-bold text-secondary mb-2">
            Send Message
          </h3>

          <div className="md:flex gap-4">
            <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
              <label className="text-accent font-semibold mb-1">Name</label>
              <input
                name="user_name"
                type="text"
                className="bg-base-100/80 border border-secondary/30 rounded-lg px-4 py-2 text-accent focus:outline-none focus:border-secondary"
                placeholder="Your name"
                required
              />
            </div>

            <div className="flex flex-col md:w-[calc(50%-16px)]">
              <label className="text-accent font-semibold mb-1">Email</label>
              <input
                name="user_email"
                type="email"
                className="bg-base-100/80 border border-secondary/30 rounded-lg px-4 py-2 text-accent focus:outline-none focus:border-secondary"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-accent font-semibold mb-1">Subject</label>
            <input
              name="subject"
              type="text"
              className="bg-base-100/80 border border-secondary/30 rounded-lg px-4 py-2 text-accent focus:outline-none focus:border-secondary"
              placeholder="What's this about?"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-accent font-semibold mb-1">Message</label>
            <textarea
              name="message"
              className="bg-base-100/80 border border-secondary/30 rounded-lg px-4 py-2 text-accent focus:outline-none focus:border-secondary"
              rows={4}
              placeholder="Tell me about your project or just say hello!"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-secondary text-white font-bold py-3 rounded-lg mt-2 hover:bg-secondary/90 transition hover:shadow-lg hover:shadow-secondary/50 hover:duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-8 justify-between">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Let's Connect
            </h3>
            <p className="text-accent/80 mb-6">
              Let’s start a conversation about how I can help bring your ideas
              to life with clean and scalable solutions.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-base-100/80 rounded-lg p-4 border border-secondary/30 hover:shadow-lg hover:shadow-secondary/30 transition">
                <FiMail className="text-secondary text-2xl" />
                <div>
                  <div className="text-accent font-semibold">Email</div>
                  <div className="text-accent/80">
                    mdrobiulislam1479@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-base-100/80 rounded-lg p-4 border border-secondary/30 hover:shadow-lg hover:shadow-secondary/30 transition">
                <FiPhone className="text-secondary text-2xl" />
                <div>
                  <div className="text-accent font-semibold">
                    Phone / Whatsapp
                  </div>
                  <div className="text-accent/80">+8801402353404</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-base-100/80 rounded-lg p-4 border border-secondary/30 hover:shadow-lg hover:shadow-secondary/30 transition">
                <GoLocation className="text-secondary text-2xl" />
                <div>
                  <div className="text-accent font-semibold">Location</div>
                  <div className="text-accent/80">Khulna, Bangladesh</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-lg font-bold text-secondary mb-2">Catch Me</h4>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/mdrobiulislam1479"
                target="_blank"
                className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
              >
                <FaLinkedinIn size={22} />
              </a>
              <a
                href="https://github.com/mdrobiulislam1479"
                target="_blank"
                className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="mailto:mdrobiulislam1479@gmail.com"
                target="_blank"
                className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
              >
                <MdMailOutline size={22} />
              </a>
              <a
                href="https://wa.me/8801402353404"
                target="_blank"
                className="bg-base-100/80 p-2 rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition hover:shadow-lg hover:shadow-secondary/30 hover:scale-105"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
