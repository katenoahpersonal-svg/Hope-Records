const pins = [
  [12, 58], [19, 73], [24, 44], [31, 67], [40, 54], [48, 74],
  [56, 47], [64, 61], [70, 39], [78, 55], [85, 43], [91, 66]
];

export function ExploreMap() {
  return (
    <section className="mapPanel" aria-label="Map preview">
      <div className="mapGrid" aria-hidden="true" />
      <div className="continent continent-a" aria-hidden="true" />
      <div className="continent continent-b" aria-hidden="true" />
      {pins.map(([left, top], index) => (
        <span
          className={`mapPin pin-${(index % 4) + 1}`}
          key={`${left}-${top}`}
          style={{ left: `${left}%`, top: `${top}%` }}
          aria-hidden="true"
        />
      ))}
      <div className="mapZoom" aria-hidden="true"><span>−</span><span>+</span></div>
    </section>
  );
}
