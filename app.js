// 20 Most Popular Cars in Kyrgyzstan Data
const carsData = [
    {
        id: "land-cruiser-300",
        name: "Toyota Land Cruiser 300",
        category: "suv",
        image: "lc300.png",
        engine: "3.5L Twin-Turbo",
        year: 2022,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Qirg'iziston yo'llarida eng nufuzli va ishonchli yo'ltanlamas. Qiyin tog'li hududlar va shahar uchun mukammal tanlov."
    },
    {
        id: "lexus-lx570",
        name: "Lexus LX 570",
        category: "suv",
        image: "https://images.unsplash.com/photo-1617469767053-d3b508a0d7e5?auto=format&fit=crop&w=600&q=80",
        engine: "5.7L V8",
        year: 2019,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Hashamat va cheksiz kuch timsoli. Qulaylik va xavfsizlikning eng yuqori premium darajasi."
    },
    {
        id: "camry-v70",
        name: "Toyota Camry V70",
        category: "sedan",
        image: "https://images.unsplash.com/photo-1621007947382-cc34acf866be?auto=format&fit=crop&w=600&q=80",
        engine: "2.5L",
        year: 2020,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Biznes klassdagi eng mashhur sedan. Chidamliligi, yumshoq yurishi va yuqori likvidligi bilan tanilgan."
    },
    {
        id: "lexus-rx350",
        name: "Lexus RX 350",
        category: "suv",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
        engine: "3.5L V6",
        year: 2018,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Premium shahar krossoveri. Oila uchun juda qulay, ixcham va zamonaviy xususiyatlarga boy."
    },
    {
        id: "hyundai-porter",
        name: "Hyundai Porter II",
        category: "commercial",
        image: "porter.png",
        engine: "2.5L Diesel",
        year: 2016,
        fuel: "Dizel",
        transmission: "Mexanika",
        description: "Qirg'izistonda tijorat va yuk tashish sohasining ajralmas yetakchisi. O'ta tejamkor va ishonchli mehnatkash."
    },
    {
        id: "honda-fit",
        name: "Honda Fit",
        category: "hatchback",
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=600&q=80",
        engine: "1.5L i-VTEC",
        year: 2015,
        fuel: "Benzin",
        transmission: "Variator",
        description: "O'ta tejamkor va ixcham xetchbek. Shahar sharoitida boshqarish oson va juda ham ommabop."
    },
    {
        id: "chevrolet-cobalt",
        name: "Chevrolet Cobalt",
        category: "sedan",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80",
        engine: "1.5L",
        year: 2021,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Hamyonbop va keng oilaviy sedan. Kundalik shahar va qishloq yo'llarida foydalanish uchun eng ma'qul tanlov."
    },
    {
        id: "daewoo-matiz",
        name: "Daewoo Matiz",
        category: "hatchback",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
        engine: "0.8L",
        year: 2012,
        fuel: "Benzin",
        transmission: "Mexanika",
        description: "Kichik, ammo shahar tirbandliklarida chaqqon. Yoqilg'i sarfi juda past bo'lgan tejamkor avtomobil."
    },
    {
        id: "honda-crv",
        name: "Honda CR-V",
        category: "suv",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
        engine: "2.4L i-VTEC",
        year: 2014,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Oila uchun eng xavfsiz va ishonchli krossoverlardan biri. Yuqori chidamlilik va keng salonga ega."
    },
    {
        id: "benz-e320",
        name: "Mercedes-Benz E-Class W211",
        category: "sedan",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
        engine: "3.2L V6",
        year: 2005,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Afsonaviy nemis sifati va mislsiz qulayligi. Vaqt sinovidan o'tgan, Qirg'izistonda juda qadrlanadigan klassika."
    },
    {
        id: "bmw-520",
        name: "BMW 5 Series F10",
        category: "sedan",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
        engine: "2.0L TwinPower",
        year: 2013,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Sport uslubi va biznes darajadagi qulaylik muvozanati. Dinamik haydash ishqibozlari uchun juda mos."
    },
    {
        id: "subaru-forester",
        name: "Subaru Forester",
        category: "suv",
        image: "https://images.unsplash.com/photo-1562601579-579bc8c5a155?auto=format&fit=crop&w=600&q=80",
        engine: "2.0L Boxer AWD",
        year: 2014,
        fuel: "Benzin",
        transmission: "Variator",
        description: "Afsonaviy to'liq g'ildirakli hayovchi (AWD) tizimiga ega krossover. Tog'li hududlarimiz qiroli."
    },
    {
        id: "subaru-outback",
        name: "Subaru Outback",
        category: "suv",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=600&q=80",
        engine: "2.5L AWD",
        year: 2015,
        fuel: "Benzin",
        transmission: "Variator",
        description: "Keng yukxona va yuqori yo'ltanlamaslik qobiliyatiga ega universal. Oilaviy sayohatlar uchun ideal."
    },
    {
        id: "toyota-prius",
        name: "Toyota Prius",
        category: "hybrid-electric",
        image: "https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?auto=format&fit=crop&w=600&q=80",
        engine: "1.8L Hybrid",
        year: 2016,
        fuel: "Gibrid",
        transmission: "Variator",
        description: "Ekologik toza va yoqilg'ini minimal darajada sarflovchi gibrid. Shahar taksi va kundalik xizmati uchun yetakchi."
    },
    {
        id: "kia-k5",
        name: "Kia K5 / Optima",
        category: "sedan",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
        engine: "2.0L LPI",
        year: 2020,
        fuel: "Gaz/Benzin",
        transmission: "Avtomat",
        description: "Futuristik dizayn, eng so'nggi texnologiyalar va yuqori darajadagi qulaylikka ega yangi avlod sedani."
    },
    {
        id: "hyundai-sonata",
        name: "Hyundai Sonata",
        category: "sedan",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80",
        engine: "2.0L",
        year: 2019,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Chiroyli zamonaviy dizayn va keng salonga ega, shahar hayotiga to'liq mos keladigan dinamik sedan."
    },
    {
        id: "daewoo-nexia3",
        name: "Daewoo Nexia 3",
        category: "sedan",
        image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&w=600&q=80",
        engine: "1.5L",
        year: 2018,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Qirg'iziston avtomobil bozorida ommabop, xizmat ko'rsatish juda arzon va chidamli xalq sedani."
    },
    {
        id: "tesla-model-y",
        name: "Tesla Model Y",
        category: "hybrid-electric",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&q=80",
        engine: "Dual Motor AWD",
        year: 2022,
        fuel: "Elektr",
        transmission: "Avtomat",
        description: "To'liq elektr quvvatli krossover. Yuqori texnologiya, avtopilot va mislsiz tezlanishga ega kelajak mashinasi."
    },
    {
        id: "lada-niva",
        name: "Lada Niva Legend",
        category: "suv",
        image: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&w=600&q=80",
        engine: "1.7L 4x4",
        year: 2020,
        fuel: "Benzin",
        transmission: "Mexanika",
        description: "Har qanday yo'lsizlik, loy va qor sharoitlarini osongina yengib o'tuvchi afsonaviy tog' yo'ltanlamasi."
    },
    {
        id: "range-rover-sport",
        name: "Range Rover Sport",
        category: "suv",
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=600&q=80",
        engine: "3.0L V6 Supercharged",
        year: 2017,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Sportiv ko'rinish va mislsiz yo'ltanlamaslik qobiliyatini birlashtirgan premium hashamatli SUV."
    },
    {
        id: "daewoo-tico",
        name: "Daewoo Tico",
        category: "hatchback",
        image: "tico.png",
        engine: "0.8L",
        year: 1998,
        fuel: "Benzin",
        transmission: "Mexanika",
        description: "Qirg'iziston ko'chalarida afsonaviy, o'ta tejamkor va ixcham shahar mashinasi. Xizmat ko'rsatish juda oson va qulay."
    },
    {
        id: "chevrolet-spark",
        name: "Chevrolet Spark (332 ADK)",
        category: "hatchback",
        image: "spark.png",
        engine: "1.25L",
        year: 2018,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Oq rangdagi zamonaviy va ixcham shahar xetchbeki. Qulay boshqaruv va kamxarjligi bilan ajralib turadi."
    },
    {
        id: "mercedes-s-class-777",
        name: "Mercedes-Benz S-Class (777)",
        category: "sedan",
        image: "mercedes.png",
        engine: "3.0L Biturbo",
        year: 2023,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Mercedes-Benz oilasining eng so'nggi va hashamatli modeli. Yuqori texnologiyalar va mislsiz qulaylik uyg'unligi."
    },
    {
        id: "mercedes-g-class-777-abu",
        name: "Mercedes-Benz G-Class (777 ABU)",
        category: "suv",
        image: "gclass.png",
        engine: "4.0L V8 Biturbo",
        year: 2021,
        fuel: "Benzin",
        transmission: "Avtomat",
        description: "Afsonaviy yo'ltanlamas Gelandewagen. Kuchli dizayn, yuqori dinamika va mislsiz yo'ltanlamaslik qobiliyati."
    },
    {
        id: "zeekr-001-777-abu",
        name: "Zeekr 001 (777 ABU)",
        category: "hybrid-electric",
        image: "zeekr.png",
        engine: "Dual Motor EV",
        year: 2023,
        fuel: "Elektr",
        transmission: "Avtomat",
        description: "Futuristik dizayn, eng so'nggi aqlli texnologiyalar va sportcha dinamikaga ega premium elektromobil."
    }
];

// Document Elements
const carsGrid = document.getElementById('carsGrid');
const carSearch = document.getElementById('carSearch');
const filterCategories = document.getElementById('filterCategories');
const carSelectDropdown = document.getElementById('carSelect');
const noResults = document.getElementById('noResults');
const mobileNavToggle = document.getElementById('mobileNavToggle');
const navMenu = document.getElementById('navMenu');
const header = document.querySelector('.header');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

let activeCategory = 'all';
let searchQuery = '';

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
    populateSelectDropdown();
    initMap();
    initAnimations();
    setupEventListeners();
});

// Setup All Event Listeners
function setupEventListeners() {
    // Search Input Event
    carSearch.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderCars();
    });

    // Category Filter Buttons
    filterCategories.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Remove active class from previous
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            // Add active to clicked
            e.target.classList.add('active');
            
            activeCategory = e.target.dataset.category;
            renderCars();
        }
    });

    // Mobile Navigation Toggle
    mobileNavToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileNavToggle.classList.toggle('open');
        // Simple hamburger transition
        const bars = mobileNavToggle.querySelectorAll('.bar');
        if (navMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close Menu on Nav Link Click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // Active state
            document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            navMenu.classList.remove('active');
            const bars = mobileNavToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Window Scroll - Header Effect & Nav Highlight
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        highlightNavOnScroll();
    });

    // Contact Form Submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const selectedCar = carSelectDropdown.options[carSelectDropdown.selectedIndex].text;
        const msg = document.getElementById('message').value;
        
        // Show success msg
        contactForm.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        
        // Dynamic custom prefilled WhatsApp link generator to prompt user
        const whatsappNumber = '996555123456';
        const formattedMsg = encodeURIComponent(`Salom, men Avto Osh sayti orqali murojaat qilyapman.\n\nIsmim: ${name}\nTelefon: ${phone}\nMashina: ${selectedCar}\nSavolim: ${msg}`);
        const waLink = `https://wa.me/${whatsappNumber}?text=${formattedMsg}`;
        
        // Open WhatsApp shortly after success to make it super interactive
        setTimeout(() => {
            window.open(waLink, '_blank');
        }, 1500);
    });
}

// Render Cars Card Grid
function renderCars() {
    carsGrid.innerHTML = '';
    
    // Filter array
    const filteredCars = carsData.filter(car => {
        const matchesCategory = activeCategory === 'all' || 
                                (activeCategory === 'suv' && car.category === 'suv') ||
                                (activeCategory === 'sedan' && car.category === 'sedan') ||
                                (activeCategory === 'hatchback' && car.category === 'hatchback') ||
                                (activeCategory === 'hybrid-electric' && (car.category === 'hybrid-electric' || car.category === 'hybrid' || car.category === 'electric'));
                                
        const matchesSearch = car.name.toLowerCase().includes(searchQuery) || 
                              car.description.toLowerCase().includes(searchQuery) ||
                              car.engine.toLowerCase().includes(searchQuery);
                              
        return matchesCategory && matchesSearch;
    });

    if (filteredCars.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        
        filteredCars.forEach(car => {
            const card = document.createElement('div');
            card.className = 'car-card animate-on-scroll';
            
            // Format Category Name in Uzbek
            let catName = 'Krossover';
            if(car.category === 'suv') catName = 'Yo\'ltanlamas (SUV)';
            if(car.category === 'sedan') catName = 'Sedan';
            if(car.category === 'hatchback') catName = 'Xetchbek';
            if(car.category === 'commercial') catName = 'Tijorat';
            if(car.category === 'hybrid-electric') catName = 'Elektro/Gibrid';

            card.innerHTML = `
                <div class="car-image-container">
                    <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
                    <span class="car-category">${catName}</span>
                </div>
                <div class="car-info">
                    <h3 class="car-name">${car.name}</h3>
                    <p class="car-description">${car.description}</p>
                    <div class="car-specs">
                        <div class="spec-item"><i class="fa-solid fa-gauge-high"></i> <span>${car.engine}</span></div>
                        <div class="spec-item"><i class="fa-solid fa-calendar-days"></i> <span>${car.year}-yil</span></div>
                        <div class="spec-item"><i class="fa-solid fa-gas-pump"></i> <span>${car.fuel}</span></div>
                        <div class="spec-item"><i class="fa-solid fa-gears"></i> <span>${car.transmission}</span></div>
                    </div>
                    <div class="car-actions">
                        <button onclick="orderCar('${car.name}')" class="btn btn-primary btn-block">Sotib olish / Buyurtma</button>
                    </div>
                </div>
            `;
            carsGrid.appendChild(card);
        });
        
        // Reinstate animations for new cards
        initAnimations();
    }
}

// Populate Contact Form Car Dropdown
function populateSelectDropdown() {
    carsData.forEach(car => {
        const option = document.createElement('option');
        option.value = car.id;
        option.textContent = car.name;
        carSelectDropdown.appendChild(option);
    });
}

// Quick Order Callback
function orderCar(carName) {
    // Fill select and scroll to contact
    const optionToSelect = Array.from(carSelectDropdown.options).find(option => option.textContent === carName);
    if(optionToSelect) {
        carSelectDropdown.value = optionToSelect.value;
    }
    
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    
    // Add micro-animation/focus to contact name input
    setTimeout(() => {
        document.getElementById('name').focus();
    }, 800);
}

// Initialize Leaflet Map (Dark Monochromatic Theme)
function initMap() {
    // Osh, Kyrgyzstan coordinates
    const oshCoords = [40.5136, 72.8161];
    
    // Map options
    const map = L.map('map', {
        center: oshCoords,
        zoom: 15,
        zoomControl: true,
        scrollWheelZoom: false
    });

    // Dark tiles from CartoDB (perfect for black and white aesthetic)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Custom Monochromatic Icon
    const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `<div style="
            width: 24px; 
            height: 24px; 
            background: #ffffff; 
            border: 4px solid #000000; 
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(255,255,255,0.5);
            animation: bounceMarker 2s infinite;
        "></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    // Add marker
    const marker = L.marker(oshCoords, { icon: customIcon }).addTo(map);
    
    // Customized marker popup
    marker.bindPopup(`
        <div style="color: #ffffff; background-color: #121212; padding: 5px; border-radius: 4px; font-family: 'Outfit', sans-serif;">
            <h4 style="margin: 0 0 5px 0; text-transform: uppercase; font-size: 13px; font-weight: 800;">AVTO OSH</h4>
            <p style="margin: 0; font-size: 11px; color: #a3a3a3;">O'sh sh., Razzakov ko'chasi, 45-uy</p>
        </div>
    `, {
        closeButton: false,
        className: 'dark-popup'
    }).openPopup();
}

// Scroll Triggered CSS Animations
function initAnimations() {
    const animItems = document.querySelectorAll('.animate-on-scroll');
    
    if (animItems.length > 0) {
        const observerOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target); // Trigger animation once
                }
            });
        }, observerOptions);
        
        animItems.forEach(item => {
            observer.observe(item);
        });
    }
}

// Highlight Nav Link on Scroll
function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}
