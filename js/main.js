document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Render "Deliverables" section (Professional English).
    const deliverables = Array.isArray(window.PORTFOLIO_DELIVERABLES) ? window.PORTFOLIO_DELIVERABLES : [];
    const deliverablesList = document.getElementById('deliverables-list');
    const deliverablesEmpty = document.getElementById('deliverables-empty');

    if (deliverablesList && deliverables.length) {
        deliverablesList.innerHTML = deliverables.map((item) => {
            const tags = Array.isArray(item.tags) ? item.tags : [];
            const safeTitle = item.title || 'Untitled';
            const safeType = item.type || 'Deliverable';
            const safeDate = item.date || '';
            const safeSummary = item.summary || '';
            const href = item.href || '';

            const tagsHtml = tags.slice(0, 6).map((t) => (
                `<span class="text-xs text-slate-500 border border-slate-700 px-2 py-1 rounded">${t}</span>`
            )).join('');

            const buttonHtml = href
                ? `<a href="${href}" target="_blank" rel="noopener"
                        class="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-colors">
                        <i class="fa-solid fa-file-pdf"></i> Open PDF
                   </a>`
                : `<span class="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 font-bold rounded-lg">
                        <i class="fa-solid fa-hourglass-half"></i> Planned
                   </span>`;

            return `
                <article class="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-teal-500/60 transition-colors">
                    <div class="flex items-start justify-between gap-4">
                        <div>
                            <div class="text-xs text-slate-500">${safeType}${safeDate ? ` • ${safeDate}` : ''}</div>
                            <h3 class="text-xl font-bold mt-2">${safeTitle}</h3>
                        </div>
                        <div class="shrink-0">${buttonHtml}</div>
                    </div>
                    <p class="text-slate-400 text-sm mt-3">${safeSummary}</p>
                    <div class="flex flex-wrap gap-2 mt-4">${tagsHtml}</div>
                </article>
            `;
        }).join('');
    } else if (deliverablesEmpty) {
        deliverablesEmpty.classList.remove('hidden');
    }

    // Typewriter Effect
    const texts = [
        "Systems Administration",
        "Identity & Access (Lab)",
        "Cybersecurity Fundamentals",
        "Technical Documentation",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const waitSpeed = 2000;
    const typeTarget = document.querySelector('.typewriter');

    function type() {
        if (!typeTarget) return;

        const currentText = texts[textIndex];

        if (isDeleting) {
            typeTarget.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeTarget.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeDelay = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            typeDelay = waitSpeed;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(type, typeDelay);
    }

    // Start Typewriter
    type();

    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    // Contact form: static site fallback (no backend).
    // This opens a pre-filled email in the user's default mail client.
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = (document.getElementById('name')?.value || '').trim();
            const email = (document.getElementById('email')?.value || '').trim();
            const subject = (document.getElementById('subject')?.value || 'Portfolio contact').trim();
            const message = (document.getElementById('message')?.value || '').trim();

            const to = form.getAttribute('data-to') || 'rafa.ortiz@example.student.dev';
            const bodyLines = [
                `Name: ${name || '-'}`,
                `Email: ${email || '-'}`,
                '',
                message || '(no message)',
            ];

            const href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\\n'))}`;
            window.location.href = href;
        });
    }
});
