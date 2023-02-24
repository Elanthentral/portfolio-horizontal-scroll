import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPenFancy,
  faList,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
export const NavData = [
  {
    label: "About",
    url: "/",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    label: "Resume",
    url: "resume",
    icon: <FontAwesomeIcon icon={faList} />,
  },
  {
    label: "Works",
    url: "works",
    icon: <FontAwesomeIcon icon={faPenFancy} />,
  },
  {
    label: "Contact",
    url: "contactform",
    icon: <FontAwesomeIcon icon={faAt} />,
  },
];
