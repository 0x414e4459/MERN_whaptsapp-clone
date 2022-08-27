import { Avatar } from "@mui/material";
import React from "react";
import "./sidebarchat.css";

function SidebarChat() {
  return (
    <div className="sidebarchat">
      <Avatar />
      <div className="sibarchat_info">
        <h3>Group name</h3>
        <p>Last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
