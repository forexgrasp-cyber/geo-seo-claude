/**
 * Clean Hero Video - No text overlays, just dynamic footage
 * Shows actual video content with music
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
import metadata from './metadata.json';

export const MyComposition = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {metadata.chapters?.map((ch, i) => {
        const start = metadata.chapters
          .slice(0, i)
          .reduce((acc, c) => acc + c.frames, 0);
        const relativeFrame = frame - start;
        const progress = relativeFrame / ch.frames;

        return (
          <Sequence key={i} from={start} durationInFrames={ch.frames}>
            {/* Video with subtle zoom */}
            <div
              style={{
                width: '100%',
                height: '100%',
                transform: `scale(${interpolate(progress, [0, 1], [1, 1.05])})`,
                overflow: 'hidden',
              }}
            >
              <Video
                src={staticFile(ch.video)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.15) saturation(1.2)',
                }}
                loop
              />
            </div>

            {/* Audio */}
            {ch.audio && <Audio src={staticFile(ch.audio)} volume={0.8} />}

            {/* Subtle vignette */}
            <AbsoluteFill
              style={{
                background:
                  'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                pointerEvents: 'none',
              }}
            />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
