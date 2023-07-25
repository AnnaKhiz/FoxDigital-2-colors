$(function () {
    $('.switch-btn').click(function () {
        $(this).toggleClass('switch-on');
        if ($(this).hasClass('switch-on')) {

            $("#header-bg").addClass('newPosition');

            $("#main-bg").css("background-image", 'url("./img/blue-version/bg-main.png")');
            $("#footer-bg").css("background-image", 'url("./img/blue-version/bg-footer.png")');
            $(".main__advantages-item-colorBlock").css("background-color", '#1F7CE3');
            $(".main__services-variants-item-colorBlock").css("background-color", '#1F7CE3');
            $(".changeColorSchema").css("background", 'linear-gradient(248.62deg, #037FF7 -3.03%, #2549A6 180.73%)');
            $(".header__second-img").css("display", 'block');
            $(".main__digital-imgLogo").attr("src","./img/blue-version/fox-digital-label.png");
            $(".changeSlide-1").attr("src","./img/blue-version/slider-img-1.png");
            $(".changeSlide-3").attr("src","./img/blue-version/slider-img-3.png");
            $('.main__services-variants').addClass('newColor');
            $('.main__services-variants').addClass('newImage');
            $(".main__tracking-item-label").addClass('blueGradient');
            $(".main__services-label").addClass('blueGradient');
            $(".main__clients-label").addClass('blueGradient');
            $('.footer__form-block').addClass('newColor');
            $("#image-1").attr("src","./img/blue-version/blue-footer-img-1.png");
            $("#image-2").attr("src","./img/blue-version/blue-footer-img-2.png");
            $("#image-3").attr("src","./img/blue-version/blue-footer-img-3.png");
            $("#image-4").attr("src","./img/blue-version/blue-footer-img-4.png");
            $("#image-5").attr("src","./img/blue-version/blue-footer-img-5.png");
            $("#image-6").attr("src","./img/blue-version/blue-footer-img-6.png");
            $("#image-7").attr("src","./img/blue-version/blue-footer-img-7.png");
            $("#image-8").attr("src","./img/blue-version/blue-footer-img-8.png");
            $("#image-9").attr("src","./img/blue-version/blue-footer-img-9.png");
            $("#aboutNewImage").attr("src","./img/blue-version/about-image.png");
            $('.main__tracking-container').addClass('newColor');
            $('#stepItem-1').addClass('newImage');
            $('#stepItem-2').addClass('newImage');
            $('#stepItem-3').addClass('newImage');
            $('#stepItem-5').addClass('newImage');
            $('#stepItem-6').addClass('newImage');
            $("#stepItemLabel-1").text("Сбор респондентов");
            $("#stepItemLabel-2").text("Анализ и создание плана тестирования");
            $("#stepItemLabel-3").text("Тестирование сайта");
            $("#stepItemLabel-4").text("Анализ тепловой карты");
            $("#stepItemLabel-5").text("Корректировки на основе тестирования");
            $("#stepItemLabel-6").text("Сайт с подтвержденной эффективностью");
            $('.switch-on').addClass('active');
            $('.switch-btn').addClass('active');
            $('.burger__container').css("background", "linear-gradient(248.62deg, #0085FF -3.03%, #2549A6 180.73%)");
            $('.burger__item a').css("background", "linear-gradient(248.62deg, rgb(48 146 237) 33.97%, rgb(44 79 171) 129.73%)");
            $('.double-dashed-line').addClass('newColor');
            $(this).trigger('on.switch');
        } else {
            $(this).trigger('off.switch');
            $("#header-bg").removeClass('newPosition');
            //$("#header-bg").css("background-image", 'url("./img/bg-grad.png")');
            $("#main-bg").css("background-image", 'url("./img/bg-grad-2.png")');
            $("#footer-bg").css("background-image", 'url("./img/bg-footer.png")');
            $(".main__advantages-item-colorBlock").css("background-color", '#F24530');
            $(".main__services-variants-item-colorBlock").css("background-color", '#F24530');
            $(".changeColorSchema").css("background", 'linear-gradient(248.62deg, #F55929 -3.03%, #EC1F3D 180.73%)');
            $(".header__second-img").css("display", 'none');
            $(".main__digital-imgLogo").attr("src","./img/label-orange.png");
            $(".changeSlide-1").attr("src","./img/slide-orange-1.png");
            $(".changeSlide-3").attr("src","./img/slide-orange-3.png");
            //$(".main__services-label").css("background", 'linear-gradient(248.62deg, #F55929 -3.03%, #EC1F3D 180.73%)')
            $('.main__services-variants').removeClass('newColor');
            $('.main__services-variants').removeClass('newImage');
            $(".main__tracking-item-label").removeClass('blueGradient');
            $(".main__services-label").removeClass('blueGradient');
            $(".main__clients-label").removeClass('blueGradient');
            $('.footer__form-block').removeClass('newColor');
            $("#image-1").attr("src","./img/footer-img-1.png");
            $("#image-2").attr("src","./img/footer-img-2.png");
            $("#image-3").attr("src","./img/footer-img-3.png");
            $("#image-4").attr("src","./img/footer-img-4.png");
            $("#image-5").attr("src","./img/footer-img-5.png");
            $("#image-6").attr("src","./img/footer-img-6.png");
            $("#image-7").attr("src","./img/footer-img-7.png");
            $("#image-8").attr("src","./img/footer-img-8.png");
            $("#image-9").attr("src","./img/footer-img-9.png");
            $("#aboutNewImage").attr("src","./img/digital_orange.png");
            $('.main__tracking-container').removeClass('newColor');
            $('#stepItem-1').removeClass('newImage');
            $('#stepItem-2').removeClass('newImage');
            $('#stepItem-3').removeClass('newImage');
            $('#stepItem-5').removeClass('newImage');
            $('#stepItem-6').removeClass('newImage');
            $("#stepItemLabel-1").text("Запрос на исследование");
            $("#stepItemLabel-2").text("Сбор аудитории сервиса Yandex toloka");
            $("#stepItemLabel-3").text("Страница исследования с контентом");
            $("#stepItemLabel-4").text("Фиксация мимики пользователя");
            $("#stepItemLabel-5").text("Обработка данных");
            $("#stepItemLabel-6").text("Результат в вашем аккаунте");
            $('.switch-on').removeClass('active');
            $('.switch-btn').removeClass('active');
            $('.burger__container').css("background", "linear-gradient(248.62deg, #F55929 -3.03%, #EC1F3D 180.73%)");
            $('.burger__item a').css("background", "linear-gradient(248.62deg, #ff784e -3.03%, #f1334f 180.73%)");
            $('.double-dashed-line').removeClass('newColor');
        }
    });
    $('.switch-btn').on('on.switch', function () {
        $($(this).attr('data-id')).removeClass('bl-hide');
    });
    $('.switch-btn').on('off.switch', function () {
        $($(this).attr('data-id')).addClass('bl-hide');
    });
});