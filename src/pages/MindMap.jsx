import React from 'react';
import ReactFlow from 'react-flow-renderer';

const MindMap = () => {
  const elements = [
    { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 100, y: 100 } },
    { id: '2', data: { label: 'Node 1' }, position: { x: 300, y: 100 } },
    { id: '3', data: { label: 'Node 2' }, position: { x: 500, y: 100 } },
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
  ];

  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
  };

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <ReactFlow elements={elements} onLoad={onLoad} />
    </div>
  );
};

export default MindMap;
