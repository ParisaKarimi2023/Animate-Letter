let spans = document.querySelectorAll('.word span');
spans.forEach(function (span , index) {
  span.addEventListener('click',function (e) {
      e.target.classList.add('active');
  })
    span.addEventListener('animationend',function (e) {
        e.target.classList.remove('active');
    })
    setTimeout(function () {
    span.classList.add('active');
    },750*(index +1));
});
