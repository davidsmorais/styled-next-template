import React from 'react'
import Theme from 'Theme';
import {
  FaItchIo,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaSteam,
} from 'react-icons/fa';


const ICON_MAP = {
  'itch.io': FaItchIo,
  'github': FaGithub,
  'twitter': FaTwitter,
  'youtube': FaYoutube,
  'steam': FaSteam,
}


const Icon = ({ name, color, ...props }) => {
  const IconComponent = ICON_MAP[name];
  const iconColor = Theme.colors[color] || Theme.colors.accent;
  return <IconComponent color={iconColor} {...props} />
}

export default Icon
