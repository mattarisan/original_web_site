const hamburger = document.querySelector('.hamburger'); // ハンバーガーメニューの要素を取得
const nav = document.querySelector('.nav'); // ナビゲーションメニューの要素を取得

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open'); // ハンバーガーメニューの開閉状態を切り替え
    nav.classList.toggle('open'); // ナビゲーションメニューの表示/非表示を切り替え
});
