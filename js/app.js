// CodeSnippets Pro - Fully Interactive & Automatically Animated Application Engine
document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. AUTOMATIC LIVE PRODUCT DEMO SIMULATOR ("See what a snippet can do...")
  // =========================================================================
  const phpToggle = document.getElementById('toggle-php');
  const htmlToggle = document.getElementById('toggle-html');
  const cssToggle = document.getElementById('toggle-css');
  const jsToggle = document.getElementById('toggle-js');

  const saleBadge = document.getElementById('demo-sale-badge');
  const originalPrice = document.getElementById('demo-original-price');
  const discountedPrice = document.getElementById('demo-discounted-price');
  const productImageContainer = document.getElementById('demo-img-container');
  const thanksBanner = document.getElementById('demo-thanks-banner');
  const demoSection = document.getElementById('interactive-demo');

  let userInteractedWithDemo = false;
  let demoResumeTimer = null;

  function updateDemoUI(type, isActive) {
    if (type === 'php' && saleBadge && phpToggle) {
      phpToggle.checked = isActive;
      if (isActive) saleBadge.classList.add('active');
      else saleBadge.classList.remove('active');
    }
    if (type === 'html' && originalPrice && discountedPrice && htmlToggle) {
      htmlToggle.checked = isActive;
      if (isActive) {
        originalPrice.classList.add('strikethrough');
        discountedPrice.classList.add('active');
      } else {
        originalPrice.classList.remove('strikethrough');
        discountedPrice.classList.remove('active');
      }
    }
    if (type === 'css' && productImageContainer && cssToggle) {
      cssToggle.checked = isActive;
      if (isActive) productImageContainer.classList.add('pop-bg');
      else productImageContainer.classList.remove('pop-bg');
    }
    if (type === 'js' && thanksBanner && jsToggle) {
      jsToggle.checked = isActive;
      if (isActive) thanksBanner.classList.add('active');
      else thanksBanner.classList.remove('active');
    }
  }

  // Manual event handlers
  if (phpToggle) {
    phpToggle.addEventListener('change', (e) => {
      userInteractedWithDemo = true;
      updateDemoUI('php', e.target.checked);
      scheduleDemoResume();
    });
  }
  if (htmlToggle) {
    htmlToggle.addEventListener('change', (e) => {
      userInteractedWithDemo = true;
      updateDemoUI('html', e.target.checked);
      scheduleDemoResume();
    });
  }
  if (cssToggle) {
    cssToggle.addEventListener('change', (e) => {
      userInteractedWithDemo = true;
      updateDemoUI('css', e.target.checked);
      scheduleDemoResume();
    });
  }
  if (jsToggle) {
    jsToggle.addEventListener('change', (e) => {
      userInteractedWithDemo = true;
      updateDemoUI('js', e.target.checked);
      scheduleDemoResume();
    });
  }

  function scheduleDemoResume() {
    clearTimeout(demoResumeTimer);
    demoResumeTimer = setTimeout(() => {
      userInteractedWithDemo = false;
    }, 7000);
  }

  // Automatic Step-by-Step Simulation Loop
  const demoSteps = ['php', 'html', 'css', 'js'];
  let currentDemoStepIndex = 0;
  let demoStateOn = true;

  setInterval(() => {
    if (userInteractedWithDemo || !phpToggle) return;

    if (demoStateOn) {
      const type = demoSteps[currentDemoStepIndex];
      updateDemoUI(type, true);
      currentDemoStepIndex++;

      if (currentDemoStepIndex >= demoSteps.length) {
        demoStateOn = false;
        currentDemoStepIndex = 0;
      }
    } else {
      // Pause then smoothly reset for loop
      demoSteps.forEach(t => updateDemoUI(t, false));
      demoStateOn = true;
      currentDemoStepIndex = 0;
    }
  }, 2200);

  // =========================================================================
  // 2. AUTOMATIC CODE PLAYGROUND TAB SWITCHER & SYNTAX DISPLAY
  // =========================================================================
  const codeTabs = document.querySelectorAll('.code-tab-btn');
  const codeBody = document.getElementById('code-display-body');
  const codeTitle = document.getElementById('code-display-title');
  const codeBox = document.querySelector('.code-types-box');

  const codeSnippets = {
    php: {
      title: 'functions.php Replacement Snippet',
      code: `<span class="code-comment">// Prevent direct script access</span>
<span class="code-keyword">if</span> (!<span class="code-function">defined</span>(<span class="code-string">'ABSPATH'</span>)) <span class="code-keyword">exit</span>;

<span class="code-comment">// Add Custom Admin Dashboard Footer Note</span>
<span class="code-function">add_filter</span>(<span class="code-string">'admin_footer_text'</span>, <span class="code-keyword">function</span>() {
    <span class="code-keyword">return</span> <span class="code-string">'&lt;span id="footer-thankyou"&gt;Managed with &lt;strong&gt;Code Snippets Pro&lt;/strong&gt;&lt;/span&gt;'</span>;
});`
    },
    html: {
      title: 'Content & Shortcode Snippet',
      code: `<span class="code-comment">&lt;!-- Global Announcement Banner Shortcode --&gt;</span>
&lt;<span class="code-keyword">div</span> <span class="code-function">class</span>=<span class="code-string">"site-announcement-bar"</span>&gt;
    &lt;<span class="code-keyword">p</span>&gt;🎉 &lt;<span class="code-keyword">strong</span>&gt;Pro Feature Release:&lt;/<span class="code-keyword">strong</span>&gt; Cloud Sync 2.0 is now live! 
       &lt;<span class="code-keyword">a</span> <span class="code-function">href</span>=<span class="code-string">"/pricing"</span>&gt;Upgrade Today &amp;rarr;&lt;/<span class="code-keyword">a</span>&gt;
    &lt;/<span class="code-keyword">p</span>&gt;
&lt;/<span class="code-keyword">div</span>&gt;`
    },
    css: {
      title: 'Global Custom Stylesheet Snippet',
      code: `<span class="code-comment">/* Custom Site Theme Overrides */</span>
<span class="code-function">.btn-primary</span> {
    <span class="code-variable">background-color</span>: <span class="code-string">#0284c7</span> !important;
    <span class="code-variable">border-radius</span>: <span class="code-string">9999px</span>;
    <span class="code-variable">transition</span>: <span class="code-string">all 0.2s ease</span>;
}`
    },
    js: {
      title: 'Frontend Interactive Script',
      code: `<span class="code-comment">// Track CTA Clicks & Trigger Micro-interactions</span>
document.<span class="code-function">addEventListener</span>(<span class="code-string">'DOMContentLoaded'</span>, () => {
    <span class="code-keyword">const</span> ctaBtn = document.<span class="code-function">querySelector</span>(<span class="code-string">'.hero-cta'</span>);
    ctaBtn?.<span class="code-function">addEventListener</span>(<span class="code-string">'click'</span>, (e) => {
        console.<span class="code-function">log</span>(<span class="code-string">'[CodeSnippets Analytics] Hero CTA engaged'</span>);
    });
});`
    },
    conditions: {
      title: 'Conditional Execution Logic Rules',
      code: `<span class="code-comment">// Run Snippet Only on WooCommerce Checkout & Admin Role</span>
<span class="code-keyword">if</span> (<span class="code-function">is_checkout</span>() && <span class="code-function">current_user_can</span>(<span class="code-string">'administrator'</span>)) {
    <span class="code-function">add_action</span>(<span class="code-string">'woocommerce_before_checkout_form'</span>, <span class="code-keyword">function</span>() {
        <span class="code-function">wc_print_notice</span>(<span class="code-string">'Developer Testing Mode Active'</span>, <span class="code-string">'notice'</span>);
    });
}`
    }
  };

  let userInteractedWithTabs = false;
  let activeTabIdx = 0;
  const tabKeys = ['php', 'html', 'css', 'js', 'conditions'];

  function activateTabByIndex(idx) {
    if (!codeTabs.length || !codeBody || !codeTitle) return;
    codeTabs.forEach(t => t.classList.remove('active'));
    const tabEl = codeTabs[idx];
    if (tabEl) {
      tabEl.classList.add('active');
      const type = tabEl.dataset.type;
      if (codeSnippets[type]) {
        codeTitle.textContent = codeSnippets[type].title;
        codeBody.innerHTML = `<code>${codeSnippets[type].code}</code>`;
      }
    }
  }

  codeTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      userInteractedWithTabs = true;
      activeTabIdx = index;
      activateTabByIndex(index);
      setTimeout(() => { userInteractedWithTabs = false; }, 8000);
    });
  });

  if (codeBox) {
    codeBox.addEventListener('mouseenter', () => { userInteractedWithTabs = true; });
    codeBox.addEventListener('mouseleave', () => { userInteractedWithTabs = false; });
  }

  setInterval(() => {
    if (userInteractedWithTabs || !codeTabs.length) return;
    activeTabIdx = (activeTabIdx + 1) % tabKeys.length;
    activateTabByIndex(activeTabIdx);
  }, 4000);

  // =========================================================================
  // 3. AUTOMATIC AI CODE GENERATOR TYPING SIMULATION
  // =========================================================================
  const aiPromptBox = document.querySelector('.ai-floating-input-box');
  const aiMockLines = document.querySelectorAll('.mock-line');

  const samplePrompts = [
    'Create a Custom Post Type for Recipes & Menus',
    'Add Stripe Webhook Listener & Email Notification',
    'Disable XML-RPC & Block Brute Force Login Attacks',
    'Generate WooCommerce 15% VIP Checkout Discount'
  ];

  let promptIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeAiPrompt() {
    if (!aiPromptBox) return;

    const currentPrompt = samplePrompts[promptIndex];
    
    if (!isDeleting) {
      aiPromptBox.innerHTML = `${currentPrompt.substring(0, charIndex + 1)}<span class="ai-typing-text"></span>`;
      charIndex++;

      if (charIndex === currentPrompt.length) {
        isDeleting = true;
        // Trigger simulated code line pulsing
        aiMockLines.forEach(l => l.classList.add('animated-code'));
        setTimeout(typeAiPrompt, 2400);
        return;
      }
    } else {
      aiPromptBox.innerHTML = `${currentPrompt.substring(0, charIndex - 1)}<span class="ai-typing-text"></span>`;
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        promptIndex = (promptIndex + 1) % samplePrompts.length;
        aiMockLines.forEach(l => l.classList.remove('animated-code'));
        setTimeout(typeAiPrompt, 500);
        return;
      }
    }

    const typingSpeed = isDeleting ? 30 : 55;
    setTimeout(typeAiPrompt, typingSpeed);
  }

  if (aiPromptBox) {
    setTimeout(typeAiPrompt, 1000);
  }

  // =========================================================================
  // 4. AUTOMATIC SNIPPET CONDITIONS SCANNER BEAM
  // =========================================================================
  const conditionRuleRows = document.querySelectorAll('.condition-rule-row');
  let scannedRowIdx = 0;

  if (conditionRuleRows.length) {
    setInterval(() => {
      conditionRuleRows.forEach(row => row.classList.remove('rule-scanned'));
      if (conditionRuleRows[scannedRowIdx]) {
        conditionRuleRows[scannedRowIdx].classList.add('rule-scanned');
      }
      scannedRowIdx = (scannedRowIdx + 1) % conditionRuleRows.length;
    }, 2500);
  }

  // =========================================================================
  // 5. COPY CODE BUTTON
  // =========================================================================
  const copyBtn = document.getElementById('btn-copy-snippet');
  if (copyBtn && codeBody) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = codeBody.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const origText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#16a34a';
        setTimeout(() => {
          copyBtn.textContent = origText;
          copyBtn.style.background = '#334155';
        }, 2000);
      });
    });
  }

  // =========================================================================
  // 6. MOBILE MENU TOGGLE
  // =========================================================================
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu-list');

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = '#ffffff';
        navMenu.style.padding = '1.5rem';
        navMenu.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      }
    });
  }

  // =========================================================================
  // 7. SMOOTH SCROLLING FOR ON-PAGE ANCHORS
  // =========================================================================
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (navMenu && window.innerWidth <= 768) {
            navMenu.style.display = 'none';
          }
        }
      }
    });
  });

  // =========================================================================
  // 8. PRICING PAGE: DYNAMIC YEARLY TIER SELECTOR
  // =========================================================================
  const yearlySiteDropdown = document.getElementById('yearly-site-dropdown');
  const yearlyPriceDisplay = document.getElementById('yearly-price-display');

  if (yearlySiteDropdown && yearlyPriceDisplay) {
    yearlySiteDropdown.addEventListener('change', (e) => {
      const selectedVal = e.target.value;
      yearlyPriceDisplay.textContent = `$${selectedVal}.00`;
    });
  }

  // =========================================================================
  // 9. FLOATING HELP BUTTON & MODAL
  // =========================================================================
  const helpBtn = document.getElementById('floating-help-btn');
  const helpPopup = document.getElementById('help-popup');
  const helpCloseBtn = document.getElementById('help-close-btn');

  if (helpBtn && helpPopup) {
    helpBtn.addEventListener('click', () => {
      helpPopup.classList.toggle('open');
    });
  }

  if (helpCloseBtn && helpPopup) {
    helpCloseBtn.addEventListener('click', () => {
      helpPopup.classList.remove('open');
    });
  }

  // =========================================================================
  // 10. SCROLL REVEAL & STAGGER ANIMATIONS (OBSERVER)
  // =========================================================================
  const animatableSelectors = [
    '.hero-left-content',
    '.hero-right-visual',
    '.demo-controls-card',
    '.demo-preview-card',
    '.ai-left-content',
    '.ai-visual-wrapper',
    '.reduce-visual-col',
    '.reduce-right-content',
    '.conditions-left-content',
    '.conditions-visual-col',
    '.why-use-card',
    '.code-types-box',
    '.showcase-row',
    '.pricing-table-wrapper',
    '.docs-card',
    '.faq-item',
    '.final-cta-content',
    '.tier-card-item',
    '.simple-plan-card',
    '.plan-card-main'
  ];

  const elementsToAnimate = document.querySelectorAll(animatableSelectors.join(', '));
  
  elementsToAnimate.forEach((el) => {
    el.classList.add('reveal-on-scroll');
    if (el.classList.contains('why-use-card') || el.classList.contains('docs-card') || el.classList.contains('tier-card-item') || el.classList.contains('simple-plan-card')) {
      const siblingIndex = Array.from(el.parentElement.children).indexOf(el);
      el.classList.add(`stagger-${(siblingIndex % 4) + 1}`);
    }
  });

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });

});
