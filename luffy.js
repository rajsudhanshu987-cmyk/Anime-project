const translations = {
  en: {
    title: "World of Anime Adventures",
    home: "Home",
    popular: "Popular Anime",
    action: "Action Anime",
    sad: "Sad Anime",
    help: "Help & Contact",
    hero_title: "Discover Your Adventures",
    hero_desc: "Discover iconic anime worlds, powerful stories, and unforgettable characters.",
    start: "Start your journey"
  },

  jp: {
    title: "アニメの世界",
    home: "ホーム",
    popular: "人気アニメ",
    action: "アクションアニメ",
    sad: "感動アニメ",
    help: "サポート",
    hero_title: "物語を始めよう",
    hero_desc: "伝説のアニメと忘れられないストーリーを体験しよう。",
    start: "冒険を始める"
  }
};

const langToggle = document.getElementById("lang-toggle");

function changeLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Optional: font switch
  document.body.style.fontFamily =
    lang === "jp" ? "'Noto Sans JP', sans-serif" : "'Poppins', sans-serif";
}

langToggle.addEventListener("change", () => {
  const lang = langToggle.value;
  localStorage.setItem("lang", lang);
  changeLanguage(lang);
});

window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "en";
  langToggle.value = savedLang;
  changeLanguage(savedLang);
};