$(function(){


    $('.main-face-img').on('mouseover',function(){
        $(this).css('opacity', '0.8');
    }).on('click', function(){
        $('.face-row').toggleClass('face-row-display');
    }).on('mouseout', function(){
        $(this).css('opacity', '1.0');
    });


    //一個一個の要素をfadeIn()でスクロールに合わせて表示したい
    /*
        $('.nav).each(function(){
            $(this).hide().fadeIn();
        });
        //幼少期が消えちゃう何故？
    */



    //.naveクラスを一個ずつ取得して、ナビバーのclassにactiveクラスを追加する
    // $('.nav').each(function(i){
    //     $(this).on('mouseover',function(){
    //         $(this[i]).classAdd('active');
    //     });
    // });
    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();

        let ids = ['#baby', '#elementary', '#junior', '#high', '#hokkaido', '#spring', '#sebu', '#now'];

        for (id of ids) {
            // offset()が要素の座標を取得　.topでy座標　.leftでx座標　
            if (scrollTop > $(id).parent().offset().top) {
                removeAllActiveClass();
                $('a[href="' + id + '"]').addClass('active');
            }
        }

    });

    function removeAllActiveClass() {
        let activeNodes = $(".active");
        activeNodes.each(function(){
            $(this).removeClass("active");
        });
    };

    /*
    やらないといけないこと
    スクロール検知->アクティブのクラス移動(とりあえず#babyから#elementaryのスパンで考える)(どのタイミング？=スクロールの位置が変わったとき->どのタイミングか＝要素の位置)

        if (scrollTop > $('#baby').parent().offset().top) {
        removeAllActiveClass();
        $('a[href="' + id + '"]').addClass('active');
        }
        これの繰り返し -> idしか変わってないから配列に入れて、forで回す

    */
    // やってることの意味はわかった。完さんがどのような思考回路でコードを記述したのか知りたい
    // each と for　のイメージの違い eachは配列ではないものを複数処理するときに使うのか


    $('#header-profile').on('click', function(){
        $('html, body').scrollTop(580);
    });
    $('#header-life').on('click', function(){
        $('html, body').scrollTop(2900);
    });
    $('#header-portfolio').on('click', function(){
        $('html, body').scrollTop(8055);
    });


    $('#returnBtn > button').on('click', function(){
        // <script> の呼び込みが、 slimだったからスクロールトップが読み込まれてない
        // $('#nav').animate({scrollTop: 0}, 1000); //アニメーションをつけた上でtopscrollを実施したい
        // $('html, body').animate({scrollTop:nav}, 1100);

        // let nav = $('.navbar').offset().top;
        // $('html, body').animate({scrollTop: nav});


        $('html, body').animate({scrollTop: 0}, 1000);
    });


    $('#returnBtn > button').on('mouseover', function(){
        $(this).css('opacity', '0.7');
    }).on('mouseout', function(){
        $(this).css('opacity', '1');
    });



    // portfolio

    // animate()メソッドを使うといつもうまくいかない
    // $('.box').each(function(){
    //     $(this).on('mouseover', function(){
    //         $(this).css('opacity', '0.4');
    //         $(this).animate({opacity: 1}, 1000);
    //     });
    // });

    $('.box-img-portfolio').each(function(){
        $(this).on('mouseover', function(){
            $(this).css('opacity', '0.7').css('border', '2px solid orange');
        }).on('mouseout', function(){
            $(this).css('opacity', '1.0').css('border', 'none');
        });
    });




    //gallery

    $('#prev, #next').on('mouseover', function(){
        $(this).css('opacity', '0.7');
    }).on('mouseout', function(){
        $(this).css('opacity', '1.0');
    });











    // slide
    let images = [
        'img/photo/1.jpg', 'img/photo/2.jpg', 'img/photo/3.jpg', 'img/photo/4.jpg', 'img/photo/5.jpg', 'img/photo/6.jpg', 'img/photo/7.jpg', 'img/photo/8.png', 'img/photo/9.jpg', 'img/photo/10.jpg', 'img/photo/11.jpg',
        'img/photo/12.jpg', 'img/photo/13.jpg', 'img/photo/14.jpg', 'img/photo/15.jpg', 'img/photo/16.jpg', 'img/photo/17.jpg', 'img/photo/18.jpg', 'img/photo/19.jpg', 'img/photo/20.jpg', 'img/photo/21.jpg', 'img/photo/22.jpg',
        'img/photo/23.jpg', 'img/photo/24.jpg', 'img/photo/25.jpg', 'img/photo/26.jpg', 'img/photo/27.jpg', 'img/photo/28.jpg', 'img/photo/29.jpg', 'img/photo/30.jpg', 'img/photo/31.jpg', 'img/photo/32.jpg', 'img/photo/33.jpg',
        'img/photo/34.jpg', 'img/photo/35.jpg', 'img/photo/36.jpg', 'img/photo/37.jpg', 'img/photo/38.jpg', 'img/photo/39.jpg', 'img/photo/40.jpg', 'img/photo/41.jpg', 'img/photo/42.jpg', 'img/photo/43.jpg', 'img/photo/44.jpg',
        'img/photo/45.jpg', 'img/photo/46.jpg', 'img/photo/47.jpg', 'img/photo/48.jpg', 'img/photo/49.jpg', 'img/photo/50.jpg'
    ];
    let current = 0;

    let pageNum = function() {
        document.getElementById('page').textContent = (current + 1) + '/' + images.length;
    }

    let changeImage = function(num) {
        if(current + num >= 0 && current + num < images.length) {
            current += num;
            document.getElementById('main_image').src = images[current];
            pageNum();
        }
    };

    let preloadImage = function(path) {
        let imgTag = document.createElement('img');
        imgTag.src = path;
    };

    for(let i = 0; i < images.length; i++) {
        preloadImage(images[i]);
    }

    pageNum();

    document.getElementById('prev').onclick = function() {
        changeImage(-1);
    };

    document.getElementById('next').onclick = function() {
        changeImage(1);
    };


    // トップに戻るボタン
    $('#back-to-top').hide();

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top a').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });








});