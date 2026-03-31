'use client';

import { useState } from 'react';

export default function Payment() {
  const [copied, setCopied] = useState(false);

  function copyAccountNumber() {
    const accNum = '562021629476';

    function showCopied() {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(accNum).then(showCopied).catch(() => fallbackCopy(accNum, showCopied));
    } else {
      fallbackCopy(accNum, showCopied);
    }
  }

  function fallbackCopy(text: string, cb: () => void) {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.focus();
    el.select();
    try { document.execCommand('copy'); cb(); } catch (e) { /* silent */ }
    document.body.removeChild(el);
  }

  return (
    <section id="payment">
      <div className="container">
        <div className="section-heading animate">
          <span className="tag">Cara Bayar</span>
          <h2>Cara Pembayaran</h2>
          <p>Bayar secara berperingkat — ringan dan mudah.</p>
        </div>

        <div className="payment-card animate">
          <div className="bank-row">
            <div>
              <div className="bank-name">Maybank</div>
              <div className="account-holder">NUSA TRAVEL SDN BHD</div>
            </div>
            <div style={{ background: 'var(--gray-100)', borderRadius: '10px', padding: '8px 16px', fontSize: '0.75rem', color: 'var(--gray-500)', fontWeight: 600 }}>
              Bank Tempatan
            </div>
          </div>

          <div className="acc-number-row">
            <div className="acc-number">5620 2162 9476</div>
            <button
              className={`copy-btn${copied ? ' copied' : ''}`}
              onClick={copyAccountNumber}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>{copied ? 'Disalin!' : 'Salin'}</span>
            </button>
          </div>

          <p style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--gray-700)', marginBottom: '14px' }}>Jadual Pembayaran:</p>
          <div className="payment-schedule">
            <div className="schedule-item">
              <div className="schedule-label">Deposit Booking</div>
              <div className="schedule-amount">RM500</div>
              <div className="schedule-desc">Untuk tempah seat</div>
            </div>
            <div className="schedule-item">
              <div className="schedule-label">30 Hari Selepas</div>
              <div className="schedule-amount">RM1,000</div>
              <div className="schedule-desc">Bayaran ke-2</div>
            </div>
            <div className="schedule-item">
              <div className="schedule-label">60 Hari Selepas</div>
              <div className="schedule-amount">RM1,000</div>
              <div className="schedule-desc">Bayaran ke-3</div>
            </div>
            <div className="schedule-item">
              <div className="schedule-label">Baki</div>
              <div className="schedule-amount" style={{ fontSize: '1rem' }}>Berperingkat</div>
              <div className="schedule-desc">Ikut jadual dipersetujui</div>
            </div>
          </div>

          <div style={{ marginTop: '20px', padding: '14px 18px', background: 'var(--red-pale)', borderRadius: '10px', borderLeft: '3px solid var(--red)' }}>
            <p style={{ fontSize: '0.82rem', color: 'var(--red)', fontWeight: 600 }}>
              Selepas bayaran, hantar bukti resit ke WhatsApp kami untuk pengesahan booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
