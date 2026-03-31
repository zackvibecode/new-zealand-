export default function Urgency() {
  return (
    <section className="urgency-section" id="urgency">
      <div className="container">
        <div className="section-heading animate">
          <span className="tag">Jangan Tunggu</span>
          <h2 data-editable="urg-heading">Kenapa Perlu Booking Awal?</h2>
        </div>
        <div className="urgency-grid">
          <div className="urgency-card animate animate-delay-1">
            <span className="urgency-icon">👥</span>
            <h4 data-editable="urg-1-title">Seat Sangat Terhad</h4>
            <p data-editable="urg-1-desc">Minimum 20 pax sahaja setiap trip. Bila dah penuh, tutup terus.</p>
          </div>
          <div className="urgency-card animate animate-delay-2">
            <span className="urgency-icon">📅</span>
            <h4 data-editable="urg-2-title">Tarikh Terhad</h4>
            <p data-editable="urg-2-desc">Hanya 4 slot tarikh untuk 2025. Tiada tarikh tambahan.</p>
          </div>
          <div className="urgency-card animate animate-delay-3">
            <span className="urgency-icon">🌸</span>
            <h4 data-editable="urg-3-title">Musim Lupin Terhad</h4>
            <p data-editable="urg-3-desc">Bunga Lupin hanya mekar pada musim tertentu sahaja — rare dan sangat cantik.</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }} className="animate">
          <a href="#whatsapp" className="btn-primary" style={{ fontSize: '1rem', padding: '18px 38px' }}>
            <span data-editable="urg-cta">Semak Ketersediaan Seat Sekarang</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
