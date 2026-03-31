export default function TrustBar() {
  const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );

  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        <div className="trust-item">
          {checkIcon}
          Makan Halal
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          {checkIcon}
          Tour Guide BM
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          {checkIcon}
          Itinerary Lengkap
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          {checkIcon}
          Bayar Berperingkat
        </div>
      </div>
    </div>
  );
}
