import { andromedanAlignments } from './starseeds/andromedanStarseed';
import { arcturianAlignments } from './starseeds/arcturianStarseed';
import { sirianAlignments } from './starseeds/sirianStarseed';
import { lyranAlignments } from './starseeds/lyranStarseed';
import { orionAlignments } from './starseeds/orionStarseed';
import { pleiadianAlignments } from './starseeds/pleiadianStarseed';
import { 
  alphaCentauriAlignments,
  antaresAlignments,
  hyadesAlignments,
  alphaDraconisAlignments,
  tauCetiAlignments,
  spicaAlignments
} from './starseeds/otherStarSystems';

interface PlanetPosition {
  planet: string;
  degree: number;
  sign: string;
}

interface StarSeedResult {
  starseed: string;
  alignmentType: string;
  strength: number;
  description?: string;
}

const calculateAlignmentStrength = (aspect: string): number => {
  switch (aspect) {
    case 'conjunct': return 5;
    case 'trine': return 4;
    case 'sextile': return 3;
    case 'opposite': return 2;
    case 'square': return 1;
    default: return 0;
  }
};

const checkAlignment = (position: PlanetPosition, alignmentDegree: string): boolean => {
  const [deg, sign] = alignmentDegree.split(' ');
  return Math.abs(position.degree - parseInt(deg)) <= 2 && 
         (position.sign === sign || sign.includes(position.sign));
};

const processStarseedSystem = (
  birthData: PlanetPosition[],
  alignments: any,
  starseedName: string,
  results: StarSeedResult[]
) => {
  birthData.forEach(position => {
    Object.entries(alignments).forEach(([aspect, degrees]) => {
      (degrees as string[]).forEach(degree => {
        if (checkAlignment(position, degree)) {
          results.push({
            starseed: starseedName,
            alignmentType: aspect,
            strength: calculateAlignmentStrength(aspect),
            description: `${position.planet} at ${position.degree}° ${position.sign}`
          });
        }
      });
    });
  });
};

export const calculateStarseedAlignments = (birthData: PlanetPosition[]): StarSeedResult[] => {
  const results: StarSeedResult[] = [];

  // Process each starseed system
  processStarseedSystem(birthData, andromedanAlignments.galaxy, 'Andromedan (Galaxy)', results);
  processStarseedSystem(birthData, andromedanAlignments.constellation, 'Andromedan (Constellation)', results);
  processStarseedSystem(birthData, arcturianAlignments, 'Arcturian', results);
  processStarseedSystem(birthData, sirianAlignments, 'Sirian', results);
  processStarseedSystem(birthData, lyranAlignments, 'Lyran', results);
  processStarseedSystem(birthData, orionAlignments, 'Orion', results);
  processStarseedSystem(birthData, pleiadianAlignments, 'Pleiadian', results);
  processStarseedSystem(birthData, alphaCentauriAlignments, 'Alpha Centauri', results);
  processStarseedSystem(birthData, antaresAlignments, 'Antares', results);
  processStarseedSystem(birthData, hyadesAlignments, 'Hyades', results);
  processStarseedSystem(birthData, alphaDraconisAlignments, 'Alpha Draconis', results);
  processStarseedSystem(birthData, tauCetiAlignments, 'Tau Ceti', results);
  processStarseedSystem(birthData, spicaAlignments, 'Spica', results);

  return results.sort((a, b) => b.strength - a.strength);
};