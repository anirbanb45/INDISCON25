declare module 'vanta/dist/vanta.globe.min' {
    interface VantaEffect {
      destroy: () => void;
      setOptions: (options: Record<string, unknown>) => void;
    }
  
    const VANTA: {
      GLOBE: (options: Record<string, unknown>) => VantaEffect;
    };
  
    export default VANTA;
  }
  