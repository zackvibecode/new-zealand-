export default function Experience() {
  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-heading animate">
          <span className="tag" style={{ background: 'rgba(200,16,46,0.15)', color: '#ff6b80' }}>Visual Experience</span>
          <h2>Destinasi Yang Akan Tinggal<br />Dalam Ingatan</h2>
          <p>Setiap sudut New Zealand punya ceritanya tersendiri.</p>
        </div>

        <div className="photo-grid animate">
          <div className="photo-placeholder photo-p1">
            <span className="photo-icon">🌸</span>
            <div className="photo-overlay"></div>
            <div className="photo-label">
              Lupin Flower Field<br />
              <span style={{ fontWeight: 400, opacity: 0.7 }}>Lake Tekapo</span>
            </div>
          </div>
          <div className="photo-placeholder photo-p2">
            <span className="photo-icon">⛵</span>
            <div className="photo-overlay"></div>
            <div className="photo-label">
              Milford Sound<br />
              <span style={{ fontWeight: 400, opacity: 0.7 }}>South Island</span>
            </div>
          </div>
          <div className="photo-placeholder photo-p3">
            <span className="photo-icon">💧</span>
            <div className="photo-overlay"></div>
            <div className="photo-label">
              Lake Tekapo<br />
              <span style={{ fontWeight: 400, opacity: 0.7 }}>Turquoise Waters</span>
            </div>
          </div>
          <div className="photo-placeholder photo-p4">
            <span className="photo-icon">🎿</span>
            <div className="photo-overlay"></div>
            <div className="photo-label">
              Queenstown<br />
              <span style={{ fontWeight: 400, opacity: 0.7 }}>Adventure Capital</span>
            </div>
          </div>
        </div>

        <div className="experience-quote animate">
          <p>
            Ini bukan sekadar trip biasa.<br />
            Ini <span className="em">pengalaman yang susah nak dapat sekali seumur hidup.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
