'use client';
import { useState, useEffect, useRef } from 'react';

interface Popup {
  x: number;
  y: number;
  key: string;
  originalText: string;
}

export default function EditModeController() {
  const [savedCount, setSavedCount] = useState(0);
  const [popup, setPopup] = useState<Popup | null>(null);
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load + apply saved edits on mount
    const saved = getSavedContent();
    if (Object.keys(saved).length > 0) {
      setTimeout(() => {
        applySavedContent(saved);
        setSavedCount(Object.keys(saved).length);
      }, 200);
    }

    // Detect mouse selection on any [data-editable] element
    const handleMouseUp = (e: MouseEvent) => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;

      // Walk up from anchor node to find [data-editable]
      let node: Node | null = selection.anchorNode;
      let editableEl: HTMLElement | null = null;
      while (node) {
        if (node instanceof HTMLElement && node.dataset.editable) {
          editableEl = node;
          break;
        }
        node = node.parentNode;
      }
      if (!editableEl) return;

      const key = editableEl.dataset.editable!;
      const text = editableEl.textContent || '';

      // Position popup near mouse
      setPopup({ x: e.clientX, y: e.clientY, key, originalText: text });
      setInputVal(text);

      // Focus input after render
      setTimeout(() => inputRef.current?.focus(), 50);
    };

    // Close popup on Escape or click outside
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPopup(null);
    };
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-edit-popup]')) setPopup(null);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  // Reposition popup so it stays in viewport
  function getPopupStyle(x: number, y: number) {
    const W = typeof window !== 'undefined' ? window.innerWidth : 800;
    const popupW = 320;
    const left = Math.min(x, W - popupW - 16);
    const top = y + 14;
    return { left, top };
  }

  function getSavedContent(): Record<string, string> {
    try { return JSON.parse(localStorage.getItem('nusa-edits') || '{}'); }
    catch { return {}; }
  }

  function applySavedContent(saved: Record<string, string>) {
    Object.entries(saved).forEach(([key, value]) => {
      const el = document.querySelector(`[data-editable="${key}"]`) as HTMLElement;
      if (el) el.textContent = value;
    });
  }

  function saveEdit(key: string, value: string) {
    const el = document.querySelector(`[data-editable="${key}"]`) as HTMLElement;
    if (el) {
      el.textContent = value;
      // Flash green
      el.style.transition = 'outline 0.1s';
      el.style.outline = '2px solid #22c55e';
      el.style.outlineOffset = '4px';
      setTimeout(() => { el.style.outline = ''; el.style.outlineOffset = ''; }, 900);
    }
    const current = getSavedContent();
    current[key] = value;
    localStorage.setItem('nusa-edits', JSON.stringify(current));
    setSavedCount(Object.keys(current).length);
    setPopup(null);
    window.getSelection()?.removeAllRanges();
  }

  function resetAll() {
    if (!confirm('Reset semua perubahan kepada teks asal?')) return;
    localStorage.removeItem('nusa-edits');
    window.location.reload();
  }

  const popupPos = popup ? getPopupStyle(popup.x, popup.y) : null;

  return (
    <>
      {/* ── Floating edit popup on selection ── */}
      {popup && popupPos && (
        <div
          data-edit-popup="true"
          style={{
            position: 'fixed',
            left: popupPos.left,
            top: popupPos.top,
            zIndex: 10000,
            background: '#111',
            border: '1px solid rgba(200,16,46,0.4)',
            borderRadius: '14px',
            padding: '14px',
            width: '320px',
            boxShadow: '0 16px 48px rgba(0,0,0,0.35)',
            fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
          }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
            <span style={{ fontSize: '13px' }}>✏️</span>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Edit Teks
            </span>
            <button
              onClick={() => setPopup(null)}
              style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: '16px', lineHeight: 1 }}
            >×</button>
          </div>

          {/* Selected key label */}
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', marginBottom: '8px', fontFamily: 'monospace' }}>
            [{popup.key}]
          </div>

          {/* Input */}
          <textarea
            ref={inputRef as unknown as React.RefObject<HTMLTextAreaElement>}
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                saveEdit(popup.key, inputVal.trim());
              }
            }}
            rows={3}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '9px',
              padding: '10px 12px',
              color: 'white',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              resize: 'vertical',
              outline: 'none',
              lineHeight: 1.5,
            }}
            placeholder="Taip teks baru..."
          />

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
            <button
              onClick={() => saveEdit(popup.key, inputVal.trim())}
              style={{
                flex: 1,
                background: '#C8102E',
                color: 'white',
                border: 'none',
                borderRadius: '9px',
                padding: '9px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Ganti ↵
            </button>
            <button
              onClick={() => { setInputVal(popup.originalText); }}
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.4)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '9px',
                padding: '9px 12px',
                fontSize: '0.72rem',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Reset
            </button>
          </div>
          <p style={{ fontSize: '0.63rem', color: 'rgba(255,255,255,0.2)', margin: '8px 0 0', textAlign: 'center' }}>
            Enter untuk simpan &nbsp;·&nbsp; Esc untuk tutup
          </p>
        </div>
      )}

      {/* ── Bottom-left status panel ── */}
      <div style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 999 }}>
        <div style={{
          background: 'white',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '14px',
          padding: '11px 16px',
          boxShadow: '0 6px 28px rgba(0,0,0,0.10)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
        }}>
          <span style={{ fontSize: '14px' }}>✏️</span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#555' }}>
            Select teks untuk edit
          </span>
          {savedCount > 0 && (
            <>
              <span style={{ width: 1, height: 14, background: '#e0e0e0' }} />
              <span style={{ fontSize: '0.68rem', color: '#22c55e', fontWeight: 700 }}>
                {savedCount} saved
              </span>
              <button
                onClick={resetAll}
                style={{
                  background: 'none',
                  border: '1px solid #e0e0e0',
                  borderRadius: '7px',
                  padding: '4px 10px',
                  fontSize: '0.68rem',
                  color: '#999',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
