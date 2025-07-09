import Feather from "@expo/vector-icons/Feather";
import React from "react";

type MenuItem = {
    name: string;
    icon: any;
    url: string;
  };
  

export const useSideBarMenu = (): MenuItem[] => {
  const menu =  [
    {
      name: "App Setting",
      icon: <Feather name="grid" size={24} color="white" />,
      url: "/app-setting",
    },
    {
      name: "Notification Preferences",
      icon: <Feather name="bell" size={24} color="white" />,
      url: "/notification-preferences",
    },
    {
      name: "Privacy and Permissions",
      icon: <Feather name="lock" size={24} color="white" />,
      url: "/privacy-permissions",
    },
    {
      name: "Help Center",
      icon: <Feather name="help-circle" size={24} color="white" />,
      url: "/help-center",
    },
    {
      name: "About Maternity Connect",
      icon: <Feather name="info" size={24} color="white" />,
      url: "/about",
    },
    {
      name: "Terms of Use",
      icon: <Feather name="file-text" size={24} color="white" />,
      url: "/terms",
    },
    {
      name: "Contact Support",
      icon: <Feather name="phone" size={24} color="white" />,
      url: "/contact-support",
    },
    {
      name: "Language",
      icon: <Feather name="globe" size={24} color="white" />,
      url: "/language",
    },
  ];

  return menu
};
