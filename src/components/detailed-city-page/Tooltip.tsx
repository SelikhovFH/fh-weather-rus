import React from "react";

const Tooltip = () => {
  return (
    <>
      <div className='graph-tooltip'>
        <div className='graph-tooltip-title'>
          <div className='graph-tooltip-text'>
            21° <span>16°</span>
          </div>
          <img src='img/icons/cloudy.svg' alt='' />
        </div>
        <div className='graph-tooltip-body'>
          В понедельник минимальная температура воздуха составит 16° в 00:00. <br />
          Воздух прогреется до 22° между 14:00 и 15:00.
        </div>
      </div>

      {/* <div className='graph-tooltip'>
        <div className='graph-tooltip-title'>
          <div className='graph-tooltip-text'>0.7 мм</div>
        </div>
        <div className='graph-tooltip-body'>
          В понедельник общее количество осадков составит 0,7 мм.
        </div>
      </div> */}

      {/* <div className='graph-tooltip'>
        <div className='graph-tooltip-title'>
          <div className='graph-tooltip-grade'>
            <div className='graph-tooltip-grade-dot'></div>
          </div>
          <div className='graph-tooltip-text'>9 Очень высокий</div>
        </div>
        <div className='graph-tooltip-body'>
          Рекомендуется защищаться от солнца.
          <div> С 12:00 до 17:00 уровень будет очень высоким. </div>
        </div>
      </div> */}

    </>
  );
};

export default Tooltip;
