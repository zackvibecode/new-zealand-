export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-badge animate">
          <span className="dot"></span>
          <span data-editable="hero-badge">New Zealand 2025 — Seats Terhad</span>
        </div>

        <h1 className="animate animate-delay-1">
          <span data-editable="hero-h1-line1">Complete New Zealand Experience —</span><br />
          <span className="highlight" data-editable="hero-h1-highlight">North &amp; South Island</span><br />
          <span data-editable="hero-h1-line3">Dalam Satu Trip</span>
        </h1>

        <p className="hero-sub animate animate-delay-2" data-editable="hero-sub">
          Nikmati perjalanan 10 hari 7 malam merangkumi destinasi paling ikonik di New Zealand
          tanpa perlu pening fikir itinerary. Semua sudah diurus lengkap — dari flight, hotel,
          makan halal hingga tour guide.
        </p>

        <div className="hero-price-row animate animate-delay-2">
          <div className="price-box">
            <div className="price-from" data-editable="hero-price-label">Pakej dari</div>
            <div className="price-amount" data-editable="hero-price">RM13,999</div>
            <div className="price-per" data-editable="hero-price-sub">seorang / fully guided</div>
          </div>
        </div>

        <div className="hero-actions animate animate-delay-3">
          <a href="#whatsapp" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            </svg>
            <span data-editable="hero-cta1">Check Tarikh &amp; Lock Seat</span>
          </a>
          <a href="#itinerary" className="btn-secondary">
            <span data-editable="hero-cta2">Lihat Itinerary</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>

        <div className="hero-stats animate animate-delay-4">
          <div className="hero-stat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span data-editable="hero-stat1">Minimum 20 pax</span>
          </div>
          <div className="hero-stat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span data-editable="hero-stat2">MOTAC Berdaftar</span>
          </div>
          <div className="hero-stat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span data-editable="hero-stat3">10 Hari 7 Malam</span>
          </div>
          <div className="hero-stat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span data-editable="hero-stat4">North &amp; South Island</span>
          </div>
        </div>
      </div>
    </section>
  );
}
