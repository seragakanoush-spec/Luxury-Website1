/* --- CORE VARIABLES & RESET --- */
:root {
    --bg: #000000;
    --glass: rgba(28, 28, 30, 0.65);
    --border: rgba(255, 255, 255, 0.08);
    --text-main: #f5f5f7;
    --text-dim: #86868b;
    --accent: #2997ff;
    --success: #32d74b;
}

* { margin: 0; padding: 0; box-sizing: border-box; cursor: none; }
html { scroll-behavior: smooth; }
body {
    background-color: var(--bg); color: var(--text-main);
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased; overflow-x: hidden;
}

/* --- CUSTOM CURSOR --- */
.cursor-dot {
    position: fixed; top: 0; left: 0; width: 8px; height: 8px;
    background-color: var(--text-main); border-radius: 50%;
    pointer-events: none; z-index: 9999; transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s, background-color 0.3s;
}
.cursor-outline {
    position: fixed; top: 0; left: 0; width: 40px; height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 50%;
    pointer-events: none; z-index: 9998; transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s, border-color 0.3s;
}

/* --- NAVIGATION --- */
header {
    position: fixed; top: 0; width: 100%; height: 54px;
    background: var(--glass); backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border-bottom: 0.5px solid var(--border); z-index: 100;
    display: flex; align-items: center; justify-content: center;
}

.nav-inner {
    width: 90%; max-width: 1400px; display: flex;
    justify-content: space-between; align-items: center; font-size: 13px; letter-spacing: 0.5px;
}

.nav-brand { flex: 1; font-weight: 700; letter-spacing: 1px; }
.nav-links { flex: 1; display: flex; gap: 30px; justify-content: center; color: var(--text-dim); }
.nav-socials { flex: 1; display: flex; gap: 20px; justify-content: flex-end; align-items: center; }

.nav-inner span { transition: color 0.3s; color: var(--text-dim); }
.nav-inner span:hover { color: var(--text-main); }

/* Social Icons */
.social-icon {
    color: var(--text-dim); display: flex; align-items: center; justify-content: center;
    transition: color 0.3s, transform 0.3s;
}
.social-icon:hover { color: var(--text-main); transform: scale(1.1); }
.social-icon svg { width: 18px; height: 18px; fill: currentColor; }

/* --- HERO SECTION --- */
.hero {
    min-height: 90vh; display: flex; flex-direction: column;
    justify-content: center; align-items: center; text-align: center;
    padding: 100px 20px 0; background: radial-gradient(circle at 50% 30%, #1c1c1e 0%, #000 70%);
}
.hero h1 {
    font-size: clamp(40px, 8vw, 100px); font-weight: 600; letter-spacing: -0.04em;
    line-height: 1.05; margin-bottom: 24px;
    background: linear-gradient(180deg, #fff 0%, #86868b 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.manifesto {
    max-width: 650px; color: var(--text-dim); font-size: clamp(18px, 2vw, 24px);
    line-height: 1.5; font-weight: 400; margin-bottom: 40px;
}
.manifesto span { color: var(--text-main); }

/* --- BENTO GRID PORTFOLIO --- */
.container { max-width: 1400px; margin: 0 auto; padding: 40px 20px 50px; }
.grid {
    display: grid; grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 400px; gap: 24px;
}
.bento-item {
    background: var(--glass); border: 1px solid var(--border);
    border-radius: 32px; overflow: hidden; position: relative;
}
.item-1 { grid-column: span 8; grid-row: span 2; }
.item-2 { grid-column: span 4; grid-row: span 1; }
.item-3 { grid-column: span 4; grid-row: span 1; }
.bento-item img {
    width: 100%; height: 100%; object-fit: cover; opacity: 0.6;
    transition: opacity 0.8s ease, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.bento-item:hover img { opacity: 1; transform: scale(1.03); }
.label { position: absolute; bottom: 40px; left: 40px; z-index: 2; pointer-events: none; }
.label h2 { font-size: 28px; font-weight: 500; margin-bottom: 4px; }
.label p { color: var(--text-dim); font-size: 15px; letter-spacing: 0.5px; }
.view-btn {
    position: absolute; top: 40px; right: 40px;
    background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);
    padding: 10px 20px; border-radius: 20px; font-size: 13px; font-weight: 500;
    opacity: 0; transform: translateY(-10px); transition: all 0.4s ease;
    pointer-events: none;
}
.bento-item:hover .view-btn { opacity: 1; transform: translateY(0); }

/* --- DEDICATED SERVICES SECTION --- */
.services-wrapper { padding: 100px 20px; max-width: 1400px; margin: 0 auto; }
.services-header { text-align: center; margin-bottom: 60px; }
.services-header h2 { font-size: clamp(32px, 5vw, 48px); font-weight: 600; letter-spacing: -0.02em; }
.service-list { display: flex; flex-direction: column; gap: 24px; }
.service-card {
    background: var(--glass); border: 1px solid var(--border);
    border-radius: 32px; padding: 40px; backdrop-filter: blur(20px);
    transition: transform 0.4s ease, background 0.4s ease;
    display: flex; flex-direction: column; justify-content: center;
}
.service-card:hover { 
    transform: translateY(-5px); background: rgba(40, 40, 45, 0.8); border-color: rgba(255, 255, 255, 0.2);
}
.service-icon {
    width: 48px; height: 48px; border-radius: 12px; background: rgba(255,255,255,0.05);
    display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
    border: 1px solid var(--border);
}
.service-card h3 { font-size: 24px; font-weight: 500; color: var(--text-main); margin-bottom: 12px; }
.service-card p { font-size: 15px; color: var(--text-dim); line-height: 1.6; }

@media (min-width: 768px) {
    .service-list { flex-direction: row; }
    .service-card { flex: 1; }
}

/* --- CONTACT FOOTER --- */
footer {
    padding: 100px 20px 40px; max-width: 1400px; margin: 0 auto;
    display: flex; flex-direction: column; align-items: center; text-align: center;
}
footer h2 { font-size: 40px; font-weight: 600; margin-bottom: 50px; letter-spacing: -0.02em; }
.contact-grid {
    display: flex; gap: 80px; justify-content: center; flex-wrap: wrap; width: 100%;
}
.contact-item { cursor: none; padding: 20px; border-radius: 20px; transition: background 0.3s; }
.contact-item:hover { background: rgba(255, 255, 255, 0.03); }
.contact-item h3 { font-size: 14px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
.contact-link { color: var(--text-main); font-size: 24px; font-weight: 500; transition: color 0.3s; display: inline-block; margin-top: 5px; }
.contact-item:hover .contact-link { color: var(--accent); }

.footer-bottom {
    width: 100%; display: flex; justify-content: space-between; align-items: center;
    margin-top: 80px; padding-top: 30px; border-top: 1px solid var(--border);
}
.copyright { font-size: 13px; color: var(--text-dim); }
.footer-socials { display: flex; gap: 24px; align-items: center; }
.footer-socials .social-icon svg { width: 22px; height: 22px; }

/* --- FULLSCREEN 3D PROJECT VIEWER --- */
.project-modal {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: var(--bg); z-index: 3000; overflow-y: auto;
    transform: translateY(100%); transition: transform 0.7s cubic-bezier(0.32, 0.72, 0, 1);
    will-change: transform; display: flex; flex-direction: column; align-items: center;
}
.project-modal.active { transform: translateY(0); }
.close-project {
    position: fixed; top: 30px; right: 40px;
    background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);
    padding: 12px 24px; border-radius: 30px; font-size: 14px; font-weight: 500;
    z-index: 3001; transition: background 0.3s;
}
.close-project:hover { background: rgba(255,255,255,0.2); }
.project-content {
    width: 100%; max-width: 1400px; padding: 100px 20px 50px; display: flex; flex-direction: column; gap: 40px;
}
.project-header h1 { font-size: clamp(40px, 6vw, 80px); font-weight: 600; letter-spacing: -0.02em; }
.project-header p { color: var(--text-dim); font-size: 18px; margin-top: 10px; }
.canvas-3d-container {
    width: 100%; aspect-ratio: 16 / 9; background: #0a0a0c; border: 1px solid var(--border); border-radius: 32px;
    display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative; overflow: hidden; box-shadow: inset 0 0 100px rgba(255,255,255,0.02);
}
.canvas-3d-container iframe {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; opacity: 0; border-radius: 32px; transition: opacity 0.8s ease; z-index: 10;
}
.canvas-3d-container.loaded iframe { opacity: 1; }
.loader {
    width: 40px; height: 40px; border: 3px solid rgba(255,255,255,0.1); border-radius: 50%; border-top-color: var(--text-main);
    animation: spin 1s ease-in-out infinite; position: absolute; z-index: 5;
}
@keyframes spin { to { transform: rotate(360deg); } }
.project-brief { max-width: 800px; margin: 0 auto; font-size: 18px; line-height: 1.6; color: var(--text-main); text-align: center; }

/* --- DYNAMIC CONTACT MODAL --- */
.modal-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(15px); z-index: 4000;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none; transition: opacity 0.4s ease;
}
.modal-overlay.active { opacity: 1; pointer-events: auto; }
.modal-window {
    width: 90%; max-width: 550px; background: rgba(30, 30, 32, 0.85);
    backdrop-filter: blur(40px) saturate(200%); border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 24px; padding: 40px; transform: translateY(20px) scale(0.95);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 25px 50px rgba(0,0,0,0.5); max-height: 90vh; overflow-y: auto;
}
.modal-overlay.active .modal-window { transform: translateY(0) scale(1); }
.modal-window h3 { font-size: 24px; margin-bottom: 8px; }
.close-btn { position: absolute; top: 20px; right: 24px; font-size: 20px; color: var(--text-dim); }

input[type="text"], input[type="email"], input[type="tel"], textarea, .custom-select {
    width: 100%; background: rgba(0,0,0,0.3); border: 1px solid var(--border); color: white; padding: 16px; border-radius: 12px; margin-bottom: 16px; font-family: inherit; font-size: 14px; outline: none;
}
textarea { resize: vertical; }
.custom-select { appearance: none; }
input:focus, textarea:focus, .custom-select:focus { border-color: var(--accent); }
.submit-btn { width: 100%; background: var(--text-main); color: var(--bg); border: none; padding: 16px; border-radius: 12px; font-size: 15px; font-weight: 600; }
.submit-btn:disabled { opacity: 0.7; pointer-events: none; }
.success-msg { color: var(--success); }
.error-msg { color: #ff3b30; }

/* --- SCROLL REVEAL --- */
.reveal { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal.active { opacity: 1; transform: translateY(0); }

@media (max-width: 768px) {
    .grid { grid-template-columns: 1fr; grid-auto-rows: 400px; }
    .item-1, .item-2, .item-3 { grid-column: span 1; }
    * { cursor: auto; } .cursor-dot, .cursor-outline { display: none; }
    .nav-socials { display: none; } 
    .contact-grid { gap: 40px; flex-direction: column; }
    .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
}
