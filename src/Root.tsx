import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { CyberpunkHeroComposition } from "./CyberpunkHero";
import { GlitchCrewVideo } from "./GlitchCrewVideo";
import metadata from "./metadata.json";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComposition"
        component={MyComposition}
        durationInFrames={metadata.total_frames}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="CyberpunkHero"
        component={CyberpunkHeroComposition}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="GlitchCrewVideo"
        component={GlitchCrewVideo}
        durationInFrames={1500}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
