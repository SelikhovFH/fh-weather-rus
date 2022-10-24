import React, { useState, FC } from 'react';
import { graphSwitcherIcons } from 'assets/Icons';

const GraphSwitcher: FC = () => {
  const [selectedGraph, setSelectedGraph] = useState(0);

  const icons: { dark: string; light: string }[] = [
    {
      dark: graphSwitcherIcons['warm-dark'],
      light: graphSwitcherIcons['warm-light'],
    },
    {
      dark: graphSwitcherIcons['drop-dark'],
      light: graphSwitcherIcons['drop-light'],
    },
    {
      dark: graphSwitcherIcons['sun-dark'],
      light: graphSwitcherIcons['sun-light'],
    },
  ];

  return (
    <div className='flex justify-around'>
      {icons.map((icon, i) => (
        <img
          onClick={() => setSelectedGraph(i)}
          key={i}
          className={`py-2.5 px-6 border-primary-blue first:rounded-l-primary first:border-r-1px last:border-l-1px last:rounded-r-primary transition-colors cursor-pointer ${
            selectedGraph === i ? 'bg-primary-blue' : 'bg-white'
          }`}
          src={selectedGraph === i ? icon.light : icon.dark}
          alt='img'
        />
      ))}
    </div>
  );
};

export default GraphSwitcher;
