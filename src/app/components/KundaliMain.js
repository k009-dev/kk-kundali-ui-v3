'use client';
import { useEffect, useState } from 'react';
import HouseNumbers from './HouseNumbers';
import HouseDivs from './HouseDivs';
import PlanetPlacements from './PlanetPlacements';

export default function KundaliMain() {
  const [scale, setScale] = useState(1);
  const [planetCount, setPlanetCount] = useState(6);

  useEffect(() => {
    const updateScale = () => {
      // Get the viewport size
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Reference size: 600px x 600px
      const referenceSize = 600;
      
      // Calculate available space with padding
      const padding = 40; // 20px on each side
      const availableWidth = viewportWidth - padding;
      const availableHeight = viewportHeight - 120; // Extra space for control panel
      
      // Calculate scale factors
      const scaleByWidth = availableWidth / referenceSize;
      const scaleByHeight = availableHeight / referenceSize;
      
      // Use the smaller scale to ensure it fits, but cap at 1.0 (max 600px)
      const newScale = Math.min(scaleByWidth, scaleByHeight, 1.0);
      
      // Ensure minimum scale for very small screens
      const finalScale = Math.max(newScale, 0.3);
      
      setScale(finalScale);
    };

    // Initial scale calculation
    updateScale();
    
    // Update scale on window resize
    window.addEventListener('resize', updateScale);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <>
      {/* Control Panel - Outside the chart */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 100,
        backgroundColor: 'white',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        color: 'black'
      }}>
        <label style={{ color: 'black' }}>
          Number of planets in each house: 
          <select 
            value={planetCount} 
            onChange={(e) => setPlanetCount(Number(e.target.value))}
            style={{ marginLeft: '10px', color: 'black' }}
          >
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Kundali Chart Container */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '80px 20px 20px', // Top padding for control panel
        boxSizing: 'border-box'
      }}>
        <div
          style={{
            width: '600px',
            height: '600px',
            backgroundImage: 'url(/kundali-bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            flexShrink: 0
          }}
        >
          <HouseDivs />
          <HouseNumbers />
          <PlanetPlacements planetCount={planetCount} />
        </div>
      </div>
    </>
  );
}