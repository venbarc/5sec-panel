import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarItem from "./components/Sidebar/SidebarItem";

function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const labels = ["Dashboard", "Products", "Orders"];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        {labels.map((label, idx) => (
          <SidebarItem
            key={label}
            active={idx === activeIndex}
            onClick={() => setActiveIndex(idx)}
          >
            {label}
          </SidebarItem>
        ))}
      </Sidebar>

      <main style={{ flex: 1, padding: "1rem" }}>
        <h1>{labels[activeIndex]}</h1>
        <p>This is the {labels[activeIndex]} section.</p>
      </main>
    </div>
  );
}

export default App;
