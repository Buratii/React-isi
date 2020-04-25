import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./components/sidebar.jsx";
import Header from "./components/header.jsx";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  let sidebar;

  if (sidebarOpen) {
    sidebar = <Sidebar show={sidebarOpen} />;
  }

  return (
    <>
      <Header click={openHandler} />
      {sidebar}
    </>
  );
}

/**/
