import React, { FC } from 'react';
import { getDay } from 'helpers';
import { ChartProps } from 'types';
import {
  VictoryChart,
  VictoryArea,
  VictoryAxis,
  VictoryScatter,
  VictoryTooltip,
} from 'victory';
import Tooltip from 'components/city-page-components/ChartSection/components/Tooltip';

const getGridColor = (y: any, lastGridIndex: number): string =>
  y.index === 0 || y.index === lastGridIndex ? 'transparent' : '#ECECEC';

const ChartUv: FC<ChartProps> = ({ dailyForecast }) => {
  const data = dailyForecast
    .map(day => {
      return {
        x: day.dt,
        y: day.uvi + 1,
      };
    })
    .slice(0, 7);

  return (
    <>
      <svg style={{ position: 'absolute', top: -500000, left: -500000 }}>
        <defs>
          <linearGradient
            id='stroke-gradient'
            x1='528'
            y1='0'
            x2='528.25'
            y2='290'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#B860DA' />
            <stop offset='0.1' stopColor='#D255CD' stopOpacity='0.9' />
            <stop offset='0.2' stopColor='#D34BB7' stopOpacity='0.9' />
            <stop offset='0.3' stopColor='#F54550' stopOpacity='0.9' />
            <stop offset='0.4' stopColor='#F9692F' stopOpacity='0.9' />
            <stop offset='0.5' stopColor='#FB7F29' stopOpacity='0.9' />
            <stop offset='0.6' stopColor='#F6A90B' stopOpacity='0.9' />
            <stop offset='0.65' stopColor='#F9C301' stopOpacity='0.9' />
            <stop offset='0.7' stopColor='#E8D807' stopOpacity='0.9' />
            <stop offset='0.75' stopColor='#C4D316' stopOpacity='0.9' />
            <stop offset='0.8' stopColor='#91D83E' stopOpacity='0.9' />
            <stop offset='0.85' stopColor='#68D548' stopOpacity='0.9' />
            <stop offset='1' stopColor='#9FBED4' stopOpacity='0.9' />
          </linearGradient>
          <linearGradient
            id='chart-gradient'
            x1='528'
            y1='0'
            x2='528'
            y2='290'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#B860DA' />
            <stop offset='0.1' stopColor='#D255CD' stopOpacity='0.734375' />
            <stop offset='0.2' stopColor='#D34BB7' stopOpacity='0.734375' />
            <stop offset='0.3' stopColor='#F54550' stopOpacity='0.734375' />
            <stop offset='0.4' stopColor='#F9692F' stopOpacity='0.734375' />
            <stop offset='0.5' stopColor='#FB7F29' stopOpacity='0.734375' />
            <stop offset='0.6' stopColor='#F6A90B' stopOpacity='0.734375' />
            <stop offset='0.65' stopColor='#F9C301' stopOpacity='0.65' />
            <stop offset='0.7' stopColor='#E8D807' stopOpacity='0.5' />
            <stop offset='0.75' stopColor='#C4D316' stopOpacity='0.4' />
            <stop offset='0.8' stopColor='#91D83E' stopOpacity='0.3' />
            <stop offset='0.85' stopColor='#68D548' stopOpacity='0.01' />
            <stop offset='1' stopColor='#9FBED4' stopOpacity='1' />
          </linearGradient>
        </defs>
      </svg>

      <VictoryChart
        backgroundComponent={
          <rect
            vectorEffect='non-scaling-stroke'
            role='presentation'
            shapeRendering='auto'
            x='50'
            y='50'
            width='350'
            height='200'
            stroke='#ECECEC'
            rx={15}
            fill='transparent'></rect>
        }
        style={{
          background: {},
        }}>
        <VictoryAxis
          dependentAxis
          tickFormat={tick => (tick === 0 || tick === 15 ? '' : tick - 1)}
          tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          style={{
            grid: { stroke: (y: any) => getGridColor(y, 15), strokeWidth: 0.5 },
            axis: { stroke: 'transparent', strokeWidth: 0.5 },
            tickLabels: {
              fill: '#fff',
              fontSize: 8,
              fontFamily: '"Mulish", sans-serif',
            },
          }}
        />

        <VictoryAxis
          tickFormat={tick => getDay(tick).toUpperCase()}
          tickValues={data.map(day => day.x)}
          style={{
            grid: {
              stroke: (y: any) => getGridColor(y, 6),
              strokeWidth: 0.5,
            },
            axis: { stroke: 'transparent', strokeWidth: 0.5 },
            tickLabels: {
              fill: '#fff',
              fontSize: 8,
              fontFamily: '"Mulish", sans-serif',
            },
          }}
        />

        <VictoryArea
          interpolation='catmullRom'
          style={{
            data: {
              fill: 'url(#chart-gradient)',
              stroke: 'url(#stroke-gradient)',
              strokeWidth: '1.5px',
            },
          }}
          data={data}
        />
        <VictoryScatter
          containerComponent={
            <rect
              vectorEffect='non-scaling-stroke'
              role='presentation'
              shapeRendering='auto'
              x='50'
              y='50'
              width='350'
              height='200'
              stroke='#ECECEC'
              rx={15}
              fill='transparent'></rect>
          }
          labels={() => ''}
          labelComponent={
            <VictoryTooltip
              flyoutComponent={<Tooltip dailyForecast={dailyForecast} />}
              pointerOrientation='bottom'
            />
          }
          // dataComponent={}
          style={{
            data: { fill: '#fff' },
          }}
          size={3}
          data={data}
        />
      </VictoryChart>
    </>
  );
};

export default ChartUv;
