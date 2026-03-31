export default function Solution() {
  const checkSvg = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
  const items = [
    { key: 'sol-1', text: '10 Hari 7 Malam', delay: 'animate-delay-1' },
    { key: 'sol-2', text: 'Cover North & South Island', delay: 'animate-delay-1' },
    { key: 'sol-3', text: 'Itinerary Lengkap & Seimbang', delay: 'animate-delay-2' },
    { key: 'sol-4', text: 'Fully Guided (Tour Leader + BM)', delay: 'animate-delay-2' },
    { key: 'sol-5', text: 'Makan Halal Disediakan', delay: 'animate-delay-3' },
    { key: 'sol-6', text: 'Pengangkutan & Penginapan Termasuk', delay: 'animate-delay-3' },
  ];
  return (
    <section id="solution">
      <div className="container">
        <div className="section-heading animate">
          <span className="tag">Penyelesaian</span>
          <h2 data-editable="sol-heading">Dengan Nusa Travel, semuanya dah disusun.</h2>
          <p data-editable="sol-sub">Satu pakej. Semua termasuk. Zero stress.</p>
        </div>
        <div className="solution-grid">
          {items.map(item => (
            <div key={item.key} className={`check-item animate ${item.delay}`}>
              <div className="check-icon">{checkSvg}</div>
              <span data-editable={item.key}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
