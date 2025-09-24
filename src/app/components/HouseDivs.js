export default function HouseDivs() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 15
    }}>
      {/* House 1 */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '8%',
        height: '23%',
        border: '1px solid gold'
      }}>
      </div>
      
      {/* House 7 */}
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '8%',
        height: '23%',
        border: '1px solid gold'
      }}>
      </div>
      
      {/* House 4 */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '20%',
        transform: 'translateY(-50%)',
        width: '23%',
        height: '8%',
        border: '1px solid gold'
      }}>
      </div>
      
      {/* House 10 */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '20%',
        transform: 'translateY(-50%)',
        width: '23%',
        height: '8%',
        border: '1px solid gold'
      }}>
      </div>
    </div>
  );
}