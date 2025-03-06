const hamburger = document.querySelector('.hamburger'); // ハンバーガーメニューの要素を取得
const nav = document.querySelector('.nav'); // ナビゲーションメニューの要素を取得

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open'); // ハンバーガーメニューの開閉状態を切り替え
    nav.classList.toggle('open'); // ナビゲーションメニューの表示/非表示を切り替え
});

const accordions = document.querySelectorAll('.list-item');

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    const content = accordion.querySelector('.list-content');

    content.classList.toggle('active');

    if(content.classList.contains('active')) {
      content.style.height = content.scrollHeight + 'px';
    } else {
      content.style.height = '0px';
    }

  });
});

const circleButton = document.getElementById('circle_btn');

  circleButton.addEventListener('click', function() {
    // 移動先のHTMLファイルのパスを指定します
    window.location.href = 'index04.html';
});

const targets = document.getElementsByClassName('fade');
for(let i = targets.length; i--;){
  let observer = new IntersectionObserver((entries, observer) => {
    for(let j = entries.length; j--;){
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add('active');
        observer.unobserve(entries[j].target);
      }
    }
  }, {
    rootMargin: '0px 0px -100px 0px' // 要素がビューポートの100px手前で表示されるように調整
  });
  observer.observe(targets[i]);
}

const returnTop = document.querySelector('.header_logo');  
	
   window.addEventListener('scroll', () => {
	let scrollY = window.scrollY;
	if(scrollY >= 900) {
		//classにactive付与
		returnTop.classList.add('active');
	}
	else {
		//classからactive削除
		returnTop.classList.remove('active');
	}
   });