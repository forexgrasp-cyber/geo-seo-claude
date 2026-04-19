/**
 * Real Action Video - Uses REAL footage from Pexels
 * No AI-generated fake content - actual human movement and action
 */
import { AbsoluteFill, Sequence, Video, Audio, staticFile } from 'remotion';

export const RealActionVideo = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {/* Chapter 1: Fire dancer - REAL ACTION */}
      <Sequence durationInFrames={150}>
        <Video
          src={staticFile('assets/videos/fire-dancer.mp4')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Audio src={staticFile('assets/music/epic-track.mp3')} volume={1} />
      </Sequence>

      {/* Chapter 2: Beach performer - REAL ACTION */}
      <Sequence from={150} durationInFrames={150}>
        <Video
          src={staticFile('assets/videos/beach-performer.mp4')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Audio src={staticFile('assets/music/epic-track.mp3')} volume={1} />
      </Sequence>
    </AbsoluteFill>
  );
};
