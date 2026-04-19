/**
 * Cyberpunk Hero Video
 * Dynamic animated hero with particle effects, energy trails, and bass sync
 * Uses hero image with Ken Burns effect + generated particles
 */
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  Img,
  Audio,
  staticFile,
  interpolate,
} from 'remotion';

const PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random(),
  y: Math.random(),
  size: Math.random() * 6 + 2,
  speed: Math.random() * 0.5 + 0.5,
  color: Math.random() > 0.5 ? '#00ffff' : '#ff00ff',
}));

const CyberpunkHeroScene = ({
  progress,
  zoom = 1,
  glow = 0,
}: {
  progress: number;
  zoom?: number;
  glow?: number;
}) => {
  const frame = useCurrentFrame();
  
  // Ken Burns zoom effect
  const scale = interpolate(progress, [0, 1], [zoom, zoom + 0.3]);
  
  return (
    <AbsoluteFill>
      {/* Hero image with Ken Burns */}
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: `scale(${scale})`,
          overflow: 'hidden',
        }}
      >
        <Img
          src={staticFile('assets/videos/cyberpunk-hero-base.jpg')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: `contrast(1.2) saturation(1.3) brightness(0.9) hue-rotate(${progress * 20}deg)`,
          }}
        />
      </div>
      
      {/* Neon color overlay */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(
            135deg,
            rgba(0, 255, 255, ${0.2 * glow}) 0%,
            rgba(255, 0, 255, ${0.2 * glow}) 100%
          )`,
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Particle effects */}
      {PARTICLES.map((particle) => {
        const particleProgress = ((progress + particle.id * 0.1) % 1);
        const opacity = interpolate(particleProgress, [0, 0.5, 1], [0, 1, 0]);
        const y = interpolate(particleProgress, [0, 1], [particle.y, particle.y - 0.3]);
        
        return (
          <div
            key={particle.id}
            style={{
              position: 'absolute',
              left: `${particle.x * 100}%`,
              top: `${y * 100}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              borderRadius: '50%',
              opacity,
              filter: `blur(${particle.size / 2}px)`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
          />
        );
      })}
      
      {/* Energy trails */}
      {Array.from({ length: 5 }).map((_, i) => {
        const trailProgress = ((progress * 2 + i * 0.2) % 1);
        const x = interpolate(trailProgress, [0, 1], [20, 80]);
        const y = 50 + Math.sin(trailProgress * Math.PI * 2 + i) * 30;
        
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              width: '120px',
              height: '3px',
              background: `linear-gradient(90deg, transparent, #00ffff, transparent)`,
              transform: `translate(-50%, -50%) rotate(${trailProgress * 360}deg)`,
              opacity: interpolate(trailProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
              filter: 'blur(2px)',
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

export const CyberpunkHeroComposition = () => {
  const frame = useCurrentFrame();
  const totalFrames = 450; // 15 seconds at 30fps
  const progress = frame / totalFrames;
  
  // Beat detection (simulated)
  const beat = Math.sin(frame * 0.2) > 0.8;
  const glow = beat ? 1.5 : 1;
  
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {/* Main hero scene */}
      <Sequence durationInFrames={150}>
        <CyberpunkHeroScene progress={progress * 3} zoom={1} glow={glow} />
      </Sequence>
      
      {/* Zoom in sequence */}
      <Sequence from={150} durationInFrames={150}>
        <CyberpunkHeroScene progress={(frame - 150) / 150} zoom={1.2} glow={glow} />
      </Sequence>
      
      {/* Energy burst sequence */}
      <Sequence from={300} durationInFrames={150}>
        <CyberpunkHeroScene progress={(frame - 300) / 150} zoom={1.5} glow={glow * 1.5} />
      </Sequence>
      
      {/* Bass-heavy music */}
      <Audio src={staticFile('assets/audio/cyberpunk-bass.mp3')} volume={1} />
      
      {/* Scanlines effect */}
      <AbsoluteFill
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
          pointerEvents: 'none',
          mixBlendMode: 'overlay' as const,
        }}
      />
      
      {/* Vignette */}
      <AbsoluteFill
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};
