
const translations = {
  en: {
    title: "World of Anime Adventures",
    home: "Home",
    popular: "Popular Anime",
    popular_heading: "Popular Anime",
    action: "Action Anime",
    action_heading: "Action Anime",
    sad: "Sad Anime",
    sad_heading: "Sad Anime",
    help: "HELP",
    help_section: "Help & Contact",
    contact: "Need help or suggestions? Contact me",
    email: "Email: hayatosato64@gmail.com",
    phone: "Phone: 987545110",
    insta: "Instagram: suneo_64",
    hero_title: "Discover Your Adventures",
    hero_desc:
      "Discover iconic anime worlds, powerful stories, and unforgettable characters.",
    start: "Start your journey",
    watch: "WATCH TRAILER",

    onepiece_title: "One Piece",
    onepiece_tag: "Pirate Adventure",
    onepiece_info: "1000+ Episodes | Genre: Adventure",

    aot_title: "Attack on Titan",
    aot_tag: "War for Survival",
    aot_info: "87 Episodes | Genre: Action",
    aot_watch: "WATCH TRAILER",

    naruto_title: "Naruto",
    naruto_tag: "Ninja Path to Greatness",
    naruto_info: "720 Episodes | Genre: Action",

    deathnote_title: "Death Note",
    deathnote_tag: "Battle of Minds",
    deathnote_info: "37 Episodes | Genre: Thriller",
    deathnote_watch: "WATCH TRAILER"
  },

  jp: {
    title: "アニメの世界",
    home: "ホーム",
    popular: "人気アニメ",
    popular_heading: "人気アニメ",
    action: "アクションアニメ",
    action_heading: "アクションアニメ",
    sad: "感動アニメ",
    sad_heading: "感動アニメ",
    help: "サポート",
    help_section: "サポート",
    contact: "サポートやご提案があれば、ご連絡ください。",
    email: "メール: hayatosato64@gmail.com",
    phone: "電話番号: ９８７−５４５−１１０",
    insta: "インスタグラム: suneo_64",
    hero_title: "物語を始めよう",
    hero_desc: "伝説のアニメと忘れられないストーリーを体験しよう。",
    start: "冒険を始める",
    watch: "予告編を見る",

    onepiece_title: "ワンピース",
    onepiece_tag: "海賊の冒険",
    onepiece_info: "1000話以上 | ジャンル: 冒険",

    aot_title: "進撃の巨人",
    aot_tag: "生き残りの戦い",
    aot_info: "87話 | ジャンル: アクション",
    aot_watch: "予告編を見る",

    naruto_title: "ナルト",
    naruto_tag: "忍者の道",
    naruto_info: "720話 | ジャンル: アクション",

    deathnote_title: "デスノート",
    deathnote_tag: "頭脳戦",
    deathnote_info: "37話 | ジャンル: スリラー",
    deathnote_watch: "予告編を見る"
  }
};


function changeLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {

  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  const langText = document.getElementById("langText");
  const langIcon = document.getElementById("langIcon");

  if (!langBtn || !langMenu || !langText || !langIcon) {
    console.error("Language elements missing");
    return;
  }

  
  langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("hidden");
  });

  
  document.addEventListener("click", (e) => {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.add("hidden");
    }
  });

  // Handle language click
  document.querySelectorAll(".lang-item").forEach(item => {
    item.addEventListener("click", () => {
      const lang = item.dataset.lang;

      if (lang === "en") {
        langText.innerText = "EN";
        langIcon.innerHTML = `<img src="https://flagcdn.com/w40/gb.png" width="20">`;
      } else {
        langText.innerText = "JP";
        langIcon.innerHTML = `<img src="https://flagcdn.com/w40/jp.png" width="20">`;
      }

      localStorage.setItem("lang", lang);
      changeLanguage(lang);

      langMenu.classList.add("hidden");
    });
  });

  // Load saved language
  const savedLang = localStorage.getItem("lang") || "en";
  changeLanguage(savedLang);

  if (savedLang === "jp") {
    langText.innerText = "JP";
    langIcon.innerHTML = `<img src="https://flagcdn.com/w40/jp.png" width="20">`;
  } else {
    langText.innerText = "EN";
    langIcon.innerHTML = `<img src="https://flagcdn.com/w40/gb.png" width="20">`;
  }

});