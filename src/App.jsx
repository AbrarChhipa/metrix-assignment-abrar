import React, { useState } from 'react';
import './App.css';

const App = () => {
  
  const initialMatrix = [
    ['white', 'white', 'white'],
    ['white', 'white', 'white'],
    ['white', 'white', 'white'],
  ];

  const [matrix, setMatrix] = useState(initialMatrix);
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (rowIndex, colIndex) => {
    

    if (matrix[rowIndex][colIndex] === 'green') return;

    
    const newMatrix = [...matrix];
    newMatrix[rowIndex][colIndex] = 'green';
    setMatrix(newMatrix);

    
    const newClickOrder = [...clickOrder, { rowIndex, colIndex }];
    setClickOrder(newClickOrder);


    
    if (newClickOrder.length === 9) {
      changeToOrange(newClickOrder);
    }
  };

  const changeToOrange = (order) => {
    order.forEach(({ rowIndex, colIndex }, index) => {
      setTimeout(() => {
        const newMatrix = [...matrix];
        newMatrix[rowIndex][colIndex] = 'orange';
        setMatrix(newMatrix);
      }, index * 500); 
    });
  };

  return (
    <div className="matrix">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              className="box"
              style={{ backgroundColor: color }}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
