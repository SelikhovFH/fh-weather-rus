import React, { useState } from 'react';
import warmDark from '../img/service-icons/graph-switcher-icons/warm-dark.svg';
import dropDark from '../img/service-icons/graph-switcher-icons/drop-dark.svg';
import sunDark from '../img/service-icons/graph-switcher-icons/sun-dark.svg';
import warmLight from '../img/service-icons/graph-switcher-icons/warm-light.svg';
import dropLight from '../img/service-icons/graph-switcher-icons/drop-light.svg';
import sunLight from '../img/service-icons/graph-switcher-icons/sun-light.svg';

const GraphSwitcher = () => {
  const [someSelectedGraph, setSomeSelectedGraph] = useState(0);

  const icons: { dark: any; light: any }[] = [
    { dark: warmDark, light: warmLight },
    { dark: dropDark, light: dropLight },
    { dark: sunDark, light: sunLight },
  ];

  return (
    <div className='flex justify-around'>
      {icons.map((icon, i) => (
        <img
          onClick={() => setSomeSelectedGraph(i)}
          key={i}
          className={`py-2.5 px-6 border-primary-blue first:rounded-l-primary first:border-r-1px last:border-l-1px last:rounded-r-primary transition-colors cursor-pointer ${
            someSelectedGraph === i ? 'bg-primary-blue' : 'bg-white'
          }`}
          src={someSelectedGraph === i ? icon.light : icon.dark}
          alt='img'
        />
      ))}
    </div>
  );
};

export default GraphSwitcher;
