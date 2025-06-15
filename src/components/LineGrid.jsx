// components/LineGrid.jsx
import React, { useState } from 'react';
import './LineGrid.css';

const backgroundHorizontalLines = [
  { top: '5%', left: '6%', width: '80%' },
  { top: '14.09%', left: '-20%', width: '70%' },
  { top: '23.18%', left: '50%', width: '65%' },
  { top: '32.27%', left: '-13%', width: '110%' },
  { top: '41.36%', left: '5%', width: '40%' },
  { top: '50.45%', left: '-8%', width: '140%' },
  { top: '59.54%', left: '-25%', width: '139%' },
  { top: '68.63%', left: '25%', width: '50%' },
  { top: '77.72%', left: '-15%', width: '80%' },
  { top: '86.81%', left: '58.4%', width: '35%' },
  { top: '95.9%', left: '15%', width: '90%' },
  { top: '105%', left: '47%', width: '67%' } // a bit outside bounds, optional
];


const verticalLines = [
  { left: '0%', top: '0%', height: '55%' },
  { left: '9.09%', top: '-15%', height: '95%' },
  { left: '18.18%', top: '20%', height: '90%' },
  { left: '27.27%', top: '0%', height: '100%' },
  { left: '36.36%', top: '10%', height: '80%' },
  { left: '45.45%', top: '15%', height: '70%' },
  { left: '54.54%', top: '20%', height: '50%' },
  { left: '63.63%', top: '15%', height: '85%' },
  { left: '72.72%', top: '10%', height: '80%' },
  { left: '81.81%', top: '30%', height: '60%' },
  { left: '90.9%', top: '5%', height: '105%' },
  { left: '100%', top: '-5%', height: '61%' }
];

const LineGrid = () => {
  const [hoveredLine, setHoveredLine] = useState(null);

  return (
    <div className="line-grid">
      {backgroundHorizontalLines.map((style, i) => (
        <div
          key={`bh-${i}`}
          className={`line horizontal line-3d ${hoveredLine === `h-${i}` ? 'move-horizontal' : ''}`}
          style={style}
          onMouseEnter={() => setHoveredLine(`h-${i}`)}
          onAnimationEnd={() => setHoveredLine(null)}
        />
      ))}

      {verticalLines.map((style, i) => (
        <div
          key={`v-${i}`}
          className={`line vertical line-3d ${hoveredLine === `v-${i}` ? 'move-vertical' : ''}`}
          style={style}
          onMouseEnter={() => setHoveredLine(`v-${i}`)}
          onAnimationEnd={() => setHoveredLine(null)}
        />
      ))}
    </div>
  );
};

export default LineGrid;
