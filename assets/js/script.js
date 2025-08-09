document.addEventListener('DOMContentLoaded', function() {
    
    // --- Data Menu Makanan ---
    const menuItems = [
        {
            name: "Sambel Bawang + Ayam Goreng",
            image: "https://via.placeholder.com/300x200/images/menu-1.jpg",
            price: "Rp 25.000",
            description: "Ayam goreng kampung empuk dengan siraman sambal bawang pedas yang segar."
        },
        {
            name: "Sambel Terasi + Bebek Goreng",
            image: "https://via.placeholder.com/300x200/images/menu-2.jpg",
            price: "Rp 30.000",
            description: "Bebek goreng garing di luar, lembut di dalam, dicocol dengan sambel terasi khas."
        },
        {
            name: "Sambel Ijo + Ikan Cakalang",
            image: "https://via.placeholder.com/300x200/images/menu-3.jpg",
            price: "Rp 28.000",
            description: "Suwiran ikan cakalang asap dipadukan dengan pedasnya sambel ijo yang nikmat."
        },
        {
            name: "Sambel Matah + Telur Dadar",
            image: "https://via.placeholder.com/300x200/images/menu-4.jpg",
            price: "Rp 15.000",
            description: "Menu sederhana namun mewah, telur dadar tebal dengan sambal matah segar."
        }
    ];

    const menuGrid = document.getElementById('menu-grid');
    const whatsappNumber = '6281336777726';

    // --- Fungsi untuk memuat menu ---
    function loadMenu() {
        if (!menuGrid) return;
        
        menuItems.forEach(item => {
            // Encode nama menu untuk URL
            const encodedMenuName = encodeURIComponent(`Saya mau pesan ${item.name}`);
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=Halo%20Sambel%20Sambelan%2C%20${encodedMenuName}`;

            const card = document.createElement('div');
            card.className = 'menu-card bg-white rounded-lg shadow-lg overflow-hidden text-left transform transition-all duration-300 animate-on-scroll';
            
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="font-poppins font-bold text-xl mb-2">${item.name}</h3>
                    <p class="text-brand-orange font-bold text-lg mb-3">${item.price}</p>
                    <p class="text-gray-600 text-sm mb-4">${item.description}</p>
                    <a href="${whatsappLink}" target="_blank" class="block text-center w-full bg-brand-green text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition-colors">
                        Pesan via WhatsApp
                    </a>
                </div>
            `;
            menuGrid.appendChild(card);
        });
    }

    // --- Fungsi untuk animasi saat scroll ---
    // Menggunakan Intersection Observer untuk performa yang lebih baik. [2]
    function setupScrollAnimations() {
        const targets = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Hanya animasi sekali
                }
            });
        }, { threshold: 0.1 }); // Muncul saat 10% elemen terlihat

        targets.forEach(target => {
            observer.observe(target);
        });
    }

    // --- Eksekusi fungsi-fungsi ---
    loadMenu();
    setupScrollAnimations();
});
