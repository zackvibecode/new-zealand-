export default function StickyBar() {
  return (
    <div className="sticky-bar">
      <div className="price" style={{ flex: 1 }}>
        <div style={{ fontSize: '0.7rem', color: 'var(--gray-500)', fontWeight: 500 }}>Dari</div>
        <strong>RM13,999</strong>
      </div>
      <a href="#whatsapp" className="btn-primary">Check &amp; Lock Seat</a>
    </div>
  );
}
