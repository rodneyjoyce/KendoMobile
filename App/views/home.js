define([], function ()
{
    return {
        init: function (initEvt)
        {
            console.log('home - init');
        },

        beforeShow: function (beforeShowEvt)
        {
            console.log('home - beforeShow');
        },

        show: function (showEvt)
        {
            console.log('home - show');
        },

        viewModel: kendo.observable({
            message: "This rocks!"
        })
    };
});