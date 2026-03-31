export default function TrustSection() {
  return (
    <section id="trust">
      <div className="container">
        <div className="section-heading animate">
          <span className="tag">Kepercayaan</span>
          <h2 data-editable="trust-heading">Kenapa Pilih Nusa Travel?</h2>
        </div>
        <div className="trust-card animate">
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.5px' }} data-editable="trust-company">NUSA TRAVEL SDN BHD</h3>
          <div className="motac-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span data-editable="trust-motac">Berdaftar dengan MOTAC — Lesen No. 8693</span>
          </div>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '8px' }} data-editable="trust-desc">
            Agensi pelancongan berlesen, beroperasi sepenuhnya di bawah pengawasan Kementerian Pelancongan, Seni dan Budaya Malaysia.
          </p>
          <div className="address-block" data-editable="trust-address">
            34-2, Wisma Kwan Siew Choo, Jalan Besar, 43000 Bandar Kajang, Selangor, Malaysia
          </div>
          <div className="trust-stats">
            <div className="trust-stat">
              <div className="num" data-editable="trust-s1-num">500+</div>
              <div className="label" data-editable="trust-s1-label">Pelancong Berpuas Hati</div>
            </div>
            <div className="trust-stat">
              <div className="num" data-editable="trust-s2-num">10+</div>
              <div className="label" data-editable="trust-s2-label">Tahun Pengalaman</div>
            </div>
            <div className="trust-stat">
              <div className="num" data-editable="trust-s3-num">100%</div>
              <div className="label" data-editable="trust-s3-label">Makanan Halal</div>
            </div>
            <div className="trust-stat">
              <div className="num" data-editable="trust-s4-num">BM</div>
              <div className="label" data-editable="trust-s4-label">Tour Guide Bahasa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
