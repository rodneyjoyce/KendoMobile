define([], function () {
    return {
        init: function(initEvt) {
            console.log('dareList - init');
        },

        beforeShow: function(beforeShowEvt) {
            console.log('dareList - beforeShow');
        },

        show: function(showEvt) {
            console.log('dareList - show');
        }
    };
});