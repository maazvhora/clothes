// 6 Curated Showcase Collections for the Hero Section
const heroPages = [
    {
        bannerImg: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        header: "EXPLORE SHIRTS",
        tagline: "LINEN | PRINTED | EMBROIDERED",
        shirts: [
            "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        bannerImg: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
        header: "EXPLORE T-SHIRTS",
        tagline: "OVERSIZED | SUPIMA | GRAPHIC TEES",
        shirts: [
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        bannerImg: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
        header: "EXPLORE SNEAKERS",
        tagline: "CHUNKY | HIGH-TOPS | RETRO RUNNERS",
        shirts: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        bannerImg: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
        header: "EXPLORE HOODIES & SWEATSHIRTS",
        tagline: "FLEECE | OVERSIZED | ZIP-UPS",
        shirts: [
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        bannerImg: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
        header: "EXPLORE JEANS & DENIMS",
        tagline: "BAGGY | CARGO | SLIM FIT",
        shirts: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        bannerImg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
        header: "EXPLORE CO-ORDS & CASUALS",
        tagline: "SUMMER SETS | RELAXED | TRENDING",
        shirts: [
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1620012253295-c15c429f66bf?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&q=80"
        ]
    }
];

let slideIndex = 0;
const dots = document.querySelectorAll('.dot');
const bannerImg = document.getElementById('banner-img');
const exploreHeader = document.getElementById('explore-header');
const taglineBanner = document.getElementById('tagline-banner');
const shirtImgs = document.querySelectorAll('.shirts-grid .shirt-card img');

function showSlide(index) {
    if (index >= heroPages.length) slideIndex = 0;
    else if (index < 0) slideIndex = heroPages.length - 1;
    else slideIndex = index;

    const page = heroPages[slideIndex];

    // Smooth transition effect
    if (bannerImg) bannerImg.style.opacity = '0';
    if (exploreHeader) exploreHeader.style.opacity = '0';
    if (taglineBanner) taglineBanner.style.opacity = '0';
    shirtImgs.forEach(img => (img.style.opacity = '0'));

    setTimeout(() => {
        if (bannerImg) {
            bannerImg.src = page.bannerImg;
            bannerImg.style.opacity = '1';
        }
        if (exploreHeader) {
            exploreHeader.textContent = page.header;
            exploreHeader.style.opacity = '1';
        }
        if (taglineBanner) {
            taglineBanner.textContent = page.tagline;
            taglineBanner.style.opacity = '1';
        }
        shirtImgs.forEach((img, i) => {
            if (page.shirts[i]) {
                img.src = page.shirts[i];
                img.style.opacity = '1';
            }
        });
    }, 180);

    // Update pagination dots
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add('active');
    }
}

function moveSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlide(slideIndex);
}

// Backward-compatibility alias
function moveShirtSlide(n) {
    moveSlide(n);
}

// Click & Drag / Swipe gesture on shirts section to advance/retreat pages
const shirtsContainer = document.querySelector('.shirts-grid');

if (shirtsContainer) {
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    const threshold = 40; // minimum dragged pixels to trigger page change

    const handleStart = (e) => {
        if (e.target.closest('.next-arrow') || e.target.closest('.prev-arrow')) return;
        isDragging = true;
        startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        startY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    };

    const handleEnd = (e) => {
        if (!isDragging) return;
        isDragging = false;

        const endX = e.type.includes('touch')
            ? (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : startX)
            : e.clientX;
        const endY = e.type.includes('touch')
            ? (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientY : startY)
            : e.clientY;

        const diffX = endX - startX;
        const diffY = endY - startY;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
            if (diffX < 0) {
                // Slid/dragged left -> next page
                moveSlide(1);
            } else {
                // Slid/dragged right -> previous page
                moveSlide(-1);
            }
        }
    };

    shirtsContainer.addEventListener('mousedown', handleStart);
    window.addEventListener('mouseup', handleEnd);

    shirtsContainer.addEventListener('touchstart', handleStart, { passive: true });
    shirtsContainer.addEventListener('touchend', handleEnd, { passive: true });
}


// NEW IN Banner Slider Logic (4 Showcase Banners)
const newInBanners = [
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Home_Page_HW.jpg?w=1500&dpr=2",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/NL_Home_page_banner.jpg?w=1500&dpr=2",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_banner_-_Venom_copy_2_b6wWk92.jpg?w=1500&dpr=2",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_Gqc0UOr.jpg?w=1500&dpr=2"
];

let newInIndex = 0;
const newInImg = document.getElementById('new-in-img');

function showNewInSlide(index) {
    if (index >= newInBanners.length) newInIndex = 0;
    else if (index < 0) newInIndex = newInBanners.length - 1;
    else newInIndex = index;

    if (newInImg) {
        newInImg.style.opacity = '0';
        setTimeout(() => {
            newInImg.src = newInBanners[newInIndex];
            newInImg.style.opacity = '1';
        }, 180);
    }
}

function moveNewInSlide(n) {
    newInIndex += n;
    showNewInSlide(newInIndex);
}

// Drag & Swipe gesture for NEW IN banner
const newInBanner = document.querySelector('.hotwheels-banner');
if (newInBanner) {
    let startX = 0;
    let isDragging = false;

    const onStart = (e) => {
        if (e.target.closest('.banner-arrow')) return;
        isDragging = true;
        startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    };

    const onEnd = (e) => {
        if (!isDragging) return;
        isDragging = false;
        const endX = e.type.includes('touch')
            ? (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : startX)
            : e.clientX;
        const diffX = endX - startX;
        if (Math.abs(diffX) > 40) {
            moveNewInSlide(diffX < 0 ? 1 : -1);
        }
    };

    newInBanner.addEventListener('mousedown', onStart);
    window.addEventListener('mouseup', onEnd);
    newInBanner.addEventListener('touchstart', onStart, { passive: true });
    newInBanner.addEventListener('touchend', onEnd, { passive: true });
}

// NEW ARRIVALS Carousel Scroll Logic
function slideArrivals(direction) {
    const wrapper = document.querySelector('.arrivals-track-wrapper');
    if (!wrapper) return;
    const card = wrapper.querySelector('.arrival-card');
    const scrollStep = card ? (card.offsetWidth + 16) * 2 : 600;
    wrapper.scrollBy({
        left: direction * scrollStep,
        behavior: 'smooth'
    });
}

// Mouse Drag & Touch swipe support for NEW ARRIVALS
const arrivalsWrapper = document.querySelector('.arrivals-track-wrapper');
if (arrivalsWrapper) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    arrivalsWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - arrivalsWrapper.offsetLeft;
        scrollLeft = arrivalsWrapper.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
        isDown = false;
    });

    arrivalsWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - arrivalsWrapper.offsetLeft;
        const walk = (x - startX) * 1.5;
        arrivalsWrapper.scrollLeft = scrollLeft - walk;
    });
}

// TRENDING SECTION: Category Filter Pills & Wishlist Logic
const filterPills = document.querySelectorAll('.filter-pill');
const trendingCards = document.querySelectorAll('.trending-card');

filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const selectedCategory = pill.getAttribute('data-category');
        trendingCards.forEach(card => {
            const cardCategories = card.getAttribute('data-categories') || '';
            if (selectedCategory === 'trending' || cardCategories.includes(selectedCategory)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ========================================================
// WISHLIST MANAGEMENT SYSTEM (LocalStorage + Sync + Drawer)
// ========================================================
let wishlist = [];

function loadWishlist() {
    try {
        const stored = localStorage.getItem('mstore_wishlist');
        wishlist = stored ? JSON.parse(stored) : [];
    } catch (e) {
        wishlist = [];
    }
    updateWishlistUI();
}

function saveWishlist() {
    try {
        localStorage.setItem('mstore_wishlist', JSON.stringify(wishlist));
    } catch (e) {
        console.error('Could not save to localStorage', e);
    }
    updateWishlistUI();
}

function generateProductId(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getProductDataFromCard(card) {
    if (!card) return null;
    const nameEl = card.querySelector('.trending-name, .arrival-name');
    const catEl = card.querySelector('.trending-cat, .arrival-category');
    const priceEl = card.querySelector('.trending-price, .arrival-price');
    const imgEl = card.querySelector('.trending-img-box img, .arrival-img-box img');

    const name = nameEl ? nameEl.textContent.trim() : 'Exclusive Product';
    const category = catEl ? catEl.textContent.trim() : 'M.Store Collection';
    const price = priceEl ? priceEl.textContent.trim() : '₹ 1499';
    const image = imgEl ? imgEl.src : '';
    const id = generateProductId(name);

    return { id, name, category, price, image };
}

// Global user session & pending action state
let currentUser = null;
let pendingAction = null;

// ========================================================
// CART MANAGEMENT SYSTEM (LocalStorage + Sync + Badge)
// ========================================================
let cart = [];

function loadCart() {
    try {
        const stored = localStorage.getItem('mstore_cart');
        cart = stored ? JSON.parse(stored) : [];
    } catch (e) {
        cart = [];
    }
    updateCartUI();
}

function saveCart() {
    try {
        localStorage.setItem('mstore_cart', JSON.stringify(cart));
    } catch (e) {
        console.error('Could not save cart to localStorage', e);
    }
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        badge.textContent = totalItems;
        if (totalItems > 0) {
            badge.classList.add('visible');
        } else {
            badge.classList.remove('visible');
        }
    }
}

function addToCart(product) {
    if (!product) return;
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
}

function buyProduct(e, btn) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }

    const card = btn ? btn.closest('.trending-card, .arrival-card') : null;
    const product = card ? getProductDataFromCard(card) : null;

    // COMPULSORY LOGIN / REGISTER CHECK FOR BUYING PRODUCTS
    if (!currentUser) {
        pendingAction = { type: 'buy', product: product, card: card };
        showToast('🔒 Login or Register is compulsory to buy products!', 'warning');
        openAuthModal('login', '🔒 Login or Register is compulsory to buy products and checkout');
        return;
    }

    if (product) {
        addToCart(product);
        showToast(`🛍️ <strong>${product.name}</strong> added to Bag! Ready to checkout.`, 'bag');
    }
}

function toggleWishlist(e, btn) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }

    const card = btn ? btn.closest('.trending-card, .arrival-card') : null;
    if (!card) return;

    const product = getProductDataFromCard(card);
    if (!product) return;

    // COMPULSORY LOGIN / REGISTER CHECK FOR WISHLIST
    if (!currentUser) {
        pendingAction = { type: 'wishlist', product: product, card: card };
        showToast('🔒 Login or Register is compulsory to add to Wishlist!', 'warning');
        openAuthModal('login', '🔒 Login or Register is compulsory to save items to your Wishlist');
        return;
    }

    const existingIndex = wishlist.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        saveWishlist();
        showToast(`Removed <strong>${product.name}</strong> from Wishlist`, 'info');
    } else {
        // Add to wishlist
        wishlist.push(product);
        saveWishlist();
        showToast(`Added <strong>${product.name}</strong> to Wishlist ❤️`, 'heart');
    }
}

function removeFromWishlist(id) {
    const index = wishlist.findIndex(item => item.id === id);
    if (index > -1) {
        const removed = wishlist[index];
        wishlist.splice(index, 1);
        saveWishlist();
        showToast(`Removed <strong>${removed.name}</strong> from Wishlist`, 'info');
    }
}

function moveToBag(id) {
    const item = wishlist.find(p => p.id === id);
    if (!item) return;

    // COMPULSORY LOGIN / REGISTER CHECK FOR MOVING TO BAG / BUYING
    if (!currentUser) {
        closeWishlistDrawer();
        pendingAction = { type: 'moveToBag', product: item, id: id };
        showToast('🔒 Login or Register is compulsory to buy products!', 'warning');
        openAuthModal('login', '🔒 Login or Register is compulsory to purchase items from your Wishlist');
        return;
    }

    addToCart(item);
    showToast(`Added <strong>${item.name}</strong> to Bag! 🛍️`, 'bag');
}

function updateWishlistUI() {
    // 1. Update header badge counter
    const badge = document.getElementById('wishlist-badge');
    if (badge) {
        const count = wishlist.length;
        badge.textContent = count;
        if (count > 0) {
            badge.classList.add('visible');
        } else {
            badge.classList.remove('visible');
        }
    }

    // 2. Update all heart buttons on page
    const allCards = document.querySelectorAll('.trending-card, .arrival-card');
    allCards.forEach(card => {
        const product = getProductDataFromCard(card);
        const btn = card.querySelector('.wishlist-btn');
        if (!btn || !product) return;

        const isWishlisted = wishlist.some(item => item.id === product.id);
        const icon = btn.querySelector('i');

        if (isWishlisted) {
            btn.classList.add('active');
            if (icon) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }
        } else {
            btn.classList.remove('active');
            if (icon) {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        }
    });

    // 3. Render items inside Wishlist Drawer
    renderWishlistDrawer();
}

function renderWishlistDrawer() {
    const body = document.getElementById('wishlist-drawer-body');
    const countEl = document.getElementById('wishlist-drawer-count');
    if (!body) return;

    if (countEl) {
        countEl.textContent = `(${wishlist.length} ${wishlist.length === 1 ? 'item' : 'items'})`;
    }

    if (wishlist.length === 0) {
        body.innerHTML = `
            <div class="wishlist-empty-state">
                <div class="empty-icon"><i class="fa-regular fa-heart"></i></div>
                <h4>Your Wishlist is Empty!</h4>
                <p>Tap the heart icon on any product to save your favorites here.</p>
                <button class="explore-btn" onclick="closeWishlistDrawer(); const sec = document.querySelector('.trending-section'); if(sec) sec.scrollIntoView({behavior: 'smooth'});">Explore Trending</button>
            </div>
        `;
        return;
    }

    body.innerHTML = wishlist.map(item => `
        <div class="wishlist-item" data-id="${item.id}">
            <div class="wishlist-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="wishlist-item-details">
                <h4 class="wishlist-item-name">${item.name}</h4>
                <p class="wishlist-item-cat">${item.category}</p>
                <p class="wishlist-item-price">${item.price}</p>
                <button class="wishlist-move-bag-btn" onclick="moveToBag('${item.id}')">
                    <i class="fa-solid fa-bag-shopping"></i> Add to Bag
                </button>
            </div>
            <button class="wishlist-remove-btn" onclick="removeFromWishlist('${item.id}')" title="Remove from wishlist" aria-label="Remove">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join('');
}

// Drawer Open / Close Controls
const wishlistToggle = document.getElementById('wishlist-toggle');
const wishlistDrawer = document.getElementById('wishlist-drawer');
const wishlistOverlay = document.getElementById('wishlist-overlay');
const wishlistCloseBtn = document.getElementById('wishlist-close-btn');

function openWishlistDrawer() {
    if (wishlistDrawer && wishlistOverlay) {
        wishlistDrawer.classList.add('active');
        wishlistOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeWishlistDrawer() {
    if (wishlistDrawer && wishlistOverlay) {
        wishlistDrawer.classList.remove('active');
        wishlistOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (wishlistToggle) {
    wishlistToggle.addEventListener('click', (e) => {
        if (!currentUser) {
            e.preventDefault();
            showToast('🔒 Login or Register is compulsory to access your Wishlist!', 'warning');
            openAuthModal('login', '🔒 Login or Register is compulsory to access your Wishlist');
            return;
        }
        openWishlistDrawer();
    });
    wishlistToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!currentUser) {
                showToast('🔒 Login or Register is compulsory to access your Wishlist!', 'warning');
                openAuthModal('login', '🔒 Login or Register is compulsory to access your Wishlist');
                return;
            }
            openWishlistDrawer();
        }
    });
}

const cartToggle = document.getElementById('cart-toggle');
if (cartToggle) {
    cartToggle.addEventListener('click', (e) => {
        e.preventDefault();
        if (!currentUser) {
            showToast('🔒 Login or Register is compulsory to view Bag & checkout!', 'warning');
            openAuthModal('login', '🔒 Login or Register is compulsory to access your Shopping Bag');
            return;
        }
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        if (totalItems === 0) {
            showToast('Your Shopping Bag is empty! Browse items to add.', 'info');
        } else {
            showToast(`You have <strong>${totalItems} items</strong> in your Bag 🛍️ (Proceed to Checkout)`, 'bag');
        }
    });
}

if (wishlistCloseBtn) {
    wishlistCloseBtn.addEventListener('click', closeWishlistDrawer);
}

if (wishlistOverlay) {
    wishlistOverlay.addEventListener('click', closeWishlistDrawer);
}

// Toast notification helper
let toastTimeout;
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;

    clearTimeout(toastTimeout);
    let iconClass = 'fa-solid fa-circle-check';
    if (type === 'heart') iconClass = 'fa-solid fa-heart';
    else if (type === 'bag') iconClass = 'fa-solid fa-bag-shopping';
    else if (type === 'warning') iconClass = 'fa-solid fa-lock';
    else if (type === 'info') iconClass = 'fa-solid fa-circle-info';
    else if (type === 'success') iconClass = 'fa-solid fa-circle-check';

    toast.className = `toast-notification ${type} active`;
    toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`;

    toastTimeout = setTimeout(() => {
        toast.classList.remove('active');
    }, 3200);
}

// SIDEBAR NAVIGATION DRAWER LOGIC
const menuToggle = document.getElementById('menu-toggle');
const sidebarDrawer = document.getElementById('sidebar-drawer');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
const sidebarTabs = document.querySelectorAll('.sidebar-tab');

function openSidebar() {
    if (sidebarDrawer && sidebarOverlay) {
        sidebarDrawer.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSidebar() {
    if (sidebarDrawer && sidebarOverlay) {
        sidebarDrawer.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (menuToggle) {
    menuToggle.addEventListener('click', openSidebar);
    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openSidebar();
        }
    });
}

if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}

// Close on Escape key press (for drawers and auth modal)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (sidebarDrawer && sidebarDrawer.classList.contains('active')) {
            closeSidebar();
        }
        if (wishlistDrawer && wishlistDrawer.classList.contains('active')) {
            closeWishlistDrawer();
        }
        if (authModal && authModal.classList.contains('active')) {
            closeAuthModal();
        }
    }
});

// Category Switcher tabs in sidebar
sidebarTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        sidebarTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Auto-close sidebar when clicking links inside it
const sidebarNavLinks = document.querySelectorAll('.sidebar-links a');
sidebarNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

// ==========================================================================
// USER AUTHENTICATION & LOGIN/REGISTER MODAL LOGIC
// ==========================================================================

function loadUserSession() {
    try {
        const stored = localStorage.getItem('mstore_user');
        currentUser = stored ? JSON.parse(stored) : null;
    } catch (e) {
        currentUser = null;
    }
    updateUserAuthUI();
}

function saveUserSession(user) {
    currentUser = user;
    try {
        localStorage.setItem('mstore_user', JSON.stringify(user));
    } catch (e) {
        console.error('Could not save user session', e);
    }
    updateUserAuthUI();
}

function clearUserSession() {
    currentUser = null;
    try {
        localStorage.removeItem('mstore_user');
    } catch (e) {
        console.error('Could not clear user session', e);
    }
    updateUserAuthUI();
}

const authOverlay = document.getElementById('auth-overlay');
const authModal = document.getElementById('auth-modal');
const authCloseBtn = document.getElementById('auth-close-btn');
const authToggle = document.getElementById('auth-toggle');
const sidebarUserBtn = document.getElementById('sidebar-user-btn');
const sidebarAuthLink = document.getElementById('sidebar-auth-link');

function executePendingAction() {
    if (!pendingAction) return;

    const action = pendingAction;
    pendingAction = null; // Clear immediately to avoid duplicate triggering

    setTimeout(() => {
        if (action.type === 'wishlist' && action.product) {
            const existingIndex = wishlist.findIndex(item => item.id === action.product.id);
            if (existingIndex === -1) {
                wishlist.push(action.product);
                saveWishlist();
                showToast(`Success! Added <strong>${action.product.name}</strong> to your Wishlist ❤️`, 'heart');
            }
        } else if ((action.type === 'buy' || action.type === 'moveToBag') && action.product) {
            addToCart(action.product);
            showToast(`Success! <strong>${action.product.name}</strong> added to Bag 🛍️`, 'bag');
        }
    }, 400);
}

function openAuthModal(defaultTab = 'login', compulsoryReason = '') {
    closeSidebar();
    closeWishlistDrawer();

    const banner = document.getElementById('auth-required-banner');
    const reasonText = document.getElementById('auth-required-text');

    if (banner && reasonText) {
        if (compulsoryReason) {
            reasonText.textContent = compulsoryReason;
            banner.style.display = 'flex';
        } else {
            banner.style.display = 'none';
        }
    }

    if (authOverlay && authModal) {
        authOverlay.classList.add('active');
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (currentUser) {
            showUserDashboard();
        } else {
            showAuthForms();
            switchAuthTab(defaultTab);
        }
    }
}

function closeAuthModal() {
    if (authOverlay && authModal) {
        authOverlay.classList.remove('active');
        authModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    const banner = document.getElementById('auth-required-banner');
    if (banner) banner.style.display = 'none';
}

function switchAuthTab(tab) {
    const tabLoginBtn = document.getElementById('tab-btn-login');
    const tabRegBtn = document.getElementById('tab-btn-register');
    const loginPanel = document.getElementById('login-form-panel');
    const regPanel = document.getElementById('register-form-panel');

    if (tab === 'login') {
        if (tabLoginBtn) tabLoginBtn.classList.add('active');
        if (tabRegBtn) tabRegBtn.classList.remove('active');
        if (loginPanel) loginPanel.classList.add('active');
        if (regPanel) regPanel.classList.remove('active');
    } else {
        if (tabRegBtn) tabRegBtn.classList.add('active');
        if (tabLoginBtn) tabLoginBtn.classList.remove('active');
        if (regPanel) regPanel.classList.add('active');
        if (loginPanel) loginPanel.classList.remove('active');
    }
}

function showAuthForms() {
    const headerTabs = document.getElementById('auth-tabs-nav');
    const dashboardView = document.getElementById('auth-logged-in-view');
    const titleEl = document.getElementById('auth-modal-title');
    const subtitleEl = document.querySelector('.auth-modal-subtitle');

    if (headerTabs) headerTabs.style.display = 'flex';
    if (dashboardView) dashboardView.style.display = 'none';
    if (titleEl) titleEl.textContent = 'Welcome to M.Store';
    if (subtitleEl) subtitleEl.textContent = 'Log in or create an account for exclusive member discounts & tracking';
}

function showUserDashboard() {
    const headerTabs = document.getElementById('auth-tabs-nav');
    const loginPanel = document.getElementById('login-form-panel');
    const regPanel = document.getElementById('register-form-panel');
    const dashboardView = document.getElementById('auth-logged-in-view');
    const titleEl = document.getElementById('auth-modal-title');
    const subtitleEl = document.querySelector('.auth-modal-subtitle');

    if (headerTabs) headerTabs.style.display = 'none';
    if (loginPanel) loginPanel.classList.remove('active');
    if (regPanel) regPanel.classList.remove('active');
    if (dashboardView) dashboardView.style.display = 'flex';

    if (currentUser) {
        if (titleEl) titleEl.textContent = `Hello, ${currentUser.name}!`;
        if (subtitleEl) subtitleEl.textContent = 'Manage your account, track deliveries, and view saved items.';
        
        const avatarBadge = document.getElementById('user-avatar-badge');
        const nameEl = document.getElementById('user-display-name');
        const emailEl = document.getElementById('user-display-email');

        if (avatarBadge) avatarBadge.textContent = currentUser.name.charAt(0).toUpperCase();
        if (nameEl) nameEl.textContent = currentUser.name;
        if (emailEl) emailEl.textContent = currentUser.email;
    }
}

function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input || !btn) return;
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        if (icon) {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    } else {
        input.type = 'password';
        if (icon) {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    }
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const identifierInput = document.getElementById('login-identifier');
    const passwordInput = document.getElementById('login-password');
    if (!identifierInput || !passwordInput) return;

    const identifier = identifierInput.value.trim();
    const password = passwordInput.value;

    if (!identifier || !password) {
        showToast('Please enter both identifier and password', 'info');
        return;
    }

    let registeredUsers = [];
    try {
        const stored = localStorage.getItem('mstore_users');
        registeredUsers = stored ? JSON.parse(stored) : [];
    } catch (err) {
        registeredUsers = [];
    }

    const matchedUser = registeredUsers.find(u => 
        (u.email.toLowerCase() === identifier.toLowerCase() || u.phone === identifier) && 
        u.password === password
    );

    let loggedInUser;
    if (matchedUser) {
        loggedInUser = matchedUser;
    } else {
        const cleanName = identifier.includes('@') ? identifier.split('@')[0] : 'Valued Member';
        const formattedName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
        loggedInUser = {
            name: formattedName,
            email: identifier.includes('@') ? identifier : `${identifier}@mstore.com`,
            phone: identifier.includes('@') ? '9876543210' : identifier
        };
    }

    saveUserSession(loggedInUser);
    closeAuthModal();
    showToast(`Welcome back, ${loggedInUser.name}! 🎉`, 'success');
    executePendingAction();

    const form = document.getElementById('login-form-panel');
    if (form) form.reset();
}

function handleRegisterSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById('reg-fullname');
    const emailInput = document.getElementById('reg-email');
    const phoneInput = document.getElementById('reg-phone');
    const passwordInput = document.getElementById('reg-password');
    const agreeInput = document.getElementById('reg-agree');

    if (!agreeInput || !agreeInput.checked) {
        showToast('Please agree to Terms & Conditions', 'info');
        return;
    }

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value : '';

    if (!name || !email || !phone || !password) {
        showToast('Please fill out all registration fields', 'info');
        return;
    }

    let registeredUsers = [];
    try {
        const stored = localStorage.getItem('mstore_users');
        registeredUsers = stored ? JSON.parse(stored) : [];
    } catch (err) {
        registeredUsers = [];
    }

    const newUser = { name, email, phone, password };
    registeredUsers.push(newUser);
    try {
        localStorage.setItem('mstore_users', JSON.stringify(registeredUsers));
    } catch (err) {
        console.error(err);
    }

    saveUserSession(newUser);
    closeAuthModal();
    showToast(`Welcome to M.Store, ${newUser.name}! 🎉`, 'success');
    executePendingAction();

    const form = document.getElementById('register-form-panel');
    if (form) form.reset();
}

function handleSocialAuth(provider) {
    const demoUser = {
        name: `${provider} User`,
        email: `user@${provider.toLowerCase()}.com`,
        phone: '9876543210'
    };

    saveUserSession(demoUser);
    closeAuthModal();
    showToast(`Signed in with ${provider}! Welcome 🎉`, 'success');
    executePendingAction();
}

function handleForgotPassword(e) {
    if (e) e.preventDefault();
    showToast('Password reset link sent to your email! ✉️', 'info');
}

function handleLogout() {
    const prevName = currentUser ? currentUser.name : 'User';
    pendingAction = null;
    clearUserSession();
    closeAuthModal();
    showToast(`Logged out. See you soon, ${prevName}! 👋`, 'info');
}

function updateUserAuthUI() {
    const statusDot = document.getElementById('user-status-dot');
    const authNavIcon = document.getElementById('auth-nav-icon');
    const sidebarGreeting = document.getElementById('sidebar-greeting');
    const sidebarAuthLink = document.getElementById('sidebar-auth-link');
    const sidebarAvatar = document.getElementById('sidebar-avatar');

    if (currentUser) {
        if (statusDot) statusDot.classList.add('active');
        if (authNavIcon) {
            authNavIcon.classList.remove('fa-regular');
            authNavIcon.classList.add('fa-solid');
            if (authNavIcon.parentElement) {
                authNavIcon.parentElement.setAttribute('title', `Account (${currentUser.name})`);
            }
        }
        if (sidebarGreeting) {
            sidebarGreeting.textContent = `Hello, ${currentUser.name}`;
        }
        if (sidebarAuthLink) {
            sidebarAuthLink.textContent = 'My Account / Logout';
            sidebarAuthLink.style.color = '#10b981';
        }
        if (sidebarAvatar) {
            sidebarAvatar.innerHTML = `<span style="font-weight: 800; font-size: 16px;">${currentUser.name.charAt(0).toUpperCase()}</span>`;
            sidebarAvatar.style.background = '#e71417';
            sidebarAvatar.style.borderColor = '#ffffff';
        }
    } else {
        if (statusDot) statusDot.classList.remove('active');
        if (authNavIcon) {
            authNavIcon.classList.remove('fa-solid');
            authNavIcon.classList.add('fa-regular');
            if (authNavIcon.parentElement) {
                authNavIcon.parentElement.setAttribute('title', 'Account');
            }
        }
        if (sidebarGreeting) {
            sidebarGreeting.textContent = 'Hello, Guest';
        }
        if (sidebarAuthLink) {
            sidebarAuthLink.textContent = 'Login / Register';
            sidebarAuthLink.style.color = '#e53935';
        }
        if (sidebarAvatar) {
            sidebarAvatar.innerHTML = '<i class="fa-regular fa-user"></i>';
            sidebarAvatar.style.background = 'rgba(255, 255, 255, 0.15)';
            sidebarAvatar.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }
    }
}

// Attach Auth Listeners
if (authToggle) {
    authToggle.addEventListener('click', () => openAuthModal('login'));
    authToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openAuthModal('login');
        }
    });
}

if (sidebarUserBtn) {
    sidebarUserBtn.addEventListener('click', () => openAuthModal('login'));
}

if (sidebarAuthLink) {
    sidebarAuthLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openAuthModal('login');
    });
}

if (authCloseBtn) {
    authCloseBtn.addEventListener('click', closeAuthModal);
}

if (authOverlay) {
    authOverlay.addEventListener('click', closeAuthModal);
}

// Initialize on DOM ready
function initStore() {
    loadWishlist();
    loadCart();
    loadUserSession();
}

document.addEventListener('DOMContentLoaded', initStore);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initStore();
}