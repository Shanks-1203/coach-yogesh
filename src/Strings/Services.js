import { GiWeightScale } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa6";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { GiBiceps } from "react-icons/gi";

const services = [
    {
      id: 1,
      icon: <GiWeightScale />,
      title: 'Weight Loss',
      desc: 'Achieve your ideal body weight with a balanced, sustainable plan designed around your lifestyle. Focused on nutrition, activity, and long-term habits.'
    },
    {
      id: 2,
      icon: <FaDumbbell />,
      title: 'Weight Gain',
      desc: 'Build healthy body mass the right way through tailored nutrition and guided routines. Gain strength, confidence, and energy, safely and effectively.'
    },
    {
      id: 3,
      icon: <MdFaceRetouchingNatural />,
      title: 'Skin care',
      desc: 'Nourish your skin from within with the right nutrition and wellness balance. Experience visible glow, hydration, and natural radiance that lasts.'
    },
    {
      id: 4,
      icon: <GiBiceps />,
      title: 'Immunity Boost',
      desc: "Strengthen your body's defense system with personalized nutrition and lifestyle guidance. Stay energetic, resilient, and ready to take on every day."
    }
]

export default services