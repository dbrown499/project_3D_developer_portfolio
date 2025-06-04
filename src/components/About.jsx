import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import selfPhoto from "../assets/selfportrait.png";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-start gap-10'>

        <div>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>About Me</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a versatile software engineer with hands-on experience in JavaScript and frameworks like React and Node.js. I bring a unique blend of creativity, empathy, and technical skill to every project. I thrive in collaborative environments and love turning real-world challenges into scalable, user-friendly solutions. Let's work together to build something meaningful!
          </motion.p>
        </div>
        <div>
          <motion.img
            src={selfPhoto}
            alt='Diamond Brown'
            className='w-[250px] h-[250px] rounded-2xl object-cover'
            variants={fadeIn("right", "spring", 0.3, 1)}
          />
        </div>

      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
