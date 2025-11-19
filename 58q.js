// ==========================
// 麻倉こはく Official Site JS
// ==========================

// ページタイトル設定
document.title = "麻倉こはく - Official Site";

// メインラッパーを取得
const root = document.getElementById("root");

// ベースレイアウト生成
root.innerHTML = `
  <header>
    <h1>麻倉こはく - Kohaku Asakura</h1>
  </header>

  <section id="profile">
    <h2>プロフィール</h2>
    <p>
      麻倉こはく（Kohaku Asakura）<br>
      映像制作・編集、配信、クリエイティブワークを中心に活動中。<br>
      SNS や YouTube にて作品や活動を発信しています。
    </p>
  </section>

  <section id="social-links">
    <h2>SNS</h2>
    <div id="sns-container" class="sns-box"></div>
  </section>

  <section id="gallery">
    <h2>ギャラリー</h2>
    <div id="photo-gallery" class="gallery"></div>
  </section>

  <footer>
    <p>© 2025 Kohaku Asakura</p>
  </footer>
`;

// ==========================
// SNS リンクを JS で生成
// ==========================

const snsData = [
  {
    name: "Twitter",
    url: "https://x.com/MM58Q",
    class: "twitter"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@589official",
    class: "youtube"
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/58qpro",
    class: "twitch"
  }
];

const snsContainer = document.getElementById("sns-container");

snsData.forEach(sns => {
  const a = document.createElement("a");
  a.textContent = sns.n
