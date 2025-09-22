import KundaliMain from './components/KundaliMain';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}>
      <KundaliMain />
    </div>
  );
}
