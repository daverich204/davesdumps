(function ($) {
    "use strict";

    $(document).ready(function () {

        $('.secretContent').socialUnlocker({
            afterAddContent: function(){
                if ($().appear) {
                    if (window.screen.width < 998) {
                        $("body").removeClass("cssAnimate");
                    } else {
                        $('.cssAnimate .animated').appear(function () {
                            var $this = $(this);

                            $this.each(function () {
                                if ($this.data('time') != undefined) {
                                    setTimeout(function () {
                                        $this.addClass('activate');
                                        $this.addClass($this.data('fx'));
                                    }, $this.data('time'));
                                } else {
                                    $this.addClass('activate');
                                    $this.addClass($this.data('fx'));
                                }
                            });
                        }, {accX: 50, accY: -350});
                    }
                }
            },

            texts:{
                maskText: "to unlock newsletter",
                maskHeader: "Like us or share"
            },
            theme: "blueSky",

            buttons      : ["facebook_like", "twitter_tweet",  "facebook_share", "twitter_follow"],
            fullPage: true,

            facebook:{
                appId: "1611554255754197",
                likeButton:{
                    url: "https://www.facebook.com/createITpl"
                },
                shareButton:{
                    url:"https://www.facebook.com/createITpl/posts/898868683469333",
                    name        : "CreateIT",
                    picture     : "http://www.createit.pl//wp-content/uploads/sites/2/2015/02/createit-landing-logo-upd.png",
                    caption     : "CreateIT",
                    description : "We are createIT. We create IT. And we are really good at it."
                }
            },

            twitter:{
                tweetButton: {
                    url: "http://www.createit.pl",
                    message: "Amazing Foodtruck newsletter for free!"
                },

                followButton:{
                    username: "createitpl"
                },

                lang: "en"
            }
        });

    });

}(jQuery));

console.log("init");