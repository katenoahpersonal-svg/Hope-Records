export function Logo() {
  return (
    <div className="brand" aria-label="Hope Record">
      <svg className="brandSeal" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="29" fill="#0D182A" stroke="#C7A46A" strokeWidth="1.6" />
        <circle cx="32" cy="32" r="25" fill="none" stroke="#F4EFE6" strokeWidth="0.8" opacity="0.85" />
        <path d="M32 9l2.1 6.8 6.8 2.1-6.8 2.1-2.1 6.8-2.1-6.8-6.8-2.1 6.8-2.1z" fill="#C7A46A" />
        <path d="M18 30h11l2.7 3H46v14H18z" fill="#EEE6D6" stroke="#C7A46A" strokeWidth="1.1" />
        <path d="M23 38h18M23 42h13" stroke="#32465A" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M15 46c-4.3-4.2-6.4-9-6.5-14M49 46c4.3-4.2 6.4-9 6.5-14" fill="none" stroke="#C7A46A" strokeWidth="1.15" strokeLinecap="round" />
      </svg>
      <span className="brandWords">
        <strong>Hope Record</strong>
        <small>Public-interest archive</small>
      </span>
    </div>
  );
}
