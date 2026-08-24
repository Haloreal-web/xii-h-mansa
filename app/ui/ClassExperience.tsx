"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { WorldKind } from "./ThreeWorld";

const ThreeWorld = dynamic(() => import("./ThreeWorld"), { ssr: false });

const members = Array.from({ length: 26 }, (_, index) => String(index + 1).padStart(2, "0"));
const frames = ["01", "02", "03", "04", "05"];
const projects = ["01", "02", "03"];

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h11M13 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SchoolMark({ large = false }: { large?: boolean }) {
  return <span className={large ? "school-mark is-large" : "school-mark"} aria-label="elight.universe"><i>✦</i></span>;
}

function SectionWorld({ kind }: { kind: WorldKind }) {
  return <div className={`world world--${kind}`} aria-hidden="true"><ThreeWorld kind={kind} /></div>;
}

export default function ClassExperience() {
  const [openCard, setOpenCard] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpenCard(null); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top"><SchoolMark /><span><strong>XII-H</strong><small>MANSA</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Buka menu" aria-expanded={menuOpen}><i /><i /></button>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Navigasi utama"><a href="#anggota" onClick={() => setMenuOpen(false)}>Anggota</a><a href="#galeri" onClick={() => setMenuOpen(false)}>Galeri</a><a href="#karya" onClick={() => setMenuOpen(false)}>Karya</a></nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-image" />
        <SectionWorld kind="hero" />
        <div className="hero-copy reveal"><p className="eyebrow">elight.universe presents</p><h1>XII-H<br />MANSA</h1><p className="tagline">Lebih baik, dalam kebersamaan.</p><a className="gold-action" href="#anggota">Masuk ke kelas <Arrow /></a></div>
        <div className="hero-logo"><SchoolMark large /></div>
        <a className="scroll-line" href="#anggota">scroll <span /></a>
      </section>

      <section id="anggota" className="chapter members-chapter">
        <div className="chapter-scrim" /><SectionWorld kind="members" />
        <div className="chapter-heading reveal"><span>01</span><h2>Anggota</h2></div>
        <button className="teacher-photo-card reveal" type="button" onClick={() => setOpenCard("Wali Kelas")}>
          <span className="photo-slot"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h5l1.3-1.7h3.4L15 5.5h5v13H4v-13Z" fill="none" stroke="currentColor" strokeWidth="1.15"/><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.15"/></svg></span><span className="teacher-copy"><small>WALI KELAS</small><strong>FOTO MENYUSUL</strong></span><Arrow />
        </button>
        <div className="member-grid">{members.map((number, index) => <button className={`member-tile tile-${index % 5}`} key={number} type="button" onClick={() => setOpenCard(`Anggota ${number}`)}><span>{number}</span><em>NODE</em><i /><b>XII-H</b></button>)}</div>
      </section>

      <section id="galeri" className="chapter gallery-chapter"><SectionWorld kind="gallery" /><div className="chapter-heading light reveal"><span>02</span><h2>Galeri</h2></div><div className="frame-stage">{frames.map((number, index) => <button className={`frame frame-${index + 1}`} key={number} type="button" onClick={() => setOpenCard(`Foto ${number}`)}><span>{number}</span><i /></button>)}</div></section>

      <section id="karya" className="chapter works-chapter"><SectionWorld kind="works" /><div className="chapter-heading ink reveal"><span>03</span><h2>Karya</h2></div><div className="artifact-stage">{projects.map((number, index) => <button className={`artifact artifact-${index + 1}`} key={number} type="button" onClick={() => setOpenCard(`Karya ${number}`)}><span>{number}</span><i /><b /></button>)}</div></section>

      <footer><SchoolMark /><span>XII-H || MANSA</span><small>Part of: @man1nganjuk</small></footer>
      {openCard && <div className="card-overlay" role="dialog" aria-modal="true" aria-label={openCard} onClick={() => setOpenCard(null)}><div className="detail-card" onClick={(event) => event.stopPropagation()}><button onClick={() => setOpenCard(null)} aria-label="Tutup">×</button><span>XII-H</span><h3>{openCard}</h3><p>Data menyusul.</p></div></div>}
    </main>
  );
}
