/**
 * Glitch City Crew - REAL HERO VERSION
 * Uses the actual hero avatar from avatart_vied.mp4
 */
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  Video,
  Audio,
  staticFile,
} from 'remotion';

export const GlitchCrewVideo = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {/* AUDIO: Bass music */}
      <Audio 
        src={staticFile('assets/audio/hero-bass.mp3')} 
        volume={1}
        loop={true}
      />

      {/* HERO VIDEO: Main character throughout (background) */}
      <Sequence durationInFrames={1500}>
        <Video
          src={staticFile('assets/videos/real-hero.mp4')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Sequence>

      {/* Scene 1: Fire overlay (0-10s) */}
      <Sequence durationInFrames={300}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 60%, rgba(255,100,0,0.3) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 100,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#fff',
            fontSize: '4rem',
            fontWeight: '900',
            textTransform: 'uppercase',
            textShadow: '0 0 30px #ff0000',
            margin: 0,
          }}>
            GLITCH CITY
          </h1>
        </div>
      </Sequence>

      {/* Scene 2: Neon effects (10-20s) */}
      <Sequence from={300} durationInFrames={300}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(0,255,255,0.2) 0%, transparent 50%, rgba(255,0,255,0.2) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 100,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#00ffff',
            fontSize: '3.5rem',
            fontWeight: '900',
            textShadow: '0 0 30px #00ffff',
            margin: 0,
          }}>
            FEEL THE BASS 🔥
          </h1>
        </div>
      </Sequence>

      {/* Scene 3: Glitch intensity (20-30s) */}
      <Sequence from={600} durationInFrames={300}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, transparent 40%, rgba(255,0,255,0.4) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 100,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#ff00ff',
            fontSize: '4rem',
            fontWeight: '900',
            textShadow: '0 0 30px #ff00ff',
            margin: 0,
          }}>
            HERO MODE 💥
          </h1>
        </div>
      </Sequence>

      {/* Scene 4: Bass drop climax (30-40s) */}
      <Sequence from={900} durationInFrames={300}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(255,255,0,0.3) 0%, transparent 100%)',
          animation: 'pulse 0.5s infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 100,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#ffff00',
            fontSize: '6rem',
            fontWeight: '900',
            textShadow: '0 0 40px #ffff00, 0 0 80px #ff0000',
            margin: 0,
          }}>
            BASS DROP! 🔊
          </h1>
        </div>
      </Sequence>

      {/* Scene 5: Finale (40-50s) */}
      <Sequence from={1200} durationInFrames={300}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, rgba(0,255,255,0.3), rgba(255,0,255,0.3))',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 100,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#fff',
            fontSize: '5rem',
            fontWeight: '900',
            textShadow: '0 0 30px #00ffff, 0 0 60px #ff00ff',
            margin: 0,
          }}>
            GLITCH CITY CREW
          </h1>
          <p style={{
            color: '#fff',
            fontSize: '2rem',
            marginTop: '1rem',
          }}>
            @glitchcitycrew
          </p>
        </div>
      </Sequence>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </AbsoluteFill>
  );
};
