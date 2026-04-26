
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
    email: "Email: Shanks64@gmail.com",
    phone: "Phone: 987545110",
    insta: "Instagram: luffy_64",
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
    deathnote_watch: "WATCH TRAILER",

    
    jjk_title: "Jujutsu Kaisen",
    jjk_tag: "Curse vs Sorcerer Battle",
    jjk_info: "47 Episodes | Genre: Action",
    jjk_watch: "WATCH TRAILER",

    // Demon Slayer
    ds_title: "Demon Slayer",
    ds_tag: "Demon Hunting Journey",
    ds_info: "55 Episodes | Genre: Action",
    ds_watch: "WATCH TRAILER",

    // Tokyo Ghoul
    tg_title: "Tokyo Ghoul",
    tg_tag: "Human vs Monster Conflict",
    tg_info: "48 Episodes | Genre: Dark Fantasy",
    tg_watch: "WATCH TRAILER",

    // Chainsaw
    csm_title: "Chainsaw Man",
    csm_tag: "Devil Hunter Chaos",
    csm_info: "12 Episodes | Genre: Action",
    csm_watch: "WATCH TRAILER",

    // Sad anime
    pancreas_title: "I Want to Eat Your Pancreas",
    pancreas_tag: "A Fragile Love Story",
    pancreas_info: "Movie | Genre: Drama",
     pancreas_watch:  "WATCH TRAILER",

    silent_title: "A Silent Voice",
    silent_tag: "Redemption and Forgiveness",
    silent_info: "Movie | Genre: Drama",
    silent_watch: "WATCH TRAILER",

    april_title: "Your Lie in April",
    april_tag: "Music and Heartbreak",
    april_info: "22 Episodes | Genre: Romance",

    yourname_title: "Your Name",
    yourname_tag: "Love Beyond Time",
    yourname_info: "Movie | Genre: Romance",
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
    email: "メール: Shanks64@gmail.com",
    phone: "電話番号: ９８７−５４５−１１０",
    insta: "インスタグラム: luffy_64",
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
    deathnote_watch: "予告編を見る",

    jjk_title: "呪術廻戦",
    jjk_tag: "呪いと術師の戦い",
    jjk_info: "47話 | ジャンル: アクション",
    jjk_watch: "予告編を見る",

    ds_title: "鬼滅の刃",
    ds_tag: "鬼狩りの旅",
    ds_info: "55話 | ジャンル: アクション",
     ds_watch: "予告編を見る",

     tg_title: "東京喰種",
    tg_tag: "人間と怪物の戦い",
    tg_info: "48話 | ジャンル: ダークファンタジー",
    tg_watch: "予告編を見る",

    csm_title: "チェンソーマン",
    csm_tag: "悪魔ハンターの混乱",
    csm_info: "12話 | ジャンル: アクション",
     csm_watch:  "予告編を見る",

    pancreas_title: "君の膵臓をたべたい",
    pancreas_tag: "切ない恋の物語",
    pancreas_info: "映画 | ジャンル: ドラマ",
    pancreas_watch: "予告編を見る",

    silent_title: "聲の形",
    silent_tag: "贖罪と許し",
    silent_info: "映画 | ジャンル: ドラマ",
     silent_watch: "予告編を見る",

    april_title: "四月は君の嘘",
    april_tag: "音楽と悲しみ",
    april_info: "22話 | ジャンル: ロマンス",

    yourname_title: "君の名は",
    yourname_tag: "時を超えた愛",
    yourname_info: "映画 | ジャンル: ロマンス"
  

    
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




