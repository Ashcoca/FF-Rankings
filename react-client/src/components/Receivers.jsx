import React from 'react';
import ReceiverList from './ReceiverList.jsx';

const Receivers = (props) => (
  <div>
    {console.log(props)}
    <div className="input-container">
      <input type="text" placeholder="Player Name"></input>
      <button className="add-player">Add Wide Receivers</button>
    </div>
    <ol className="player-list">
      { props.items[0].map(item => <ReceiverList item={item} onClick={props.onClick}/>)}
    </ol>
  </div>
)

export default Receivers;