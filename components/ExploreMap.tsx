import Link from "next/link";

const caseLocations = [
  {
    slug: "nolan-wells",
    name: "Nolan Xavier Wells",
    place: "Horn Island, Mississippi",
    left: "62.5%",
    top: "72%",
    className: "caseMapPinMississippi"
  },
  {
    slug: "latarsha-sanders",
    name: "Latarsha Sanders",
    place: "Brockton, Massachusetts",
    left: "91%",
    top: "29%",
    className: "caseMapPinMassachusetts"
  },
  {
    slug: "keshia-golden",
    name: "Keshia Golden",
    place: "Chicago, Illinois",
    left: "65%",
    top: "39%",
    className: "caseMapPinChicago"
  }
];

export function ExploreMap() {
  return (
    <section className="mapPanel usMapPanel" aria-label="United States map of featured records">
      <div className="usMapHeading">
        <div>
          <span>Explore by place</span>
          <strong>Where these living records are unfolding</strong>
        </div>
        <small>Select a dot to open the record.</small>
      </div>

      <div className="usMapCanvas">
        <img
          className="usMapImage"
          src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Blank_US_Map_(states_only).svg"
          alt="Map of the United States"
        />

        {caseLocations.map((location) => (
          <Link
            key={location.slug}
            href={`/cases/${location.slug}`}
            className={`caseMapLocation ${location.className}`}
            style={{ left: location.left, top: location.top }}
            aria-label={`${location.name}, ${location.place}`}
          >
            <span className="caseMapPulse" aria-hidden="true" />
            <span className="caseMapDot" aria-hidden="true" />
            <span className="caseMapLabel">
              <strong>{location.name}</strong>
              <small>{location.place}</small>
            </span>
          </Link>
        ))}
      </div>

      <div className="usMapLegend">
        <span><i /> Featured record location</span>
        <small>Base map: Wikimedia Commons · CC0</small>
      </div>
    </section>
  );
}
