import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFile from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_header_info">
          <h3>Room name</h3>
          <p>last seen at..</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Andy</span>
          This is a message
          <span className="chat_timestamp">{new Date().toLocaleString()}</span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">Andy</span>
          This is a message
          <span className="chat_timestamp">{new Date().toLocaleString()}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Andy</span>
          This is a message
          <span className="chat_timestamp">{new Date().toLocaleString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="type a message" />
          {/* <button><SendIcon/></button> */}
          <IconButton><SendIcon/></IconButton>
        </form>
        <KeyboardVoiceIcon />
      </div>
    </div>
  );
}

export default Chat;
