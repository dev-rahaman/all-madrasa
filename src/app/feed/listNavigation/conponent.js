"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ListNavigation = ({ items }) => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setSelectedIndex((prevIndex) => Math.max(0, prevIndex - 1));
          break;
        case "ArrowDown":
          setSelectedIndex((prevIndex) =>
            Math.min(items.length - 1, prevIndex + 1)
          );
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [items]);

  useEffect(() => {
    router.replace(`/feed/listNavigation/${selectedIndex + 1}`, undefined, {
      shallow: true,
    });
  }, [selectedIndex, router]);

  return (
    <ul className="w-[700px] flex items-center justify-center flex-col gap-2">
      {items.map((item, index) => (
        <li
          className="w-[400px] h-[500px] "
          key={index}
          style={{
            background: index === selectedIndex ? "lightblue" : "white",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListNavigation;
