const targetElement = document.getElementById('line');
const elementOffsetTop = targetElement.offsetTop;

// スクロールとウィンドウサイズ変更時に背景色の更新を行う関数
function updateBackground() {
    // 現在のスクロール位置とウィンドウの高さを取得
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;

    // 画面下端がlineに到達していればbodyにactiveを付与
    if (currentScroll + windowHeight >= elementOffsetTop) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

// 呼び出し
window.addEventListener('scroll', updateBackground);
window.addEventListener('resize', updateBackground);