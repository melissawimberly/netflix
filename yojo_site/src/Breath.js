import React from 'react';
import ReactTooltip from 'react-tooltip';

class Breath extends React.Component {
  render(){
    return(
      <div className="breath-wrapper" data-tip data-for="video-breath-tooltip">
        <iframe
          src="https://videos.sproutvideo.com/embed/a09addb8161defcf28/5fbef75aaacf52b8?signature=PhxIM3rtvA7WWhBgB4R6ns%2F66gY%3D&amp;access_grant_id=489ddcbf101ae1c3c0&amp;downloads=&amp;expires=1510521151&amp;has_access=true&amp;login_id=789dd1b5131ff6&amp;type=hd&amp;vemail=melissa.f.wimberly@gmail.com"
          width="100%"
          height="100%"
          className="sproutvideo-player move-top-video">
        </iframe>
        <div className="video-overlay-text">Breath</div>
        <ReactTooltip id="video-breath-tooltip" class="yojo-tooltip video-tooltip" place="bottom" effect="solid">Take a few minutes to breath.</ReactTooltip>
      </div>
    )
  }
}

export default Breath;
