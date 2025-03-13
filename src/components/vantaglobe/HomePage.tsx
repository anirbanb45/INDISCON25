"use client"
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('./VantaGlobe'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const HomePage = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Globe />
    </div>
  );
};

export default HomePage;