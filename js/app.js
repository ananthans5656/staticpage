// CodeSnippets Pro - Interactive Application JavaScript
document.addEventListener('DOMContentLoaded', () => {

  // 1. INTERACTIVE DEMO ("See what a snippet can do...")
  const phpToggle = document.getElementById('toggle-php');
  const htmlToggle = document.getElementById('toggle-html');
  const cssToggle = document.getElementById('toggle-css');

  const saleBadge = document.getElementById('demo-sale-badge');
  const originalPrice = document.getElementById('demo-original-price');
  const discountedPrice = document.getElementById('demo-discounted-price');
  const productImageContainer = document.getElementById('demo-img-container');

  if (phpToggle && saleBadge) {
    phpToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        saleBadge.classList.add('active');
      } else {
        saleBadge.classList.remove('active');
      }
    });
  }

  if (htmlToggle && originalPrice && discountedPrice) {
    htmlToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        originalPrice.classList.add('strikethrough');
        discountedPrice.classList.add('active');
      } else {
        originalPrice.classList.remove('strikethrough');
        discountedPrice.classList.remove('active');
      }
    });
  }

  if (cssToggle && productImageContainer) {
    cssToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        productImageContainer.classList.add('pop-bg');
      } else {
        productImageContainer.classList.remove('pop-bg');
      }
    });
  }

  // 2. CODE SNIPPET TYPES TAB SWITCHER
  const codeTabs = document.querySelectorAll('.code-tab-btn');
  const codeBody = document.getElementById('code-display-body');
  const codeTitle = document.getElementById('code-display-title');

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
    <span class="code-variable">background</span>: <span class="code-string">linear-gradient(135deg, #00a79d, #14b8a6)</span> !important;
    <span class="code-variable">border-radius</span>: <span class="code-string">9999px</span>;
    <span class="code-variable">box-shadow</span>: <span class="code-string">0 4px 14px rgba(0, 167, 157, 0.35)</span>;
    <span class="code-variable">transition</span>: <span class="code-string">all 0.3s cubic-bezier(0.4, 0, 0.2, 1)</span>;
}`
    },
    js: {
      title: 'Frontend Interactive Script',
      code: `<span class="code-comment">// Track CTA Clicks & Trigger Micro-animations</span>
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

  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      codeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const type = tab.dataset.type;
      if (codeSnippets[type]) {
        codeTitle.textContent = codeSnippets[type].title;
        codeBody.innerHTML = codeSnippets[type].code;
      }
    });
  });

  // 3. COPY CODE BUTTON
  const copyBtn = document.getElementById('btn-copy-snippet');
  if (copyBtn) {
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

  // 4. AI CODE GENERATOR SIMULATOR
  const aiInput = document.getElementById('ai-prompt-input');
  const aiGenerateBtn = document.getElementById('btn-ai-generate');
  const aiOutput = document.getElementById('ai-output-code');
  const quickPrompts = document.querySelectorAll('.prompt-pill');

  const aiTemplates = {
    cpt: `add_action('init', function() {
    register_post_type('recipe', [
        'labels' => ['name' => __('Recipes'), 'singular_name' => __('Recipe')],
        'public' => true,
        'has_archive' => true,
        'supports' => ['title', 'editor', 'thumbnail'],
        'menu_icon' => 'dashicons-food'
    ]);
});`,
    gutenberg: `// Disable Gutenberg Block Editor for Posts
add_filter('use_block_editor_for_post', '__return_false', 10);`,
    cart: `// Apply 10% Discount if Cart Total Exceeds $100
add_action('woocommerce_cart_calculate_fees', function($cart) {
    if (is_admin() && !defined('DOING_AJAX')) return;
    if ($cart->subtotal > 100) {
        $discount = $cart->subtotal * 0.10;
        $cart->add_fee(__('10% Bulk Saver Discount'), -$discount);
    }
});`,
    svg: `// Allow SVG Uploads in WordPress Media Library
add_filter('upload_mimes', function($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
});`
  };

  function simulateTyping(text) {
    aiOutput.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        aiOutput.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 12);
  }

  if (aiGenerateBtn && aiInput && aiOutput) {
    aiGenerateBtn.addEventListener('click', () => {
      const promptText = aiInput.value.toLowerCase();
      let response = aiTemplates.cpt;
      
      if (promptText.includes('gutenberg') || promptText.includes('editor')) {
        response = aiTemplates.gutenberg;
      } else if (promptText.includes('cart') || promptText.includes('discount') || promptText.includes('woocommerce')) {
        response = aiTemplates.cart;
      } else if (promptText.includes('svg') || promptText.includes('upload') || promptText.includes('media')) {
        response = aiTemplates.svg;
      }

      simulateTyping(response);
    });
  }

  quickPrompts.forEach(pill => {
    pill.addEventListener('click', () => {
      aiInput.value = pill.textContent;
      const key = pill.dataset.key;
      if (aiTemplates[key]) {
        simulateTyping(aiTemplates[key]);
      }
    });
  });

  // 5. MOBILE MENU TOGGLE
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

  // 6. SMOOTH SCROLLING FOR ALL INTERNAL LINKS
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

});
