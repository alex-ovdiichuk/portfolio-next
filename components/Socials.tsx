import Link from "next/link";
import { FaGithub, FaTelegram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/alex-ovdiichuk" },
  { icon: <FaTelegram />, path: "https://t.me/foxsxul" },
];

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

export const Socials: React.FC<SocialsProps> = ({
  containerStyles,
  iconStyles,
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((s) => (
        <Link href={s.path} key={s.path} className={iconStyles}>
          {s.icon}
        </Link>
      ))}
    </div>
  );
};
