'use strict'

$(document).ready(function(){
    let position = 0;

    const slidesToShow = 4;
    const slidesToScroll = 2;

    const container = $('.basket__add-slider');
    const track = $('.basket__add-track');
    const item = $('.basket__add-item');
    const btnPrew = $('.basket__add-btn-prew');
    const btnNext = $('.basket__add-btn-next');
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,
        })
    })


    btnNext.click(function(){
        position -= movePosition;

        track.css({
            transform: 'translateX(${position}px)'
        });
    });

    btnPrew.click(function(){
        position += movePosition;

        track.css({
            transform: 'translateX(${position}px)'
        });
    });
    
});