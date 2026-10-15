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
        if (selectedCategory === 'sneakers') {
            const snkSec = document.getElementById('sneakers-section');
            if (snkSec) {
                snkSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                showToast("👟 Welcome to the Sneakers Vault!", "sneakers");
                return;
            }
        }

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
    const nameEl = card.querySelector('.trending-name, .arrival-name, .search-card-name, .women-card-name, .sneaker-card-name, .cat-product-name, .perfume-card-name');
    const catEl = card.querySelector('.trending-cat, .arrival-category, .search-card-cat, .women-card-cat, .sneaker-card-cat, .cat-product-cat, .perfume-card-concentration');
    const priceEl = card.querySelector('.trending-price, .arrival-price, .search-card-price, .women-card-price, .sneaker-card-price, .cat-product-price, .perfume-card-price');
    const imgEl = card.querySelector('.trending-img-box img, .arrival-img-box img, .search-card-img-box img, .women-card-img-box img, .sneaker-card-img-box img, .cat-product-img-box img, .perfume-card-img-box img');
    const selectedSize = card.getAttribute('data-selected-size') || '';

    const name = nameEl ? nameEl.textContent.trim() : 'Exclusive Product';
    const category = catEl ? catEl.textContent.trim() : 'Vhora Collection';
    const price = priceEl ? priceEl.textContent.trim() : '₹ 1499';
    const image = imgEl ? imgEl.src : '';
    const id = card.getAttribute('data-product-id') || generateProductId(name);

    return { id, name, category, price, image, size: selectedSize };
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
    renderCartDrawer();
}

function saveCart() {
    try {
        localStorage.setItem('mstore_cart', JSON.stringify(cart));
    } catch (e) {
        console.error('Could not save cart to localStorage', e);
    }
    updateCartUI();
}

function getNumericPrice(priceVal) {
    if (typeof priceVal === 'number') return priceVal;
    const match = (priceVal || '').toString().replace(/[^0-9]/g, '');
    return parseInt(match, 10) || 1499;
}

function getNumericMrp(product) {
    if (product && product.mrp) return getNumericPrice(product.mrp);
    const price = getNumericPrice(product ? product.price : 1499);
    return price + 800;
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
    const cartDrawerEl = document.getElementById('cart-drawer');
    if (cartDrawerEl && cartDrawerEl.classList.contains('active')) {
        renderCartDrawer();
    }
}

function addToCart(product, shouldOpenDrawer = true) {
    if (!product) return;
    const size = product.size || 'M';
    const cartKey = `${product.id}-${size}`;
    const qty = product.quantity || 1;
    const existing = cart.find(item => (item.cartKey && item.cartKey === cartKey) || (item.id === product.id && item.size === size));
    if (existing) {
        existing.quantity = (existing.quantity || 1) + qty;
    } else {
        cart.push({ ...product, cartKey, size, quantity: qty });
    }
    saveCart();
    if (shouldOpenDrawer) {
        openCartDrawer();
    }
}

function buyProduct(e, btn) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }

    const card = btn ? btn.closest('.trending-card, .arrival-card, .search-card, .women-card, .sneaker-card, .cat-product-card, .perfume-card') : null;
    const product = card ? getProductDataFromCard(card) : null;
    if (!product) return;

    const cardSize = card.getAttribute('data-selected-size');

    // If no size was picked on card, open the Size Selection Modal so user can choose their size
    if (!cardSize) {
        openProductModalFromCard(card, true);
        showToast('Please choose your size!', 'info');
        return;
    }

    const productToBuy = { ...product, size: cardSize, quantity: 1 };

    // COMPULSORY LOGIN / REGISTER CHECK FOR BUYING PRODUCTS
    if (!currentUser) {
        pendingAction = { type: 'buy', product: productToBuy, card: card };
        showToast('🔒 Login or Register is compulsory to buy products!', 'warning');
        openAuthModal('login', '🔒 Login or Register is compulsory to buy products and checkout');
        return;
    }

    addToCart(productToBuy);
    showToast(`🛍️ <strong>${productToBuy.name} (Size: ${cardSize})</strong> added to Bag! Ready to checkout.`, 'bag');
}

function toggleWishlist(e, btn) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }

    const card = btn ? btn.closest('.trending-card, .arrival-card, .search-card, .women-card, .sneaker-card, .cat-product-card, .perfume-card') : null;
    if (!card) return;

    const product = getProductDataFromCard(card);
    if (!product) return;

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

    const itemToMove = { ...item, size: item.size || 'M' };

    // COMPULSORY LOGIN / REGISTER CHECK FOR MOVING TO BAG / BUYING
    if (!currentUser) {
        closeWishlistDrawer();
        pendingAction = { type: 'moveToBag', product: itemToMove, id: id };
        showToast('🔒 Login or Register is compulsory to buy products!', 'warning');
        openAuthModal('login', '🔒 Login or Register is compulsory to purchase items from your Wishlist');
        return;
    }

    addToCart(itemToMove);
    showToast(`Added <strong>${itemToMove.name} (Size: ${itemToMove.size})</strong> to Bag! 🛍️`, 'bag');
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
    const allCards = document.querySelectorAll('.trending-card, .arrival-card, .search-card, .women-card, .sneaker-card, .cat-product-card, .perfume-card');
    allCards.forEach(card => {
        const product = getProductDataFromCard(card);
        const btn = card.querySelector('.wishlist-btn, .search-card-wishlist-btn, .women-card-wishlist-btn, .sneaker-card-wishlist-btn, .cat-product-wishlist-btn, .perfume-card-wishlist-btn');
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
                <p class="wishlist-item-price">${item.price} <span class="item-size-badge">Size: ${item.size || 'M'}</span></p>
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

// ========================================================
// DRAWER CONTROLS & SHOPPING BAG SYSTEM
// ========================================================
const wishlistToggle = document.getElementById('wishlist-toggle');
const wishlistDrawer = document.getElementById('wishlist-drawer');
const wishlistOverlay = document.getElementById('wishlist-overlay');
const wishlistCloseBtn = document.getElementById('wishlist-close-btn');

const cartToggle = document.getElementById('cart-toggle');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartCloseBtn = document.getElementById('cart-close-btn');

const ordersToggle = document.getElementById('orders-toggle');
const ordersDrawer = document.getElementById('orders-drawer');
const ordersOverlay = document.getElementById('orders-overlay');
const ordersCloseBtn = document.getElementById('orders-close-btn');
const invoiceModal = document.getElementById('invoice-modal');
const invoiceOverlay = document.getElementById('invoice-overlay');

function isAnyDrawerOrModalOpen() {
    return (
        (wishlistDrawer && wishlistDrawer.classList.contains('active')) ||
        (cartDrawer && cartDrawer.classList.contains('active')) ||
        (ordersDrawer && ordersDrawer.classList.contains('active')) ||
        (sidebarDrawer && sidebarDrawer.classList.contains('active')) ||
        (authModal && authModal.classList.contains('active')) ||
        (invoiceModal && invoiceModal.classList.contains('active')) ||
        (document.getElementById('product-modal') && document.getElementById('product-modal').classList.contains('active'))
    );
}

function openWishlistDrawer() {
    closeCartDrawer();
    closeOrdersDrawer();
    closeInvoiceModal();
    closeSidebar();
    closeAuthModal();
    closeProductModal();

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
        if (!isAnyDrawerOrModalOpen()) {
            document.body.style.overflow = '';
        }
    }
}

function openCartDrawer() {
    closeWishlistDrawer();
    closeOrdersDrawer();
    closeInvoiceModal();
    closeSidebar();
    closeAuthModal();
    closeProductModal();

    renderCartDrawer();

    if (cartDrawer && cartOverlay) {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCartDrawer() {
    if (cartDrawer && cartOverlay) {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
        if (!isAnyDrawerOrModalOpen()) {
            document.body.style.overflow = '';
        }
    }
}

function openOrdersDrawer() {
    if (!currentUser) {
        closeSidebar();
        closeCartDrawer();
        closeWishlistDrawer();
        closeProductModal();
        closeInvoiceModal();
        pendingAction = { type: 'viewOrders' };
        showToast('🔒 Login or Register is compulsory to view My Orders!', 'warning');
        openAuthModal('login', '🔒 Login or Register is compulsory to access your Order History & Tracking');
        return;
    }

    closeWishlistDrawer();
    closeCartDrawer();
    closeInvoiceModal();
    closeSidebar();
    closeAuthModal();
    closeProductModal();

    renderOrdersDrawer();

    if (ordersDrawer && ordersOverlay) {
        ordersDrawer.classList.add('active');
        ordersOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeOrdersDrawer() {
    if (ordersDrawer && ordersOverlay) {
        ordersDrawer.classList.remove('active');
        ordersOverlay.classList.remove('active');
        if (!isAnyDrawerOrModalOpen()) {
            document.body.style.overflow = '';
        }
    }
}

function closeInvoiceModal() {
    if (invoiceModal && invoiceOverlay) {
        invoiceModal.classList.remove('active');
        invoiceOverlay.classList.remove('active');
        if (!isAnyDrawerOrModalOpen()) {
            document.body.style.overflow = '';
        }
    }
}

// Shopping Bag Drawer Rendering & Operations
let appliedCoupon = null;

function renderCartDrawer() {
    const body = document.getElementById('cart-drawer-body');
    const countEl = document.getElementById('cart-drawer-count');
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    if (!body) return;

    const totalCount = cart.reduce((sum, it) => sum + (it.quantity || 1), 0);
    if (countEl) {
        countEl.textContent = `(${totalCount} ${totalCount === 1 ? 'item' : 'items'})`;
    }

    if (cart.length === 0) {
        body.innerHTML = `
            <div class="cart-empty-state">
                <div class="cart-empty-icon"><i class="fa-solid fa-bag-shopping"></i></div>
                <h4>Your Shopping Bag is Empty!</h4>
                <p>Discover our latest arrivals and trending outfits to fill your bag with style.</p>
                <button type="button" class="cart-empty-explore-btn" onclick="closeCartDrawer(); const sec = document.querySelector('.trending-section'); if(sec) sec.scrollIntoView({behavior: 'smooth'});">
                    Start Shopping
                </button>
            </div>
        `;

        // Reset shipping progress bar
        const shippingMsg = document.getElementById('shipping-threshold-msg');
        const shippingFill = document.getElementById('shipping-progress-fill');
        if (shippingMsg) shippingMsg.innerHTML = 'Add <strong>₹999</strong> more for <strong>FREE DELIVERY</strong>!';
        if (shippingFill) shippingFill.style.width = '0%';

        // Reset summary rows
        const totalMrpEl = document.getElementById('summary-total-mrp');
        const savingsEl = document.getElementById('summary-savings');
        const couponRowEl = document.getElementById('coupon-discount-row');
        const shippingEl = document.getElementById('summary-shipping');
        const grandTotalEl = document.getElementById('summary-grand-total');

        if (totalMrpEl) totalMrpEl.textContent = '₹ 0';
        if (savingsEl) savingsEl.textContent = '- ₹ 0';
        if (couponRowEl) couponRowEl.style.display = 'none';
        if (shippingEl) {
            shippingEl.textContent = 'FREE';
            shippingEl.className = 'shipping-free-text';
        }
        if (grandTotalEl) grandTotalEl.textContent = '₹ 0';

        if (checkoutBtn) {
            checkoutBtn.classList.add('disabled');
        }
        return;
    }

    if (checkoutBtn) {
        checkoutBtn.classList.remove('disabled');
    }

    // Render items list
    body.innerHTML = cart.map(item => {
        const priceNum = getNumericPrice(item.price);
        const mrpNum = getNumericMrp(item);
        const itemKey = item.cartKey || `${item.id}-${item.size || 'M'}`;
        const qty = item.quantity || 1;

        return `
            <div class="cart-item" data-cart-key="${itemKey}">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-info">
                        <h4 class="cart-item-name" title="${item.name}">${item.name}</h4>
                        <p class="cart-item-cat">${item.category || 'Vhora Collection'}</p>
                        <div class="cart-item-tags">
                            <span class="cart-item-size-tag">Size: ${item.size || 'M'}</span>
                        </div>
                        <div class="cart-item-pricing">
                            <span class="cart-item-price">₹ ${(priceNum * qty).toLocaleString('en-IN')}</span>
                            <span class="cart-item-mrp">₹ ${(mrpNum * qty).toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="cart-qty-control">
                            <button type="button" class="cart-qty-btn" onclick="changeCartItemQty('${itemKey}', -1)" aria-label="Decrease quantity">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <span class="cart-qty-num">${qty}</span>
                            <button type="button" class="cart-qty-btn" onclick="changeCartItemQty('${itemKey}', 1)" aria-label="Increase quantity">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <button type="button" class="cart-item-wishlist-link" onclick="moveToWishlistFromCart('${itemKey}')">
                            <i class="fa-regular fa-heart"></i> Save for later
                        </button>
                    </div>
                </div>
                <button type="button" class="cart-item-remove-btn" onclick="removeFromCart('${itemKey}')" title="Remove item" aria-label="Remove item">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
    }).join('');

    // Calculate Price Breakdown
    let totalMrp = 0;
    let totalSellingPrice = 0;
    cart.forEach(item => {
        const priceNum = getNumericPrice(item.price);
        const mrpNum = getNumericMrp(item);
        const qty = item.quantity || 1;
        totalMrp += mrpNum * qty;
        totalSellingPrice += priceNum * qty;
    });

    const bagSavings = Math.max(0, totalMrp - totalSellingPrice);

    // Free delivery threshold: ₹999
    const freeShippingThreshold = 999;
    const shippingFee = (totalSellingPrice >= freeShippingThreshold) ? 0 : 99;

    // Coupon discount
    let couponDiscount = 0;
    if (appliedCoupon) {
        if (appliedCoupon.discountPercent) {
            couponDiscount = Math.round((totalSellingPrice * appliedCoupon.discountPercent) / 100);
        } else if (appliedCoupon.discountFlat) {
            couponDiscount = Math.min(totalSellingPrice, appliedCoupon.discountFlat);
        }
    }

    const grandTotal = Math.max(0, totalSellingPrice - couponDiscount + shippingFee);

    // Free Delivery Meter Update
    const shippingMsg = document.getElementById('shipping-threshold-msg');
    const shippingFill = document.getElementById('shipping-progress-fill');
    if (shippingMsg && shippingFill) {
        if (totalSellingPrice >= freeShippingThreshold) {
            shippingMsg.innerHTML = '<i class="fa-solid fa-circle-check"></i> 🎉 You unlocked <strong>FREE EXPRESS DELIVERY!</strong>';
            shippingFill.style.width = '100%';
        } else {
            const diff = freeShippingThreshold - totalSellingPrice;
            shippingMsg.innerHTML = `Add <strong>₹${diff.toLocaleString('en-IN')}</strong> more for <strong>FREE DELIVERY</strong>!`;
            const pct = Math.min(100, Math.round((totalSellingPrice / freeShippingThreshold) * 100));
            shippingFill.style.width = `${pct}%`;
        }
    }

    // Summary Elements Update
    const totalMrpEl = document.getElementById('summary-total-mrp');
    const savingsEl = document.getElementById('summary-savings');
    const couponRowEl = document.getElementById('coupon-discount-row');
    const couponDiscountEl = document.getElementById('summary-coupon-discount');
    const shippingEl = document.getElementById('summary-shipping');
    const grandTotalEl = document.getElementById('summary-grand-total');

    if (totalMrpEl) totalMrpEl.textContent = `₹ ${totalMrp.toLocaleString('en-IN')}`;
    if (savingsEl) savingsEl.textContent = `- ₹ ${bagSavings.toLocaleString('en-IN')}`;

    if (couponRowEl && couponDiscountEl) {
        if (appliedCoupon && couponDiscount > 0) {
            couponRowEl.style.display = 'flex';
            const labelSpan = couponRowEl.querySelector('span:first-child');
            if (labelSpan) labelSpan.textContent = `Coupon Discount (${appliedCoupon.label || appliedCoupon.code})`;
            couponDiscountEl.textContent = `- ₹ ${couponDiscount.toLocaleString('en-IN')}`;
        } else {
            couponRowEl.style.display = 'none';
        }
    }

    if (shippingEl) {
        if (shippingFee === 0) {
            shippingEl.textContent = 'FREE';
            shippingEl.className = 'shipping-free-text';
        } else {
            shippingEl.textContent = `₹ ${shippingFee}`;
            shippingEl.className = '';
        }
    }

    if (grandTotalEl) grandTotalEl.textContent = `₹ ${grandTotal.toLocaleString('en-IN')}`;
}

function changeCartItemQty(cartKey, delta) {
    const item = cart.find(it => (it.cartKey === cartKey || `${it.id}-${it.size || 'M'}` === cartKey));
    if (!item) return;

    const newQty = (item.quantity || 1) + delta;
    if (newQty <= 0) {
        removeFromCart(cartKey);
    } else if (newQty > 10) {
        showToast('Maximum 10 units allowed per item!', 'warning');
    } else {
        item.quantity = newQty;
        saveCart();
        renderCartDrawer();
    }
}

function removeFromCart(cartKey) {
    const index = cart.findIndex(it => (it.cartKey === cartKey || `${it.id}-${it.size || 'M'}` === cartKey));
    if (index > -1) {
        const removed = cart[index];
        cart.splice(index, 1);
        saveCart();
        renderCartDrawer();
        showToast(`Removed <strong>${removed.name}</strong> from Bag`, 'info');
    }
}

function moveToWishlistFromCart(cartKey) {
    const index = cart.findIndex(it => (it.cartKey === cartKey || `${it.id}-${it.size || 'M'}` === cartKey));
    if (index === -1) return;

    const item = cart[index];
    cart.splice(index, 1);
    saveCart();

    const exists = wishlist.some(w => w.id === item.id);
    if (!exists) {
        wishlist.push({
            id: item.id,
            name: item.name,
            category: item.category,
            price: item.price,
            image: item.image,
            size: item.size || 'M'
        });
        saveWishlist();
    }

    renderCartDrawer();
    showToast(`Saved <strong>${item.name}</strong> to Wishlist ❤️`, 'heart');
}

function applyPromoCode() {
    const input = document.getElementById('cart-promo-input');
    const msgEl = document.getElementById('promo-message');
    if (!input || !msgEl) return;

    const code = input.value.trim().toUpperCase();

    if (!code) {
        msgEl.className = 'promo-message error';
        msgEl.textContent = 'Please enter a coupon code!';
        msgEl.style.display = 'block';
        return;
    }

    let totalSellingPrice = 0;
    cart.forEach(item => {
        totalSellingPrice += getNumericPrice(item.price) * (item.quantity || 1);
    });

    if (code === 'MSTORE10') {
        appliedCoupon = { code: 'MSTORE10', discountPercent: 10, label: '10% OFF' };
        msgEl.className = 'promo-message success';
        msgEl.textContent = '🎉 Coupon MSTORE10 applied! 10% discount added.';
        msgEl.style.display = 'block';
        showToast('Coupon <strong>MSTORE10</strong> applied successfully! 🏷️', 'success');
        renderCartDrawer();
    } else if (code === 'FLAT200') {
        if (totalSellingPrice < 999) {
            msgEl.className = 'promo-message error';
            msgEl.textContent = 'Coupon FLAT200 requires a minimum bag value of ₹999';
            msgEl.style.display = 'block';
            return;
        }
        appliedCoupon = { code: 'FLAT200', discountFlat: 200, label: '₹200 OFF' };
        msgEl.className = 'promo-message success';
        msgEl.textContent = '🎉 Coupon FLAT200 applied! Saved ₹200.';
        msgEl.style.display = 'block';
        showToast('Coupon <strong>FLAT200</strong> applied! Saved ₹200 🏷️', 'success');
        renderCartDrawer();
    } else if (code === 'WELCOME50') {
        appliedCoupon = { code: 'WELCOME50', discountFlat: 50, label: '₹50 OFF' };
        msgEl.className = 'promo-message success';
        msgEl.textContent = '🎉 Welcome discount applied! ₹50 off.';
        msgEl.style.display = 'block';
        showToast('Coupon <strong>WELCOME50</strong> applied! 🏷️', 'success');
        renderCartDrawer();
    } else {
        msgEl.className = 'promo-message error';
        msgEl.textContent = 'Invalid coupon code. Try MSTORE10 or FLAT200';
        msgEl.style.display = 'block';
    }
}

function proceedToCheckout() {
    if (!cart || cart.length === 0) {
        showToast('Your Shopping Bag is empty! Browse items to add.', 'info');
        return;
    }

    // COMPULSORY LOGIN CHECK FOR CHECKOUT
    if (!currentUser) {
        closeCartDrawer();
        pendingAction = { type: 'checkout' };
        showToast('🔒 Login or Register is compulsory to proceed to checkout!', 'warning');
        openAuthModal('login', '🔒 Login or Register is compulsory to proceed to checkout');
        return;
    }

    // Generate Order Details
    const orderNumber = 'MST-' + Math.floor(100000 + Math.random() * 900000);
    const orderTotalEl = document.getElementById('summary-grand-total');
    const grandTotalStr = orderTotalEl ? orderTotalEl.textContent : '₹ 0';

    const now = new Date();
    const etaDate = new Date();
    etaDate.setDate(now.getDate() + 3);
    const etaStr = `Estimated delivery by ${etaDate.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}`;

    const newOrder = {
        orderId: orderNumber,
        date: now.toISOString(),
        displayDate: now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) + ' • ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        userEmail: currentUser.email,
        userName: currentUser.name,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            category: item.category || 'Vhora Fashion',
            image: item.image,
            price: item.price,
            size: item.size || 'M',
            quantity: item.quantity || 1
        })),
        itemCount: cart.reduce((sum, it) => sum + (it.quantity || 1), 0),
        grandTotalStr: grandTotalStr,
        couponCode: appliedCoupon ? appliedCoupon.code : null,
        status: 'Confirmed',
        paymentMethod: 'Cash on Delivery (COD)',
        estimatedDelivery: etaStr
    };

    // Save order in orders array
    orders.unshift(newOrder);
    saveOrders();

    // Close cart drawer
    closeCartDrawer();

    // Clear cart
    cart = [];
    appliedCoupon = null;
    const promoInput = document.getElementById('cart-promo-input');
    const promoMsg = document.getElementById('promo-message');
    if (promoInput) promoInput.value = '';
    if (promoMsg) promoMsg.style.display = 'none';
    saveCart();
    renderCartDrawer();

    showToast(`🎉 Order <strong>#${orderNumber}</strong> placed successfully (${grandTotalStr})! Listing in My Orders.`, 'success');

    // Automatically slide in My Orders drawer so user can immediately view their order!
    setTimeout(() => {
        openOrdersDrawer();
    }, 600);
}

// ========================================================
// MY ORDERS MANAGEMENT SYSTEM
// ========================================================
let orders = [];
let currentOrdersFilter = 'all';

function loadOrders() {
    try {
        const stored = localStorage.getItem('mstore_orders');
        orders = stored ? JSON.parse(stored) : [];
    } catch (e) {
        orders = [];
    }
    updateOrdersUI();
}

function saveOrders() {
    try {
        localStorage.setItem('mstore_orders', JSON.stringify(orders));
    } catch (e) {
        console.error('Could not save orders to localStorage', e);
    }
    updateOrdersUI();
}

function getUserOrders() {
    if (!currentUser) return [];
    return orders.filter(o => !o.userEmail || o.userEmail === currentUser.email);
}

function updateOrdersUI() {
    const badge = document.getElementById('orders-badge');
    const userOrders = getUserOrders();
    // Only count active (non-cancelled) orders for the badge
    const activeOrders = userOrders.filter(o => o.status !== 'Cancelled');
    
    if (badge) {
        badge.textContent = activeOrders.length;
        if (activeOrders.length > 0) {
            badge.classList.add('visible');
        } else {
            badge.classList.remove('visible');
        }
    }
    const userOrdersSummaryText = document.getElementById('user-orders-summary-text');
    if (userOrdersSummaryText) {
        userOrdersSummaryText.textContent = activeOrders.length > 0
            ? `${activeOrders.length} active ${activeOrders.length === 1 ? 'order' : 'orders'}`
            : (userOrders.length > 0 ? `${userOrders.length} past ${userOrders.length === 1 ? 'order' : 'orders'} (0 active)` : 'Track, return & view orders');
    }
    const ordersDrawerEl = document.getElementById('orders-drawer');
    if (ordersDrawerEl && ordersDrawerEl.classList.contains('active')) {
        renderOrdersDrawer();
    }
}

function filterOrders(filterType, btn) {
    currentOrdersFilter = filterType || 'all';
    const pills = document.querySelectorAll('.orders-filter-pill');
    pills.forEach(p => p.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderOrdersDrawer();
}

function renderOrdersDrawer() {
    const body = document.getElementById('orders-drawer-body');
    const countEl = document.getElementById('orders-drawer-count');
    if (!body) return;

    const allUserOrders = getUserOrders();
    const activeOrders = allUserOrders.filter(o => o.status !== 'Cancelled');
    const deliveredOrders = allUserOrders.filter(o => o.status === 'Delivered');
    const cancelledOrders = allUserOrders.filter(o => o.status === 'Cancelled');

    if (countEl) {
        if (currentOrdersFilter === 'active') {
            countEl.textContent = `(${activeOrders.length} active)`;
        } else if (currentOrdersFilter === 'delivered') {
            countEl.textContent = `(${deliveredOrders.length} delivered)`;
        } else if (currentOrdersFilter === 'cancelled') {
            countEl.textContent = `(${cancelledOrders.length} cancelled)`;
        } else {
            countEl.textContent = activeOrders.length > 0
                ? `(${activeOrders.length} active)`
                : (allUserOrders.length > 0 ? `(0 active, ${allUserOrders.length} total)` : `(0 orders)`);
        }
    }

    if (allUserOrders.length === 0) {
        body.innerHTML = `
            <div class="orders-empty-state">
                <div class="orders-empty-icon"><i class="fa-solid fa-boxes-packing"></i></div>
                <h4>No Orders Placed Yet!</h4>
                <p>You haven't made any purchases yet. When you buy products, your confirmed orders and live tracking will appear here.</p>
                <button type="button" class="orders-empty-explore-btn" onclick="closeOrdersDrawer(); const sec = document.querySelector('.trending-section'); if(sec) sec.scrollIntoView({behavior: 'smooth'});">
                    Start Shopping Now
                </button>
            </div>
        `;
        return;
    }

    let filtered = allUserOrders;
    if (currentOrdersFilter === 'active') {
        filtered = activeOrders;
    } else if (currentOrdersFilter === 'delivered') {
        filtered = deliveredOrders;
    } else if (currentOrdersFilter === 'cancelled') {
        filtered = cancelledOrders;
    }

    if (filtered.length === 0) {
        const filterName = currentOrdersFilter === 'active' ? 'active' : (currentOrdersFilter === 'cancelled' ? 'cancelled' : 'delivered');
        body.innerHTML = `
            <div class="orders-empty-state" style="padding: 30px 16px;">
                <div class="orders-empty-icon" style="width: 60px; height: 60px; font-size: 24px;"><i class="fa-solid fa-filter"></i></div>
                <h4 style="font-size: 16px;">No ${filterName} orders</h4>
                <p>Try switching to 'All Orders' to view your complete purchase history.</p>
                <button type="button" class="orders-filter-pill active" onclick="filterOrders('all', document.querySelector('.orders-filter-pill'))">
                    Show All Orders
                </button>
            </div>
        `;
        return;
    }

    body.innerHTML = filtered.map((order, idx) => {
        const isNew = idx === 0 && (Date.now() - new Date(order.date).getTime() < 35000);
        const statusLower = (order.status || 'confirmed').toLowerCase().replace(/\s+/g, '-');
        const isCancelled = order.status === 'Cancelled';
        const isDelivered = order.status === 'Delivered';
        const isShipped = order.status === 'In Transit' || order.status === 'Shipped';
        const isPacked = order.status === 'Packed';

        return `
            <div class="order-card ${isNew ? 'newly-placed' : ''}" data-order-id="${order.orderId}">
                <div class="order-card-header">
                    <div class="order-meta">
                        <span class="order-id-label">ORDER #${order.orderId}</span>
                        <span class="order-date-label">${order.displayDate}</span>
                    </div>
                    <span class="order-status-badge ${statusLower}">
                        <i class="fa-solid ${
                            isCancelled ? 'fa-circle-xmark' :
                            isDelivered ? 'fa-house-chimney' :
                            isShipped ? 'fa-truck-fast' :
                            isPacked ? 'fa-box' :
                            'fa-circle-check'
                        }"></i> ${order.status}
                    </span>
                </div>

                <!-- Items list -->
                <div class="order-items-list">
                    ${order.items.map(it => `
                        <div class="order-item-row">
                            <div class="order-item-img">
                                <img src="${it.image}" alt="${it.name}">
                            </div>
                            <div class="order-item-info">
                                <h5 class="order-item-title" title="${it.name}">${it.name}</h5>
                                <p class="order-item-meta">
                                    <span class="order-item-size">Size: ${it.size || 'M'}</span> • 
                                    <span>Qty: ${it.quantity || 1}</span>
                                </p>
                                <span class="order-item-price">${it.price}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Tracker Stepper (Hidden if Cancelled) -->
                ${!isCancelled ? `
                    <div class="order-tracker-box">
                        <div class="tracker-steps">
                            <div class="tracker-step completed">
                                <div class="step-dot"><i class="fa-solid fa-check"></i></div>
                                <span>Confirmed</span>
                            </div>
                            <div class="tracker-line ${isPacked || isShipped || isDelivered ? 'active' : ''}"></div>
                            <div class="tracker-step ${isPacked || isShipped || isDelivered ? (isShipped || isDelivered ? 'completed' : 'current') : ''}">
                                <div class="step-dot"><i class="fa-solid fa-box"></i></div>
                                <span>Packed</span>
                            </div>
                            <div class="tracker-line ${isShipped || isDelivered ? 'active' : ''}"></div>
                            <div class="tracker-step ${isShipped || isDelivered ? (isDelivered ? 'completed' : 'current') : ''}">
                                <div class="step-dot"><i class="fa-solid fa-truck"></i></div>
                                <span>Shipped</span>
                            </div>
                            <div class="tracker-line ${isDelivered ? 'active' : ''}"></div>
                            <div class="tracker-step ${isDelivered ? 'completed' : ''}">
                                <div class="step-dot"><i class="fa-solid fa-house-chimney"></i></div>
                                <span>Delivered</span>
                            </div>
                        </div>
                        <div class="tracker-eta">
                            <i class="fa-regular fa-clock"></i>
                            <span>${order.estimatedDelivery || 'Estimated delivery in 2-4 business days'}</span>
                        </div>
                    </div>
                ` : `
                    <div class="order-tracker-box" style="background: #fef2f2; border-color: #fecaca;">
                        <span style="font-size: 11.5px; color: #b91c1c; font-weight: 700; display: flex; align-items: center; gap: 6px;">
                            <i class="fa-solid fa-triangle-exclamation"></i> Order cancelled upon user request. Refund not applicable (COD).
                        </span>
                    </div>
                `}

                <!-- Order Card Footer -->
                <div class="order-card-footer">
                    <div class="order-total-info">
                        <span class="order-payment-type"><i class="fa-solid fa-shield-halved"></i> ${order.paymentMethod || 'Cash on Delivery (COD)'}</span>
                        <span class="order-grand-total">Total: <strong>${order.grandTotalStr || '₹ 1,499'}</strong></span>
                    </div>
                    <div class="order-card-actions">
                        ${!isCancelled && order.status === 'Confirmed' ? `
                            <button type="button" class="order-action-btn cancel-btn" onclick="cancelOrder('${order.orderId}')">
                                <i class="fa-solid fa-ban"></i> Cancel Order
                            </button>
                        ` : ''}
                        <button type="button" class="order-action-btn invoice-btn" onclick="viewOrderInvoice('${order.orderId}')">
                            <i class="fa-solid fa-receipt"></i> Invoice
                        </button>
                        <button type="button" class="order-action-btn reorder-btn" onclick="reorderItems('${order.orderId}')">
                            <i class="fa-solid fa-arrow-rotate-right"></i> Buy Again
                        </button>
                        ${isCancelled ? `
                            <button type="button" class="order-action-btn delete-btn" onclick="deleteOrder('${order.orderId}')" title="Remove cancelled order from history">
                                <i class="fa-solid fa-trash-can"></i> Remove
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function cancelOrder(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    if (order.status === 'Cancelled') {
        showToast('This order has already been cancelled.', 'info');
        return;
    }

    if (confirm(`Are you sure you want to cancel Order #${orderId}? This will remove it from active order counting.`)) {
        order.status = 'Cancelled';
        order.statusColor = '#ef4444';
        saveOrders();
        renderOrdersDrawer();
        showToast(`Order <strong>#${orderId}</strong> cancelled. Counting removed from active orders.`, 'warning');
    }
}

function deleteOrder(orderId) {
    const idx = orders.findIndex(o => o.orderId === orderId);
    if (idx === -1) return;

    if (confirm(`Permanently remove Order #${orderId} from your order list?`)) {
        orders.splice(idx, 1);
        saveOrders();
        renderOrdersDrawer();
        showToast(`Order <strong>#${orderId}</strong> removed from list.`, 'info');
    }
}

function reorderItems(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order || !order.items || order.items.length === 0) return;

    order.items.forEach(item => {
        addToCart(item, false);
    });

    closeOrdersDrawer();
    openCartDrawer();
    showToast(`Items from Order <strong>#${orderId}</strong> added to Bag! 🛍️`, 'bag');
}

function viewOrderInvoice(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    const modal = document.getElementById('invoice-modal');
    const overlay = document.getElementById('invoice-overlay');
    const content = document.getElementById('invoice-modal-content');
    if (!modal || !content) return;

    content.innerHTML = generateInvoiceHtml(order);

    if (overlay) overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function generateInvoiceHtml(order) {
    if (!order) return '';

    return `
        <div class="invoice-brand-header">
            <div style="display: flex; align-items: center; gap: 12px;">
                <img src="images/vhora_crest.png" alt="Vhora Crest" style="height: 38px; width: auto; object-fit: contain;">
                <div>
                    <div class="invoice-brand-logo" style="font-size: 17px; font-weight: 800; color: #14223d; letter-spacing: 1px;">VHORA CLOTHING</div>
                    <span style="font-size: 11px; color: #64748b;">Luxury Homegrown Apparel • Gold &amp; White Edition</span>
                </div>
            </div>
            <div style="text-align: right;">
                <span class="invoice-title-tag">TAX INVOICE</span>
                <div style="font-size: 11px; font-weight: 700; color: #14223d; margin-top: 4px;">#${order.orderId}</div>
            </div>
        </div>

        <div class="invoice-meta-grid">
            <div class="invoice-meta-item">
                <strong>Billed To:</strong>
                <span>${order.userName || 'Valued Customer'}</span>
                <span>${order.userEmail || 'user@example.com'}</span>
            </div>
            <div class="invoice-meta-item">
                <strong>Order Details:</strong>
                <span>Date: ${order.displayDate}</span>
                <span>Payment: ${order.paymentMethod || 'COD'}</span>
            </div>
        </div>

        <table class="invoice-items-table">
            <thead>
                <tr>
                    <th>Item Description</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th style="text-align: right;">Amount</th>
                </tr>
            </thead>
            <tbody>
                ${order.items.map(it => `
                    <tr>
                        <td>
                            <strong>${it.name}</strong>
                            <div style="font-size: 11px; color: #64748b;">${it.category || 'Vhora Fashion'}</div>
                        </td>
                        <td><strong>${it.size || 'M'}</strong></td>
                        <td>${it.quantity || 1}</td>
                        <td style="text-align: right; font-weight: 700;">${it.price}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>

        <div class="invoice-summary-box">
            <div class="invoice-summary-row">
                <span>Items Count:</span>
                <span>${order.itemCount || order.items.length} units</span>
            </div>
            <div class="invoice-summary-row">
                <span>Shipping:</span>
                <span style="color: #059669; font-weight: 700;">FREE Delivery</span>
            </div>
            ${order.couponCode ? `
                <div class="invoice-summary-row" style="color: #059669;">
                    <span>Coupon:</span>
                    <span>${order.couponCode}</span>
                </div>
            ` : ''}
            <div class="invoice-summary-row total">
                <span>Grand Total:</span>
                <span>${order.grandTotalStr || '₹ 1,499'}</span>
            </div>
        </div>

        <div class="invoice-footer-actions">
            <button type="button" class="invoice-print-btn" onclick="window.print()">
                <i class="fa-solid fa-print"></i> Print Invoice
            </button>
            <button type="button" class="order-action-btn invoice-btn" onclick="closeInvoiceModal()">
                Close
            </button>
        </div>
    `;
}

// Window bindings for inline onclick attributes
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.renderCartDrawer = renderCartDrawer;
window.addToCart = addToCart;
window.changeCartItemQty = changeCartItemQty;
window.removeFromCart = removeFromCart;
window.moveToWishlistFromCart = moveToWishlistFromCart;
window.applyPromoCode = applyPromoCode;
window.proceedToCheckout = proceedToCheckout;

window.openOrdersDrawer = openOrdersDrawer;
window.closeOrdersDrawer = closeOrdersDrawer;
window.renderOrdersDrawer = renderOrdersDrawer;
window.filterOrders = filterOrders;
window.cancelOrder = cancelOrder;
window.deleteOrder = deleteOrder;
window.reorderItems = reorderItems;
window.viewOrderInvoice = viewOrderInvoice;
window.closeInvoiceModal = closeInvoiceModal;

// Attach event listeners for Wishlist & Bag Toggle / Close
if (wishlistToggle) {
    wishlistToggle.addEventListener('click', openWishlistDrawer);
    wishlistToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openWishlistDrawer();
        }
    });
}

if (wishlistCloseBtn) {
    wishlistCloseBtn.addEventListener('click', closeWishlistDrawer);
}

if (wishlistOverlay) {
    wishlistOverlay.addEventListener('click', closeWishlistDrawer);
}

if (cartToggle) {
    cartToggle.addEventListener('click', (e) => {
        e.preventDefault();
        openCartDrawer();
    });
    cartToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openCartDrawer();
        }
    });
}

if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', closeCartDrawer);
}

if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCartDrawer);
}

if (ordersToggle) {
    ordersToggle.addEventListener('click', (e) => {
        e.preventDefault();
        openOrdersDrawer();
    });
    ordersToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openOrdersDrawer();
        }
    });
}

if (ordersCloseBtn) {
    ordersCloseBtn.addEventListener('click', closeOrdersDrawer);
}

if (ordersOverlay) {
    ordersOverlay.addEventListener('click', closeOrdersDrawer);
}

if (invoiceOverlay) {
    invoiceOverlay.addEventListener('click', closeInvoiceModal);
}

const cartPromoInput = document.getElementById('cart-promo-input');
if (cartPromoInput) {
    cartPromoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            applyPromoCode();
        }
    });
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
    closeWishlistDrawer();
    closeCartDrawer();
    closeOrdersDrawer();
    closeInvoiceModal();
    closeAuthModal();
    closeProductModal();

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
        if (!isAnyDrawerOrModalOpen()) {
            document.body.style.overflow = '';
        }
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

// Close on Escape key press (for drawers and modals)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (sidebarDrawer && sidebarDrawer.classList.contains('active')) {
            closeSidebar();
        }
        if (wishlistDrawer && wishlistDrawer.classList.contains('active')) {
            closeWishlistDrawer();
        }
        if (cartDrawer && cartDrawer.classList.contains('active')) {
            closeCartDrawer();
        }
        if (ordersDrawer && ordersDrawer.classList.contains('active')) {
            closeOrdersDrawer();
        }
        if (invoiceModal && invoiceModal.classList.contains('active')) {
            closeInvoiceModal();
        }
        if (authModal && authModal.classList.contains('active')) {
            closeAuthModal();
        }
        const prodModal = document.getElementById('product-modal');
        if (prodModal && prodModal.classList.contains('active')) {
            closeProductModal();
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

// ========================================================
// PRODUCT SIZE & DETAILS MODAL SYSTEM
// ========================================================
let currentModalProduct = null;
let modalSelectedSize = '';
let modalQuantity = 1;

function getDefaultSizesForCategory(category) {
    const cat = (category || '').toLowerCase();
    if (cat.includes('perfume') || cat.includes('fragrance') || cat.includes('parfum') || cat.includes('oud') || cat.includes('cologne') || cat.includes('scent')) {
        return ['50ml', '100ml'];
    }
    if (cat.includes('bag') || cat.includes('handbag') || cat.includes('cards') || cat.includes('sunglasses')) {
        return ['Free Size'];
    }
    if (cat.includes('women') && (cat.includes('pants') || cat.includes('cargo') || cat.includes('skirt'))) {
        return ['26', '28', '30', '32', '34'];
    }
    if (cat.includes('pants') || cat.includes('jeans') || cat.includes('cargo') || cat.includes('denim') || cat.includes('cotton pants')) {
        return ['28', '30', '32', '34', '36'];
    }
    if (cat.includes('sneaker') || cat.includes('shoe') || cat.includes('runner') || cat.includes('court') || cat.includes('footwear')) {
        return ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'];
    }
    return ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
}

function selectCardSize(e, btn) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const card = btn.closest('.arrival-card, .trending-card');
    if (!card) return;

    const size = btn.getAttribute('data-size');
    const wasActive = btn.classList.contains('active');

    // Deselect all other pills in this card
    const allPills = card.querySelectorAll('.card-size-pill');
    allPills.forEach(p => p.classList.remove('active'));

    const quickBuyBtn = card.querySelector('.quick-buy-btn');

    if (wasActive) {
        card.removeAttribute('data-selected-size');
        if (quickBuyBtn) {
            quickBuyBtn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> BUY NOW';
        }
    } else {
        btn.classList.add('active');
        card.setAttribute('data-selected-size', size);
        if (quickBuyBtn) {
            quickBuyBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> BUY NOW • SIZE ${size}`;
        }
    }
}

function initCardSizeSelectors() {
    const allCards = document.querySelectorAll('.arrival-card, .trending-card');
    allCards.forEach(card => {
        // 1. Add click listener to card to open Product Size Modal when clicking img or info
        const imgBox = card.querySelector('.arrival-img-box, .trending-img-box');
        const infoBox = card.querySelector('.arrival-info, .trending-info');

        if (imgBox && !imgBox.dataset.modalAttached) {
            imgBox.dataset.modalAttached = 'true';
            imgBox.addEventListener('click', (e) => {
                if (e.target.closest('.wishlist-btn') || e.target.closest('.card-size-selector') || e.target.closest('.quick-buy-btn')) {
                    return;
                }
                openProductModalFromCard(card);
            });
        }

        if (infoBox && !infoBox.dataset.modalAttached) {
            infoBox.dataset.modalAttached = 'true';
            infoBox.addEventListener('click', () => {
                openProductModalFromCard(card);
            });
        }

        // 2. Inject on-card size selector if not already present
        if (imgBox && !imgBox.querySelector('.card-size-selector')) {
            const product = getProductDataFromCard(card);
            const sizes = getDefaultSizesForCategory(product ? product.category : '');
            
            const selectorDiv = document.createElement('div');
            selectorDiv.className = 'card-size-selector';
            selectorDiv.setAttribute('onclick', 'event.stopPropagation()');

            const label = document.createElement('span');
            label.className = 'card-size-label';
            label.textContent = 'SIZE';
            selectorDiv.appendChild(label);

            const pillsDiv = document.createElement('div');
            pillsDiv.className = 'card-size-pills';

            sizes.forEach(sz => {
                const pillBtn = document.createElement('button');
                pillBtn.type = 'button';
                pillBtn.className = 'card-size-pill';
                pillBtn.setAttribute('data-size', sz);
                pillBtn.textContent = sz;
                pillBtn.addEventListener('click', (e) => selectCardSize(e, pillBtn));
                pillsDiv.appendChild(pillBtn);
            });

            selectorDiv.appendChild(pillsDiv);

            const quickBuyBtn = imgBox.querySelector('.quick-buy-btn');
            if (quickBuyBtn) {
                imgBox.insertBefore(selectorDiv, quickBuyBtn);
            } else {
                imgBox.appendChild(selectorDiv);
            }
        }
    });
}

function openProductModalFromCard(card, highlightSize = false) {
    const product = getProductDataFromCard(card);
    if (!product) return;
    const cardSelectedSize = card.getAttribute('data-selected-size') || '';
    openProductModal(product, cardSelectedSize, highlightSize);
}

function openProductModal(product, preselectedSize = '', highlightSize = false) {
    closeWishlistDrawer();
    closeCartDrawer();
    closeOrdersDrawer();
    closeInvoiceModal();
    closeSidebar();
    closeAuthModal();

    currentModalProduct = product;
    modalSelectedSize = preselectedSize || '';
    modalQuantity = 1;

    // Populate modal details
    const imgEl = document.getElementById('modal-product-img');
    const titleEl = document.getElementById('modal-product-title');
    const catEl = document.getElementById('modal-product-category');
    const priceEl = document.getElementById('modal-product-price');
    const mrpEl = document.getElementById('modal-product-mrp');
    const qtyDisplay = document.getElementById('modal-qty-display');
    const wishlistBtn = document.getElementById('modal-wishlist-icon-btn');
    const sizePillsGrid = document.getElementById('modal-size-pills-grid');
    const selectedSizeText = document.getElementById('modal-selected-size-text');
    const stockStatusText = document.getElementById('modal-size-stock-text');
    const stockStatusBox = document.getElementById('modal-size-stock-status');
    const sizeSection = document.getElementById('product-modal-size-section');
    const buyBtn = document.getElementById('modal-buy-now-btn');

    if (imgEl) imgEl.src = product.image;
    if (titleEl) titleEl.textContent = product.name;
    if (catEl) catEl.textContent = product.category;
    if (priceEl) priceEl.textContent = product.price;

    const numPrice = parseInt((product.price || '1499').replace(/[^0-9]/g, '')) || 1499;
    if (mrpEl) mrpEl.textContent = `₹ ${numPrice + 800}`;
    if (qtyDisplay) qtyDisplay.textContent = '1';

    // Update wishlist state on modal button
    if (wishlistBtn) {
        const isWishlisted = wishlist.some(item => item.id === product.id);
        const icon = wishlistBtn.querySelector('i');
        if (isWishlisted) {
            wishlistBtn.classList.add('active');
            if (icon) { icon.classList.remove('fa-regular'); icon.classList.add('fa-solid'); }
        } else {
            wishlistBtn.classList.remove('active');
            if (icon) { icon.classList.remove('fa-solid'); icon.classList.add('fa-regular'); }
        }
    }

    // Populate size selection buttons
    if (sizePillsGrid) {
        sizePillsGrid.innerHTML = '';
        const sizes = getDefaultSizesForCategory(product.category);
        sizes.forEach(sz => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `size-pill-btn ${sz === modalSelectedSize ? 'active' : ''}`;
            btn.textContent = sz;
            btn.onclick = () => selectModalSize(sz);
            sizePillsGrid.appendChild(btn);
        });
    }

    // Update size label & stock
    if (selectedSizeText) {
        selectedSizeText.textContent = modalSelectedSize ? `Size: ${modalSelectedSize}` : 'None selected';
    }

    if (stockStatusText && stockStatusBox) {
        stockStatusBox.classList.remove('warning');
        if (modalSelectedSize) {
            stockStatusText.textContent = `Size ${modalSelectedSize} is In Stock • Express Dispatch`;
        } else {
            stockStatusText.textContent = 'Please select a size to proceed with purchase';
        }
    }

    if (buyBtn) {
        buyBtn.innerHTML = modalSelectedSize 
            ? `<i class="fa-solid fa-bag-shopping"></i> ADD TO BAG • SIZE ${modalSelectedSize}`
            : '<i class="fa-solid fa-bag-shopping"></i> ADD TO BAG';
    }

    // Update size guide table
    updateSizeGuideTable(product.category);

    // Open modal
    const overlay = document.getElementById('product-modal-overlay');
    const modal = document.getElementById('product-modal');
    if (overlay && modal) {
        overlay.classList.add('active');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    if (highlightSize && sizeSection) {
        sizeSection.classList.add('highlight-pulse');
        setTimeout(() => sizeSection.classList.remove('highlight-pulse'), 1200);
    }
}

function updateSizeGuideTable(category) {
    const tbody = document.getElementById('modal-size-guide-body');
    if (!tbody) return;
    const cat = (category || '').toLowerCase();

    if (cat.includes('pants') || cat.includes('jeans') || cat.includes('cargo') || cat.includes('denim') || cat.includes('cotton pants')) {
        tbody.innerHTML = `
            <tr><td><strong>28</strong></td><td>28-29"</td><td>39.5"</td><td>Slim Fit</td></tr>
            <tr><td><strong>30</strong></td><td>30-31"</td><td>40.0"</td><td>Regular Fit</td></tr>
            <tr><td><strong>32</strong></td><td>32-33"</td><td>40.5"</td><td>Regular Fit</td></tr>
            <tr><td><strong>34</strong></td><td>34-35"</td><td>41.0"</td><td>Relaxed Fit</td></tr>
            <tr><td><strong>36</strong></td><td>36-37"</td><td>41.5"</td><td>Relaxed Fit</td></tr>
        `;
    } else if (cat.includes('sneaker') || cat.includes('shoe') || cat.includes('runner') || cat.includes('court') || cat.includes('footwear')) {
        tbody.innerHTML = `
            <tr><td><strong>UK 7</strong></td><td>26.0 cm</td><td>Euro 41</td><td>US 8</td></tr>
            <tr><td><strong>UK 8</strong></td><td>26.8 cm</td><td>Euro 42</td><td>US 9</td></tr>
            <tr><td><strong>UK 9</strong></td><td>27.5 cm</td><td>Euro 43</td><td>US 10</td></tr>
            <tr><td><strong>UK 10</strong></td><td>28.3 cm</td><td>Euro 44</td><td>US 11</td></tr>
            <tr><td><strong>UK 11</strong></td><td>29.2 cm</td><td>Euro 45</td><td>US 12</td></tr>
        `;
    } else {
        tbody.innerHTML = `
            <tr><td><strong>S</strong></td><td>38"</td><td>27.5"</td><td>Regular</td></tr>
            <tr><td><strong>M</strong></td><td>40"</td><td>28.5"</td><td>Regular</td></tr>
            <tr><td><strong>L</strong></td><td>42"</td><td>29.5"</td><td>Relaxed</td></tr>
            <tr><td><strong>XL</strong></td><td>44"</td><td>30.5"</td><td>Relaxed</td></tr>
            <tr><td><strong>XXL</strong></td><td>46"</td><td>31.5"</td><td>Oversized</td></tr>
        `;
    }
}

function closeProductModal() {
    const overlay = document.getElementById('product-modal-overlay');
    const modal = document.getElementById('product-modal');
    if (overlay && modal) {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        if (!isAnyDrawerOrModalOpen()) {
            document.body.style.overflow = '';
        }
    }
    const drawer = document.getElementById('size-guide-drawer');
    if (drawer) drawer.style.display = 'none';
}

function toggleSizeGuide() {
    const drawer = document.getElementById('size-guide-drawer');
    if (drawer) {
        drawer.style.display = drawer.style.display === 'none' ? 'block' : 'none';
    }
}

function selectModalSize(size) {
    modalSelectedSize = size;

    // Update active pill in modal
    const allPills = document.querySelectorAll('#modal-size-pills-grid .size-pill-btn');
    allPills.forEach(p => {
        if (p.textContent.trim() === size) {
            p.classList.add('active');
        } else {
            p.classList.remove('active');
        }
    });

    const selectedSizeText = document.getElementById('modal-selected-size-text');
    if (selectedSizeText) selectedSizeText.textContent = `Size: ${size}`;

    const stockStatusText = document.getElementById('modal-size-stock-text');
    const stockStatusBox = document.getElementById('modal-size-stock-status');
    if (stockStatusText && stockStatusBox) {
        stockStatusBox.classList.remove('warning');
        stockStatusText.textContent = `Size ${size} is In Stock • Express Dispatch`;
    }

    const buyBtn = document.getElementById('modal-buy-now-btn');
    if (buyBtn) {
        buyBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> ADD TO BAG • SIZE ${size}`;
    }
}

function changeModalQty(delta) {
    modalQuantity = Math.max(1, Math.min(10, modalQuantity + delta));
    const qtyDisplay = document.getElementById('modal-qty-display');
    if (qtyDisplay) qtyDisplay.textContent = modalQuantity;
}

function buyModalProduct() {
    if (!currentModalProduct) return;

    if (!modalSelectedSize) {
        const sizeSection = document.getElementById('product-modal-size-section');
        const stockStatusText = document.getElementById('modal-size-stock-text');
        const stockStatusBox = document.getElementById('modal-size-stock-status');

        if (sizeSection) {
            sizeSection.classList.add('highlight-pulse');
            setTimeout(() => sizeSection.classList.remove('highlight-pulse'), 1200);
        }
        if (stockStatusText && stockStatusBox) {
            stockStatusBox.classList.add('warning');
            stockStatusText.textContent = '⚠️ Please select a size first!';
        }
        showToast('Please select a size first before adding to bag!', 'warning');
        return;
    }

    const productToBuy = {
        ...currentModalProduct,
        size: modalSelectedSize,
        quantity: modalQuantity
    };

    if (!currentUser) {
        closeProductModal();
        pendingAction = { type: 'buy', product: productToBuy };
        showToast('🔒 Login or Register is compulsory to buy products!', 'warning');
        openAuthModal('login', '🔒 Login or Register is compulsory to buy products and checkout');
        return;
    }

    addToCart(productToBuy);
    closeProductModal();
    showToast(`Added <strong>${productToBuy.name} (Size: ${modalSelectedSize})</strong> to Bag! 🛍️`, 'bag');
}

function wishlistModalProduct() {
    if (!currentModalProduct) return;
    const productWithOptSize = {
        ...currentModalProduct,
        size: modalSelectedSize || ''
    };

    const existingIndex = wishlist.findIndex(item => item.id === productWithOptSize.id);
    const wishlistBtn = document.getElementById('modal-wishlist-icon-btn');
    const icon = wishlistBtn ? wishlistBtn.querySelector('i') : null;

    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        saveWishlist();
        if (wishlistBtn) wishlistBtn.classList.remove('active');
        if (icon) { icon.classList.remove('fa-solid'); icon.classList.add('fa-regular'); }
        showToast(`Removed <strong>${productWithOptSize.name}</strong> from Wishlist`, 'info');
    } else {
        wishlist.push(productWithOptSize);
        saveWishlist();
        if (wishlistBtn) wishlistBtn.classList.add('active');
        if (icon) { icon.classList.remove('fa-regular'); icon.classList.add('fa-solid'); }
        showToast(`Added <strong>${productWithOptSize.name}</strong> to Wishlist ❤️`, 'heart');
    }
}

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
            addToCart(action.product, true);
            const sizeLabel = action.product.size ? ` (Size: ${action.product.size})` : '';
            showToast(`Success! <strong>${action.product.name}${sizeLabel}</strong> added to Bag 🛍️`, 'bag');
        } else if (action.type === 'checkout') {
            openCartDrawer();
            proceedToCheckout();
        } else if (action.type === 'viewOrders') {
            openOrdersDrawer();
        }
    }, 400);
}

function openAuthModal(defaultTab = 'login', compulsoryReason = '') {
    closeSidebar();
    closeWishlistDrawer();
    closeCartDrawer();
    closeOrdersDrawer();
    closeInvoiceModal();
    closeProductModal();

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
        if (!isAnyDrawerOrModalOpen()) {
            document.body.style.overflow = '';
        }
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
    if (titleEl) titleEl.textContent = 'Welcome to Vhora Clothing';
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
    showToast(`Welcome to Vhora Clothing, ${newUser.name}! 🎉`, 'success');
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
    updateOrdersUI();
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

// ========================================================
// ADVANCED INTERACTIVE SEARCH SYSTEM
// ========================================================
const searchCatalog = [
    {
        id: "easy-pants-taupe-grey",
        name: "Easy Pants: Taupe Grey",
        category: "Men Cotton Pants",
        price: "₹ 1699",
        image: "images/new_arrivals_1.jpg",
        tags: ["arrivals", "new", "clothing", "pants", "cotton", "bottomwear"]
    },
    {
        id: "tss-originals-night-shadow",
        name: "TSS Originals: Night Shadow",
        category: "Shirts",
        price: "₹ 1599",
        image: "images/new_arrivals_2.jpg",
        tags: ["arrivals", "new", "clothing", "shirts", "topwear", "originals", "black"]
    },
    {
        id: "tss-originals-blue-fire",
        name: "TSS Originals: Blue Fire",
        category: "Men Winter Wear",
        price: "₹ 1599",
        image: "images/new_arrivals_3.jpg",
        tags: ["arrivals", "new", "clothing", "winterwear", "hoodies", "blue", "jackets"]
    },
    {
        id: "doctor-sleeve-grape-mist",
        name: "Doctor Sleeve: Grape Mist",
        category: "T-Shirts",
        price: "₹ 1199",
        image: "images/new_arrivals_4.jpg",
        tags: ["arrivals", "new", "clothing", "t-shirts", "tees", "topwear", "purple"]
    },
    {
        id: "tss-originals-forest-mist",
        name: "TSS Originals: Forest Mist",
        category: "T-Shirts",
        price: "₹ 1199",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",
        tags: ["arrivals", "new", "clothing", "t-shirts", "tees", "green", "cotton"]
    },
    {
        id: "cargo-pants-olive-drab",
        name: "Cargo Pants: Olive Drab",
        category: "Men Cotton Pants",
        price: "₹ 1799",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=400&q=80",
        tags: ["arrivals", "new", "clothing", "pants", "cargo", "olive", "bottomwear"]
    },
    {
        id: "cuban-collar-sand-dune",
        name: "Cuban Collar: Sand Dune",
        category: "Shirts",
        price: "₹ 1499",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80",
        tags: ["arrivals", "new", "clothing", "shirts", "cuban", "linen", "topwear"]
    },
    {
        id: "fleece-hoodie-heather-slate",
        name: "Fleece Hoodie: Heather Slate",
        category: "Men Winter Wear",
        price: "₹ 1899",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80",
        tags: ["arrivals", "new", "clothing", "winterwear", "hoodies", "sweatshirt", "fleece"]
    },
    {
        id: "attack-on-titan-the-last-attack",
        name: "Attack On Titan: The Last Attack",
        category: "Men Relaxed Shirts",
        price: "₹ 1499",
        image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1791371657_6901059.jpg?w=360&dpr=2",
        tags: ["trending", "merch", "anime", "attack on titan", "shirts", "culture-code"]
    },
    {
        id: "ghost-rider-fire-skull",
        name: "Ghost Rider: Fire Skull",
        category: "Oversized T-Shirts",
        price: "₹ 1199",
        image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1789134712_4789350.jpg?w=360&dpr=2",
        tags: ["trending", "marvel", "merch", "ghost rider", "t-shirts", "tees", "oversized"]
    },
    {
        id: "spider-man-rise-of-the-spider",
        name: "Spider-Man: Rise Of The Spider",
        category: "Oversized T-Shirts",
        price: "₹ 1699",
        image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1783081914_3435976.jpg?w=360&dpr=2",
        tags: ["trending", "marvel", "spider-man", "spiderman", "merch", "t-shirts", "tees"]
    },
    {
        id: "dc-justice-league",
        name: "DC: Justice League",
        category: "Playing Cards",
        price: "₹ 899",
        image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1787589871_3537946.jpg?w=360&dpr=2",
        tags: ["trending", "merch", "dc", "justice league", "accessories", "cards"]
    },
    {
        id: "colourblock-cocoa",
        name: "Colourblock: Cocoa",
        category: "Oversized Polos",
        price: "₹ 1499",
        image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1772867066_1636022.jpg?w=360&dpr=2",
        tags: ["trending", "polos", "shirts", "t-shirts", "weekday-edit", "brown"]
    },
    {
        id: "dragon-ball-z-goku",
        name: "Dragon Ball Z: Goku",
        category: "Oversized Jerseys",
        price: "₹ 1499",
        image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1786515306_8325362.jpg?w=360&dpr=2",
        tags: ["trending", "merch", "anime", "dragon ball z", "goku", "jerseys", "t-shirts"]
    },
    {
        id: "spider-man-hyper-web",
        name: "Spider-Man: Hyper Web",
        category: "Men Oversized Joggers",
        price: "₹ 2099",
        image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1784964208_3534964.jpg?w=360&dpr=2",
        tags: ["trending", "marvel", "spider-man", "spiderman", "pants", "joggers", "bottomwear"]
    },
    {
        id: "peanuts-the-good-life",
        name: "Peanuts: The Good Life",
        category: "Cotton Linen Shirts",
        price: "₹ 1699",
        image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1761736618_6567601.jpg?w=360&dpr=2",
        tags: ["trending", "merch", "peanuts", "snoopy", "shirts", "linen", "topwear"]
    },
    {
        id: "printed-resort-casual-shirt",
        name: "Printed Resort Casual Shirt",
        category: "Shirts",
        price: "₹ 1499",
        image: "images/product_trending_1.jpg",
        tags: ["shirts", "topwear", "printed", "resort", "summer", "vacation"]
    },
    {
        id: "vintage-corduroy-overshirt",
        name: "Vintage Corduroy Overshirt",
        category: "Shirts",
        price: "₹ 1799",
        image: "images/product_trending_2.jpg",
        tags: ["shirts", "corduroy", "overshirt", "topwear", "vintage", "jacket"]
    },
    {
        id: "streetwear-heavyweight-hoodie",
        name: "Streetwear Heavyweight Hoodie",
        category: "Hoodies & Sweatshirts",
        price: "₹ 1999",
        image: "images/product_trending_3.jpg",
        tags: ["hoodie", "sweatshirt", "winterwear", "topwear", "streetwear", "heavyweight"]
    },
    {
        id: "tailored-relaxed-fit-chinos",
        name: "Tailored Relaxed Fit Chinos",
        category: "Pants",
        price: "₹ 1599",
        image: "images/bottomwear_1.jpg",
        tags: ["pants", "chinos", "bottomwear", "trousers", "formal", "casual"]
    },
    {
        id: "utility-cargo-jogger-pants",
        name: "Utility Cargo Jogger Pants",
        category: "Pants",
        price: "₹ 1899",
        image: "images/bottomwear_2.jpg",
        tags: ["pants", "cargo", "joggers", "bottomwear", "utility", "streetwear"]
    },
    {
        id: "vintage-leather-crossbody-bag",
        name: "Vintage Leather Crossbody Bag",
        category: "Accessories",
        price: "₹ 1299",
        image: "images/accessories_1.jpg",
        tags: ["accessories", "bags", "crossbody", "leather", "vintage", "wallet"]
    },
    {
        id: "retro-polarized-sunglasses",
        name: "Retro Polarized Sunglasses",
        category: "Accessories",
        price: "₹ 899",
        image: "images/accessories_2.jpg",
        tags: ["accessories", "sunglasses", "eyewear", "retro", "polarized", "shades"]
    },
    {
        id: "premium-woven-leather-sneakers",
        name: "Premium Woven Leather Sneakers",
        category: "Sneakers",
        price: "₹ 2499",
        image: "images/accessories_4.jpg",
        tags: ["sneakers", "shoes", "footwear", "leather", "accessories", "kicks"]
    },
    {
        id: "satin-slip-maxi-dress-emerald-rose",
        name: "Satin Slip Maxi Dress: Emerald Rose",
        category: "Women Dresses",
        price: "₹ 2499",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
        tags: ["women", "dresses", "maxi", "satin", "evening", "party"]
    },
    {
        id: "relaxed-linen-blazer-trouser-coord-beige-sand",
        name: "Relaxed Linen Blazer & Trouser Co-ord: Beige Sand",
        category: "Women Co-Ords",
        price: "₹ 2899",
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=600&q=80",
        tags: ["women", "co-ord", "blazer", "linen", "suit", "formal", "beige"]
    },
    {
        id: "floral-midi-sundress-blossom-whisper",
        name: "Floral Midi Sundress: Blossom Whisper",
        category: "Women Dresses",
        price: "₹ 1899",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
        tags: ["women", "dresses", "floral", "midi", "summer", "vacation"]
    },
    {
        id: "high-rise-wide-leg-cargo-olive-slate",
        name: "High-Rise Wide Leg Cargo: Olive Slate",
        category: "Women Pants & Cargo",
        price: "₹ 1799",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
        tags: ["women", "pants", "cargo", "wide leg", "high rise", "bottomwear"]
    },
    {
        id: "oversized-boyfriend-graphic-tee-tokyo-drift",
        name: "Oversized Boyfriend Graphic Tee: Tokyo Drift",
        category: "Women Oversized T-Shirts",
        price: "₹ 1199",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
        tags: ["women", "t-shirts", "oversized", "graphic", "streetwear", "tees"]
    },
    {
        id: "vintage-ribbed-crop-top-ivory-mist",
        name: "Vintage Ribbed Crop Top: Ivory Mist",
        category: "Women Tops",
        price: "₹ 899",
        image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=600&q=80",
        tags: ["women", "tops", "crop top", "ribbed", "summer", "ivory"]
    },
    {
        id: "cropped-knit-cardigan-powder-blue",
        name: "Cropped Knit Cardigan: Powder Blue",
        category: "Women Winterwear",
        price: "₹ 1699",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
        tags: ["women", "winterwear", "cardigan", "knitwear", "sweater", "blue"]
    },
    {
        id: "pleated-tennis-mini-skirt-pure-white",
        name: "Pleated Tennis Mini Skirt: Pure White",
        category: "Women Skirts",
        price: "₹ 1299",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80",
        tags: ["women", "skirts", "pleated", "tennis", "mini", "white"]
    },
    {
        id: "vegan-leather-slouchy-shoulder-bag-caramel",
        name: "Vegan Leather Slouchy Shoulder Bag: Caramel",
        category: "Women Handbags & Accessories",
        price: "₹ 1599",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
        tags: ["women", "accessories", "bags", "shoulder bag", "leather", "tote"]
    },
    {
        id: "oversized-fleece-hoodie-blush-sorbet",
        name: "Oversized Fleece Hoodie: Blush Sorbet",
        category: "Women Winterwear",
        price: "₹ 1999",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
        tags: ["women", "winterwear", "hoodie", "fleece", "oversized", "blush"]
    },
    {
        id: "apex-cyber-chunky-runner",
        name: "Apex Cyber Chunky Runner: Acid Volt",
        category: "Chunky Sneakers",
        price: "₹ 3499",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
        tags: ["sneakers", "shoes", "runners", "chunky", "footwear", "streetwear", "volt"]
    },
    {
        id: "heritage-retro-high-top",
        name: "Heritage Retro High-Top: Crimson & Onyx",
        category: "High-Top Sneakers",
        price: "₹ 3999",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        tags: ["sneakers", "shoes", "high top", "retro", "crimson", "red", "kicks", "footwear"]
    },
    {
        id: "pure-court-minimalist-leather",
        name: "Pure Court Minimalist: Off-White Nappa",
        category: "Court Sneakers",
        price: "₹ 2799",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
        tags: ["sneakers", "shoes", "minimalist", "court", "white", "leather", "classic", "footwear"]
    },
    {
        id: "vortex-nitro-running-shoe",
        name: "Vortex Nitro Carbon: Stealth Grey",
        category: "Performance Runners",
        price: "₹ 3799",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
        tags: ["sneakers", "shoes", "runners", "running", "performance", "grey", "nitro", "footwear"]
    },
    {
        id: "ozone-high-top-shadow-edition",
        name: "Ozone High-Top: Shadow Monochrome",
        category: "High-Top Sneakers",
        price: "₹ 4299",
        image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=600&q=80",
        tags: ["sneakers", "shoes", "high top", "monochrome", "black", "streetwear", "footwear"]
    },
    {
        id: "urban-strider-raw-terracotta",
        name: "Urban Strider Low: Raw Terracotta",
        category: "Casual Sneakers",
        price: "₹ 2599",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
        tags: ["sneakers", "shoes", "casual", "vans", "skate", "terracotta", "low", "footwear"]
    },
    {
        id: "aero-cloud-foam-comfort-runner",
        name: "Aero Cloud-Foam Runner: Chalk White",
        category: "Comfort Runners",
        price: "₹ 2999",
        image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80",
        tags: ["sneakers", "shoes", "runners", "white", "cloud", "comfort", "lifestyle", "footwear"]
    },
    {
        id: "velocity-trail-runner-carbon",
        name: "Velocity Trail-Runner: Dark Olive & Flame",
        category: "Trail Runners",
        price: "₹ 3699",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80",
        tags: ["sneakers", "shoes", "trail", "runner", "black", "dark", "footwear"]
    },
    {
        id: "hydro-slide-cloud-cushion",
        name: "Hydro-Slide Recovery Mule: Desert Dune",
        category: "Slides & Mules",
        price: "₹ 1499",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
        tags: ["sneakers", "slides", "mules", "sandals", "slip on", "dune", "footwear"]
    },
    {
        id: "zenith-retro-basketball-sneaker",
        name: "Zenith Retro Basketball: Classic Royal",
        category: "Retro Sneakers",
        price: "₹ 3899",
        image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=600&q=80",
        tags: ["sneakers", "shoes", "retro", "basketball", "royal", "blue", "kicks", "footwear"]
    },
    {
        id: "urban-commuter-utility-backpack",
        name: "Urban Commuter Utility Backpack: Stealth Black",
        category: "Backpacks",
        price: "₹ 2499",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        tags: ["accessories", "backpacks", "bags", "utility", "black", "travel"]
    },
    {
        id: "marvel-infinity-gauntlet",
        name: "Marvel: Infinity Gauntlet Insulated Steel Bottle",
        category: "Drinkware",
        price: "₹ 1299",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
        tags: ["accessories", "merch", "bottle", "steel", "marvel", "gold"]
    },
    {
        id: "vintage-leather-bi-fold-wallet",
        name: "Vintage Leather Bi-Fold Wallet: Tan Brown",
        category: "Wallets",
        price: "₹ 1199",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
        tags: ["accessories", "wallets", "leather", "bifold", "brown"]
    },
    {
        id: "heritage-structured-baseball-cap",
        name: "Heritage Structured Baseball Cap: Navy & Gold",
        category: "Caps",
        price: "₹ 799",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
        tags: ["accessories", "caps", "hats", "navy", "headwear"]
    },
    {
        id: "rick-and-morty-portal-hop",
        name: "Rick & Morty: Portal Hop Keyring & Pin Set",
        category: "Keychains",
        price: "₹ 499",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80",
        tags: ["accessories", "merch", "keychains", "pins", "rick and morty"]
    },
    {
        id: "vintage-washed-relaxed-jeans",
        name: "Vintage Washed Relaxed Jeans: Classic Indigo",
        category: "Jeans",
        price: "₹ 2199",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
        tags: ["bottomwear", "jeans", "denim", "indigo", "pants"]
    },
    {
        id: "vhora-royale-oud-al-sultan",
        name: "Vhora Royale: Oud Al-Sultan Extrait de Parfum",
        category: "Extrait de Parfum",
        price: "₹ 3899",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
        tags: ["perfume", "fragrance", "oud", "oriental", "amber", "extrait", "scent", "luxury"]
    },
    {
        id: "sante-blanche-velvet-vanilla",
        name: "Santé Blanche: Velvet Vanilla & Smoked Birch",
        category: "Eau de Parfum",
        price: "₹ 3299",
        image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
        tags: ["perfume", "fragrance", "vanilla", "gourmand", "tonka", "birch", "parfum"]
    },
    {
        id: "nocturne-noir-tuscan-leather",
        name: "Nocturne Noir: Italian Bergamot & Tuscan Leather",
        category: "Extrait de Parfum",
        price: "₹ 3699",
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
        tags: ["perfume", "fragrance", "leather", "bergamot", "woody", "black", "extrait"]
    },
    {
        id: "aqua-celestia-sicilian-lemon",
        name: "Aqua Celestia: Sicilian Lemon & Mineral Sea Salt",
        category: "Eau de Parfum",
        price: "₹ 2899",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
        tags: ["perfume", "fragrance", "fresh", "aquatic", "citrus", "lemon", "summer"]
    },
    {
        id: "fleur-imperiale-turkish-rose",
        name: "Fleur Impériale: Turkish Rose & Cashmere Musk",
        category: "Extrait de Parfum",
        price: "₹ 3499",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80",
        tags: ["perfume", "fragrance", "rose", "floral", "musk", "cashmere", "extrait"]
    },
    {
        id: "tobacco-rouge-cuban-cacao",
        name: "Tobacco Rouge: Sweet Honey, Cuban Tobacco & Cacao",
        category: "Eau de Parfum",
        price: "₹ 3599",
        image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&q=80",
        tags: ["perfume", "fragrance", "tobacco", "honey", "cacao", "warm", "woody"]
    },
    {
        id: "soleil-dor-golden-neroli",
        name: "Soleil D'Or: Golden Neroli & Orange Blossom",
        category: "Eau de Parfum",
        price: "₹ 2999",
        image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=600&q=80",
        tags: ["perfume", "fragrance", "neroli", "citrus", "floral", "fresh", "solar"]
    },
    {
        id: "ambre-mystique-mysore-sandalwood",
        name: "Ambre Mystique: Labdanum, Benzoin & Mysore Sandalwood",
        category: "Extrait de Parfum",
        price: "₹ 3999",
        image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=600&q=80",
        tags: ["perfume", "fragrance", "amber", "sandalwood", "benzoin", "oud", "extrait"]
    }
];

const trendingSearches = [
    { text: "Perfumes", icon: "fa-spray-can-sparkles" },
    { text: "Oud", icon: "fa-wand-magic-sparkles" },
    { text: "Women's Edit", icon: "fa-sparkles" },
    { text: "Dresses", icon: "fa-vest" },
    { text: "Printed Shirts", icon: "fa-fire" },
    { text: "Cargo Pants", icon: "fa-vest-patches" },
    { text: "Oversized Tees", icon: "fa-shirt" },
    { text: "Sneakers", icon: "fa-shoe-prints" },
    { text: "Spider-Man", icon: "fa-mask" },
    { text: "Winterwear", icon: "fa-snowflake" },
    { text: "Linen", icon: "fa-leaf" }
];

let currentSearchQuery = '';
let currentSearchCategory = 'all';
let searchDebounceTimer = null;
let speechRecognizer = null;
let isListeningVoice = false;

function initSearch() {
    const searchInput = document.getElementById('site-search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const searchSubmitBtn = document.getElementById('search-submit-btn');
    const searchOverlay = document.getElementById('search-overlay');

    if (!searchInput) return;

    // Input typing listener with debounce
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (searchClearBtn) {
            if (val.length > 0) {
                searchClearBtn.classList.add('visible');
            } else {
                searchClearBtn.classList.remove('visible');
            }
        }

        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
            renderSearchDropdown(val);
        }, 120);
    });

    // Focus opens dropdown
    searchInput.addEventListener('focus', () => {
        renderSearchDropdown(searchInput.value.trim());
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            executeSearch();
        } else if (e.key === 'Escape') {
            closeSearchDropdown();
            searchInput.blur();
        }
    });

    // Initialize speech recognition if supported
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognitionAPI) {
        try {
            speechRecognizer = new SpeechRecognitionAPI();
            speechRecognizer.continuous = false;
            speechRecognizer.interimResults = false;
            speechRecognizer.lang = 'en-US';

            speechRecognizer.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                if (searchInput) {
                    searchInput.value = transcript;
                    if (searchClearBtn) searchClearBtn.classList.add('visible');
                }
                stopVoiceSearchAnimation();
                showToast(`🎙️ Voice heard: "<strong>${transcript}</strong>"`, 'search');
                executeSearch(transcript);
            };

            speechRecognizer.onerror = (event) => {
                stopVoiceSearchAnimation();
                if (event.error !== 'no-speech') {
                    showToast('Voice search: ' + (event.error || 'could not recognize voice'), 'info');
                }
            };

            speechRecognizer.onend = () => {
                stopVoiceSearchAnimation();
            };
        } catch (e) {
            console.warn('Speech recognition setup error:', e);
        }
    }
}

function highlightMatch(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function renderSearchDropdown(query) {
    const dropdown = document.getElementById('search-dropdown');
    const overlay = document.getElementById('search-overlay');
    if (!dropdown) return;

    const trimmed = (query || '').toLowerCase().trim();

    if (!trimmed) {
        // Show trending tags and category quick links
        let tagsHtml = trendingSearches.map(t => `
            <button type="button" class="search-quick-tag" onclick="quickSearchSelect('${t.text}')">
                <i class="fa-solid ${t.icon}"></i> ${t.text}
            </button>
        `).join('');

        let topPicksHtml = searchCatalog.slice(0, 3).map(p => `
            <div class="search-suggest-item" onclick="selectSearchResult('${p.id}')">
                <img src="${p.image}" alt="${p.name}" class="search-suggest-img" loading="lazy">
                <div class="search-suggest-info">
                    <p class="search-suggest-title">${p.name}</p>
                    <div class="search-suggest-meta">
                        <span class="search-suggest-cat">${p.category}</span>
                        <span class="search-suggest-price">${p.price}</span>
                    </div>
                </div>
                <i class="fa-solid fa-chevron-right search-suggest-arrow"></i>
            </div>
        `).join('');

        dropdown.innerHTML = `
            <div class="search-dropdown-section">
                <div class="search-section-header">
                    <span><i class="fa-solid fa-arrow-trend-up"></i> Trending Searches</span>
                </div>
                <div class="search-quick-tags">
                    ${tagsHtml}
                </div>
            </div>
            <div class="search-dropdown-section" style="margin-top: 14px;">
                <div class="search-section-header">
                    <span><i class="fa-solid fa-fire"></i> Popular Picks</span>
                </div>
                <div class="search-suggest-list">
                    ${topPicksHtml}
                </div>
            </div>
        `;
    } else {
        // Filter catalog
        const matches = searchCatalog.filter(p => {
            const nameMatch = p.name.toLowerCase().includes(trimmed);
            const catMatch = p.category.toLowerCase().includes(trimmed);
            const tagMatch = p.tags && p.tags.some(t => t.toLowerCase().includes(trimmed));
            return nameMatch || catMatch || tagMatch;
        });

        if (matches.length === 0) {
            dropdown.innerHTML = `
                <div class="search-empty-box">
                    <div class="search-empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <h4 class="search-empty-title">No products found for "${query}"</h4>
                    <p class="search-empty-desc">Try searching for shirts, pants, hoodies, or merch</p>
                    <div class="search-quick-tags" style="justify-content: center;">
                        <button type="button" class="search-quick-tag" onclick="quickSearchSelect('Shirts')">Shirts</button>
                        <button type="button" class="search-quick-tag" onclick="quickSearchSelect('Pants')">Pants</button>
                        <button type="button" class="search-quick-tag" onclick="quickSearchSelect('Hoodies')">Hoodies</button>
                    </div>
                </div>
            `;
        } else {
            const displayItems = matches.slice(0, 5);
            const itemsHtml = displayItems.map(p => `
                <div class="search-suggest-item" onclick="selectSearchResult('${p.id}')">
                    <img src="${p.image}" alt="${p.name}" class="search-suggest-img" loading="lazy">
                    <div class="search-suggest-info">
                        <p class="search-suggest-title">${highlightMatch(p.name, query)}</p>
                        <div class="search-suggest-meta">
                            <span class="search-suggest-cat">${highlightMatch(p.category, query)}</span>
                            <span class="search-suggest-price">${p.price}</span>
                        </div>
                    </div>
                    <i class="fa-solid fa-chevron-right search-suggest-arrow"></i>
                </div>
            `).join('');

            dropdown.innerHTML = `
                <div class="search-dropdown-section">
                    <div class="search-section-header">
                        <span><i class="fa-solid fa-magnifying-glass"></i> Suggested Products (${matches.length})</span>
                    </div>
                    <div class="search-suggest-list">
                        ${itemsHtml}
                    </div>
                </div>
                <button type="button" class="search-dropdown-footer-btn" onclick="executeSearch()">
                    <i class="fa-solid fa-magnifying-glass"></i> View all ${matches.length} results for "${query}"
                </button>
            `;
        }
    }

    dropdown.classList.add('active');
    if (overlay) overlay.classList.add('active');
}

function quickSearchSelect(text) {
    const input = document.getElementById('site-search-input');
    const clearBtn = document.getElementById('search-clear-btn');
    if (input) {
        input.value = text;
        if (clearBtn) clearBtn.classList.add('visible');
    }
    executeSearch(text);
}

function selectSearchResult(productId) {
    const product = searchCatalog.find(p => p.id === productId);
    closeSearchDropdown();
    if (product) {
        openProductModal(product);
    }
}

function executeSearch(queryOverride) {
    const input = document.getElementById('site-search-input');
    const query = (queryOverride !== undefined ? queryOverride : (input ? input.value : '')).trim();

    if (!query) {
        if (input) input.focus();
        showToast('Please type a search query (e.g. Shirts, Cargo Pants)', 'info');
        return;
    }

    if (input && input.value !== query) {
        input.value = query;
        const clearBtn = document.getElementById('search-clear-btn');
        if (clearBtn) clearBtn.classList.add('visible');
    }

    currentSearchQuery = query;
    currentSearchCategory = 'all';

    closeSearchDropdown();

    // Close mobile search bar on mobile screens
    const searchBar = document.getElementById('search-bar-container');
    if (searchBar) searchBar.classList.remove('mobile-open');

    // Filter products
    const trimmed = query.toLowerCase();
    const matches = searchCatalog.filter(p => {
        const nameMatch = p.name.toLowerCase().includes(trimmed);
        const catMatch = p.category.toLowerCase().includes(trimmed);
        const tagMatch = p.tags && p.tags.some(t => t.toLowerCase().includes(trimmed));
        return nameMatch || catMatch || tagMatch;
    });

    // Reveal and update search results section
    const resultsSection = document.getElementById('search-results-section');
    const queryDisplay = document.getElementById('search-query-display');
    const countDisplay = document.getElementById('search-results-count');
    const filterTags = document.getElementById('search-filter-tags');

    if (resultsSection) {
        resultsSection.style.display = 'block';
    }
    if (queryDisplay) {
        queryDisplay.textContent = query;
    }
    if (countDisplay) {
        countDisplay.textContent = `${matches.length} product${matches.length === 1 ? '' : 's'} found`;
    }

    // Reset filter pills to "All"
    if (filterTags) {
        filterTags.querySelectorAll('.search-tag-pill').forEach((btn, idx) => {
            if (idx === 0) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    renderSearchResultsGrid(matches);
    updateWishlistUI();

    // Smooth scroll into results section
    if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function renderSearchResultsGrid(products) {
    const grid = document.getElementById('search-results-grid');
    if (!grid) return;

    if (!products || products.length === 0) {
        grid.innerHTML = `
            <div class="search-no-results-box">
                <i class="fa-solid fa-box-open"></i>
                <h3>No products found</h3>
                <p>We couldn't find matching items in this category. Try selecting another filter or clear search.</p>
                <div class="search-no-results-tags">
                    <button type="button" class="search-tag-pill active" onclick="filterSearchResults('all', document.querySelector('.search-filter-tags .search-tag-pill'))">Show All Results</button>
                    <button type="button" class="search-clear-section-btn" onclick="clearAndCloseSearch()"><i class="fa-solid fa-xmark"></i> Clear Search</button>
                </div>
            </div>
        `;
        return;
    }

    grid.innerHTML = products.map(product => {
        const isWishlisted = wishlist.some(item => item.id === product.id);
        const numPrice = parseInt(product.price.replace(/[^0-9]/g, '')) || 1499;
        const mrp = numPrice + 800;

        return `
            <div class="search-card" data-product-id="${product.id}" data-selected-size="">
                <div class="search-card-img-box" onclick="selectSearchResult('${product.id}')">
                    <img src="${product.image}" alt="${product.name}" class="search-card-img" loading="lazy">
                    <span class="search-card-badge">HOT</span>
                    <button type="button" class="search-card-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(event, this)" aria-label="Add to wishlist" title="Add to Wishlist">
                        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <div class="search-card-sizes" onclick="event.stopPropagation()">
                        <span class="search-card-size-pill" onclick="selectSearchCardSize(event, this, 'S')">S</span>
                        <span class="search-card-size-pill" onclick="selectSearchCardSize(event, this, 'M')">M</span>
                        <span class="search-card-size-pill" onclick="selectSearchCardSize(event, this, 'L')">L</span>
                        <span class="search-card-size-pill" onclick="selectSearchCardSize(event, this, 'XL')">XL</span>
                        <span class="search-card-size-pill" onclick="selectSearchCardSize(event, this, 'XXL')">XXL</span>
                    </div>
                </div>
                <div class="search-card-info">
                    <span class="search-card-cat">${product.category}</span>
                    <h3 class="search-card-name" onclick="selectSearchResult('${product.id}')">${product.name}</h3>
                    <div class="search-card-price-row">
                        <span class="search-card-price">${product.price}</span>
                        <span class="search-card-mrp">₹ ${mrp}</span>
                        <span class="search-card-discount">35% OFF</span>
                    </div>
                    <div class="search-card-actions">
                        <button type="button" class="search-card-buy-btn" onclick="buyProduct(event, this)">
                            <i class="fa-solid fa-bag-shopping"></i> ADD TO BAG
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function selectSearchCardSize(e, pill, size) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const card = pill.closest('.search-card');
    if (!card) return;

    const sizeContainer = pill.parentElement;
    if (sizeContainer) {
        sizeContainer.querySelectorAll('.search-card-size-pill').forEach(p => p.classList.remove('active'));
    }

    pill.classList.add('active');
    card.setAttribute('data-selected-size', size);

    const buyBtn = card.querySelector('.search-card-buy-btn');
    if (buyBtn) {
        buyBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> BUY NOW • SIZE ${size}`;
    }
}

function filterSearchResults(category, btn) {
    currentSearchCategory = category;

    // Update active button state
    if (btn) {
        const parent = btn.parentElement;
        if (parent) {
            parent.querySelectorAll('.search-tag-pill').forEach(b => b.classList.remove('active'));
        }
        btn.classList.add('active');
    }

    // Filter current results by category
    const trimmed = (currentSearchQuery || '').toLowerCase();
    const baseMatches = searchCatalog.filter(p => {
        const nameMatch = p.name.toLowerCase().includes(trimmed);
        const catMatch = p.category.toLowerCase().includes(trimmed);
        const tagMatch = p.tags && p.tags.some(t => t.toLowerCase().includes(trimmed));
        return nameMatch || catMatch || tagMatch;
    });

    let filtered = baseMatches;
    if (category === 'shirts') {
        filtered = baseMatches.filter(p => p.category.toLowerCase().includes('shirt') || (p.tags && p.tags.includes('shirts')));
    } else if (category === 'pants') {
        filtered = baseMatches.filter(p => p.category.toLowerCase().includes('pant') || p.category.toLowerCase().includes('jogger') || (p.tags && p.tags.includes('pants')));
    } else if (category === 't-shirts') {
        filtered = baseMatches.filter(p => p.category.toLowerCase().includes('t-shirt') || p.category.toLowerCase().includes('polo') || p.category.toLowerCase().includes('jersey') || (p.tags && p.tags.includes('t-shirts')));
    } else if (category === 'hoodies') {
        filtered = baseMatches.filter(p => p.category.toLowerCase().includes('winter') || p.category.toLowerCase().includes('hoodie') || p.category.toLowerCase().includes('sweatshirt'));
    } else if (category === 'accessories') {
        filtered = baseMatches.filter(p => p.category.toLowerCase().includes('accessories') || p.category.toLowerCase().includes('card') || (p.tags && p.tags.includes('accessories')));
    } else if (category === 'sneakers') {
        filtered = baseMatches.filter(p => p.category.toLowerCase().includes('sneaker') || p.category.toLowerCase().includes('kicks') || p.category.toLowerCase().includes('runner') || p.category.toLowerCase().includes('shoe') || p.category.toLowerCase().includes('slide') || (p.tags && (p.tags.includes('sneakers') || p.tags.includes('shoes') || p.tags.includes('footwear'))));
    }

    const countDisplay = document.getElementById('search-results-count');
    if (countDisplay) {
        countDisplay.textContent = `${filtered.length} product${filtered.length === 1 ? '' : 's'} found`;
    }

    renderSearchResultsGrid(filtered);
    updateWishlistUI();
}

function clearSearchInput() {
    const input = document.getElementById('site-search-input');
    const clearBtn = document.getElementById('search-clear-btn');
    if (input) {
        input.value = '';
        input.focus();
    }
    if (clearBtn) {
        clearBtn.classList.remove('visible');
    }
    renderSearchDropdown('');
}

function clearAndCloseSearch() {
    clearSearchInput();
    closeSearchDropdown();

    const resultsSection = document.getElementById('search-results-section');
    if (resultsSection) {
        resultsSection.style.display = 'none';
    }

    currentSearchQuery = '';
    currentSearchCategory = 'all';

    showToast('Search cleared', 'info');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeSearchDropdown() {
    const dropdown = document.getElementById('search-dropdown');
    const overlay = document.getElementById('search-overlay');
    if (dropdown) dropdown.classList.remove('active');
    if (overlay) overlay.classList.remove('active');

    const searchBar = document.getElementById('search-bar-container');
    if (searchBar) searchBar.classList.remove('active');
}

function startVoiceSearch() {
    if (!speechRecognizer) {
        showToast('Voice search is not supported on this browser. Please type to search!', 'info');
        const input = document.getElementById('site-search-input');
        if (input) input.focus();
        return;
    }

    const micBtn = document.getElementById('search-mic-btn');

    if (isListeningVoice) {
        speechRecognizer.stop();
        stopVoiceSearchAnimation();
        return;
    }

    try {
        isListeningVoice = true;
        if (micBtn) micBtn.classList.add('listening');
        showToast('🎙️ Listening... Speak now (e.g. "Cargo Pants", "Shirts")', 'search');
        speechRecognizer.start();
    } catch (e) {
        console.warn('Voice recognition start error:', e);
        stopVoiceSearchAnimation();
    }
}

function stopVoiceSearchAnimation() {
    isListeningVoice = false;
    const micBtn = document.getElementById('search-mic-btn');
    if (micBtn) micBtn.classList.remove('listening');
}

function toggleMobileSearch() {
    const searchBar = document.getElementById('search-bar-container');
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('site-search-input');

    if (!searchBar) return;

    if (searchBar.classList.contains('mobile-open')) {
        searchBar.classList.remove('mobile-open');
        closeSearchDropdown();
    } else {
        searchBar.classList.add('mobile-open');
        if (overlay) overlay.classList.add('active');
        if (input) {
            input.focus();
            renderSearchDropdown(input.value.trim());
        }
    }
}

// ========================================================
// ========================================================
// WOMEN'S SECTION & GENDER NAVIGATION LOGIC
// ========================================================
function switchHeaderNav(gender) {
    const path = (window.location.pathname || '').toLowerCase();
    const isWomenPage = path.endsWith('/women.html') || path.includes('/women.html');
    const isSneakersPage = path.endsWith('/sneakers.html') || path.includes('/sneakers.html');
    const isPerfumesPage = path.endsWith('/perfumes.html') || path.includes('/perfumes.html');
    const isMenPage = !isWomenPage && !isSneakersPage && !isPerfumesPage;

    if (gender === 'perfumes') {
        if (isPerfumesPage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            showToast("✨ You are viewing Vhora Haute Parfumerie", "perfumes");
        } else {
            window.location.href = 'perfumes.html';
        }
    } else if (gender === 'women') {
        if (isWomenPage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            showToast("🌸 You are viewing The Women's Edit", "women");
        } else {
            window.location.href = 'women.html';
        }
    } else if (gender === 'sneakers') {
        if (isSneakersPage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            showToast("👟 You are viewing The Sneakers Vault", "sneakers");
        } else {
            window.location.href = 'sneakers.html';
        }
    } else if (gender === 'men') {
        if (isMenPage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            showToast("⚡ You are viewing Men's Collection", "men");
        } else {
            window.location.href = 'index.html';
        }
    }
}

function updateActiveNavTab() {
    const path = (window.location.pathname || '').toLowerCase();
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => link.classList.remove('active'));

    const sidebarTabs = document.querySelectorAll('.sidebar-tab');
    sidebarTabs.forEach(tab => tab.classList.remove('active'));

    let activeGender = 'men';
    if (path.includes('women.html')) {
        activeGender = 'women';
    } else if (path.includes('sneakers.html')) {
        activeGender = 'sneakers';
    } else if (path.includes('perfumes.html')) {
        activeGender = 'perfumes';
    }

    const activeItem = document.getElementById(`nav-item-${activeGender}`);
    if (activeItem) {
        activeItem.classList.add('active');
    }

    sidebarTabs.forEach(tab => {
        if (tab.getAttribute('data-gender') === activeGender) {
            tab.classList.add('active');
        }
    });
}

function switchSidebarGender(gender) {
    closeSidebar();
    switchHeaderNav(gender);
}

function filterWomenSection(category, btn) {
    // Update active state on filter pills
    const pills = document.querySelectorAll('#women-filter-bar .women-pill');
    pills.forEach(p => p.classList.remove('active'));
    if (btn) {
        btn.classList.add('active');
    }

    const cards = document.querySelectorAll('#women-products-grid .women-card');
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category') || '';
        if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function selectWomenCardSize(e, pill, size) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const card = pill.closest('.women-card');
    if (!card) return;

    const sizeContainer = pill.parentElement;
    if (sizeContainer) {
        sizeContainer.querySelectorAll('.women-card-size-pill').forEach(p => p.classList.remove('active'));
    }

    pill.classList.add('active');
    card.setAttribute('data-selected-size', size);

    const buyBtn = card.querySelector('.women-card-buy-btn');
    if (buyBtn) {
        buyBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> BUY NOW • SIZE ${size}`;
    }
}

function filterSneakersSection(category, btn) {
    // Update active state on filter pills
    const pills = document.querySelectorAll('#sneakers-filter-bar .sneakers-pill');
    pills.forEach(p => p.classList.remove('active'));
    if (btn) {
        btn.classList.add('active');
    }

    const cards = document.querySelectorAll('#sneakers-products-grid .sneaker-card');
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-sneaker-cat') || '';
        if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function selectSneakerCardSize(e, pill, size) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const card = pill.closest('.sneaker-card');
    if (!card) return;

    const sizeContainer = pill.parentElement;
    if (sizeContainer) {
        sizeContainer.querySelectorAll('.sneaker-card-size-pill').forEach(p => p.classList.remove('active'));
    }

    pill.classList.add('active');
    card.setAttribute('data-selected-size', size);

    const buyBtn = card.querySelector('.sneaker-card-buy-btn');
    if (buyBtn) {
        buyBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> BUY NOW • ${size}`;
    }
}

function selectCatCardSize(e, pill, size) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const card = pill.closest('.cat-product-card');
    if (!card) return;

    const sizeContainer = pill.parentElement;
    if (sizeContainer) {
        sizeContainer.querySelectorAll('.cat-product-size-pill').forEach(p => p.classList.remove('active'));
    }

    pill.classList.add('active');
    card.setAttribute('data-selected-size', size);

    const buyBtn = card.querySelector('.cat-product-buy-btn');
    if (buyBtn) {
        buyBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> BUY NOW • ${size}`;
    }
}

function filterTopwearSection(category, btn) {
    const pills = document.querySelectorAll('#topwear-filter-bar .category-filter-pill');
    pills.forEach(p => p.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const cards = document.querySelectorAll('#topwear-products-grid .cat-product-card');
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category') || '';
        if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterBottomwearSection(category, btn) {
    const pills = document.querySelectorAll('#bottomwear-filter-bar .category-filter-pill');
    pills.forEach(p => p.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const cards = document.querySelectorAll('#bottomwear-products-grid .cat-product-card');
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category') || '';
        if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterAccessoriesSection(category, btn) {
    const pills = document.querySelectorAll('#accessories-filter-bar .category-filter-pill');
    pills.forEach(p => p.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const cards = document.querySelectorAll('#accessories-products-grid .cat-product-card');
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category') || '';
        if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Global exports for inline HTML onclick handlers
window.initSearch = initSearch;
window.renderSearchDropdown = renderSearchDropdown;
window.quickSearchSelect = quickSearchSelect;
window.selectSearchResult = selectSearchResult;
window.executeSearch = executeSearch;
window.filterSearchResults = filterSearchResults;
window.clearSearchInput = clearSearchInput;
window.clearAndCloseSearch = clearAndCloseSearch;
window.closeSearchDropdown = closeSearchDropdown;
window.startVoiceSearch = startVoiceSearch;
window.toggleMobileSearch = toggleMobileSearch;
window.selectSearchCardSize = selectSearchCardSize;
window.switchHeaderNav = switchHeaderNav;
window.switchSidebarGender = switchSidebarGender;
window.filterWomenSection = filterWomenSection;
window.selectWomenCardSize = selectWomenCardSize;
window.filterSneakersSection = filterSneakersSection;
window.selectSneakerCardSize = selectSneakerCardSize;
window.openProductModalFromCard = openProductModalFromCard;
window.selectCatCardSize = selectCatCardSize;
window.updateActiveNavTab = updateActiveNavTab;
function filterPerfumesSection(category, btn) {
    const pills = document.querySelectorAll('#perfumes-filter-bar .perfume-pill');
    pills.forEach(p => p.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const cards = document.querySelectorAll('#perfumes-products-grid .perfume-card');
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category') || '';
        if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function selectPerfumeCardSize(e, pill, size) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const card = pill.closest('.perfume-card');
    if (!card) return;

    const sizeContainer = pill.parentElement;
    if (sizeContainer) {
        sizeContainer.querySelectorAll('.perfume-card-size-pill').forEach(p => p.classList.remove('active'));
    }

    pill.classList.add('active');
    card.setAttribute('data-selected-size', size);

    const buyBtn = card.querySelector('.perfume-card-buy-btn');
    if (buyBtn) {
        buyBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> ADD TO BAG • ${size}`;
    }
}

window.filterPerfumesSection = filterPerfumesSection;
window.selectPerfumeCardSize = selectPerfumeCardSize;
window.filterTopwearSection = filterTopwearSection;
window.filterBottomwearSection = filterBottomwearSection;
window.filterAccessoriesSection = filterAccessoriesSection;

// Initialize on DOM ready
function initStore() {
    updateActiveNavTab();
    loadWishlist();
    loadCart();
    loadOrders();
    loadUserSession();
    initCardSizeSelectors();
    initSearch();
}

document.addEventListener('DOMContentLoaded', initStore);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initStore();
}