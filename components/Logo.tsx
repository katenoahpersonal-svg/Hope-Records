export function Logo() {
  return (
    <div className="brand" aria-label="Hope Record">
      <svg className="brandSeal" viewBox="0 0 72 72" aria-hidden="true">
        <circle cx="36" cy="36" r="32" fill="#0D182A" stroke="#C7A46A" strokeWidth="1.8" />
        <circle cx="36" cy="36" r="27" fill="none" stroke="#F4EFE6" strokeWidth="0.9" opacity="0.88" />

        <path
          d="M36 12.5l1.8 5.7 5.7 1.8-5.7 1.8-1.8 5.7-1.8-5.7-5.7-1.8 5.7-1.8z"
          fill="#C7A46A"
        />

        <path
          d="M19.5 33.5h11.8l3.7 3.7h17.5v15.3h-33z"
          fill="none"
          stroke="#F4EFE6"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M19.5 38h33" stroke="#C7A46A" strokeWidth="1.2" />

        <rect x="27" y="39.5" width="18" height="9.5" rx="1.2" fill="#F4EFE6" />
        <path d="M30.5 42.5h11M30.5 45.5h8" stroke="#32465A" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className="brandWords">
        <strong>Hope Record</strong>
        <small>Public-interest archive</small>
      </span>
    </div>
  );
}
