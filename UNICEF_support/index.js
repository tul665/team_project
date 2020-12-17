$('.txt_box').animate({
    'opacity': '0'
}, 0)
$('.num_img').mouseenter(function () {
    $('.txt_box').stop().animate({
        'opacity': '1'
    })
})
$('.num_img').mouseleave(function () {
    $('.txt_box').stop().animate({
        'opacity': '0'
    })
})

$('.ani_btn:eq(0)').click(function () {
    $(this).parents().find('.table_ani:eq(0)').toggleClass('js_ani')
})

$('.ani_btn:eq(1)').click(function () {
    $(this).parents().find('.table_ani:eq(1)').toggleClass('js_ani')
})

$('.ani_btn:eq(2)').click(function () {
    $(this).parents().find('.table_ani:eq(2)').toggleClass('js_ani')
})

$('.ani_btn:eq(3)').click(function () {
    $(this).parents().find('.table_ani:eq(3)').toggleClass('js_ani')
})

$('.tab_ani').click(function () {
    $('.table_ani2').toggleClass('js_ani')
})



$(window).scroll(function () {
    scrT = $(this).scrollTop()
    console.log(scrT)
    if (scrT >= 0 && scrT < 1000) {
        $('.scroll_btn li').css({
            'background': '#d2f9f4'
        })
        $('.scroll_btn li').eq(0).css({
            'background': '#29b6ec'
        })
    }

    if (scrT >= 1000 && scrT < 2200) {
        $('.scroll_btn li').css({
            'background': '#d2f9f4'
        })
        $('.scroll_btn li').eq(1).css({
            'background': '#29b6ec'
        })
    }

    if (scrT >= 2200 && scrT < 3000) {
        $('.scroll_btn li').css({
            'background': '#d2f9f4'
        })
        $('.scroll_btn li').eq(2).css({
            'background': '#29b6ec'
        })
    }

    if (scrT >= 3000) {
        $('.scroll_btn li').css({
            'background': '#d2f9f4'
        })
        $('.scroll_btn li').eq(3).css({
            'background': '#29b6ec'
        })
    }
})