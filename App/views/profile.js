define([], function ()
{
    return {
        init: function (initEvt)
        {
            console.log('profile - init');
        },

        beforeShow: function (beforeShowEvt)
        {
            console.log('profile - beforeShow');
        },

        show: function (showEvt)
        {
            console.log('profile - show');
        },

        viewModel: kendo.observable({
            userDisplayName: "Rodders",
            displayGreeting: function ()
            {
                var name = this.get("userDisplayName");
                alert("Hello, " + name + "!!!");
            }
        })
    };
});