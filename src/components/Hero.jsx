import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
        </div>

        <div className="header-intro">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className='text-[#915EFF]'>Diamond</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build responsive front ends, efficient back-end APIs, <br className='sm:block hidden' />
            focused on creating full product experiences!
          </p>
        </div>
      </div>

      <ComputersCanvas  />

    </section>
  );
};

export default Hero;
