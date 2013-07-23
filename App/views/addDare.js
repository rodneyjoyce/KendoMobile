define([], function () {
    return {
        init: function(initEvt) {
            console.log('addDare - init');
        },

        beforeShow: function(beforeShowEvt) {
            console.log('addDare - beforeShow');
        },

        show: function(showEvt) {
            console.log('addDare - show');
        }
    };
});