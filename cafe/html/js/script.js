window.addEventListener('DOMContentLoaded', 関数(){

    const swiper = new Swiper('.swiper', {
        // オプションパラメータ
        centeredSlides: true、
        ループ: 真、
        スライドパービュー: 1.2、
        スペースBetween: 10,

        // ナビゲーション矢印
        ナビゲーション: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        ブレークポイント: {
            767: {
                スライドパービュー: 2.3、
            }
        }
    
    });


    const btnToTop = document.querySelector('.btn-top');
    window.addEventListener('スクロール', 関数(){
        定数スクロール = window.scrollY;
        （スクロール＞300）の場合{
            btnToTop.classList.add('フェードイン');
        } それ以外 {
            btnToTop.classList.remove('fadeIn');
        }
    });

    btnToTop.addEventListener('click', 関数(){
        ウィンドウのスクロール({
            上: 0,
            動作: 'スムーズ'
        });
    });

    定数 windowWidth = window.innerWidth;
    定数 windowHeight = window.innerHeight;
    bodyHeight は document.body.clientHeight に設定されます。
    const pageBottom = bodyHeight - windowHeight - 100;
    window.addEventListener('スクロール', 関数(){
        定数スクロール = window.scrollY;
        スクロール >= ページ下部の場合
            (ウィンドウ幅 > 767 ) の場合
                btnToTop.style.bottom = '134px';
            それ以外
                btnToTop.style.bottom = '255px';
        } それ以外 {
            (ウィンドウ幅 > 767 ) の場合
                btnToTop.style.bottom = '30px';
            それ以外
                btnToTop.style.bottom = '20px';
        }
    });
});