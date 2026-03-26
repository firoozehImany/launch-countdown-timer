import SocialLinks from "./SocialLinks";
import Mountains from "./Mountains";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <Mountains />
      <div className="absolute inset-x-0 bottom-10 md:bottom-[72px] z-10 flex justify-center">
        <SocialLinks />
      </div>
    </footer>
  );
}
