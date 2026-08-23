/**
 * XII-H visual language: Celestial Yearbook — polished navy, ivory, and orbit-gold layers form a restrained 3D class archive.
 */
import { useCallback, useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import "./ClassSite.css";

const LOGO_URL = "/manus-storage/xii-h-elight-universe-logo_f5d5207f.png";
const HERO_IMAGE_URL = "/manus-storage/xii-h-hero-cosmos_df2286c5.jpg";
const GALLERY_IMAGE_URL = "/manus-storage/xii-h-gallery-architecture_4c6c3fe1.jpg";
const WORK_IMAGE_URL = "/manus-storage/xii-h-workshop-orbits_55377ede.jpg";
const STAR_IMAGE_URL = "/manus-storage/xii-h-star-field_6b5f3b20.jpg";

const members = Array.from({ length: 26 }, (_, index) => ({
  number: String(index + 1).padStart(2, "0"),
  type: "Member profile",
}));

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OrbitMark() {
  return (
    <span className="orbit-mark" aria-hidden="true">
      <i />
      <i />
      <b />
    </span>
  );
}

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateParallax = useCallback((event: MouseEvent<HTMLElement>) => {
    const x = (event.clientX / window.innerWidth - 0.5).toFixed(3);
    const y = (event.clientY / window.innerHeight - 0.5).toFixed(3);
    document.documentElement.style.setProperty("--pointer-x", x);
    document.documentElement.style.setProperty("--pointer-y", y);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCard(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="class-site" onMouseMove={updateParallax} style={{ "--hero-image": `url(${HERO_IMAGE_URL})` } as CSSProperties}>
      <div className="site-grain" aria-hidden="true" />
      <header className="class-nav">
        <a className="nav-brand" href="#top" aria-label="XII-H home">
          <span className="nav-logo-wrap"><img src={LOGO_URL} alt="Logo elight.universe" /></span>
          <span><strong>XII-H</strong><small>MANSA</small></span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navigasi utama">
          <a href="#orbit" onClick={() => setMenuOpen(false)}>Class orbit</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#works" onClick={() => setMenuOpen(false)}>Works</a>
        </nav>
        <button className="nav-menu" type="button" aria-label="Buka menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span /> <span />
        </button>
      </header>

      <main>
        <section className="hero-class" id="top" aria-labelledby="hero-title">
          <div className="hero-halo" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-copy">
            <p className="eyebrow"><OrbitMark /> elight.universe presents</p>
            <h1 id="hero-title">XII-H <em>||</em> MANSA</h1>
            <p className="hero-tagline">Lebih baik, dalam satu orbit.</p>
            <p className="hero-note">A digital yearbook-in-progress for the stories, people, and work that shape our final school chapter.</p>
            <div className="hero-actions">
              <a className="button-gold" href="#orbit">Explore the class <ArrowUpRight /></a>
              <span>Part of: <b>@man1nganjuk</b></span>
            </div>
          </div>
          <div className="hero-emblem-wrap" aria-hidden="true">
            <div className="hero-emblem-shadow" />
            <div className="hero-emblem">
              <span className="emblem-ring ring-one" />
              <span className="emblem-ring ring-two" />
              <span className="emblem-disk"><img src={LOGO_URL} alt="" /></span>
              <span className="emblem-star one">✦</span>
              <span className="emblem-star two">✦</span>
              <span className="emblem-star three">✦</span>
            </div>
          </div>
          <a className="scroll-cue" href="#orbit"><span>Scroll to meet the orbit</span><i /></a>
        </section>

        <section className="intro-band" aria-label="Identitas kelas">
          <p>ONE CLASS, <em>TWENTY-SIX</em> STORIES, ENDLESS WAYS TO SHINE.</p>
          <div><span>2024—2025</span><OrbitMark /><span>ELIGHT.UNIVERSE</span></div>
        </section>

        <section className="class-orbit-section" id="orbit" aria-labelledby="orbit-title">
          <div className="section-heading">
            <p className="eyebrow"><OrbitMark /> the constellation</p>
            <h2 id="orbit-title">Meet the <em>orbit.</em></h2>
            <p>Setiap kartu akan menjadi pintu ke cerita unik satu anggota XII-H. Data profil dan foto belum dimasukkan agar dapat diisi dengan data asli kalian nanti.</p>
          </div>
          <div className="mentor-card">
            <div className="mentor-symbol"><span>W</span><i /></div>
            <div className="mentor-copy"><p className="card-kicker">Guiding star</p><h3>Wali Kelas</h3><span>Foto dan nama akan ditambahkan</span></div>
            <button type="button" onClick={() => setSelectedCard("Wali Kelas")}>Preview profile <ArrowUpRight /></button>
          </div>
          <div className="member-grid" aria-label="Kartu anggota kelas yang akan diisi">
            {members.map((member, index) => (
              <button className={`member-card member-card--${index % 5}`} key={member.number} type="button" onClick={() => setSelectedCard(`Member ${member.number}`)}>
                <span className="member-index">{member.number}</span>
                <span className="member-planet"><i /><b /></span>
                <span className="member-meta"><small>{member.type}</small><strong>Data menyusul</strong></span>
                <span className="member-expand"><ArrowUpRight /></span>
              </button>
            ))}
          </div>
          <p className="data-note">Tap any card to preview the future profile layer.</p>
        </section>

        <section className="gallery-section" id="gallery" style={{ "--gallery-image": `url(${GALLERY_IMAGE_URL})` } as CSSProperties}>
          <div className="gallery-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="section-heading gallery-heading">
            <p className="eyebrow"><OrbitMark /> shared frames</p>
            <h2>Moments in <em>motion.</em></h2>
            <p>Galeri akan menjadi ruang untuk foto bersama, momen kelas, dan potongan perjalanan XII-H.</p>
          </div>
          <div className="gallery-frames" aria-label="Tempat foto kelas">
            {["01", "02", "03", "04", "05"].map((number, index) => (
              <div className={`gallery-frame frame-${index + 1}`} key={number}>
                <span>PHOTO / {number}</span><i>Foto menyusul</i>
              </div>
            ))}
          </div>
        </section>

        <section className="works-section" id="works" style={{ "--works-image": `url(${WORK_IMAGE_URL})` } as CSSProperties}>
          <div className="works-copy">
            <p className="eyebrow"><OrbitMark /> the maker archive</p>
            <h2>Made by <em>our orbit.</em></h2>
            <p>Tempat untuk karya visual, proyek aplikasi, eksperimen, dan file yang ingin dibagikan oleh anggota kelas.</p>
            <button className="button-outline" type="button" onClick={() => setSelectedCard("Karya XII-H")}>Explore work shelf <ArrowUpRight /></button>
          </div>
          <div className="work-shelf" aria-label="Rak karya yang belum diisi">
            <article><span>01</span><h3>Visual archive</h3><p>Artwork will appear here.</p></article>
            <article><span>02</span><h3>Digital projects</h3><p>Apps & websites will appear here.</p></article>
            <article><span>03</span><h3>Class experiments</h3><p>Projects will appear here.</p></article>
          </div>
        </section>
      </main>

      <footer className="class-footer" style={{ "--stars-image": `url(${STAR_IMAGE_URL})` } as CSSProperties}>
        <img src={LOGO_URL} alt="Logo elight.universe" />
        <p><strong>XII-H || MANSA</strong><span>More stories are on their way.</span></p>
        <a href="#top">Back to top <ArrowUpRight /></a>
      </footer>

      {selectedCard && (
        <div className="profile-layer" role="dialog" aria-modal="true" aria-labelledby="profile-layer-title" onClick={() => setSelectedCard(null)}>
          <div className="profile-panel" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Tutup" onClick={() => setSelectedCard(null)}>×</button>
            <div className="profile-panel-orbit" aria-hidden="true"><i /><i /><b>✦</b></div>
            <p className="eyebrow"><OrbitMark /> profile layer</p>
            <h2 id="profile-layer-title">{selectedCard}</h2>
            <p>Profil ini sudah memiliki ruang 3D. Nanti dapat diisi dengan foto, nama lengkap, lagu favorit, hobi, dan tautan media sosial dari pemilik profil.</p>
            <div className="profile-specs"><span>PHOTO <b>Waiting</b></span><span>PLAYLIST <b>Waiting</b></span><span>HOBBY <b>Waiting</b></span></div>
            <button className="button-gold" type="button" onClick={() => setSelectedCard(null)}>Back to the orbit <ArrowUpRight /></button>
          </div>
        </div>
      )}
    </div>
  );
}
