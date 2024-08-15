import React from "react";

interface ContadorProps {
    title: string;
    number: number;
  }
  
  const Contador: React.FC<ContadorProps> = ({ title, number }) => {
    return (
      <div className="parada">
        <p>{number}</p>
        <h3>{title}</h3>
      </div>
    );
  };

export default Contador