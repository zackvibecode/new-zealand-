export default function Included() {
  const items = [
    { icon: '✈️', label: 'Tiket Penerbangan KL → Auckland' },
    { icon: '🛫', label: 'Flight Auckland → Christchurch' },
    { icon: '🛬', label: 'Flight Queenstown → Auckland' },
    { icon: '🏨', label: 'Penginapan Sepanjang Trip' },
    { icon: '🍽️', label: 'Makan Halal Ikut Itinerary' },
    { icon: '🚌', label: 'Pengangkutan Berhawa Dingin' },
    { icon: '👨‍✈️', label: 'Tour Guide BM & Tour Leader' },
    { icon: '🎟️', label: 'Entrance Fee Tempat Lawatan' },
  ];

  const delays = ['animate-delay-1', 'animate-delay-1', 'animate-delay-2', 'animate-delay-2', 'animate-delay-3', 'animate-delay-3', 'animate-delay-4', 'animate-delay-4'];

  return (
    <section id="included">
      <div className="container">
        <div className="section-heading animate">
          <span className="tag">Pakej</span>
          <h2>Apa Yang Termasuk</h2>
          <p>Semuanya sudah difikirkan untuk anda.</p>
        </div>

        <div className="included-grid">
          {items.map((item, i) => (
            <div key={i} className={`inc-card animate ${delays[i]}`}>
              <div className="inc-icon">{item.icon}</div>
              <div className="inc-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
