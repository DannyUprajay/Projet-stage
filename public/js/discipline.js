document.addEventListener("DOMContentLoaded", function() {


    $(window).scroll(function() {

        // selectors
        var $window = $(window),
            $body = $('body'),
            $panel = $('.section');

        // Change 33% earlier than scroll position so colour is there when you arrive.
        var scroll = $window.scrollTop() + ($window.height() / 3);

        $('.section').removeClass('active');

        $panel.each(function () {
            var $this = $(this);

            // if position is within range of this panel.
            // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
            // Remember we set the scroll to 33% earlier in scroll var.
            if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                $this.addClass('active');

            }
        });

    }).scroll();



    let divScroll = document.querySelector('.scroll');
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        console.log(window.pageYOffset + "sasakn,saikn");
        if (currentScroll <= 0) {
            divScroll.classList.remove("scroll-up");
            return;
        }

        if (currentScroll > lastScroll && !divScroll.classList.contains("scroll-down")) {
            divScroll.classList.remove("scroll-up");
            divScroll.classList.add("scroll-down");
        } else if (
            currentScroll < lastScroll &&
            divScroll.classList.contains("scroll-down")
        ) {
            divScroll.classList.remove("scroll-down");
            divScroll.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    });


});
