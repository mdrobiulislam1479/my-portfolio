import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiUser } from "react-icons/fi";

const About = () => {
  return (
    <div id="about" className="relative bg-base-100 py-20 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Image with Decorative Frame */}
          <motion.div
            className="w-full lg:w-5/12 relative hidden lg:flex"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <img
                src="https://img.freepik.com/premium-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer-vector-illustration-professional-software-developers-concept_1281567-2054.jpg?w=740"
                alt="Robiul Islam"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-2xl shadow-xl hidden md:block z-50"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xs uppercase tracking-wider">
                {" "}
                Available for hire
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-secondary font-semibold tracking-widest uppercase mb-2">
                Who I Am
              </h4>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-base-content">
                About <span className="text-secondary">Me</span>
              </h2>

              <p className="text-lg text-base-content/70 leading-relaxed mb-8">
                Hello! I'm{" "}
                <span className="text-base-content font-bold">Robiul</span>, a
                passionate web developer specializing in building modern,
                responsive, and user-focused web applications. I primarily work
                with React.js, Next.js, JavaScript, TypeScript, Redux Toolkit,
                and Tailwind CSS to create fast and scalable digital
                experiences.
                <br />
                I enjoy transforming ideas into clean, functional interfaces
                while focusing on performance, accessibility, and maintainable
                code. I have experience working with API integrations, state
                management, and building reusable UI components in real-world
                projects.
                <br />I am continuously learning and improving my skills,
                exploring new technologies, and following best practices in
                modern web development. My goal is to contribute to impactful
                products while growing as a developer in a collaborative
                environment.
              </p>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <InfoItem
                  icon={<FiUser />}
                  label="Name"
                  value="Md Robiul Islam"
                />
                <InfoItem
                  icon={<FiMapPin />}
                  label="Location"
                  value="Khulna, Bangladesh"
                />
                <InfoItem
                  icon={<FiPhone />}
                  label="Phone"
                  value="+8801402353404"
                  isLink
                  href="tel:+8801402353404"
                />
                <InfoItem
                  icon={<FiMail />}
                  label="Email"
                  value="mdrobiulislam1479@gmail.com"
                  isLink
                  href="mailto:mdrobiulislam1479@gmail.com"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Info Component
const InfoItem = ({ icon, label, value, isLink, href }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
      {icon}
    </div>
    <div>
      <p className="text-xs text-base-content/50 uppercase font-bold tracking-tighter">
        {label}
      </p>
      {isLink ? (
        <a
          href={href}
          className="text-base-content font-medium hover:text-secondary transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-base-content font-medium">{value}</p>
      )}
    </div>
  </div>
);

export default About;
