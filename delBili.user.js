// ==UserScript==
// @name         批量删除哔哩哔哩动态
// @namespace    https://github.com/lwd-temp/delBili
// @version      0.0.1
// @description  批量删除哔哩哔哩动态
// @author       plain
// @match        *://space.bilibili.com/*/dynamic
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    window.onload = () => {
        function $(elem) {
            return document.querySelector(elem);
        }
        function $All(elem) {
            return document.querySelectorAll(elem);
        }
        function del() {
            for (let i = 0; i < 10; i++) {
                setTimeout(function () {
                    if ($('.bili-dyn-more__btn')) {
                        $('.bili-dyn-more__btn').click();
                        var item = $All('.bili-dyn-more__menu__item')
                        item[1].click();
                        $('.bili-modal') && $('.bili-modal').querySelectorAll('.bili-modal__button')[0].click();
                        i > 5 && window.location.reload();
                    }
                }, 1000 * i);
            }
        }

        // 判断如果有cookie 就不再弹窗，直接进行删除微薄
        if (document.cookie.indexOf('delBili=1') !== -1) {
            del();
        } else {
            var r = confirm("确定好要删除所有动态了吗，确定好了就点确定吧!");
            if (r === true) {
                document.cookie = 'delBili=1';
                del();
            }
        }
    };
})();