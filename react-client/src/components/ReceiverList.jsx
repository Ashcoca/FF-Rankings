import React from 'react';

const ReceiverList = (props) => (
  <li className="player-box">
    { props.item.firstName + " " + props.item.lastName }
    {/* <span className="hidden">{props.item}</span> */}
  </li>
)

export default ReceiverList;