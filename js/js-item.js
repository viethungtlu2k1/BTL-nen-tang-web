/* readmore */
$(document).ready(function () {
    $('.read-more').readall({
        // Default values
        showheight: 500,                         // height to show
        showrows: null,                         // rows to show (overrides showheight)
        animationspeed: 200,                    // speed of transition
        btnTextShowmore: 'Xem thêm nội dung',           // text shown on button to show more
        btnTextShowless: 'Thu gọn nội dung',           // text shown on button to show less
        btnClassShowmore: 'readall-button',     // class(es) on button to show more
        btnClassShowless: 'readall-button'      // class(es) on button to show less
    });
});