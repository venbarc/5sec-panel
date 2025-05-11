import React from "react";
import styles from "./Sidebar.module.css";

interface SidebarItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  onClick,
  active,
}) => {
  return (
    <div
      className={`${styles.item} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default SidebarItem;
