document.addEventListener('DOMContentLoaded', function() {
    // --- Referensi Elemen DOM & Konstanta ---
    const categoryNav = document.getElementById('category-nav');
    const menuTrack = document.getElementById('menu-track');
    const orderSummary = document.getElementById('order-summary');
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const totalPriceSpan = document.getElementById('total-price');
    const itemCountBadge = document.getElementById('item-count-badge');
    const orderButton = document.getElementById('order-button');
    const whatsappNumber = '6281336777726';
    let activeCategoryIndex = 0;

    // --- Database Menu (Lengkap) ---
    const menuData = {
        "Menu Komplit": { note: "Sudah Include Nasi Putih", items: [ { name: "Nasi Ayam Kremes (Paha Potong)", price: 20000 }, { name: "Nasi Ayam Kremes Kampung (Paha/Dada)", price: 30000 }, { name: "Nasi Tempong Ayam Kampung (Paha/Dada)", price: 25000 }, { name: "Nasi Tempong Polos", price: 12000 }, { name: "Nasi Garang Asem (Paha/Dada)", price: 30000 }, { name: "Nasi Ikan Pe Goreng", price: 16000 }, { name: "Nasi Ikan Pe Kuah", price: 18000 }, { name: "Nasi Ayam Bakar Kampung (Paha/Dada)", price: 35000 }, ] },
        "Lauk": { note: "Belum Include Nasi Putih", items: [ { name: "1 Ekor Ayam Ingkung Kampung", price: 85000 }, { name: "Ayam Goreng Kremes (Paha Potong)", price: 15000 }, { name: "Ayam Goreng Kremes Kampung (Paha/Dada)", price: 25000 }, { name: "Bebek Goreng (Paha/Dada)", price: 30000 }, { name: "Ayam Bakar Kampung (Paha/Dada)", price: 30000 }, { name: "Burung Dara", price: 36000 }, { name: "Usus Ayam", price: 10000 }, { name: "Kulit Ayam", price: 12000 }, { name: "Ceker Ayam", price: 15000 }, { name: "Kepala Ayam isi 4", price: 9000 }, { name: "Kepala Bebek isi 3", price: 15000 }, { name: "Babat", price: 16000 }, { name: "Kikil", price: 15000 }, { name: "Nila", price: 18000 }, { name: "Lele isi 2", price: 15000 }, { name: "Teri", price: 7000 }, { name: "Ikan Asin", price: 10000 }, { name: "Tahu Tempe", price: 6000 }, { name: "Sop Buntut", price: 45000 }, { name: "Iga Bakar", price: 45000 }, { name: "Cumi Goreng", price: 20000 }, { name: "Udang Goreng", price: 17000 }, { name: "Nasi Putih", price: 5000 }, ] },
        "Sayur": { note: null, items: [ { name: "Tumis Kangkung Polos", price: 10000 }, { name: "Tumis Tauge Polos", price: 10000 }, { name: "Tumis Tauge Teri Medan", price: 15000 }, { name: "Sayur Asem", price: 9000 }, ] },
        "Sambelan": { note: "Belum Include Nasi Putih", items: [ { name: "Sambal Terasi Segar", price: 5000 }, { name: "Sambal Terasi Matang", price: 4500 }, { name: "Sambal Tempong", price: 4500 }, { name: "Sambal Kecap", price: 4000 }, { name: "Sambal Thailand", price: 6000 }, { name: "Sambal Dabu - Dabu", price: 6000 }, { name: "Sambal Tahu Tempe", price: 8000 }, { name: "Sambal Bakar", price: 6000 }, { name: "Sambal Bakar Kikil", price: 14000 }, { name: "Sambal Bakar Teri", price: 10000 }, { name: "Sambal Bakar Udang", price: 17000 }, { name: "Sambal Bakar Cumi", price: 17000 }, { name: "Sambal Bakar Babat", price: 16000 }, ] },
        "Chinese & Seafood": { note: null, items: [ { name: "Nasi Hainan Ayam Panggang", price: 32000 }, { name: "Nasi Hainan Ayam Rebus", price: 30000 }, { name: "Ayam Panggang 1 Ekor", price: 110000 }, { name: "Ayam Panggang 1/2 Ekor", price: 65000 }, { name: "Ayam Rebus 1 Ekor", price: 95000 }, { name: "Ayam Rebus 1/2 Ekor", price: 45000 }, { name: "Gurami Jimbaran Besar", price: 75000 }, { name: "Gurami Jimbaran Sedang", price: 60000 }, { name: "Gurami Goreng Dabu - Dabu Besar", price: 75000 }, { name: "Gurami Goreng Dabu - Dabu Sedang", price: 60000 }, { name: "Udang Bakar Jimbaran", price: 40000 }, { name: "Kerang Bakar Jimbaran", price: 40000 }, ] },
        "Minuman": { note: null, items: [ { name: "Es Teh Manis", price: 5000 }, { name: "Es Teh Tawar", price: 4000 }, { name: "Lemon Tea", price: 10000 }, { name: "Es Jeruk", price: 8000 }, { name: "Es Markisa", price: 8000 }, { name: "Es Cincau", price: 7000 }, { name: "Es Milo", price: 10000 }, { name: "Soda Gembira", price: 10000 }, { name: "Es Lychee Tea", price: 10000 }, { name: "Ice Markisa Squash", price: 16000 }, { name: "Ice Mango Squash", price: 16000 }, { name: "Ice Lemon Squash", price: 16000 }, { name: "Ice Lychee Squash", price: 16000 }, { name: "Ice Orange Coco", price: 16000 }, { name: "Es Serut Melon", price: 10000 }, { name: "Thai Tea", price: 12000 }, { name: "Ice Taro", price: 14000 }, { name: "Ice Matcha", price: 15000 }, { name: "Mineral Water", price: 5000 }, { name: "Ice Coffe Beer", price: 10000 }, { name: "Ice Americano", price: 12000 }, { name: "Ice Coffe Latte", price: 16000 }, { name: "Ice Cappucino", price: 16000 }, { name: "Ice Brown Sugar", price: 17000 }, { name: "Extra Shoot", price: 3000 }, { name: "Teh Manis Hangat", price: 4000 }, { name: "Teh Tawar Hangat", price: 3000 }, { name: "Wedang Jahe", price: 7000 }, { name: "Wedang Teh Jahe", price: 7000 }, { name: "Wedang Jahe Serai", price: 8000 }, { name: "Milo Hangat", price: 10000 }, { name: "Americano Hangat", price: 11000 }, { name: "Cappucino", price: 16000 }, ] },
    };
    
    const formatRupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);

    function renderMenuAndNav() {
        const categories = Object.keys(menuData);
        categories.forEach((category, index) => {
            const navLink = document.createElement('a');
            navLink.href = '#';
            navLink.className = 'category-link block font-semibold text-gray-300 p-3 rounded-lg';
            navLink.textContent = category;
            navLink.dataset.index = index;
            if (index === 0) navLink.classList.add('active');
            categoryNav.appendChild(navLink);

            const menuPage = document.createElement('div');
            menuPage.className = 'menu-page w-full h-full flex-shrink-0 p-6 lg:p-10 overflow-y-auto';
            const categoryData = menuData[category];
            const itemsHTML = categoryData.items.map((item, itemIndex) => `
                <div class="menu-item bg-brand-light-dark p-4 rounded-xl flex items-center justify-between" style="animation-delay: ${itemIndex * 50}ms;">
                    <div class="mr-4">
                        <p class="font-semibold text-white">${item.name}</p>
                        <p class="text-sm text-brand-red font-bold">${formatRupiah(item.price)}</p>
                    </div>
                    <div class="quantity-selector flex items-center bg-brand-dark rounded-lg">
                        <button class="quantity-minus text-white w-10 h-10 text-xl">-</button>
                        <input type="number" class="quantity-input w-12 h-10 text-center font-bold text-white bg-transparent focus:outline-none" value="0" min="0" data-name="${item.name}" data-price="${item.price}">
                        <button class="quantity-plus text-white w-10 h-10 text-xl">+</button>
                    </div>
                </div>
            `).join('');
            menuPage.innerHTML = `
                <div class="max-w-4xl mx-auto">
                    <h2 class="font-poppins font-bold text-4xl text-white tracking-tight">${category}</h2>
                    ${categoryData.note ? `<p class="text-lg text-gray-400 mt-1">${categoryData.note}</p>` : ''}
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">${itemsHTML}</div>
                </div>
            `;
            menuTrack.appendChild(menuPage);
        });
    }

    function navigateToCategory(index) {
        activeCategoryIndex = index;
        menuTrack.style.transform = `translateX(-${index * 100}%)`;
        document.querySelectorAll('.category-link').forEach((link, i) => {
            link.classList.toggle('active', i === index);
        });
    }

    function updateOrder() {
        const selectedItems = [];
        let totalItems = 0;
        let totalPrice = 0;
        document.querySelectorAll('.quantity-input').forEach(input => {
            const quantity = parseInt(input.value);
            if (quantity > 0) {
                const price = parseInt(input.dataset.price);
                selectedItems.push({ name: input.dataset.name, price, quantity });
                totalItems += quantity;
                totalPrice += price * quantity;
            }
        });

        itemCountBadge.textContent = totalItems;
        itemCountBadge.classList.toggle('scale-110', totalItems > 0); // Animasi badge
        totalPriceSpan.textContent = formatRupiah(totalPrice);
        orderButton.disabled = selectedItems.length === 0;
        orderSummary.classList.toggle('visible', selectedItems.length > 0);

        if (selectedItems.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartItemsContainer.innerHTML = '';
            cartItemsContainer.appendChild(emptyCartMessage);
        } else {
            emptyCartMessage.style.display = 'none';
            cartItemsContainer.innerHTML = selectedItems.map(item => `
                <div class="flex justify-between items-center text-sm">
                    <div>
                        <p class="font-semibold text-white">${item.name}</p>
                        <p class="text-gray-400">${item.quantity} &times; ${formatRupiah(item.price)}</p>
                    </div>
                    <p class="font-semibold text-white">${formatRupiah(item.quantity * item.price)}</p>
                </div>
            `).join('');
        }
        return selectedItems;
    }

    function handleInteraction(event) {
        event.preventDefault();
        const categoryLink = event.target.closest('.category-link');
        if (categoryLink) {
            navigateToCategory(parseInt(categoryLink.dataset.index));
            return;
        }

        const quantityButton = event.target.closest('.quantity-plus, .quantity-minus');
        if (quantityButton) {
            const input = quantityButton.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            value = quantityButton.classList.contains('quantity-plus') ? value + 1 : Math.max(0, value - 1);
            input.value = value;
            updateOrder();
            return;
        }

        if (event.target.id === 'order-button') {
            generateWhatsAppLink();
        }
    }

    function handleInput(event) {
        if (event.target.classList.contains('quantity-input')) {
            if (parseInt(event.target.value) < 0 || event.target.value === '') {
                event.target.value = 0;
            }
            updateOrder();
        }
    }
    
    function generateWhatsAppLink() {
        const items = updateOrder();
        if (items.length === 0) return;
        let totalPrice = 0;
        let message = "Halo Sambel Sambelan, saya mau pesan:\n\n";
        items.forEach(item => {
            const subtotal = item.price * item.quantity;
            message += `- ${item.name} x ${item.quantity} (${formatRupiah(subtotal)})\n`;
            totalPrice += subtotal;
        });
        message += `\n*Total Pesanan: ${formatRupiah(totalPrice)}*`;
        message += "\n\nMohon di-follow up ya. Terima kasih.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }

    // --- Event Listeners & Inisialisasi ---
    document.body.addEventListener('click', handleInteraction);
    document.body.addEventListener('input', handleInput);
    
    renderMenuAndNav();
    updateOrder();
});
