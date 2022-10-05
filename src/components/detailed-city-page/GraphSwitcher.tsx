import React from "react";

const GraphSwitcher = () => {
  return (
    <div className='graph-switcher'>
      <div className='graph-switcher-icon graph-switcher-icon-active'>
        <img src='img/icons-details/temp.svg' alt='' />
      </div>
      <div className='graph-switcher-icon'>
        <img src='img/icons-details/drop-outlined.svg' alt='' />
      </div>
      <div className='graph-switcher-icon'>
        <img src='img/icons-details/sun.svg' alt='' />
      </div>
    </div>
  );
};

export default GraphSwitcher;
