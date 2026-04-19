/**
 * Glitch City Crew - SIMPLIFIED VERSION
 * - Hero video as background
 * - Action footage in sequences
 * - Proper audio
 * - Text overlays
 */
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  Video,
  Audio,
  staticFile,
  interpolate,
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

      {/* Scene 1: Fire Performer (0-10s) */}
      <Sequence durationInFrames={300}>
        <Video
          src={staticFile('assets/videos/fire-performer.mp4')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#fff',
            fontSize: '5rem',
            fontWeight: '900',
            textTransform: 'uppercase',
            textShadow: '0 0 30px #ff0000',
            margin: 0,
          }}>
            GLITCH CITY
          </h1>
        </div>
      </Sequence>

      {/* Scene 2: Neon Dancer (10-20s) */}
      <Sequence from={300} durationInFrames={300}>
        <Video
          src={staticFile('assets/videos/neon-dancer.mp4')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'hue-rotate(20deg) saturation(1.5)',
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            color: '#00ffff',
            fontSize: '4rem',
            fontWeight: '900',
            textShadow: '0 0 30px #00ffff',
            margin: 0,
          }}>
            FEEL THE BASS 🔥
          </h1>
        </div>
      </Sequence>

      {/* Scene 3: Hero + Abstract (20-30s) */}
      <Sequence from={600} durationInFrames={300}>
        <Video
          src={staticFile('assets/videos/hero_0.mp4')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
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

      {/* Scene 4: Fire Climax (30-40s) */}
      <Sequence from={900} durationInFrames={300}>
        <Video
          src={staticFile('assets/videos/fire-performer.mp4')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.5) saturation(1.7)',
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
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
        <Video
          src={staticFile('assets/videos/neon-dancer.mp4')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturation(1.8) hue-rotate(40deg)',
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
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
    </AbsoluteFill>
  );
};
