define([], function () {
    return {
        init: function(initEvt) {
            console.log('menu - init');
        },

        beforeShow: function(beforeShowEvt) {
            console.log('menu - beforeShow');
        },

        show: function(showEvt) {
            console.log('menu - show');
        }
    };
});