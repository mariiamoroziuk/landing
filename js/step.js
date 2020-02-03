$(document).ready(function () {
    initServices();
    initAmazing();
    initAmazingHover();
    initNews();
    initPeople();
    initMasonry()
});

    function initServices() {
        const inputs = document.getElementById('services');
        inputs.onclick = function (event) {
            const name = event.target.className;
            const classCollection = document.getElementsByClassName(name);
            const activeText = document.getElementsByClassName('active')[0];

            if (classCollection[1]) {
                if (!activeText) {
                    classCollection[1].classList.add('active');
                } else {
                    activeText.classList.remove('active');
                    classCollection[1].classList.add('active');
                }
            }
            const ev = event.target;
            const activeInput = document.getElementsByClassName('color')[0];
            const triangleVisible = document.getElementsByClassName('triangle_visible')[0];

            if (!activeInput) {
                ev.classList.add('color');
                ev.nextElementSibling.classList.add('triangle_visible')
            } else {
                activeInput.classList.remove('color');
                triangleVisible.classList.remove('triangle_visible');
                ev.classList.add('color');
                ev.nextElementSibling.classList.add('triangle_visible');
            }
        }
    }

    function initAmazing() {
        $('#amazing_menu div').click(function () {
            $('#amazing_menu div').css({'color': '#4e4e4e', 'border-top': '1px #ebebeb solid'});
            $(this).css({'color': '#18cfab', 'border-top': '2px #18cfab solid'});
            const classValue = $(this).attr('class');
            $('.amazing_pictures>div>img').hide();
            const x = document.getElementsByClassName(`${classValue}`);
            for (let i = 0; i < x.length; i++) {
                x[i].style.display = "block";
            }
        });
        $('.amazing button').click(function () {

            $('.amazing .preloader').show();

            setTimeout(function () {
                $('.amazing .preloader').hide();
                const y = $('.amazing_pictures>div>img:not(.first)');
                for (let i = 0; i <= 11; i++) {
                    y[i].classList.add('first');
                }
                if (y.length === 12) {
                    $('.amazing button').hide('slow')
                }
                $('#amazing_menu .first').trigger('click')
            }, 2000);
        });

    }

    function initNews() {
        $('.over_div').hover(
            function () {
                $(this).children('div:first').css('background-color', '#18cfab');
                $(this).children('div:last').css('color', '#18cfab');
            },
            function () {
                $(this).children('div:first').css('background-color', '');
                $(this).children('div:last').css('color', '');
            });
    }

function initAmazingHover() {
    $('.amazing_pictures>div').hover(
        function () {

            $(this).children('div').show();
        },
        function () {
            $(this).children('div').hide();

        }
)
}

    function initPeople() {

        $('.people_all .student').css('border', '2px #18cfab solid');

        $('.people_all img').click(function () {
            $('.people_all img').css('border', '').removeAttr('id').animate({top: "50px"}, 100);
            $(this).css('border', '2px #18cfab solid').attr('id', 'active_picture').animate({top: "10px"}, 700);
            $('.one_of_people>div').hide();
            const classOf = $(this).attr('class');
            const x = document.getElementsByClassName(`${classOf}`)[0];
            x.style.display = "block";
        });

        $('.arrow_right').click(function () {
            const x = $('#active_picture').next();

            if (x[0].className === 'arrow_right') {
                $('.people_all .student').trigger('click')
            } else {
                x.trigger('click');
            }
        });

        $('.arrow_left').click(function () {
            const x = $('#active_picture').prev();

            if (x[0].className === 'arrow_left') {
                $('.people_all .housewife').trigger('click')
            } else {
                x.trigger('click');
            }
        });
    }

    function initMasonry() {
        // $(document).ready(function(){
        $masonry = $('#wrapper').masonry({
            itemSelector: '.item',
            singleMode: false,
            isResizable: true,
        });

        $('.best_images button').click(function () {

            $('.best_images .preloader').show();

            setTimeout(function () {
                $('.best_images .preloader').hide();
                const y = $('#wrapper div:not(.item)');
                for (let i = 0; i <= 2; i++) {
                    y[i].classList.remove('none');
                    y[i].classList.add('item');
                }
                $masonry.masonry('reloadItems').masonry('layout')
                if (y.length === 3) {
                    $('.best_images button').hide('slow');
                }
            }, 2000);
        })
    }
























