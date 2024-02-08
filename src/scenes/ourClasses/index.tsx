import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and muscle mass through structured weightlifting exercises designed to target different muscle groups. Improve overall fitness levels and achieve your strength training goals with guidance from certified trainers.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
    "Experience a blend of physical postures, breathing techniques, and meditation to enhance flexibility, balance, and mental well-being. Discover various styles of yoga, from gentle Hatha to dynamic Vinyasa, suitable for practitioners of all levels.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen and tone your core muscles with specialized workouts focused on the abdominal region. Engage in targeted exercises to sculpt your abs, improve posture, and enhance overall core stability for better performance in daily activities.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on outdoor adventures and exhilarating activities that challenge your fitness and ignite your sense of adventure. From hiking and rock climbing to kayaking and obstacle courses, explore new environments while improving endurance, coordination, and teamwork skills.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
    "Join high-energy group fitness classes tailored to various fitness levels and interests. Choose from cardio-intensive workouts, dance-based routines, and functional training sessions to boost cardiovascular health, burn calories, and improve overall fitness.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Receive personalized coaching and guidance from certified trainers to reach your fitness goals effectively. Whether you're aiming for weight loss, muscle gain, or improved athletic performance, structured training programs provide the support and motivation you need to succeed.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            We offers a diverse range of fitness experiences tailored to meet individual preferences and goals. Participants can expect dynamic workouts led by experienced instructors, engaging sessions that challenge both body and mind, and a supportive community atmosphere where everyone can thrive. With a variety of classes spanning different disciplines and fitness levels, our programs cater to beginners and advanced athletes alike, promoting holistic wellness and a balanced lifestyle for all.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;