document.addEventListener('DOMContentLoaded', function() {
    // --- Referensi Elemen DOM & Konstanta ---
    const categoryNav = document.getElementById('category-nav');
    const menuContent = document.getElementById('menu-content');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results');
    const noResultsMessage = document.getElementById('no-results');
    const floatingCart = document.getElementById('floating-cart');
    const openCartButton = document.getElementById('open-cart-button');
    const totalPriceBar = document.getElementById('total-price-bar');
    const itemCountBadge = document.getElementById('item-count-badge');
    const orderModal = document.getElementById('order-modal');
    const closeModalButton = document.getElementById('close-modal-button');
    const modalCartItems = document.getElementById('modal-cart-items');
    const modalTotalPrice = document.getElementById('modal-total-price');
    const orderButton = document.getElementById('order-button');
    const whatsappNumber = '6281336777726';

    const menuData = {
        "Menu Komplit": { note: "Sudah Include Nasi Putih", items: [ { name: "Nasi Ayam Kremes (Paha Potong)", price: 20000 }, { name: "Nasi Ayam Kremes Kampung (Paha/Dada)", price: 30000 }, { name: "Nasi Tempong Ayam Kampung (Paha/Dada)", price: 25000 }, { name: "Nasi Tempong Ayam Potong (Paha)", price: 25000 }, { name: "Nasi Tempong Polos", price: 12000 }, { name: "Nasi Garang Asem (Paha/Dada)", price: 30000 }, { name: "Nasi Ikan Pe Goreng", price: 16000 }, { name: "Nasi Ikan Pe Kuah", price: 18000 }, { name: "Nasi Ayam Bakar Kampung (Paha/Dada)", price: 35000 }, ] },
        "Lauk": { note: "Belum Include Nasi Putih", items: [ { name: "1 Ekor Ayam Ingkung Kampung", price: 85000 }, { name: "Ayam Goreng Kremes (Paha Potong)", price: 15000 }, { name: "Ayam Goreng Kremes Kampung (Paha/Dada)", price: 25000 }, { name: "Bebek Goreng (Paha/Dada)", price: 30000 }, { name: "Ayam Bakar Kampung (Paha/Dada)", price: 30000 }, { name: "Burung Dara", price: 36000 }, { name: "Usus Ayam", price: 10000 }, { name: "Kulit Ayam", price: 12000 }, { name: "Ceker Ayam", price: 15000 }, { name: "Kepala Ayam isi 4", price: 9000 }, { name: "Kepala Bebek isi 3", price: 15000 }, { name: "Babat", price: 16000 }, { name: "Kikil", price: 15000 }, { name: "Nila", price: 18000 }, { name: "Lele isi 2", price: 15000 }, { name: "Teri", price: 7000 }, { name: "Ikan Asin", price: 10000 }, { name: "Tahu Tempe", price: 6000 }, { name: "Sop Buntut", price: 45000 }, { name: "Iga Bakar", price: 45000 }, { name: "Cumi Goreng", price: 20000 }, { name: "Udang Goreng", price: 17000 }, { name: "Nasi Putih", price: 5000 }, ] },
        "Sayur": { note: null, items: [ { name: "Tumis Kangkung Polos", price: 10000 }, { name: "Tumis Tauge Polos", price: 10000 }, { name: "Tumis Tauge Teri Medan", price: 15000 }, { name: "Sayur Asem", price: 9000 }, ] },
        "Sambelan": { note: "Belum Include Nasi Putih", items: [ { name: "Sambal Terasi Segar", price: 5000 }, { name: "Sambal Terasi Matang", price: 4500 }, { name: "Sambal Tempong", price: 4500 }, { name: "Sambal Kecap", price: 4000 }, { name: "Sambal Thailand", price: 6000 }, { name: "Sambal Dabu - Dabu", price: 6000 }, { name: "Sambal Tahu Tempe", price: 8000 }, { name: "Sambal Bakar", price: 6000 }, { name: "Sambal Bakar Kikil", price: 14000 }, { name: "Sambal Bakar Teri", price: 10000 }, { name: "Sambal Bakar Udang", price: 17000 }, { name: "Sambal Bakar Cumi", price: 17000 }, { name: "Sambal Bakar Babat", price: 16000 }, ] },
        "Chinese & Seafood": { note: null, items: [ { name: "Nasi Hainan Ayam Panggang", price: 32000 }, { name: "Nasi Hainan Ayam Rebus", price: 30000 }, { name: "Ayam Panggang 1 Ekor", price: 110000 }, { name: "Ayam Panggang 1/2 Ekor", price: 65000 }, { name: "Ayam Rebus 1 Ekor", price: 95000 }, { name: "Ayam Rebus 1/2 Ekor", price: 45000 }, { name: "Gurami Jimbaran Besar", price: 75000 }, { name: "Gurami Jimbaran Sedang", price: 60000 }, { name: "Gurami Goreng Dabu - Dabu Besar", price: 75000 }, { name: "Gurami Goreng Dabu - Dabu Sedang", price: 60000 }, { name: "Udang Bakar Jimbaran", price: 40000 }, { name: "Kerang Bakar Jimbaran", price: 40000 }, ] },
        "Minuman": { note: null, items: [ { name: "Es Teh Manis", price: 5000 }, { name: "Es Teh Tawar", price: 4000 }, { name: "Lemon Tea", price: 10000 }, { name: "Es Jeruk", price: 8000 }, { name: "Es Markisa", price: 8000 }, { name: "Es Cincau", price: 7000 }, { name: "Es Milo", price: 10000 }, { name: "Soda Gembira", price: 10000 }, { name: "Es Lychee Tea", price: 10000 }, { name: "Ice Markisa Squash", price: 16000 }, { name: "Ice Mango Squash", price: 16000 }, { name: "Ice Lemon Squash", price: 16000 }, { name: "Ice Lychee Squash", price: 16000 }, { name: "Ice Orange Coco", price: 16000 }, { name: "Es Serut Melon", price: 10000 }, { name: "Thai Tea", price: 12000 }, { name: "Ice Taro", price: 14000 }, { name: "Ice Matcha", price: 15000 }, { name: "Mineral Water", price: 5000 },] },
        "Ice Coffe": { note: null, items: [ { name: "Ice Coffe Beer", price: 10000 }, { name: "Ice Americano", price: 12000 }, { name: "Ice Coffe Latte", price: 16000 }, { name: "Ice Cappucino", price: 16000 }, { name: "Ice Brown Sugar", price: 17000 }, ] },
        "Minuman Hangat": { note: null, items: [ { name: "Extra Shoot", price: 3000 }, { name: "Teh Manis Hangat", price: 4000 }, { name: "Teh Tawar Hangat", price: 3000 }, { name: "Wedang Jahe", price: 7000 }, { name: "Wedang Teh Jahe", price: 7000 }, { name: "Wedang Jahe Serai", price: 8000 }, { name: "Milo Hangat", price: 10000 }, { name: "Americano Hangat", price: 11000 }, { name: "Cappucino", price: 16000 }, ] },
    };
    let allMenuItems = [];
    let cart = {};

    const formatRupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);

    function flattenMenuItems() {
        allMenuItems = Object.entries(menuData).flatMap(([category, data]) => 
            data.items.map(item => ({ ...item, category }))
        );
    }
    
    function renderMenuItem(item, isSearchResult = false) {
        const categoryBadgeHTML = isSearchResult ? `<span class="category-badge">${item.category}</span>` : '';
        return `
            <div class="menu-item p-4 rounded-xl flex items-center justify-between">
                <div class="mr-4">
                    <p class="font-semibold text-moka-dark">${item.name} ${categoryBadgeHTML}</p>
                    <p class="text-sm text-moka-blue font-bold">${formatRupiah(item.price)}</p>
                </div>
                <div class="quantity-selector flex items-center bg-moka-bg rounded-full border border-moka-light-gray">
                    <button class="quantity-minus text-moka-blue w-10 h-10 text-2xl font-bold">-</button>
                    <input type="number" class="quantity-input w-12 h-10 text-center font-bold text-moka-dark bg-transparent focus:outline-none" 
                           value="${cart[item.name] || 0}" min="0" data-name="${item.name}" data-price="${item.price}">
                    <button class="quantity-plus text-moka-blue w-10 h-10 text-2xl font-bold">+</button>
                </div>
            </div>
        `;
    }
    
    function renderMenuAndNav() {
        menuContent.innerHTML = '';
        categoryNav.innerHTML = '';

        const chipsContainer = document.createElement('div');
        chipsContainer.className = 'flex items-center gap-3 overflow-x-auto pb-3';
        categoryNav.appendChild(chipsContainer);

        Object.keys(menuData).forEach((category, index) => {
            const categoryId = category.toLowerCase().replace(/ & /g, ' dan ').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            const data = menuData[category];
            const chip = document.createElement('a');
            chip.href = `#${categoryId}`;
            chip.textContent = category;
            chip.className = 'category-chip flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold';
            if (index === 0) chip.classList.add('active');
            chipsContainer.appendChild(chip);

            const section = document.createElement('section');
            section.id = categoryId;
            section.className = 'menu-section pt-4';
            const itemsHTML = data.items.map(item => renderMenuItem(item, false)).join('');
            
            section.innerHTML = `
                <div class="section-header py-4">
                    <h2 class="font-bold text-2xl text-moka-dark">${category}</h2>
                    ${data.note ? `<p class="text-moka-gray text-sm mt-1">${data.note}</p>` : ''}
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-4">${itemsHTML}</div>
            `;
            menuContent.appendChild(section);
        });
        initObservers();
    }

    function renderSearchResults(results) {
        searchResultsContainer.innerHTML = `<div class="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-4">${results.map(item => renderMenuItem(item, true)).join('')}</div>`;
        initItemObservers(searchResultsContainer);
    }

    function updateOrder() {
        const selectedItems = [];
        let totalItems = 0;
        let totalPrice = 0;
        
        Object.keys(cart).forEach(itemName => {
            const quantity = cart[itemName];
            if (quantity > 0) {
                const menuItem = allMenuItems.find(item => item.name === itemName);
                if (menuItem) {
                    selectedItems.push({ ...menuItem, quantity });
                    totalItems += quantity;
                    totalPrice += menuItem.price * quantity;
                }
            }
        });

        floatingCart.classList.toggle('visible', totalItems > 0);
        itemCountBadge.textContent = totalItems;
        totalPriceBar.textContent = formatRupiah(totalPrice);
        modalTotalPrice.textContent = formatRupiah(totalPrice);
        orderButton.disabled = selectedItems.length === 0;

        if (selectedItems.length > 0) {
            modalCartItems.innerHTML = selectedItems.map(item => `
                <div class="flex justify-between items-center text-sm">
                    <div>
                        <p class="font-semibold text-moka-dark">${item.name}</p>
                        <p class="text-moka-gray">${item.quantity} &times; ${formatRupiah(item.price)}</p>
                    </div>
                    <p class="font-semibold text-moka-dark">${formatRupiah(item.quantity * item.price)}</p>
                </div>
            `).join('');
        } else {
            modalCartItems.innerHTML = `<p class="text-moka-gray text-center py-4">Keranjang Anda kosong.</p>`;
            toggleModal(false);
        }
        return selectedItems;
    }

    function handleSearch(event) {
        const query = event.target.value.toLowerCase().trim();

        if (query.length === 0) {
            menuContent.classList.remove('hidden');
            categoryNav.classList.remove('hidden');
            searchResultsContainer.classList.add('hidden');
            noResultsMessage.classList.add('hidden');
            return;
        }

        const filteredResults = allMenuItems.filter(item => item.name.toLowerCase().includes(query));

        menuContent.classList.add('hidden');
        categoryNav.classList.add('hidden');
        searchResultsContainer.classList.remove('hidden');

        if (filteredResults.length > 0) {
            renderSearchResults(filteredResults);
            noResultsMessage.classList.add('hidden');
        } else {
            searchResultsContainer.innerHTML = '';
            noResultsMessage.classList.remove('hidden');
        }
    }

    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInSlideUp 0.5s ease-out forwards`;
                itemObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const activeChip = document.querySelector(`.category-chip[href="#${id}"]`);
                if (activeChip) {
                    document.querySelectorAll('.category-chip').forEach(chip => chip.classList.remove('active'));
                    activeChip.classList.add('active');
                    activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            }
        });
    }, { rootMargin: "-30% 0px -70% 0px" });

    function initItemObservers(container) {
        const items = container.querySelectorAll('.menu-item');
        items.forEach(item => itemObserver.observe(item));
    }

    function initObservers() {
        initItemObservers(menuContent);
        document.querySelectorAll('.menu-section').forEach(section => sectionObserver.observe(section));
    }

    function toggleModal(visible) {
        orderModal.classList.toggle('visible', visible);
    }

    function generateWhatsAppLink() {
        const items = updateOrder();
        if (items.length === 0) return;
        let message = "*PESANAN BARU* 🌶️\n\n";
        message += "Halo Sambel Sambelan, saya mau pesan:\n\n";
        items.forEach(item => {
            message += `- ${item.name} (x${item.quantity})\n`;
        });
        message += "\nMohon diinfokan totalnya. Terima kasih.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }
    
    // Event listener utama
    document.addEventListener('click', (e) => {
        const chip = e.target.closest('.category-chip');
        if (chip) {
            e.preventDefault();
            const targetSection = document.querySelector(chip.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        const quantityBtn = e.target.closest('.quantity-plus, .quantity-minus');
        if (quantityBtn) {
            const input = quantityBtn.parentElement.querySelector('input');
            const itemName = input.dataset.name;
            let value = cart[itemName] || 0;
            value = quantityBtn.classList.contains('quantity-plus') ? value + 1 : Math.max(0, value - 1);
            cart[itemName] = value;
            input.value = value;
            if (navigator.vibrate) navigator.vibrate(50);
            updateOrder();
        }

        if (e.target.closest('#open-cart-button')) {
            toggleModal(true);
        }

        if (e.target.closest('#close-modal-button') || e.target === orderModal) {
            toggleModal(false);
        }

        if (e.target === orderButton) {
            generateWhatsAppLink();
        }
    });

    document.addEventListener('input', (e) => {
        if (e.target.classList.contains('quantity-input')) {
            let value = parseInt(e.target.value);
            if (isNaN(value) || value < 0) {
                value = 0;
            }
            const itemName = e.target.dataset.name;
            cart[itemName] = value;
            e.target.value = value;
            updateOrder();
        }
    });
    
    searchInput.addEventListener('input', handleSearch);

    // --- Inisialisasi Aplikasi ---
    flattenMenuItems();
    renderMenuAndNav();
    updateOrder();
});
