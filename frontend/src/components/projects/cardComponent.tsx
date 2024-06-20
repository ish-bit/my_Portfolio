import React, { useEffect, useState } from "react"
import './cardComponent.css';
import { Card, Col, Row } from "antd";
import pic1 from '../../assets/images/pic1.png'


export const CardComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    
  }

  return (
        <Card
          className="card-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{backgroundImage: `url(${pic1})`}}
          onClick={handleClick}
        >
          
         
          {isHovered && (
            <div className="draggable-component">
              <h3>More Details</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                lacinia nisi vel lorem cursus, ut scelerisque urna blandit.
              </p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img src="link-icon.png" alt="link icon" />
              </a>
            </div>
          )}
        </Card>
  );
};