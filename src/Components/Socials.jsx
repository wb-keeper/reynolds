import {
  RiInstagramFill,
  RiSoundcloudFill,
  RiSpotifyFill,
  RiYoutubeFill,
} from "react-icons/ri";
import Link from "next/link";

const socials = [
  {
    path: "#",
    icon: <RiYoutubeFill />,
  },
  {
    path: "#",
    icon: <RiInstagramFill />,
  },
  {
    path: "#",
    icon: <RiSpotifyFill />,
  },
  {
    path: "#",
    icon: <RiSoundcloudFill />,
  },
];

function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index}>
            <div className={`${iconStyles}`}>{item.icon}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
