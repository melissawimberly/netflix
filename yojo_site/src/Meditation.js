import React from 'react';
import ReactTooltip from 'react-tooltip';

class Meditation extends React.Component {
  render(){
    return(
      <div className="meditation-wrapper" data-tip data-for="video-meditation-tooltip">
        <div className="video-overlay-text">Meditation</div>
        <ReactTooltip id="video-meditation-tooltip" class="yojo-tooltip video-tooltip" place="bottom" effect="solid">Check out our our new meditation videos.</ReactTooltip>
      </div>
    )
  }
}

export default Meditation;
