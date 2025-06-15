// components/LineGrid.jsx
import React, { useState } from 'react';
import './LineGrid.css';

const backgroundHorizontalLines = [
  { top: '5%', left: '6%', width: '80%', label: 'Design Flow', color: '#FF6B6B' },
  { top: '14.09%', left: '-20%', width: '70%', label: 'User Interaction', color: '#6BCB77' },
  { top: '23.18%', left: '50%', width: '65%', label: 'Performance', color: '#4D96FF' },
  { top: '32.27%', left: '-13%', width: '110%', label: 'Animation Layer', color: '#FFD93D' },
  { top: '41.36%', left: '5%', width: '40%', label: 'Feedback', color: '#FF6F91' },
  { top: '50.45%', left: '-8%', width: '140%', label: 'Timeline', color: '#845EC2' },
  { top: '59.54%', left: '-25%', width: '139%', label: 'Pathways', color: '#00C9A7' },
  { top: '68.63%', left: '25%', width: '50%', label: 'Nodes', color: '#FFC75F' },
  { top: '77.72%', left: '-15%', width: '80%', label: 'Signals', color: '#F9F871' },
  { top: '86.81%', left: '58.4%', width: '35%', label: 'Sync Layer', color: '#C34A36' },
  { top: '95.9%', left: '15%', width: '90%', label: 'Process End', color: '#008F7A' },
  { top: '105%', left: '47%', width: '67%', label: 'Overflow Trail', color: '#D65DB1' }
];


const verticalLines = [
  { left: '0%', top: '0%', height: '55%', label: 'Init', color: '#845EC2' },
  { left: '9.09%', top: '-15%', height: '95%', label: 'Track A', color: '#FFC75F' },
  { left: '18.18%', top: '20%', height: '90%', label: 'Track B', color: '#F9F871' },
  { left: '27.27%', top: '0%', height: '100%', label: 'Pipeline 1', color: '#FF9671' },
  { left: '36.36%', top: '10%', height: '80%', label: 'Pipeline 2', color: '#4D96FF' },
  { left: '45.45%', top: '15%', height: '70%', label: 'Edge A', color: '#6BCB77' },
  { left: '54.54%', top: '20%', height: '50%', label: 'Edge B', color: '#FF6F91' },
  { left: '63.63%', top: '15%', height: '85%', label: 'FlowCtrl', color: '#D65DB1' },
  { left: '72.72%', top: '10%', height: '80%', label: 'Memory Line', color: '#00C9A7' },
  { left: '81.81%', top: '30%', height: '60%', label: 'Node 7', color: '#FF6B6B' },
  { left: '90.9%', top: '5%', height: '105%', label: 'Finish Track', color: '#845EC2' },
  { left: '100%', top: '-5%', height: '61%', label: 'Sync Line', color: '#008F7A' }
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
        >
      <span className="line-label">{style.label}</span>

</div>

      ))}

      {verticalLines.map((style, i) => (
        <div
         key={`v-${i}`}
         className={`line vertical line-3d ${hoveredLine === `v-${i}` ? 'move-vertical' : ''}`}
         style={style}
         onMouseEnter={() => setHoveredLine(`v-${i}`)}
         onAnimationEnd={() => setHoveredLine(null)}
        >
  <span className="line-label vertical-label">{style.label}|</span>
</div>

      ))}
    </div>
    
  );
};

export default LineGrid;
