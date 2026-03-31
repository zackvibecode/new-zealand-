export default function Pricing() {
  const dates = [
    { date: '28 Ogos — 6 September', duration: '10 Hari 7 Malam', price: 'RM13,999' },
    { date: '23 November — 2 Disember', duration: '10 Hari 7 Malam', price: 'RM13,999' },
    { date: '4 Disember — 13 Disember', duration: '10 Hari 7 Malam', price: 'RM13,999' },
    { date: '14 Disember — 23 Disember', duration: '10 Hari 7 Malam', price: 'RM13,999' },
  ];
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-heading animate">
          <span className="tag">Tarikh &amp; Harga</span>
          <h2 data-editable="price-heading">Pilih Tarikh Anda</h2>
          <p data-editable="price-sub">Empat slot sahaja untuk 2025. Jangan tertinggal.</p>
        </div>
        <div className="animate" style={{ overflowX: 'auto' }}>
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Tarikh Perjalanan</th>
                <th>Tempoh</th>
                <th>Harga / Pax</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((row, i) => (
                <tr key={i}>
                  <td><span className="date-badge" data-editable={`date-${i}`}>{row.date}</span></td>
                  <td data-editable={`duration-${i}`}>{row.duration}</td>
                  <td><span className="price-tag" data-editable={`price-row-${i}`}>{row.price}</span></td>
                  <td><span className="avail-dot" data-editable={`status-${i}`}>Tersedia</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="promo-strip animate">
          <div>
            <p style={{ fontSize: '0.78rem', opacity: 0.8, fontWeight: 500 }} data-editable="promo-label">HARGA TAWARAN ISTIMEWA</p>
            <p style={{ fontSize: '1rem' }} data-editable="promo-desc">Semua tarikh pada harga yang sama</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>DARI</div>
            <div className="promo-price">
              <span data-editable="promo-price">RM13,999</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8 }}> / pax</span>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }} className="animate">
          <a href="#whatsapp" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            </svg>
            <span data-editable="price-cta">Lock Seat Sekarang</span>
          </a>
        </div>
      </div>
    </section>
  );
}
