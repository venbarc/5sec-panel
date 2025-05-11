import React from 'react'
import styles from './Sidebar.module.css'

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className={styles.sidebar}>
      {children}
    </aside>
  )
}

export default Sidebar
