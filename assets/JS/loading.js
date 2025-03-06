document.addEventListener('DOMContentLoaded', function () {
  document.body.style.overflow = 'hidden'; // ページの読み込み中にスクロールバーを非表示
});

window.addEventListener('load', function () {
  setTimeout(function () {
      const loadingContainer = document.getElementById('loading_container');
      loadingContainer.style.display = 'none';
      document.body.style.overflow = 'auto'; // ページの読み込み完了後にスクロールバーを再表示
  }, 3000); // 3000ミリ秒（3秒）後に実行
});

