import React from 'react';
import Graph from './graph';

const GraphWrapper = ({ showGraph }) => {
  if (!showGraph) {
    return null;
  }

  return (
    <div className="graph-container">
      <Graph />
    </div>
  );
};

export default GraphWrapper;
