define([], function () {
    return {
        init: function(initEvt) {
            console.log('rightMenu - init');
        },

        beforeShow: function(beforeShowEvt) {
            console.log('rightMenu - beforeShow');
        },

        show: function(showEvt) {
            console.log('rightMenu - show');
        }
    };
});