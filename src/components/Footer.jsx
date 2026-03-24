import SocialLinks from "./SocialLinks";
import Mountains from "./Mountains";

export default function Footer() {
  return (
    <footer className="relative w-full">
      <Mountains />
      <div className="absolute inset-x-0 bottom-12 md:bottom-16 z-10 flex justify-center">
        <SocialLinks />
      </div>
    </footer>
  );
}
