/**
 * Glitch City Crew - AI HERO VERSION
 * Uses AI-generated cyberpunk chef hero
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

      {/* HERO VIDEO: AI-generated cyberpunk chef throughout */}
      <Sequence durationInFrames={1500}>
        <Video
          src={staticFile('assets/videos/cyberpunk-chef-hero.mp4')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Sequence>

      {/* Scene 1: Intro glow (0-10s) */}
      <Sequence durationInFrames={300}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 60%, rgba(255,100,0,0.4) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#fff',
            fontSize: '5rem',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            textShadow: '0 0 30px #ff0000, 0 0 60px #ff4400',
            margin: 0,
          }}>
            GLITCH CITY
          </h1>
        </div>
      </Sequence>

      {/* Scene 2: Electric feel (10-20s) */}
      <Sequence from={300} durationInFrames={300}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(0,255,255,0.3) 0%, transparent 50%, rgba(0,255,255,0.3) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#00ffff',
            fontSize: '4rem',
            fontWeight: '900',
            textShadow: '0 0 30px #00ffff, 0 0 60px #0088ff',
            margin: 0,
          }}>
            ELECTRIC BASS ⚡
          </h1>
        </div>
      </Sequence>

      {/* Scene 3: Cyber intensity (20-30s) */}
      <Sequence from={600} durationInFrames={300}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, transparent 40%, rgba(255,0,255,0.5) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#ff00ff',
            fontSize: '4.5rem',
            fontWeight: '900',
            textShadow: '0 0 40px #ff00ff, 0 0 80px #ff0088',
            margin: 0,
          }}>
            CYBER CHEF 👨‍🍳
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
          background: 'linear-gradient(180deg, rgba(255,255,0,0.4) 0%, transparent 100%)',
          animation: 'pulse 0.3s infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#ffff00',
            fontSize: '7rem',
            fontWeight: '900',
            textShadow: '0 0 50px #ffff00, 0 0 100px #ff0000',
            margin: 0,
            animation: 'shake 0.1s infinite',
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
          background: 'linear-gradient(45deg, rgba(0,255,255,0.4), rgba(255,0,255,0.4))',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#fff',
            fontSize: '5.5rem',
            fontWeight: '900',
            textShadow: '0 0 40px #00ffff, 0 0 80px #ff00ff',
            margin: 0,
          }}>
            GLITCH CITY CREW
          </h1>
          <p style={{
            color: '#00ffff',
            fontSize: '2.5rem',
            marginTop: '1rem',
            textShadow: '0 0 10px #000',
          }}>
            @glitchcitycrew
          </p>
        </div>
      </Sequence>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(-50%) translate(-2px, 0); }
          50% { transform: translateX(-50%) translate(2px, 0); }
        }
      `}</style>
    </AbsoluteFill>
  );
};
