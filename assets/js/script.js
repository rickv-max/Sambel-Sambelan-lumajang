document.addEventListener('DOMContentLoaded', function() {

    // --- Referensi Elemen DOM & Konstanta ---
    const menuContainer = document.getElementById('menu-container');
    const orderSummary = document.getElementById('order-summary');
    const itemCountSpan = document.getElementById('item-count');
    const totalPriceSpan = document.getElementById('total-price');
    const orderButton = document.getElementById('order-button');
    const whatsappNumber = '6281336777726';

    // --- Database Menu (Lengkap) ---
    const menuData = {
        "MENU KOMPLIT": {
            note: "Sudah Include Nasi Putih",
            items: [
                { name: "Nasi Ayam Kremes (Paha Potong)", price: 20000 },
                { name: "Nasi Ayam Kremes Kampung (Paha/Dada)", price: 30000 },
                { name: "Nasi Tempong Ayam Kampung (Paha/Dada)", price: 25000 },
                { name: "Nasi Tempong Polos", price: 12000 },
                { name: "Nasi Garang Asem (Paha/Dada)", price: 30000 },
                { name: "Nasi Ikan Pe Goreng", price: 16000 },
                { name: "Nasi Ikan Pe Kuah", price: 18000 },
                { name: "Nasi Ayam Bakar Kampung (Paha/Dada)", price: 35000 },
            ]
        },
        "LAUK": {
            note: "Belum Include Nasi Putih",
            items: [
                { name: "1 Ekor Ayam Ingkung Kampung", price: 85000 }, { name: "Ayam Goreng Kremes (Paha Potong)", price: 15000 },
                { name: "Ayam Goreng Kremes Kampung (Paha/Dada)", price: 25000 }, { name: "Bebek Goreng (Paha/Dada)", price: 30000 },
                { name: "Ayam Bakar Kampung (Paha/Dada)", price: 30000 }, { name: "Burung Dara", price: 36000 },
                { name: "Usus Ayam", price: 10000 }, { name: "Kulit Ayam", price: 12000 }, { name: "Ceker Ayam", price: 15000 },
                { name: "Kepala Ayam isi 4", price: 9000 }, { name: "Kepala Bebek isi 3", price: 15000 }, { name: "Babat", price: 16000 },
                { name: "Kikil", price: 15000 }, { name: "Nila", price: 18000 }, { name: "Lele isi 2", price: 15000 },
                { name: "Teri", price: 7000 }, { name: "Ikan Asin", price: 10000 }, { name: "Tahu Tempe", price: 6000 },
                { name: "Sop Buntut", price: 45000 }, { name: "Iga Bakar", price: 45000 }, { name: "Cumi Goreng", price: 20000 },
                { name: "Udang Goreng", price: 17000 }, { name: "Nasi Putih", price: 5000 },
            ]
        },
        "SAYUR": {
            note: null,
            items: [ { name: "Tumis Kangkung Polos", price: 10000 }, { name: "Tumis Tauge Polos", price: 10000 }, { name: "Tumis Tauge Teri Medan", price: 15000 }, { name: "Sayur Asem", price: 9000 }, ]
        },
        "SAMBELAN": {
            note: "Belum Include Nasi Putih",
            items: [ { name: "Sambal Terasi Segar", price: 5000 }, { name: "Sambal Terasi Matang", price: 4500 }, { name: "Sambal Tempong", price: 4500 }, { name: "Sambal Kecap", price: 4000 }, { name: "Sambal Thailand", price: 6000 }, { name: "Sambal Dabu - Dabu", price: 6000 }, { name: "Sambal Tahu Tempe", price: 8000 }, { name: "Sambal Bakar", price: 6000 }, { name: "Sambal Bakar Kikil", price: 14000 }, { name: "Sambal Bakar Teri", price: 10000 }, { name: "Sambal Bakar Udang", price: 17000 }, { name: "Sambal Bakar Cumi", price: 17000 }, { name: "Sambal Bakar Babat", price: 16000 }, ]
        },
        "CHINESE FOOD & SEAFOOD": {
            note: null,
            items: [ { name: "Nasi Hainan Ayam Panggang", price: 32000 }, { name: "Nasi Hainan Ayam Rebus", price: 30000 }, { name: "Ayam Panggang 1 Ekor", price: 110000 }, { name: "Ayam Panggang 1/2 Ekor", price: 65000 }, { name: "Ayam Rebus 1 Ekor", price: 95000 }, { name: "Ayam Rebus 1/2 Ekor", price: 45000 }, { name: "Gurami Jimbaran Besar", price: 75000 }, { name: "Gurami Jimbaran Sedang", price: 60000 }, { name: "Gurami Goreng Dabu - Dabu Besar", price: 75000 }, { name: "Gurami Goreng Dabu - Dabu Sedang", price: 60000 }, { name: "Udang Bakar Jimbaran", price: 40000 }, { name: "Kerang Bakar Jimbaran", price: 40000 }, ]
        },
        "MINUMAN": {
            note: null,
            items: [ { name: "Es Teh Manis", price: 5000 }, { name: "Es Teh Tawar", price: 4000 }, { name: "Lemon Tea", price: 10000 }, { name: "Es Jeruk", price: 8000 }, { name: "Es Markisa", price: 8000 }, { name: "Es Cincau", price: 7000 }, { name: "Es Milo", price: 10000 }, { name: "Soda Gembira", price: 10000 }, { name: "Es Lychee Tea", price: 10000 }, { name: "Ice Markisa Squash", price: 16000 }, { name: "Ice Mango Squash", price: 16000 }, { name: "Ice Lemon Squash", price: 16000 }, { name: "Ice Lychee Squash", price: 16000 }, { name: "Ice Orange Coco", price: 16000 }, { name: "Es Serut Melon", price: 10000 }, { name: "Thai Tea", price: 12000 }, { name: "Ice Taro", price: 14000 }, { name: "Ice Matcha", price: 15000 }, { name: "Mineral Water", price: 5000 }, { name: "Ice Coffe Beer", price: 10000 }, { name: "Ice Americano", price: 12000 }, { name: "Ice Coffe Latte", price: 16000 }, { name: "Ice Cappucino", price: 16000 }, { name: "Ice Brown Sugar", price: 17000 }, { name: "Extra Shoot", price: 3000 }, { name: "Teh Manis Hangat", price: 4000 }, { name: "Teh Tawar Hangat", price: 3000 }, { name: "Wedang Jahe", price: 7000 }, { name: "Wedang Teh Jahe", price: 7000 }, { name: "Wedang Jahe Serai", price: 8000 }, { name: "Milo Hangat", price: 10000 }, { name: "Americano Hangat", price: 11000 }, { name: "Cappucino", price: 16000 }, ]
        },
    };
    
    const formatRupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);

    function renderMenu() {
        for (const category in menuData) {
            const categoryData = menuData[category];

            // Membuat item-item HTML untuk setiap kategori
            const itemsHTML = categoryData.items.map(item => {
                const priceFormatted = (item.price / 1000) + 'K';
                return `
                    <div class="menu-item flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                        <div>
                            <p class="font-semibold text-gray-800">${item.name}</p>
                            <p class="text-sm text-brand-orange">${priceFormatted}</p>
                        </div>
                        <div class="quantity-selector flex items-center border border-gray-300 rounded-lg">
                            <button class="quantity-minus bg-gray-200 text-gray-700 rounded-l-md hover:bg-gray-300 transition-colors">-</button>
                            <input type="number" class="quantity-input w-12 text-center font-bold bg-white focus:outline-none" value="0" min="0" data-name="${item.name}" data-price="${item.price}">
                            <button class="quantity-plus bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300 transition-colors">+</button>
                        </div>
                    </div>
                `;
            }).join('');

            // Pengecualian: Jika kategori adalah "MENU KOMPLIT", buat card statis
            if (category === "MENU KOMPLIT") {
                const staticCard = document.createElement('div');
                staticCard.className = 'bg-white p-6 rounded-xl shadow-md'; // Card statis
                staticCard.innerHTML = `
                    <h3 class="font-poppins font-bold text-2xl text-brand-brown">${category}</h3>
                    ${categoryData.note ? `<p class="text-sm text-gray-500 mt-1 mb-4">${categoryData.note}</p>` : '<div class="mb-4"></div>'}
                    <div class="space-y-2">${itemsHTML}</div>
                `;
                menuContainer.appendChild(staticCard);
            } 
            // Untuk semua kategori lainnya, buat accordion
            else {
                const accordionItem = document.createElement('div');
                accordionItem.className = 'accordion-item bg-white rounded-xl shadow-md overflow-hidden';
                accordionItem.innerHTML = `
                    <button class="accordion-toggle w-full flex justify-between items-center p-6 text-left">
                        <div>
                            <h3 class="font-poppins font-bold text-2xl text-brand-brown">${category}</h3>
                            ${categoryData.note ? `<p class="text-sm text-gray-500 mt-1">${categoryData.note}</p>` : ''}
                        </div>
                        <svg class="accordion-icon w-6 h-6 text-brand-brown flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="accordion-content">
                        <div class="space-y-2">${itemsHTML}</div>
                    </div>
                `;
                menuContainer.appendChild(accordionItem);
            }
        }
    }

    function updateOrder() {
        const selectedItems = [];
        let totalItems = 0;
        let totalPrice = 0;
        const inputs = document.querySelectorAll('.quantity-input');

        inputs.forEach(input => {
            const quantity = parseInt(input.value);
            if (quantity > 0) {
                const price = parseInt(input.dataset.price);
                selectedItems.push({ name: input.dataset.name, price: price, quantity: quantity });
                totalItems += quantity;
                totalPrice += price * quantity;
            }
        });

        itemCountSpan.textContent = totalItems;
        totalPriceSpan.textContent = formatRupiah(totalPrice);

        if (totalItems > 0) {
            orderSummary.classList.add('visible');
            orderButton.disabled = false;
        } else {
            orderSummary.classList.remove('visible');
            orderButton.disabled = true;
        }
        return selectedItems;
    }

    function handleMenuInteraction(event) {
        const accordionToggle = event.target.closest('.accordion-toggle');
        const quantityButton = event.target.closest('.quantity-plus, .quantity-minus');
        const quantityInput = event.target.closest('.quantity-input');
        
        if (accordionToggle) {
            const accordionItem = accordionToggle.parentElement;
            accordionItem.classList.toggle('is-open');
            return;
        }

        if (quantityButton) {
            const input = quantityButton.parentElement.querySelector('.quantity-input');
            let currentValue = parseInt(input.value);
            if (quantityButton.classList.contains('quantity-plus')) {
                currentValue++;
            } else if (currentValue > 0) {
                currentValue--;
            }
            input.value = currentValue;
            updateOrder();
            return;
        }
        
        if (quantityInput) {
             if(parseInt(quantityInput.value) < 0 || quantityInput.value === '') {
                quantityInput.value = 0;
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
    menuContainer.addEventListener('click', handleMenuInteraction);
    menuContainer.addEventListener('input', handleMenuInteraction);
    orderButton.addEventListener('click', generateWhatsAppLink);
    renderMenu();
});
