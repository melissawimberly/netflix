import React from 'react';
import ReactTooltip from 'react-tooltip';

class Move extends React.Component {
  render(){
    return (
      <div className="move-wrapper" data-tip data-for="video-move-tooltip">

        <div className="video-overlay-text">Move</div>
        <ReactTooltip id="video-move-tooltip" class="yojo-tooltip video-tooltip" place="bottom" effect="solid">Take a few minutes to move your body.</ReactTooltip>
      </div>
    )
  }
}

export default Move;
