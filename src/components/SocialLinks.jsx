import { SOCIAL_LINKS } from "../constants/icons";

export default function SocialLinks() {
  return (
    <div className="flex gap-8">
      {SOCIAL_LINKS.map(({ id, name, url, path }) => (
        <a
          key={id}
          href={url}
          aria-label={name}
          className="w-6 h-6 bg-stella hover:bg-core icon-mask transition-colors duration-300 block"
          style={{ "--icon-path": `url(${path})` }}
        />
      ))}
    </div>
  );
}