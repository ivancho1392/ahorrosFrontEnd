import React from 'react';
import Graph from './graph';

const GraphWrapper = ({ showGraph }) => {
  if (!showGraph) {
    return null;
  }

  return (
    <div className="graph-container">
      <Graph data={['10', '20', '5', '10', '10', '8']} />
    </div>
  );
};

export default GraphWrapper;
