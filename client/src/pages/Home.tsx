/**
 * XII-H visual language: the approved hero remains intact; content sections use a restrained, real canvas-based 3D starfield.
 */
import { useEffect, useRef, useState, type CSSProperties } from "react";
import "./ClassSite.css";
import "./ClassOrbitRefinement.css";

const LOGO_URL = "/manus-storage/xii-h-elight-universe-logo_f5d5207f.png";
const HERO_IMAGE_URL = "/manus-storage/xii-h-hero-cosmos_df2286c5.jpg";
const STAR_IMAGE_URL = "/manus-storage/xii-h-star-field_6b5f3b20.jpg";
const GALLERY_VIDEO_URL = "/manus-storage/xii-h-galeri-background_b2c8a308.mp4";

const members = Array.from({ length: 26 }, (_, index) => String(index + 1).padStart(2, "0"));
const gallerySlots = ["01", "02", "03", "04", "05"];
const workSlots = ["01", "02", "03"];

type SpaceMode = "navy" | "gallery" | "lab";

function ArrowUpRight() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function OrbitMark() {
  return <span className="orbit-mark" aria-hidden="true"><i /><i /><b /></span>;
}

function SpaceBackground({ mode = "navy" }: { mode?: SpaceMode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const palette = mode === "gallery"
      ? { particle: "13,42,87", ring: "174,133,48" }
      : mode === "lab"
        ? { particle: "13,42,87", ring: "174,133,48" }
        : { particle: "246,243,235", ring: "214,174,87" };
    const particles = Array.from({ length: 36 }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 0.9 + 0.1,
      speed: Math.random() * 0.003 + 0.0015,
      size: Math.random() * 1.6 + 0.35,
    }));
    const prisms = Array.from({ length: 5 }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 0.7 + 0.25,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.0018 + 0.0006,
      size: Math.random() * 18 + 10,
    }));
    let frame = 0;
    let width = 0;
    let height = 0;
    let active = true;
    let lastDraw = 0;
    let animationId = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (timestamp = 0) => {
      if (!active) return;
      if (timestamp - lastDraw < 45) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastDraw = timestamp;
      context.clearRect(0, 0, width, height);
      const time = frame * 0.003;
      const originX = width * 0.5;
      const originY = height * 0.5;

      if (mode === "gallery") {
        for (let frameIndex = 0; frameIndex < 4; frameIndex += 1) {
          const size = 90 + frameIndex * 88;
          context.save();
          context.translate(originX + Math.sin(time + frameIndex) * 18, originY + Math.cos(time * 0.7 + frameIndex) * 12);
          context.rotate(-0.13 + frameIndex * 0.085);
          context.strokeStyle = `rgba(${palette.ring}, ${0.08 + frameIndex * 0.035})`;
          context.lineWidth = 1;
          context.strokeRect(-size * 0.65, -size * 0.9, size * 1.3, size * 1.8);
          context.restore();
        }
      } else if (mode === "lab") {
        const horizon = height * 0.43;
        context.strokeStyle = `rgba(${palette.ring}, .13)`;
        context.lineWidth = 1;
        for (let line = -7; line <= 7; line += 1) {
          context.beginPath();
          context.moveTo(originX, horizon);
          context.lineTo(originX + line * width * 0.18, height);
          context.stroke();
        }
        for (let row = 1; row <= 6; row += 1) {
          const y = horizon + (height - horizon) * Math.pow(row / 6, 1.7);
          context.beginPath();
          context.moveTo(0, y);
          context.lineTo(width, y);
          context.stroke();
        }
      } else {
        for (let ring = 1; ring <= 3; ring += 1) {
          const radiusX = width * (0.18 + ring * 0.13);
          const radiusY = height * (0.07 + ring * 0.05);
          context.beginPath();
          context.ellipse(originX + Math.sin(time + ring) * 10, originY + Math.cos(time * 0.7 + ring) * 8, radiusX, radiusY, -0.28 + ring * 0.12, 0, Math.PI * 2);
          context.strokeStyle = `rgba(${palette.ring}, ${0.09 + ring * 0.025})`;
          context.lineWidth = 1;
          context.stroke();
        }
      }

      prisms.forEach((prism, index) => {
        prism.angle += prism.speed;
        const scale = 1 / prism.z;
        const x = originX + prism.x * width * 0.44 * scale;
        const y = originY + prism.y * height * 0.44 * scale;
        const size = Math.min(prism.size * scale, 48);
        if (x < -70 || x > width + 70 || y < -70 || y > height + 70) return;
        context.save();
        context.translate(x, y);
        context.rotate(prism.angle + time * (index % 2 ? 0.35 : -0.25));
        context.beginPath();
        context.moveTo(0, -size);
        context.lineTo(size * 0.78, -size * 0.15);
        context.lineTo(size * 0.55, size * 0.72);
        context.lineTo(-size * 0.55, size * 0.72);
        context.lineTo(-size * 0.78, -size * 0.15);
        context.closePath();
        context.fillStyle = `rgba(${palette.ring}, ${0.05 + (1 - prism.z) * 0.13})`;
        context.fill();
        context.strokeStyle = `rgba(${palette.particle}, ${0.15 + (1 - prism.z) * 0.34})`;
        context.lineWidth = 1;
        context.stroke();
        context.beginPath();
        context.moveTo(0, -size);
        context.lineTo(0, size * 0.72);
        context.moveTo(-size * 0.78, -size * 0.15);
        context.lineTo(size * 0.55, size * 0.72);
        context.strokeStyle = `rgba(${palette.ring}, ${0.12 + (1 - prism.z) * 0.22})`;
        context.stroke();
        context.restore();
      });

      particles.forEach((particle) => {
        particle.z -= particle.speed;
        if (particle.z < 0.06) {
          particle.z = 1;
          particle.x = Math.random() * 2 - 1;
          particle.y = Math.random() * 2 - 1;
        }
        const scale = 1 / particle.z;
        const x = originX + particle.x * width * 0.42 * scale;
        const y = originY + particle.y * height * 0.42 * scale;
        const size = particle.size * scale;
        if (x < -20 || x > width + 20 || y < -20 || y > height + 20) return;
        context.beginPath();
        context.arc(x, y, Math.min(size, 5), 0, Math.PI * 2);
        context.fillStyle = `rgba(${palette.particle}, ${Math.min(0.78, 0.14 + (1 - particle.z) * 0.66)})`;
        context.fill();
      });

      frame += 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(draw);
    return () => { active = false; cancelAnimationFrame(animationId); window.removeEventListener("resize", resize); };
  }, [mode]);

  return <canvas ref={canvasRef} className="space-background" aria-hidden="true" />;
}

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const membersVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSelectedCard(null); setMenuOpen(false); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const scenes = Array.from(document.querySelectorAll<HTMLElement>(".content-scene"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.18 });
    scenes.forEach((scene) => observer.observe(scene));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = membersVideoRef.current;
    const membersScene = document.querySelector<HTMLElement>("#members");
    if (!video || !membersScene) return;
    video.pause();
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => undefined);
      else video.pause();
    }, { rootMargin: "180px 0px" });
    observer.observe(membersScene);
    return () => { observer.disconnect(); video.pause(); };
  }, []);

  return (
    <div className="class-site" style={{ "--hero-image": `url(${HERO_IMAGE_URL})` } as CSSProperties}>
      <div className="site-grain" aria-hidden="true" />
      <header className="class-nav">
        <a className="nav-brand" href="#top" aria-label="XII-H home"><span className="nav-logo-wrap"><img src={LOGO_URL} alt="Logo elight.universe" /></span><span><strong>XII-H</strong><small>MANSA</small></span></a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navigasi utama"><a href="#members" onClick={() => setMenuOpen(false)}>Anggota</a><a href="#gallery" onClick={() => setMenuOpen(false)}>Galeri</a><a href="#works" onClick={() => setMenuOpen(false)}>Karya</a></nav>
        <button className="nav-menu" type="button" aria-label="Buka menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /> <span /></button>
      </header>

      <main>
        <section className="hero-class" id="top" aria-labelledby="hero-title">
          <div className="hero-halo" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-copy"><p className="eyebrow"><OrbitMark /> elight.universe presents</p><h1 id="hero-title">XII-H <em>||</em> MANSA</h1><p className="hero-tagline">Lebih baik, dalam kebersamaan.</p><p className="hero-note">A digital yearbook-in-progress for the stories, people, and work that shape our final school chapter.</p><div className="hero-actions"><a className="button-gold" href="#members">Explore the class <ArrowUpRight /></a><span>Part of: <b>@man1nganjuk</b></span></div></div>
          <div className="hero-emblem-wrap" aria-hidden="true"><div className="hero-emblem-shadow" /><div className="hero-emblem"><span className="emblem-ring ring-one" /><span className="emblem-ring ring-two" /><span className="emblem-disk"><img src={LOGO_URL} alt="" /></span><span className="emblem-star one">✦</span><span className="emblem-star two">✦</span><span className="emblem-star three">✦</span></div></div>
          <a className="scroll-cue" href="#members"><span>Scroll to meet the class</span><i /></a>
        </section>

        <section className="members-section content-scene" id="members" aria-labelledby="members-title"><video ref={membersVideoRef} className="members-video" muted loop playsInline preload="none" aria-hidden="true"><source src={GALLERY_VIDEO_URL} type="video/mp4" /></video><SpaceBackground mode="gallery" /><div className="geometry-layer member-geometry" aria-hidden="true"><i /><i /><i /></div><div className="scene-title"><OrbitMark /><h2 id="members-title">XII-H</h2></div><div className="teacher-panel"><div className="teacher-photo-frame" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 5.5h5l1.3-1.7h3.4L15 5.5h5v13H4v-13Z" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.2"/></svg></div><span className="teacher-panel__label">WALI KELAS</span><button type="button" onClick={() => setSelectedCard("Wali Kelas")} aria-label="Buka kartu wali kelas"><ArrowUpRight /></button></div><div className="member-deck" aria-label="Kartu anggota kelas">{members.map((number, index) => <button className={`member-card card-${index % 4}`} key={number} type="button" onClick={() => setSelectedCard(`Anggota ${number}`)}><span>{number}</span><i /><b>XII-H</b></button>)}</div></section>

        <section className="gallery-section content-scene" id="gallery" aria-labelledby="gallery-title"><div className="geometry-layer gallery-geometry" aria-hidden="true"><i /><i /><i /></div><div className="scene-title"><OrbitMark /><h2 id="gallery-title">Galeri</h2></div><div className="gallery-void">{gallerySlots.map((slot, index) => <button className={`gallery-shard shard-${index + 1}`} key={slot} type="button" onClick={() => setSelectedCard(`Foto ${slot}`)}><span>{slot}</span><i /></button>)}</div></section>

        <section className="works-section content-scene" id="works" aria-labelledby="works-title"><SpaceBackground mode="lab" /><div className="geometry-layer work-geometry" aria-hidden="true"><i /><i /><i /></div><div className="scene-title"><OrbitMark /><h2 id="works-title">Karya</h2></div><div className="lab-bench">{workSlots.map((slot, index) => <button className={`lab-artifact artifact-${index + 1}`} key={slot} type="button" onClick={() => setSelectedCard(`Karya ${slot}`)}><span>{slot}</span><i /><b /></button>)}</div></section>
      </main>

      <footer className="class-footer" style={{ "--stars-image": `url(${STAR_IMAGE_URL})` } as CSSProperties}><img src={LOGO_URL} alt="Logo elight.universe" /><strong>XII-H || MANSA</strong><span>Part of: @man1nganjuk</span><a href="#top"><ArrowUpRight /></a></footer>

      {selectedCard && <div className="profile-layer" role="dialog" aria-modal="true" aria-labelledby="profile-layer-title" onClick={() => setSelectedCard(null)}><div className="profile-panel" onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" aria-label="Tutup" onClick={() => setSelectedCard(null)}>×</button><p className="eyebrow"><OrbitMark /> XII-H</p><h2 id="profile-layer-title">{selectedCard}</h2><span className="profile-empty">Data menyusul</span></div></div>}
    </div>
  );
}
