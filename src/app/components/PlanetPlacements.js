'use client';
import { useState } from 'react';

export default function PlanetPlacements() {
  const [planetCount, setPlanetCount] = useState(4);

  // Generate test planets based on count (consistent for SSR)
  const generateTestPlanets = (count, houseIndex) => {
    const planets = ['Me', 'Ve', 'Ma', 'Ju', 'Sa', 'Ra', 'Ke', 'Su'];
    const testPlanets = [];
    for (let i = 0; i < count; i++) {
      testPlanets.push({
        code: planets[i % planets.length],
        degree: String((houseIndex * 3 + i * 5) % 30).padStart(2, '0')
      });
    }
    return testPlanets;
  };

  // Get position for planets in a house
  const getPlanetPositions = (count, houseIndex) => {
    switch (count) {
      case 1:
        return [{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }];
      
      case 2:
        // For houses 4 and 10 (horizontal houses), place side by side
        if (houseIndex === 3 || houseIndex === 9) { // House 4 and 10 (0-indexed)
          return [
            { top: '50%', left: '30%', transform: 'translate(-50%, -50%)' },
            { top: '50%', left: '70%', transform: 'translate(-50%, -50%)' }
          ];
        }
        // For all other houses, place vertically
        return [
          { top: '30%', left: '50%', transform: 'translate(-50%, -50%)' },
          { top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }
        ];
      
      case 3:
        // For houses 1, 7, 11, 3, 9, 5 place one below another
        if (houseIndex === 0 || houseIndex === 6 || houseIndex === 10 || houseIndex === 2 || houseIndex === 8 || houseIndex === 4) { 
          // House 1, 7, 11, 3, 9, 5 (0-indexed)
          return [
            { top: '20%', left: '50%', transform: 'translate(-50%, -50%)' },
            { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
            { top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }
          ];
        }
        // For all other houses (10, 4, 6, 8, 2, 12), use layout with more spacing
        return [
          { top: '20%', left: '50%', transform: 'translate(-50%, -50%)' },
          { top: '70%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '70%', left: '75%', transform: 'translate(-50%, -50%)' }
        ];
      
      case 4:
        // For houses 1 and 7 (vertical houses), place one below another
        if (houseIndex === 0 || houseIndex === 6) { // House 1 and 7 (0-indexed)
          return [
            { top: '15%', left: '50%', transform: 'translate(-50%, -50%)' },
            { top: '40%', left: '50%', transform: 'translate(-50%, -50%)' },
            { top: '65%', left: '50%', transform: 'translate(-50%, -50%)' },
            { top: '85%', left: '50%', transform: 'translate(-50%, -50%)' }
          ];
        }
        // For all other houses, use 2x2 grid layout with more spacing
        return [
          { top: '25%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '25%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '75%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '75%', left: '75%', transform: 'translate(-50%, -50%)' }
        ];
      
      case 5:
        return [
          { top: '20%', left: '50%', transform: 'translate(-50%, -50%)' },
          { top: '50%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '50%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '80%', left: '30%', transform: 'translate(-50%, -50%)' },
          { top: '80%', left: '70%', transform: 'translate(-50%, -50%)' }
        ];
      
      case 6:
        return [
          { top: '25%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '25%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '50%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '50%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '75%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '75%', left: '75%', transform: 'translate(-50%, -50%)' }
        ];
      
      case 7:
        return [
          { top: '15%', left: '50%', transform: 'translate(-50%, -50%)' },
          { top: '35%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '35%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '55%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '55%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '75%', left: '30%', transform: 'translate(-50%, -50%)' },
          { top: '75%', left: '70%', transform: 'translate(-50%, -50%)' }
        ];
      
      case 8:
        return [
          { top: '15%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '15%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '35%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '35%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '65%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '65%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '85%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '85%', left: '75%', transform: 'translate(-50%, -50%)' }
        ];
      
      default:
        return [{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }];
    }
  };

  // House boundaries for positioning (matching HouseDivs positions)
  const housePositions = [
    // House 1
    { top: '20%', left: '50%', width: '8%', height: '23%', transform: 'translateX(-50%)' },
    // House 2  
    { top: '16%', right: '35%', width: '16%', height: '14%', transform: 'translate(50%, -50%)' },
    // House 3
    { top: '35%', right: '14%', width: '12%', height: '16%', transform: 'translate(50%, -50%)' },
    // House 4
    { top: '50%', right: '20%', width: '23%', height: '8%', transform: 'translateY(-50%)' },
    // House 5
    { bottom: '35%', right: '14%', width: '12%', height: '16%', transform: 'translate(50%, 50%)' },
    // House 6
    { bottom: '16%', right: '35%', width: '16%', height: '14%', transform: 'translate(50%, 50%)' },
    // House 7
    { bottom: '20%', left: '50%', width: '8%', height: '23%', transform: 'translateX(-50%)' },
    // House 8
    { bottom: '16%', left: '35%', width: '16%', height: '14%', transform: 'translate(-50%, 50%)' },
    // House 9
    { bottom: '35%', left: '14%', width: '12%', height: '16%', transform: 'translate(-50%, 50%)' },
    // House 10
    { top: '50%', left: '20%', width: '23%', height: '8%', transform: 'translateY(-50%)' },
    // House 11
    { top: '35%', left: '14%', width: '12%', height: '16%', transform: 'translate(-50%, -50%)' },
    // House 12
    { top: '16%', left: '35%', width: '16%', height: '14%', transform: 'translate(-50%, -50%)' }
  ];

  // This will be moved inside the map function

  return (
    <>
      {/* Control Panel */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 100,
        backgroundColor: 'white',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px'
      }}>
        <label>
          Number of planets in each house: 
          <select 
            value={planetCount} 
            onChange={(e) => setPlanetCount(Number(e.target.value))}
            style={{ marginLeft: '10px' }}
          >
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Planet Placements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 20
      }}>
        {housePositions.map((house, houseIndex) => {
          const testPlanets = generateTestPlanets(planetCount, houseIndex);
          const planetPositions = getPlanetPositions(planetCount, houseIndex);
          
          return (
            <div key={houseIndex} style={{
              position: 'absolute',
              ...house,
              pointerEvents: 'none'
            }}>
              {testPlanets.map((planet, planetIndex) => {
                const position = planetPositions[planetIndex] || planetPositions[0];
                return (
                  <div
                    key={planetIndex}
                    style={{
                      position: 'absolute',
                      ...position,
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <span style={{ 
                      color: 'gold', 
                      fontSize: '15px' 
                    }}>
                      {planet.code}
                    </span>
                    <span style={{ 
                      color: '#DAA520', 
                      fontSize: '10px',
                      verticalAlign: 'super'
                    }}>
                      {planet.degree}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}