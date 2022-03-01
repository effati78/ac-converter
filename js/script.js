"use strict";

var form = document.querySelector('form');
var textarea = document.querySelector('textarea');

function textCopied() {
  var btn = document.querySelector('.copy-btn');
  btn.innerHTML = 'متن با موفقیت کپی شد シ';
  setTimeout(function () {
    btn.innerHTML = 'ثبت اطلاعات';
  }, 2000);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var str = textarea.value;
  str = str.trim();
  if (str == null || str == '') alert('فیلد متن نمیتونه خالی باشه!');
  else {
    str = str.replaceAll('ی', 'ي'); // ی -> ي

    var cb = navigator.clipboard;
    cb.writeText(str);
    textCopied();
  }
});
