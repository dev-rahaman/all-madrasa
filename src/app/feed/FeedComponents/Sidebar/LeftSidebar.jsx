"use client";
import Link from "next/link";
import {
  BlogIcon,
  ClassIcon,
  EditIcon,
  EventIcon,
  ExploreIcon,
  HistoryIcon,
  HomeIcon,
  NoticeIcon,
  NotificationIcon,
  PhotoIcon,
  VideoIcon,
} from "@/icon/page";
import { useState } from "react";

export const Item = ({ name, link, icon }) => {
  return (
    <ul>
      <li>
        <Link
          href={link}
          className="flex items-center p-2 text-[18px] hover:bg-[#9ab2003f] rounded-lg group"
        >
          <div className="me-2">{icon}</div>
          {name}
        </Link>
      </li>
    </ul>
  );
};

const items = [
  {
    name: "হোম",
    link: "/feed",
    icon: <HomeIcon />,
  },
  {
    name: "ক্লাস",
    link: "/feed/classes",
    icon: <ClassIcon />,
  },
  {
    name: "আর্টিকেল",
    link: "/feed/article",
    icon: <BlogIcon />,
  },
  {
    name: "এক্সপ্লোর",
    link: "/explore",
    icon: <ExploreIcon />,
  },
  {
    name: "নোটিশঃ",
    link: "/feed/notice",
    icon: <NoticeIcon />,
  },
  {
    name: "ইভেন্ট",
    link: "/events",
    icon: <EventIcon />,
  },
  {
    name: "নোটিফিকেশন",
    link: "/notifications",
    icon: <NotificationIcon />,
  },
  {
    name: "মেসেজ",
    link: "/message",
    icon: <NoticeIcon />,
  },
  {
    name: "ফটো",
    link: "/photo",
    icon: <PhotoIcon />,
  },
  {
    name: "ভিডিও",
    link: "/video",
    icon: <VideoIcon />,
  },
  {
    name: "প্রোফাইল",
    link: "/profile",
    icon: <EditIcon />,
  },
  {
    name: "পোস্ট",
    link: "/post",
    icon: <NoticeIcon />,
  },
  {
    name: "হিস্টোরি",
    link: "/hostory",
    icon: <HistoryIcon />,
  },
  {
    name: "প্রিমিয়াম",
    link: "/premium",
    icon: <NoticeIcon />,
  },
];

const LeftSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`left-sidebar w-[270px] p-4 pb-20 leading-6 h-screen overflow-x-auto custom-scrollbar ${
        isHovered ? "show-scrollbar" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul>
        <li>
          {items.map((item, idx) => (
            <Item
              key={idx}
              icon={item.icon}
              name={item.name}
              link={`${item.link}`}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
