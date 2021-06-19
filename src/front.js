export default function (part) {
  let {
    measurements,
    options,
    Point,
    Path,
    points,
    paths,
    store,
    Snippet,
    snippets,
    complete,
    sa,
    paperless,
    macro,
  } = part.shorthand()

  const { neckDepth, neckWidth, neckRoundness, neckAngle, shirtLength } = options;
  // delete old front path
  for (let i in paths) delete paths[i]

  // new neckline points
  points.cfNeck = points.centerFrontNeck.shiftFractionTowards(points.a, neckDepth);
  points.shoulder = points.hpsFront.shiftFractionTowards(points.closed_t, neckWidth);

  // new neckline control points based on curve
  points.cfNeckCP =
    points.cfNeck
      .shiftFractionTowards(new Point(points.shoulder.x, points.cfNeck.y), neckRoundness)
      .rotate(points.cfNeck.angle(points.shoulder) * neckAngle, points.cfNeck)

  points.shoulderCP = points.shoulder.shiftFractionTowards(points.cfNeckCP, 0.3 * neckRoundness)
  store.set("frontShoulderAngle", points.shoulder.angle(points.closed_t) - points.shoulder.angle(points.shoulderCP))

  // Side dart + length
  const maxLength = measurements.waistToSeat ? measurements.waistToSeat : 0.5 * measurements.hpsToWaist
  points.cfHem = points.centerFrontWaist.shift(270, maxLength * shirtLength);
  points.sfHem = new Point(points.closed_frontUnderArm.x, points.cfHem.y);

  // rotate sfHem and f2 to close the dart.
  const dartAngle = points.v.angle(points.closed_f1) + 360 - points.v.angle(points.f2)
  const dartAngleRotation = dartAngle * (1 - options.dartSize)
  points.f2 = points.f2.rotate(dartAngleRotation, points.v)
  points.sfHem = points.sfHem.rotate(dartAngleRotation, points.v)

  paths.seamLines = new Path()
    .move(points.shoulder)
    .curve(points.shoulderCP, points.cfNeckCP, points.cfNeck)
    .line(points.cfHem)
    .line(points.sfHem)
    .line(points.f2)
    .line(points.v)
    .line(points.closed_f1)
    .line(points.closed_frontUnderArm)
    .curve(points.closed_uCp, points.closed_tCp, points.closed_t)
    .line(points.shoulder)
    .close()
    .attr('class', 'fabric')


  // Complete?
  if (complete) {

    if (sa) {

    }
  }

  // Paperless?
  if (paperless) {

  }

  return part
}
