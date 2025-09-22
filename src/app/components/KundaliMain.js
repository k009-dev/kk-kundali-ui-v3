import KundaliFrameAndBG from './KundaliFrameAndBG';

export default function KundaliMain() {
  return (
    <div
      style={{
        width: '600px',
        height: '600px',
        backgroundColor: '#1d1f10',
        position: 'relative'
      }}
    >
      <KundaliFrameAndBG />
    </div>
  );
}