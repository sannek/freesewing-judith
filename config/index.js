import { version } from '../package.json'

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: 'judith',
  version,
  design: 'sannek',
  code: 'sannek',
  department: 'womenswear',
  type: 'pattern',
  difficulty: 3,
  tags: [
    'freesewing',
    'design',
    'diy',
    'fashion',
    'made to measure',
    'parametric design',
    'pattern',
    'sewing',
    'sewing pattern',
  ],
  optionGroups: {
    fit: ['chestEase', 'dartSize'],
    neckLine: ['neckDepth', 'neckWidth', 'neckRoundness', 'neckAngle'],
    hem: ['shirtLength']
  },
  measurements: [
    "neck",
    "bustSpan",
    "chest",
    "highBust",
    "hpsToBust",
    "hpsToWaistBack",
    "hpsToWaistFront",
    "shoulderSlope",
    "waist",
    "waistBack",
    "shoulderToShoulder",
    "shoulderToElbow",
    "shoulderToWrist",
    "wrist",
    "biceps"
  ],
  optionalMeasurements: [
    'waistToSeat',
    'seat'
  ],
  dependencies: {
  },
  inject: {
    front: 'baseFront'
  },
  hide: ['baseFront'],
  parts: ['front'],
  options: {
    chestEase: { pct: 10, min: 5, max: 25 },
    waistEase: { pct: 10, min: 5, max: 25 },
    neckDepth: { pct: 50, min: 5, max: 100 },
    neckWidth: { pct: 35, min: 0, max: 70 },
    neckRoundness: { pct: 50, min: 0, max: 100 },
    neckAngle: { pct: 60, min: 0, max: 100 },
    shirtLength: { pct: 50, min: 0, max: 0 },
    dartSize: { pct: 50, min: 0, max: 75 }
  },
}
