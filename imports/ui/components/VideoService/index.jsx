import React from "react";
import DailyIframe from '@daily-co/daily-js';

import "./styles.css";

class VideoService {

   async run(url)  {

    const room = { url };

    window.callFrame = DailyIframe.createFrame({
      showFullscreenButton: true,
    });

    this.appendChatRoomToBody();

    await callFrame.join({
      url: room.url,
      showLeaveButton: true,
    });

    callFrame.on('left-meeting', () => {
      this.removeChatRoomChild();
      callFrame.destroy();
    });
  }

  removeChatRoomChild(){
    if (window.callFrame && window.callFrame.iframe()) {
      const iframe = window.callFrame.iframe();
      window.callFrame.leave();
      window.callFrame.close();
    }
  }

  appendChatRoomToBody(){
    const iframe = window.callFrame.iframe();
    iframe.style.position = 'fixed';
    iframe.style.height = '90%';
    window.document.body.appendChild(iframe);
  }

}

export default VideoService;
