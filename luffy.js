const translations = {
  en: {
    title: "World of Anime Adventures",
    home: "Home",
    popular: "Popular Anime",
    popular_heading: "Popular Anime",
    action: "Action Anime",
    sad: "Sad Anime",
    help_section: "Help & Contact",
    contact: "Need help or suggestions? Contact me",
    hero_title: "Discover Your Adventures",
    hero_desc: "Discover iconic anime worlds, powerful stories, and unforgettable characters.",
    start: "Start your journey",
    watch: "WATCH TRAILER",

    // One Piece
    onepiece_title: "One Piece",
    onepiece_tag: "Pirate Adventure",
    onepiece_info: "1000+ Episodes | Genre: Adventure",
     watch: "WATCH TRAILER",

    // AOT
    aot_title: "Attack on Titan",
    aot_tag: "War for Survival",
    aot_info: "87 Episodes | Genre: Action",
     aot_watch: "WATCH TRAILER",

    // Naruto
    naruto_title: "Naruto",
    naruto_tag: "Ninja Path to Greatness",
    naruto_info: "720 Episodes | Genre: Action",

    // Death Note
    deathnote_title: "Death Note",
    deathnote_tag: "Battle of Minds",
    deathnote_info: "37 Episodes | Genre: Thriller",

    // Jujutsu
    jjk_title: "Jujutsu Kaisen",
    jjk_tag: "Curse vs Sorcerer Battle",
    jjk_info: "47 Episodes | Genre: Action",

    // Demon Slayer
    ds_title: "Demon Slayer",
    ds_tag: "Demon Hunting Journey",
    ds_info: "55 Episodes | Genre: Action",

    // Tokyo Ghoul
    tg_title: "Tokyo Ghoul",
    tg_tag: "Human vs Monster Conflict",
    tg_info: "48 Episodes | Genre: Dark Fantasy",

    // Chainsaw
    csm_title: "Chainsaw Man",
    csm_tag: "Devil Hunter Chaos",
    csm_info: "12 Episodes | Genre: Action",

    // Sad anime
    pancreas_title: "I Want to Eat Your Pancreas",
    pancreas_tag: "A Fragile Love Story",
    pancreas_info: "Movie | Genre: Drama",

    silent_title: "A Silent Voice",
    silent_tag: "Redemption and Forgiveness",
    silent_info: "Movie | Genre: Drama",

    april_title: "Your Lie in April",
    april_tag: "Music and Heartbreak",
    april_info: "22 Episodes | Genre: Romance",

    yourname_title: "Your Name",
    yourname_tag: "Love Beyond Time",
    yourname_info: "Movie | Genre: Romance"
  },

  jp: {
    title: "アニメの世界",
    home: "ホーム",
    popular: "人気アニメ",
    popular_heading: "人気アニメ",
    action: "アクションアニメ",
    sad: "感動アニメ",
    help_section: "サポート",
    contact: "サポートやご提案があれば、ご連絡ください。",
    hero_title: "物語を始めよう",
    hero_desc: "伝説のアニメと忘れられないストーリーを体験しよう。",
    start: "冒険を始める",
    watch: "予告編を見る",

    onepiece_title: "ワンピース",
    onepiece_tag: "海賊の冒険",
    onepiece_info: "1000話以上 | ジャンル: 冒険",
     watch: "予告編を見る",

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

    jjk_title: "呪術廻戦",
    jjk_tag: "呪いと術師の戦い",
    jjk_info: "47話 | ジャンル: アクション",

    ds_title: "鬼滅の刃",
    ds_tag: "鬼狩りの旅",
    ds_info: "55話 | ジャンル: アクション",

    tg_title: "東京喰種",
    tg_tag: "人間と怪物の戦い",
    tg_info: "48話 | ジャンル: ダークファンタジー",

    csm_title: "チェンソーマン",
    csm_tag: "悪魔ハンターの混乱",
    csm_info: "12話 | ジャンル: アクション",

    pancreas_title: "君の膵臓をたべたい",
    pancreas_tag: "切ない恋の物語",
    pancreas_info: "映画 | ジャンル: ドラマ",

    silent_title: "聲の形",
    silent_tag: "贖罪と許し",
    silent_info: "映画 | ジャンル: ドラマ",

    april_title: "四月は君の嘘",
    april_tag: "音楽と悲しみ",
    april_info: "22話 | ジャンル: ロマンス",

    yourname_title: "君の名は",
    yourname_tag: "時を超えた愛",
    yourname_info: "映画 | ジャンル: ロマンス"
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