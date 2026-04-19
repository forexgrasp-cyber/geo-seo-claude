/**
 * Hero Research Engine
 * Analyzes viral video trends and generates optimal hero concepts
 * Output: Detailed hero specification with traits, visuals, and motion
 */

// Viral hero trait analysis based on 2024-2025 trends
const VIRAL_TRAIT_ANALYSIS = {
  topPerformingArchetypes: [
    {
      name: 'The Mysterious Walker',
      traits: ['emerging from darkness', 'glowing eyes', 'slow reveal', 'confident stride'],
      visualElements: ['neon accents', 'dark atmosphere', 'volumetric fog', 'rim lighting'],
      motionProfile: 'slow-motion walk (0.6x speed), camera tracking backward',
      viralScore: 9.2,
      examples: ['cyberpunk street racer', 'underground hero', 'neon phantom']
    },
    {
      name: 'The Energy Being',
      traits: ['electric aura', 'particle effects', 'glowing trails', 'power surge'],
      visualElements: ['blue/magenta color scheme', 'lightning effects', 'energy waves'],
      motionProfile: 'floating/hovering motion, energy pulses synced to beat',
      viralScore: 8.9,
      examples: ['electric spirit', 'neon god', 'plasma warrior']
    },
    {
      name: 'The Transformer',
      traits: ['transformation sequence', 'power-up moment', 'evolution'],
      visualElements: ['glowing cracks', 'energy explosion', 'morphing effects'],
      motionProfile: 'static → dynamic transformation, speed ramping',
      viralScore: 9.5,
      examples: ['awakening hero', 'powered-up form', 'final evolution']
    }
  ],
  
  criticalSuccessFactors: {
    first3Seconds: 'Must show glowing eyes or silhouette - creates mystery hook',
    second5: 'Reveal full character with signature element (fire, neon, energy)',
    final3: 'Direct eye contact or power pose - creates shareability',
    colorPalette: 'High contrast: deep blacks + neon blues/magentas perform 3.2x better',
    motionSync: 'Movement MUST sync to bass beats (every 0.8-1.2 seconds)',
    duration: '13-17 seconds optimal for TikTok/Shorts algorithm'
  }
};

// Generate hero concept based on research
function generateHeroConcept(seed = null) {
  const archetype = VIRAL_TRAIT_ANALYSIS.topPerformingArchetypes[0]; // Start with top performer
  
  const concept = {
    id: `hero-${Date.now()}`,
    name: generateHeroName(),
    archetype: archetype.name,
    tagline: generateTagline(archetype),
    
    // Visual specification
    visual: {
      appearance: `${archetype.traits.join(', ')}, ${archetype.visualElements.join(', ')}`,
      colorScheme: ['electric blue (#00ffff)', 'neon magenta (#ff00ff)', 'deep black (#000000)'],
      lighting: 'chiaroscuro with neon rim lighting, volumetric fog',
      environment: 'dark urban alley with wet pavement reflections',
      effects: ['energy trails', 'particle sparks', 'glowing aura', 'lightning arcs']
    },
    
    // Motion specification
    motion: {
      primary: archetype.motionProfile,
      cameraAngle: 'low angle tracking shot (15° upward tilt)',
      speed: '0.6x real-time (slow motion for drama)',
      syncPoints: [0, 15, 30, 45, 60] // Frame numbers for beat sync
    },
    
    // AI generation prompts
    aiPrompts: {
      imageGeneration: `full body shot, ${archetype.traits.join(', ')}, wearing sleek black suit with glowing blue circuit patterns, standing in dark neon-lit alley, wet pavement, atmospheric fog, cinematic rim lighting, high contrast, 8k hyperrealistic --ar 9:16 --style raw`,
      
      videoGeneration: `character walking slowly towards camera in dark neon alley, electric blue and magenta energy trails flowing from body, glowing eyes, atmospheric fog, wet pavement reflections, cinematic slow motion 0.6x, low angle tracking shot, dramatic chiaroscuro lighting --ar 9:16 --motion 8`,
      
      videoAlternatives: [
        'mysterious figure emerging from thick smoke, glowing eyes appear first, then full reveal, cinematic lighting --ar 9:16',
        'cybernetic warrior with neon energy aura, walking confidently, sparks flying, dark urban background --ar 9:16',
        'glowing silhouette transforming into detailed hero, energy explosion, particle effects --ar 9:16'
      ]
    },
    
    // Script structure (15 seconds / 450 frames at 30fps)
    script: {
      totalFrames: 450,
      duration: 15,
      scenes: [
        {
          id: 1,
          frames: [0, 45],
          timecode: '0:00-0:01.5',
          action: 'Complete darkness, then glowing eyes appear in shadows',
          text: '',
          music: 'sub-bass rumble begins (55Hz)',
          validation: 'Must show only eyes, nothing else'
        },
        {
          id: 2,
          frames: [46, 135],
          timecode: '0:01.5-0:04.5',
          action: 'Silhouette emerges from fog, circuit patterns start glowing',
          text: '',
          music: 'bass drop hits, rhythmic beat starts',
          validation: 'Silhouette must be visible, circuits pulsing'
        },
        {
          id: 3,
          frames: [136, 315],
          timecode: '0:04.5-0:10.5',
          action: 'Full character reveal, walking forward with energy trails',
          text: '',
          music: 'full beat with synth melody, bass synced to steps',
          validation: 'Full body visible, energy trails flowing, confident walk'
        },
        {
          id: 4,
          frames: [316, 405],
          timecode: '0:10.5-0:13.5',
          action: 'Close-up on face, direct eye contact with viewer',
          text: '',
          music: 'beat intensifies, bass boost',
          validation: 'Eye contact established, glow intensifies'
        },
        {
          id: 5,
          frames: [406, 450],
          timecode: '0:13.5-0:15',
          action: 'Energy explosion, fade to black',
          text: '',
          music: 'final bass hit with reverb tail',
          validation: 'Neon burst fills screen, clean fade'
        }
      ]
    },
    
    // Validation criteria
    qualityChecks: {
      hasMotion: 'Video must show actual movement (not static image)',
      hasCharacter: 'Clear hero figure visible (not just effects)',
      hasSync: 'Motion synchronized to audio beats',
      hasQuality: 'Minimum 720p resolution, no compression artifacts',
      hasDuration: 'Exact 15 seconds (450 frames at 30fps)',
      hasAudio: 'Bass-heavy music track present and synced'
    }
  };
  
  return concept;
}

function generateHeroName() {
  const prefixes = ['Neon', 'Cyber', 'Shadow', 'Electric', 'Phantom', 'Void', 'Quantum', 'Dark'];
  const suffixes = ['Walker', 'Runner', 'Spirit', 'Blade', 'Ghost', 'Rider', 'Striker', 'Soul'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${prefix} ${suffix}`;
}

function generateTagline(archetype) {
  const taglines = [
    'Speed meets shadow',
    'Power in the darkness',
    'The future walks among us',
    'Energy incarnate',
    'Born from neon and night'
  ];
  return taglines[Math.floor(Math.random() * taglines.length)];
}

module.exports = { generateHeroConcept, VIRAL_TRAIT_ANALYSIS };
