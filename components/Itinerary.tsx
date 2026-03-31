'use client';

import { useState, useRef, useEffect } from 'react';

const itineraryData = [
  {
    day: 'Hari 1',
    title: 'KLIA → Auckland',
    subtitle: 'Berlepas ke New Zealand',
    activities: [
      'Berkumpul di KLIA — check in dan berlepas ke Auckland',
      'Penerbangan antarabangsa (termasuk dalam pakej)',
      'Makan dan rehat dalam penerbangan',
    ],
  },
  {
    day: 'Hari 2–3',
    title: 'Auckland, Hamilton & Hobbiton',
    subtitle: 'North Island — City & Film Location',
    activities: [
      'Tiba di Auckland — lawatan bandar raya',
      'Mission Bay Beach — pemandangan Teluk Auckland',
      'Perjalanan ke Hamilton',
      'Hobbiton Village — set filem The Hobbit & LOTR yang ikonik',
      'Makan halal disediakan sepanjang perjalanan',
    ],
  },
  {
    day: 'Hari 4',
    title: 'Christchurch',
    subtitle: 'South Island — Kota Garden City',
    activities: [
      'Penerbangan domestik Auckland → Christchurch',
      'Lawatan ke Masjid Annur Christchurch',
      'Jelajah pusat bandar Christchurch',
      'Check in hotel dan rehat',
    ],
  },
  {
    day: 'Hari 5',
    title: 'Lake Tekapo, Pukaki & Mt Cook',
    subtitle: 'South Island — Turquoise Lakes',
    activities: [
      'Lake Tekapo — air turquoise yang luar biasa cantik',
      'Church of the Good Shepherd — ikon Tekapo',
      'Lake Pukaki — pemandangan terus ke arah Mt Cook',
      'Foto di pinggir danau dengan latar belakang gunung',
    ],
  },
  {
    day: 'Hari 6',
    title: 'Wanaka, Cromwell & Te Anau',
    subtitle: 'South Island — Journey South',
    activities: [
      'Lake Wanaka — danau yang tenang dan berlatarbelakang gunung',
      'Cromwell Heritage Town & buah-buahan tempatan',
      'High Country Salmon Farm — pengalaman unik',
      'Tiba di Te Anau — pintu masuk ke Milford Sound',
      'Check in dan rehat awal untuk esok pagi',
    ],
  },
  {
    day: 'Hari 7',
    title: 'Milford Sound Cruise ⭐',
    subtitle: 'Highlight Utama — Most Iconic Experience',
    activities: [
      'Perjalanan melalui Mirror Lake — refleksi sempurna',
      'Homer Tunnel — terowong yang menakjubkan dalam pegunungan',
      'Milford Sound Cruise — layaran 2 jam melalui fiord yang ikonik',
      'Lihat air terjun, singa laut, dan pemandangan dramatik',
      'Perjalanan balik ke Queenstown',
    ],
  },
  {
    day: 'Hari 8',
    title: 'Queenstown & Glenorchy',
    subtitle: 'Adventure Capital + Cinematic Views',
    activities: [
      'Glenorchy — pemandangan cinematic LOTR yang memukau',
      'Free time di Queenstown — shopping, jalan-jalan, aktiviti optional',
      'Gondola Queenstown (optional)',
      'Makan malam halal di Queenstown',
    ],
  },
  {
    day: 'Hari 9–10',
    title: 'Queenstown → Auckland → Kuala Lumpur',
    subtitle: 'Perjalanan Balik ke Malaysia',
    activities: [
      'Penerbangan domestik Queenstown → Auckland',
      'Transit di Auckland',
      'Penerbangan Auckland → Kuala Lumpur',
      'Tiba di KLIA dengan kenangan yang tidak terlupakan',
    ],
  },
];

function ItinItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof itineraryData)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.maxHeight = isOpen ? bodyRef.current.scrollHeight + 'px' : '0';
    }
  }, [isOpen]);

  return (
    <div className={`itin-item${isOpen ? ' open' : ''}`}>
      <div className="itin-header" onClick={onToggle}>
        <div className="itin-day">{item.day}</div>
        <div>
          <div className="itin-title">{item.title}</div>
          <div className="itin-subtitle">{item.subtitle}</div>
        </div>
        <div className="itin-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
      <div className="itin-body" ref={bodyRef}>
        <div className="itin-body-inner">
          <ul className="itin-activities">
            {item.activities.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Itinerary() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="itinerary">
      <div className="container">
        <div className="section-heading animate">
          <span className="tag">Perjalanan</span>
          <h2>Itinerary 10 Hari</h2>
          <p>Disusun dengan teliti — seimbang, lengkap, dan tidak terlalu rushing.</p>
        </div>

        <div className="itinerary-list animate">
          {itineraryData.map((item, index) => (
            <ItinItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
