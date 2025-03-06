const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open'); 
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
	if(scrollY >= 945) {
		//classにactive付与
		returnTop.classList.add('active');
	}
	else {
		//classからactive削除
		returnTop.classList.remove('active');
	}
   });