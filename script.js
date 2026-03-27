// --- Custom Cursor Logic ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener('mousemove', function(e) {
        cursorDot.style.left = `${e.clientX}px`; 
        cursorDot.style.top = `${e.clientY}px`;
        cursorOutline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" });
    });

    // Target elements that should trigger the cursor outline to grow
    document.querySelectorAll('.hover-target, input, button, .service-card').forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px'; 
            cursorOutline.style.height = '60px';
            cursorOutline.style.borderColor = 'var(--text-main)'; 
            cursorOutline.style.background = 'rgba(255,255,255,0.05)';
        });
        target.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px'; 
            cursorOutline.style.height = '40px';
            cursorOutline.style.borderColor = 'rgba(255, 255, 255, 0.5)'; 
            cursorOutline.style.background = 'transparent';
        });
    });
}

// --- Scroll Animations ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { 
        if (entry.isIntersecting) entry.target.classList.add('active'); 
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// --- Inquiry Modal Logic ---
function toggleModal(id) { 
    document.getElementById(id).classList.toggle('active'); 
}

// --- High Performance 3D Viewer Logic ---
const projectData = {
    'obsidian': {
        title: 'The Obsidian Tower', 
        location: 'New Cairo District — Corporate Headquarters',
        desc: 'A brutalist approach to modern corporate architecture. The monolithic structure uses advanced glass technologies to regulate internal temperatures while maintaining a striking silhouette against the Cairo skyline.',
        modelUrl: 'https://my.spline.design/obsidian-tower-example/' 
    },
    'desert': {
        title: 'Desert Pavilion', 
        location: 'Riyadh — Private Residence',
        desc: 'Designed to harmonize with the harsh, beautiful landscape of the Saudi desert. Utilizing raw concrete and shaded breezeways to naturally cool the interior spaces.',
        modelUrl: 'https://my.spline.design/desert-pavilion-example/'
    },
    'lumina': {
        title: 'Lumina Space', 
        location: 'Dubai — Tech Hub',
        desc: 'A fluid, open-concept workspace designed for a leading AI firm. The interior avoids sharp corners, opting for sweeping curves that guide foot traffic naturally.',
        modelUrl: 'https://my.spline.design/lumina-space-example/'
    }
};

function openProject(id) {
    const data = projectData[id];
    const container = document.getElementById('model-container');
    
    document.getElementById('proj-title').innerHTML = data.title;
    document.getElementById('proj-location').innerHTML = data.location;
    document.getElementById('proj-desc').innerHTML = data.desc;
    
    container.classList.remove('loaded');
    container.innerHTML = '<div class="loader"></div>';
    
    document.body.style.overflow = 'hidden';
    document.getElementById('projectViewer').classList.add('active');

    setTimeout(() => {
        const iframe = document.createElement('iframe');
        iframe.src = data.modelUrl;
        iframe.onload = () => { container.classList.add('loaded'); };
        container.appendChild(iframe);
    }, 300); 
}

function closeProject() {
    document.body.style.overflow = 'auto';
    document.getElementById('projectViewer').classList.remove('active');
    
    setTimeout(() => {
        document.getElementById('model-container').innerHTML = '';
    }, 700);
}
