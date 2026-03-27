// --- Custom Cursor Logic ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener('mousemove', function(e) {
        cursorDot.style.left = `${e.clientX}px`; 
        cursorDot.style.top = `${e.clientY}px`;
        cursorOutline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" });
    });

    document.querySelectorAll('.hover-target, input, button, select, .service-card').forEach(target => {
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

// --- DYNAMIC CONTACT MODAL LOGIC ---
function openContactModal(type) {
    document.querySelectorAll('.dynamic-form').forEach(f => f.style.display = 'none');
    document.getElementById('formFeedback').style.display = 'none';
    
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDesc');

    if (type === 'general') {
        title.innerText = 'General Inquiry';
        desc.innerText = 'Have a question? Send us a message and our team will reply promptly.';
        document.getElementById('form-general').style.display = 'block';
    } else if (type === 'call') {
        title.innerText = 'Request a Call';
        desc.innerText = 'Leave your number and preferred time. Our Cairo team will reach out.';
        document.getElementById('form-call').style.display = 'block';
    } else if (type === 'project') {
        title.innerText = 'Start a Project';
        desc.innerText = 'Initiate your design process. Secure and confidential.';
        document.getElementById('form-project').style.display = 'block';
    }

    document.getElementById('dynamicModal').classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeContactModal() {
    document.getElementById('dynamicModal').classList.remove('active');
    document.body.style.overflow = 'auto'; 
}

// --- UNIVERSAL FORM SUBMISSION ---
async function handleFormSubmit(event, formType) {
    event.preventDefault(); 
    
    const form = event.target;
    const btn = form.querySelector('.submit-btn');
    const feedback = document.getElementById('formFeedback');
    
    const originalBtnText = btn.innerText;
    btn.innerText = 'Sending...';
    btn.disabled = true;
    feedback.style.display = 'none';

    const payload = { type: formType };
    form.querySelectorAll('input, textarea, select').forEach(input => {
        if(input.placeholder) payload[input.placeholder] = input.value;
        if(input.tagName === 'SELECT') payload['Preferred Time'] = input.value;
    });

    try {
        // REPLACE THIS URL WITH YOUR ACTUAL ENDPOINT (e.g., Formspree URL)
        // const response = await fetch('https://your-api-endpoint.com/submit', { ... });
        
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating network request
        const response = { ok: true }; 

        if (response.ok) {
            btn.innerText = 'Sent Successfully ✓';
            btn.style.background = 'var(--success)';
            btn.style.color = '#000';
            
            feedback.innerText = 'We received your request. Our team will contact you soon.';
            feedback.className = 'success-msg';
            feedback.style.display = 'block';
            
            form.reset(); 
            
            setTimeout(() => {
                closeContactModal();
                btn.innerText = originalBtnText;
                btn.style.background = 'var(--text-main)';
                btn.style.color = 'var(--bg)';
                btn.disabled = false;
            }, 3000);
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        console.error("Submission failed:", error);
        btn.innerText = originalBtnText;
        btn.disabled = false;
        
        feedback.innerText = 'Something went wrong. Please try again later.';
        feedback.className = 'error-msg';
        feedback.style.display = 'block';
    }
}
