/**
 * XII-H visual language: Celestial Yearbook — after the preserved hero, every content area becomes a tactile 3D orbit scene.
 */
import { useCallback, useEffect, useRef, useState, type CSSProperties, type MouseEvent, type PointerEvent as ReactPointerEvent } from "react";
import "./ClassSite.css";
import "./ClassOrbitRefinement.css";

const LOGO_URL = "/manus-storage/xii-h-elight-universe-logo_f5d5207f.png";
const HERO_IMAGE_URL = "/manus-storage/xii-h-hero-cosmos_df2286c5.jpg";
const GALLERY_IMAGE_URL = "/manus-storage/xii-h-gallery-architecture_4c6c3fe1.jpg";
const WORK_IMAGE_URL = "/manus-storage/xii-h-workshop-orbits_55377ede.jpg";
const STAR_IMAGE_URL = "/manus-storage/xii-h-star-field_6b5f3b20.jpg";

const members = Array.from({ length: 26 }, (_, index) => ({
  number: String(index + 1).padStart(2, "0"),
  ring: index % 3,
  angle: (index * 137.5) % 360,
}));

function ArrowUpRight() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function OrbitMark() {
  return <span className="orbit-mark" aria-hidden="true"><i /><i /><b /></span>;
}

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const orbitStageRef = useRef<HTMLDivElement>(null);

  const updateParallax = useCallback((event: MouseEvent<HTMLElement>) => {
    document.documentElement.style.setProperty("--pointer-x", (event.clientX / window.innerWidth - 0.5).toFixed(3));
    document.documentElement.style.setProperty("--pointer-y", (event.clientY / window.innerHeight - 0.5).toFixed(3));
  }, []);

  const tiltOrbitStage = (event: ReactPointerEvent<HTMLDivElement>) => {
    const stage = orbitStageRef.current;
    if (!stage) return;
    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.style.setProperty("--orbit-tilt-x", `${(y * -7).toFixed(2)}deg`);
    stage.style.setProperty("--orbit-tilt-y", `${(x * 10).toFixed(2)}deg`);
  };

  const resetOrbitStage = () => {
    const stage = orbitStageRef.current;
    if (!stage) return;
    stage.style.setProperty("--orbit-tilt-x", "0deg");
    stage.style.setProperty("--orbit-tilt-y", "0deg");
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSelectedCard(null); setMenuOpen(false); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="class-site" onMouseMove={updateParallax} style={{ "--hero-image": `url(${HERO_IMAGE_URL})` } as CSSProperties}>
      <div className="site-grain" aria-hidden="true" />
      <header className="class-nav">
        <a className="nav-brand" href="#top" aria-label="XII-H home"><span className="nav-logo-wrap"><img src={LOGO_URL} alt="Logo elight.universe" /></span><span><strong>XII-H</strong><small>MANSA</small></span></a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navigasi utama">
          <a href="#orbit" onClick={() => setMenuOpen(false)}>Class orbit</a><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a><a href="#works" onClick={() => setMenuOpen(false)}>Works</a>
        </nav>
        <button className="nav-menu" type="button" aria-label="Buka menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /> <span /></button>
      </header>

      <main>
        <section className="hero-class" id="top" aria-labelledby="hero-title">
          <div className="hero-halo" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-copy">
            <p className="eyebrow"><OrbitMark /> elight.universe presents</p>
            <h1 id="hero-title">XII-H <em>||</em> MANSA</h1>
            <p className="hero-tagline">Lebih baik, dalam satu orbit.</p>
            <p className="hero-note">A digital yearbook-in-progress for the stories, people, and work that shape our final school chapter.</p>
            <div className="hero-actions"><a className="button-gold" href="#orbit">Explore the class <ArrowUpRight /></a><span>Part of: <b>@man1nganjuk</b></span></div>
          </div>
          <div className="hero-emblem-wrap" aria-hidden="true"><div className="hero-emblem-shadow" /><div className="hero-emblem"><span className="emblem-ring ring-one" /><span className="emblem-ring ring-two" /><span className="emblem-disk"><img src={LOGO_URL} alt="" /></span><span className="emblem-star one">✦</span><span className="emblem-star two">✦</span><span className="emblem-star three">✦</span></div></div>
          <a className="scroll-cue" href="#orbit"><span>Scroll to meet the orbit</span><i /></a>
        </section>

        <section className="orbit-signal" aria-label="Identitas kelas">
          <div className="signal-track"><i /><i /><b>✦</b></div>
          <p>ONE CLASS, <em>TWENTY-SIX</em> STORIES, ENDLESS WAYS TO SHINE.</p>
          <div className="signal-meta"><span>2024—2025</span><span>•</span><span>ELIGHT.UNIVERSE</span></div>
        </section>

        <section className="orbit-society" id="orbit" aria-labelledby="orbit-title">
          <div className="section-heading orbit-heading"><p className="eyebrow"><OrbitMark /> the constellation</p><h2 id="orbit-title">Meet the <em>orbit.</em></h2><p>Jangan dibaca sebagai daftar biasa—setiap titik adalah ruang profil yang mengelilingi satu pusat cerita. Foto, nama, lagu favorit, hobi, dan sosial media akan masuk saat datanya sudah ada.</p></div>
          <div className="orbit-reading-key" aria-label="Petunjuk interaksi"><span><i /> Drag visualnya dengan pointer</span><span><i /> Tap kartu untuk membuka layer</span></div>
          <div className="orbit-stage" ref={orbitStageRef} onPointerMove={tiltOrbitStage} onPointerLeave={resetOrbitStage}>
            <div className="orbit-sun"><span className="sun-aura" /><img src={LOGO_URL} alt="Logo elight.universe" /><small>XII-H</small></div>
            <div className="orbit-path orbit-path-one" aria-hidden="true" /><div className="orbit-path orbit-path-two" aria-hidden="true" /><div className="orbit-path orbit-path-three" aria-hidden="true" />
            <button className="mentor-plinth" type="button" onClick={() => setSelectedCard("Wali Kelas")}><span className="plinth-halo" /><span className="plinth-avatar">W</span><span className="plinth-copy"><small>CLASS ANCHOR</small><b>Wali Kelas</b><em>Awaiting dossier</em></span><span className="plinth-arrow"><ArrowUpRight /></span></button>
            {members.map((member) => (
              <button className={`orbital-card ring-${member.ring}`} key={member.number} type="button" onClick={() => setSelectedCard(`Member ${member.number}`)} style={{ "--angle": `${member.angle}deg`, "--order": member.number } as CSSProperties}>
                <span className="orbital-face front"><small>NODE / {member.number}</small><i className="mini-planet"><b /></i><strong>XII-H dossier</strong><em>Awaiting archive</em></span>
                <span className="orbital-face side" aria-hidden="true">XII-H</span>
                <span className="orbital-glow" aria-hidden="true" />
              </button>
            ))}
            <div className="orbit-floor" aria-hidden="true"><i /><i /><i /></div>
          </div>
          <p className="orbit-caption">26 numbered dossiers, one shared orbit. Geser panggung di ponsel untuk membuka arsip setiap node.</p>
        </section>

        <section className="memory-vault" id="gallery" style={{ "--gallery-image": `url(${GALLERY_IMAGE_URL})` } as CSSProperties}>
          <div className="section-heading vault-heading"><p className="eyebrow"><OrbitMark /> shared frames</p><h2>Moments in <em>motion.</em></h2><p>Galeri tidak akan menjadi kotak-kotak foto biasa. Foto bersama nanti masuk ke bingkai yang tersusun seperti memori dalam ruang.</p></div>
          <div className="vault-stage">
            <div className="vault-beam" aria-hidden="true" />
            {["01", "02", "03", "04", "05"].map((number, index) => <button className={`memory-card memory-${index + 1}`} key={number} type="button" onClick={() => setSelectedCard(`Photo memory ${number}`)}><span className="memory-card-edge" /><small>ARCHIVE FRAME / {number}</small><b>Memory slot<br />awaiting image</b><i><ArrowUpRight /></i></button>)}
            <div className="vault-cube" aria-hidden="true"><i /><i /><i /></div>
          </div>
        </section>

        <section className="work-lab" id="works" style={{ "--works-image": `url(${WORK_IMAGE_URL})` } as CSSProperties}>
          <div className="lab-light" aria-hidden="true" /><div className="section-heading lab-heading"><p className="eyebrow"><OrbitMark /> the maker archive</p><h2>Made by <em>our orbit.</em></h2><p>Saat karya sudah dikirim, setiap kubus dapat dibuka untuk melihat karya visual, aplikasi, dan eksperimen kelas—termasuk file unduhan yang aman dibagikan.</p></div>
          <div className="work-cube-shelf">
            {[{ no: "01", title: "Visual vault", note: "Artwork awaiting archive" }, { no: "02", title: "Digital orbit", note: "Apps & sites awaiting launch" }, { no: "03", title: "Open experiment", note: "Ideas awaiting record" }].map((work, index) => <button className={`work-cube work-cube-${index + 1}`} type="button" key={work.no} onClick={() => setSelectedCard(work.title)}><span className="cube-top" /><span className="cube-side" /><span className="cube-front"><small>WORK / {work.no}</small><b>{work.title}</b><em>{work.note}</em><i><ArrowUpRight /></i></span></button>)}
          </div>
        </section>
      </main>

      <footer className="class-footer" style={{ "--stars-image": `url(${STAR_IMAGE_URL})` } as CSSProperties}><img src={LOGO_URL} alt="Logo elight.universe" /><p><strong>XII-H || MANSA</strong><span>More stories are on their way.</span></p><a href="#top">Back to top <ArrowUpRight /></a></footer>

      {selectedCard && <div className="profile-layer" role="dialog" aria-modal="true" aria-labelledby="profile-layer-title" onClick={() => setSelectedCard(null)}><div className="profile-panel" onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" aria-label="Tutup" onClick={() => setSelectedCard(null)}>×</button><div className="profile-panel-orbit" aria-hidden="true"><i /><i /><b>✦</b></div><p className="eyebrow"><OrbitMark /> profile layer</p><h2 id="profile-layer-title">{selectedCard}</h2><p>Ruang tiga dimensi ini siap diisi foto, nama lengkap, lagu favorit, hobi, dan tautan media sosial pemilik profil setelah data asli kalian dikumpulkan.</p><div className="profile-specs"><span>PHOTO <b>Waiting</b></span><span>PLAYLIST <b>Waiting</b></span><span>HOBBY <b>Waiting</b></span></div><button className="button-gold" type="button" onClick={() => setSelectedCard(null)}>Back to the orbit <ArrowUpRight /></button></div></div>}
    </div>
  );
}
