export default function Problem() {
  return (
    <section id="problem">
      <div className="container">
        <div className="section-heading animate">
          <span className="tag">Situasi Ramai</span>
          <h2 data-editable="prob-heading">Ramai nak ke New Zealand,<br />tapi masih belum pergi.</h2>
          <p data-editable="prob-sub">Ini sebab-sebab yang paling selalu jadi halangan.</p>
        </div>

        <div className="problem-grid">
          <div className="problem-card animate animate-delay-1">
            <div className="problem-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <div>
              <h4 data-editable="prob-1-title">Tak Tahu Nak Cover Kedua-Dua Island</h4>
              <p data-editable="prob-1-desc">North &amp; South Island berbeza lokasi. Ramai tak tahu macam mana nak cover dua-dua dalam satu trip.</p>
            </div>
          </div>
          <div className="problem-card animate animate-delay-2">
            <div className="problem-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div>
              <h4 data-editable="prob-2-title">Risau Itinerary Tak Seimbang</h4>
              <p data-editable="prob-2-desc">Terlalu rushing atau terlalu banyak masa terbuang — susah nak tengah-tengah kalau plan sendiri.</p>
            </div>
          </div>
          <div className="problem-card animate animate-delay-3">
            <div className="problem-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <h4 data-editable="prob-3-title">Makanan Halal &amp; Jarak Jauh</h4>
              <p data-editable="prob-3-desc">New Zealand bukan negara Islam. Cari makanan halal dan navigate kawasan yang jauh jadi cabaran besar.</p>
            </div>
          </div>
          <div className="problem-card animate animate-delay-4">
            <div className="problem-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div>
              <h4 data-editable="prob-4-title">Planning Sendiri = Mahal &amp; Kompleks</h4>
              <p data-editable="prob-4-desc">Flight, hotel, transport, entrance fee — bila kira satu-satu, lebih mahal dan lebih penat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
