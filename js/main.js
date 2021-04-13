$(document).ready(function () {
    // man hinh xam 
    function overlay_drop() {
        $("#modal__overlay").css("display", "block");
    };
    function overlay_disdrop() {
        $("#modal__overlay").css("display", "none");
    };

    var drop_bgr = document.getElementById("dm-sp-hv");
    $("#dm-sp-hv").mouseout(function () {
        overlay_disdrop();
    });
    $("#dm-sp-hv").mouseover(function () {
        overlay_drop()
    });


    function search_drop() {
        $(".search-drop").css("display", "block");
    };
    function search_disdrop() {
        $(".search-drop").css("display", "none");
    };
    //click input search
    $("#search").click(function () {
        overlay_drop();
        search_drop();
    });
    $("#search").blur(function () {
        overlay_disdrop();
        search_disdrop();
    });

    // click user
    function rs_input() {
        $(".input-tk").val("");
        $(".input-mk").val("");
        $(".phone-err").css("display", "none");
    }

    $(".close-lo-re").click(function () {
        $(".login-user-hidden").css("display", "none");
        rs_input();
    });
    $(".close-click-outside").click(function () {
        $(".login-user-hidden").css("display", "none");
        rs_input();
    });
    var user = {
        name: "Nguyễn Việt Hưng",
        phone: "0388066309",
        email: "viethungtlu2k1@gmail.com",
        password: "123456",
        sex: "Nam",
        day: "30",
        month: "5",
        year: "2001",
    }
    //thay doi hien thi 
    var check_logged = false;
    function user_logged() {
        $(".lg-rs").html('Tài Khoản');
        $(".acc").html(user.name);
        $(".user-drop").css("display", "none");
        $("#img-user-dang-nhap").attr("src", "images/img-user/user-hung.jpg");
        check_logged = true;
    }

    // hover qua tài khoản hiện khung để đăng xuất
    function over_check_drop() {
        if (check_logged) {
            $(".user-drop-logged-x").css("display", "block");
        }
        else {
            $(".user-drop").css("display", "block");
        }
    }
    function out_check_drop() {
        if (check_logged) {
            $(".user-drop-logged-x").css("display", "none");
        }
        else {
            $(".user-drop").css("display", "none");
        }
    }


    $(".danh-muc-sp.user").mouseover(function () {
        over_check_drop();
    });
    $(".danh-muc-sp.user").mouseout(function () {
        out_check_drop();
    });

    $("#user-log-out").click(function () {
        check_logged = false;
        location.reload();
    });





    // reset input
    $(".login-x").click(function () {
        if ($(".input-tk").val() == user.phone & $(".input-mk").val() == user.password) {
            $(".login-user-hidden").css("display", "none");
            user_logged();
        } else {
            $(".phone-err").css("display", "block");
        }
    })
    function change_regis() {
        $(".form-user-login").css("display", "none");
        $(".form-user-registration").css("display", "block");
        $(".registration").addClass("atv-login-regis");
        $(".log-in").removeClass("atv-login-regis");
        $(".dang-ki-f").removeClass("no-active-lg-rs");
        $(".dang-nhap-f").addClass("no-active-lg-rs");
    };
    function change_login() {
        $(".form-user-login").css("display", "block");
        $(".form-user-registration").css("display", "none");
        $(".registration").removeClass("atv-login-regis");   //active
        $(".log-in").addClass("atv-login-regis");
        $(".dang-ki-f").addClass("no-active-lg-rs");
        $(".dang-nhap-f").removeClass("no-active-lg-rs");
    }
    /* change login - registration */
    $(".registration").click(function () {
        change_regis();
    });
    $(".log-in").click(function () {
        change_login();
    });

    $(".bt-dang-nhap").click(function () {
        $(".login-user-hidden").css("display", "block");
        change_login();
    });
    $(".bt-dang-ki").click(function () {
        $(".login-user-hidden").css("display", "block");
        change_regis();
    });




    // dt-mtb
    $("#dt-mtb").click(function () {
        location.assign("list-item.html");
    })


    /*  change img item */

    function change_bac() {
        $("#img-fix").attr("src", "images/trang-dssp/ip-12-bac.jpg");
        $("#big-img").attr("src", "images/trang-dssp/ip-12-bac.jpg");
    }
    $("#img-item-1").click(change_bac);

    function change_vang() {
        $("#img-fix").attr("src", "images/trang-dssp/ip-12-vang.jpg");
        $("#big-img").attr("src", "images/trang-dssp/ip-12-vang.jpg");
    }
    $("#img-item-2").click(change_vang);

    function change_xanhduong() {
        $("#img-fix").attr("src", "images/trang-dssp/ip-12-xanh-duong.jpg");
        $("#big-img").attr("src", "images/trang-dssp/ip-12-xanh-duong.jpg");
    }
    $("#img-item-3").click(change_xanhduong);

    function change_black() {
        $("#img-fix").attr("src", "images/trang-dssp/ip-12-black.jpg");
        $("#big-img").attr("src", "images/trang-dssp/ip-12-black.jpg");
    }
    $("#img-item-4").click(change_black);

    /* change option */
    $("#options-item-1").click(function () {
        $(".btn-option").removeClass("active-opt");
        $("#options-item-1").addClass("active-opt");
        change_bac();

    });
    $("#options-item-2").click(function () {
        $(".btn-option").removeClass("active-opt");
        $("#options-item-2").addClass("active-opt");
        change_vang();
    });
    $("#options-item-3").click(function () {
        $(".btn-option").removeClass("active-opt");
        $("#options-item-3").addClass("active-opt");
        change_xanhduong();
    });
    $("#options-item-4").click(function () {
        $(".btn-option").removeClass("active-opt");
        $("#options-item-4").addClass("active-opt");
        change_black();
    });


    /* add to card*/
    var number_add = $("#number-buy");
    var bt_reduce = $("#reduce-item");
    var bt_add = $("#more-item");

    function kiem_tra_number() {
        if (number_add.val() == 1) {
            bt_reduce.addClass("no-reduce");
        } else {
            bt_reduce.removeClass("no-reduce");
        }
    };

    bt_reduce.click(function () {
        var tam = parseInt(number_add.val()) - 1;
        number_add.val(tam);
        kiem_tra_number();
    });
    bt_add.click(function () {
        var tam = parseInt(number_add.val()) + 1;
        number_add.val(tam);
        kiem_tra_number();
    });


    /* add to card */
    var sl_add = parseInt($(".sl").html());
    var sl_end = 0;
    $(".button-add-to-card-l").click(function () {
        sl_end = parseInt(sl_end) + parseInt(number_add.val());
        sl_add = $(".sl").html(sl_end);
    });

    /* add to card on top */
    $(".button-add-to-card-l").click(function () {
        $("html").scrollTop(0);
        $(".noti-add").css("display", "block");
    });

    $(".noti-add-close").click(function () {
        $(".noti-add").css("display", "none");
    });


    /*  dropdown-sc 
    $(".dropdown-level1").mouseover(function(){
        $(".dropdown-scx").css("display","block");
    });
    $(".dropdown-level1").mouseout(function(){
        $(".dropdown-scx").css("display","none");
    });*/


})