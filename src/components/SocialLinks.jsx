import { SOCIAL_LINKS } from "../constants/socials";

export default function SocialLinks() {
  return (
    <div className="flex gap-8">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.id}
          href={social.url}
          aria-label={social.name}
          style={{ "--icon-path": `url(${social.path})` }}
          className="icon-mask w-6 h-6 bg-stella hover:bg-core transition-colors duration-300 block"
        />
      ))}
    </div>
  );
}