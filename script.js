const themeToggle = document.getElementById('themeToggle');
const fontSelect = document.getElementById('fontSelect');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const searchInput = document.getElementById('searchInput');
const resultsGrid = document.getElementById('resultsGrid');
const searchStatus = document.getElementById('searchStatus');

function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  if (themeToggle) {
    themeToggle.alt = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  }
}

function handleScroll() {
  if (scrollTopBtn) {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  }
}

const results = [
  { id: 'NS14', name: 'NS14', image: 'https://imgs.yachthub.com/3/2/8/3/6/7/0_4.jpg', keywords: ['boat', 'dinghy', 'club', 'race', 'rigging'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
  { id: 'MG14', name: 'MG14', image: 'https://static.wixstatic.com/media/0ff8c6_a4c00201f49549c09812d438bcc6b6ff~mv2.jpg/v1/fill/w_480,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0ff8c6_a4c00201f49549c09812d438bcc6b6ff~mv2.jpg', keywords: ['boat', 'multihull', 'training', 'sail', 'rigging'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg'},
  { id: 'RS Quest', name: 'RS Quest', image: 'https://images.squarespace-cdn.com/content/v1/62207344582c7d0bad231380/631d59c7-16ad-4bcd-99f6-44fe94b139e0/Quest-diagram-Rot-627x812.jpg', keywords: ['boat', 'training', 'group', 'rigging'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
  { id: 'Laser', name: 'Laser', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2f92wiLkxIKiSmz0y4vT9Ph7iF0FMSDwV0oc3dJXvngKlZHOMat1Om6D5tF87twgckNAvCpYdWC1P1-27PvFviOeVc2OITcvGtylvQ&s=10', keywords: ['boat', 'single-handed', 'rigging', 'training'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
  { id: 'Rolling Tack', name: 'Rolling Tack', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW60QJEaCuN7A43K-6DhUTJi3xYZMQnGWqQnvahCF6zA&s=10', keywords: ['technique', 'sailing', 'tacking', 'wind'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
  { id: 'Rolling Gybe', name: 'Rolling Gybe', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnm_0q3Kml6Va94D_0N9Kyj6zipmZMR0KLf0kWwLtMQ&s=10', keywords: ['technique', 'sailing', 'gybing', 'wind'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
  { id: 'Backwards Sailing', name: 'Backwards Sailing', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76ijdyaKn_694odqsWyShUuS7rnvlHecZZjhGxVz_2A&s=10', keywords: ['technique', 'sailing', 'reverse', 'manoeuvring'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
  { id: 'Vang Cunningham Outhaul', name: 'Vang, Cunningham, Outhaul', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn00i_UoBmzWfqmnkYeCZEoSFKrEXEjEh8K-YW3244Dw&s=10', keywords: ['technique', 'sailing', 'rigging'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
  { id: 'Navigational Marks', name: 'Navigational Marks', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDF4FK7MWei4V2PR-_-7iTTz-QLxyiOzfuhTmVCLYHA&s=10', keywords: ['navigation', 'sailing', 'marks', 'buoys'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
  { id: 'Pacer', name: 'Pacer', image: 'https://binksmarine.com.au/cdn/shop/collections/r0_0_1943_1972_w1200_h678_fmax_1200x1218.jpg?v=1634787249', keywords: ['boat', 'training', 'group', 'rigging'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
  { id: 'Corsair', name: 'Corsair', image: 'https://navalassoc.org.au/sites/default/files/pictures/Gerald%201.png', keywords: ['boat', 'training', 'group', 'rigging'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
  {id: '29er', name: '29er', image: 'https://www.mhyc.com.au/images/Sailing/2018-2019/Centreboard/2018_09_30_NSW_Youth_Champs_GeoffCropley_0361.jpg', keywords: ['boat', 'dinghy', 'training', 'rigging'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
  {id: 'Sharpie', name: 'Sharpie', image: 'https://binksmarine.com.au/cdn/shop/collections/img_8133a_cmyk_1200x900.jpg?v=1634788618', keywords: ['boat', 'dinghy', 'training', 'rigging'], CreatedBy: 'SailHub', CreatedByLogo: 'images/SailHub Logo.svg' },
];

function renderResults(query = '') {
  const normalizedQuery = query.trim().toLowerCase();
  const matches = !normalizedQuery
    ? results
    : results.filter((item) => {
        const haystack = `${item.name} ${item.keywords.join(' ')}`.toLowerCase();
        return haystack.includes(normalizedQuery);
      });

  if (!resultsGrid) {
    return;
  }

  const openDetail = resultsGrid.querySelector('.boat-detail');
  if (openDetail) {
    openDetail.hidden = true;
    resultsGrid.parentElement.appendChild(openDetail);
  }

  resultsGrid.innerHTML = '';
  resultsGrid.classList.remove('detail-open');

  if (!matches.length) {
    resultsGrid.innerHTML = '<p class="search-empty">No results found</p>';
    if (searchStatus) {
      searchStatus.textContent = 'No results found';
    }
    return;
  }

  matches.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'result-item';
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.innerHTML = `
      <h4>${item.name}</h4>
      <img src="${item.image}" alt="${item.name}" />
      ${item.CreatedBy ? `
        <p class="created-by">
          ${item.CreatedByLogo ? `<img class="created-by-logo" src="${item.CreatedByLogo}" alt="" />` : ''}
          <span>Created By ${item.CreatedBy}</span>
        </p>` : ''}`;

    card.addEventListener('click', () => showBoatDetail(item.id));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showBoatDetail(item.id);
      }
    });

    resultsGrid.appendChild(card);
  });

  if (searchStatus) {
    const countText = matches.length === 1 ? '1 result' : `${matches.length} results`;
    searchStatus.textContent = normalizedQuery ? `Showing ${countText} for “${query}”.` : 'Showing popular craft and gear to get you started.';
  }
}

function showBoatDetail(boatId) {
  if (!resultsGrid) {
    return;
  }

  const detailSection = document.getElementById(`result-${boatId.replace(/\s+/g, '-')}`);
  if (!detailSection) {
    return;
  }

  resultsGrid.innerHTML = '';
  resultsGrid.classList.add('detail-open');
  resultsGrid.appendChild(detailSection);
  detailSection.hidden = false;

  const backButton = detailSection.querySelector('.back-button');
  if (backButton && searchInput) {
    backButton.addEventListener('click', () => renderResults(searchInput.value));
  }
}

if (themeToggle) {
  const savedTheme = localStorage.getItem('harbor-theme') || 'light';
  setTheme(savedTheme === 'dark');
  themeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark');
    setTheme(isDark);
    localStorage.setItem('harbor-theme', isDark ? 'dark' : 'light');
  });
}

if (fontSelect) {
  const savedFont = localStorage.getItem('harbor-font') || 'Inter, sans-serif';
  document.body.style.fontFamily = savedFont;
  fontSelect.value = savedFont;
  fontSelect.addEventListener('change', (e) => {
    document.body.style.fontFamily = e.target.value;
    localStorage.setItem('harbor-font', e.target.value);
  });
}

if (scrollTopBtn) {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

if (searchInput) {
  searchInput.addEventListener('input', () => renderResults(searchInput.value));
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      renderResults(searchInput.value);
    }
  });
  searchInput.addEventListener('focus', () => renderResults(searchInput.value));
  renderResults();
}

document.addEventListener("DOMContentLoaded", () => {
  const itemsPerPage = 12; // Set how many items to display per page
  const cards = document.querySelectorAll(".gallery-card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageNumbersContainer = document.getElementById("pageNumbers");

  if (!cards.length) return;

  const totalPages = Math.ceil(cards.length / itemsPerPage);
  let currentPage = 1;

  function showPage(page) {
    currentPage = page;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Show/Hide cards according to current page
    cards.forEach((card, index) => {
      if (index >= startIndex && index < endIndex) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });

    // Update pagination controls
    updatePaginationUI();
  }

  function createPaginationButtons() {
    pageNumbersContainer.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.classList.add("page-btn");
      btn.textContent = i;
      btn.addEventListener("click", () => showPage(i));
      pageNumbersContainer.appendChild(btn);
    }
  }

  function updatePaginationUI() {
    // Disable/Enable prev and next buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    // Highlight active page number button
    const numberBtns = pageNumbersContainer.querySelectorAll(".page-btn");
    numberBtns.forEach((btn, index) => {
      if (index + 1 === currentPage) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Event Listeners for Prev/Next buttons
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) showPage(currentPage - 1);
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) showPage(currentPage + 1);
  });

  // Initialize
  createPaginationButtons();
  showPage(1);
});
function myFunction() {
  const menu = document.getElementById('myLinks');
  const button = document.querySelector('.icon');

  if (!menu || !button) {
    return;
  }

  const isOpen = menu.classList.toggle('is-open');
  button.setAttribute('aria-expanded', String(isOpen));
  button.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}