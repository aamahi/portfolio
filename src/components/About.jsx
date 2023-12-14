import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import {services} from "../constants/index.js";

const ServiceCard = ({title, description, index}) => {
  return (
    <motion.div variants={fadeIn("", "", 0.1, 1)} className={`w-full sm:w-1/2 ${index > 1 ? 'mt-10' : ''}`}>
      <div className={'flex flex-col gap-3'}>
        <h3 className={'text-secondary text-[20px]'}>{title}</h3>
        <p className={'text-secondary text-[17px] max-w-[300px] leading-[30px]'}>{description}</p>
      </div>
    </motion.div>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className={'mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'}>
        As a frontend software engineer with over two years of experience. Currently, an undergraduate student in the final year at Southeast University, my passion for programming has been a constant since my school days. Beyond coding.
        I find joy in exploring new technologies and love to travel, take photographs and attend conferences, workshops, and seminars.
      </motion.p>
      <div className={'mt-20 flex flex-wrap gap-10'}>
        {/*{services.map((service, index) =>  (*/}
        {/*  <ServiceCard key={service.title} index={index} {...service> />*/}
        {/*))}*/}
        {services.map((service, index)=> (
            <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About
