import SingleStar from "./SingleStar";
import { STARS_CONFIG } from "../constants/stars";

export default function StarsContainer() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden dark:block">
      {STARS_CONFIG.map((star) => (
        <SingleStar 
          key={star.id} 
          top={star.top} 
          left={star.left} 
          size={star.size} 
          delay={star.delay} 
        />
      ))}
    </div>
  );
}