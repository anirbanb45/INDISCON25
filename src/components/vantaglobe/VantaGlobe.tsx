import { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import * as THREE from 'three';
interface VantaEffect {
  destroy: () => void;
  camera?: THREE.PerspectiveCamera;
}

const VantaGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<VantaEffect | null>(null);
  const theta = useRef<number>(0);
  const radius = useRef<number>(5);
  const phi = useRef<number>(Math.PI / 4);
  const { scrollYProgress } = useScroll();
  const zoomValue = useTransform(scrollYProgress, [0, 1], [3, 10]);

  useEffect(() => {
    if (!containerRef.current) return;

    const initVanta = async () => {
      try {
        const VANTA = (await import('vanta/dist/vanta.globe.min')) as unknown as {
          default: (options: Record<string, unknown>) => VantaEffect;
        };

        vantaRef.current = VANTA.default({
          el: containerRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x16edc4,
          backgroundColor: 0x1e097e,
          onUpdate: (self: unknown) => {
            const vantaInstance = self as VantaEffect;
            if (!vantaInstance.camera) return;

            const camera = vantaInstance.camera;
            const r = radius.current;
            const t = theta.current;
            const p = phi.current;

            camera.position.x = r * Math.sin(t) * Math.cos(p);
            camera.position.y = r * Math.sin(p);
            camera.position.z = r * Math.cos(t) * Math.cos(p);
            camera.lookAt(0, 0, 0);
            camera.updateProjectionMatrix();
          },
        });
      } catch (error) {
        console.error('Error loading Vanta.js:', error);
      }
    };

    initVanta();

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    return zoomValue.onChange((newRadius) => {
      radius.current = newRadius;
    });
  }, [zoomValue]);
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height } = currentTarget.getBoundingClientRect();

    const x = (clientX / width - 0.5) * 2;
    const y = (clientY / height - 0.5) * 2;

    theta.current = x * Math.PI; 
    phi.current = y * Math.PI / 4;
  };

  return (
    <div className="relative w-screen h-screen " onMouseMove={handleMouseMove}>
      <motion.div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />

      <motion.div
        className="absolute w-full inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-[#151515] bg-opacity-40  "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">IEEE INDISCON 2025</h1>
        <p className=" md:text-xl mb-6 max-w-2xl  text-white font-semibold text-justify"> 
        IEEE INDISCON-2025 is the flagship conference of the IEEE India Council. It will be the 6th edition of INDISCON and will be held at NIT Rourkela under the aegis of IEEE Rourkela Subsection. The conference is envisioned to provide a big platform for researchers from academia and industry not only to share their research, but also provide networking opportunities among the peers for collaborations. The conference aims to foster the theme through keynotes, invited talks, and industry exhibits and oral presentation of research articles in the most relevant areas allied to the theme. The conference will also exhibit Graduate Research Forum to encourage budding young researchers to showcase their innovative research in aforementioned domains.
        </p>
        <motion.a
          href="/about"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </div>
  );
};

export default VantaGlobe;
