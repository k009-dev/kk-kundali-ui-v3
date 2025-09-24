import HouseNumbers from './HouseNumbers';
import HouseDivs from './HouseDivs';

export default function KundaliMain() {
  return (
    <div
      style={{
        width: '600px',
        height: '600px',
        backgroundImage: 'url(/kundali-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      <HouseDivs />
      <HouseNumbers />
    </div>
  );
}