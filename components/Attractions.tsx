export default function Attractions() {
  const attractions = [
    { icon: '⛵', title: 'Milford Sound Cruise', desc: 'Antara pemandangan paling cantik di dunia', delay: 'animate-delay-1' },
    { icon: '🏔', title: 'Lake Tekapo & Pukaki', desc: 'Air turquoise + view langsung ke Mt Cook', delay: 'animate-delay-1' },
    { icon: '🌸', title: 'Lupin Flower Season', desc: 'Musim rare yang hanya ada dalam tempoh terhad', delay: 'animate-delay-2' },
    { icon: '🏘', title: 'Hobbiton Village', desc: 'Lokasi filem The Lord of the Rings yang ikonik', delay: 'animate-delay-2' },
    { icon: '🎿', title: 'Queenstown', desc: 'Free time + aktiviti optional di bandar adventure', delay: 'animate-delay-3' },
    { icon: '🎬', title: 'Glenorchy', desc: 'View cinematic Lord of The Rings yang memukau', delay: 'animate-delay-3' },
    { icon: '🐟', title: 'High Country Salmon Farm', desc: 'Pengalaman unik di ladang salmon pergunungan', delay: 'animate-delay-4' },
    { icon: '🕌', title: 'Masjid Annur Christchurch', desc: 'Lawatan bersejarah di Christchurch', delay: 'animate-delay-4' },
    { icon: '🌊', title: 'Mirror Lake & Homer Tunnel', desc: 'Pemandangan yang sempurna seperti cermin', delay: 'animate-delay-4' },
    { icon: '🏙', title: 'Auckland City & Mission Bay', desc: 'Jelajah bandar raya terbesar New Zealand', delay: 'animate-delay-4' },
  ];
  return (
    <section id="attractions">
      <div className="container">
        <div className="section-heading animate">
          <span className="tag">Destinasi Utama</span>
          <h2 data-editable="attr-heading">Highlight Utama Trip Ini</h2>
          <p data-editable="attr-sub">Destinasi-destinasi yang akan buat anda kagum — dan susah nak lupa.</p>
        </div>
        <div className="attractions-grid">
          {attractions.map((item, i) => (
            <div key={i} className={`attraction-card animate ${item.delay}`}>
              <span className="attraction-icon">{item.icon}</span>
              <h4 data-editable={`attr-${i}-title`}>{item.title}</h4>
              <p data-editable={`attr-${i}-desc`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
