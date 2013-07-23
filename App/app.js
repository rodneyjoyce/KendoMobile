define(["jQuery", "kendo", "views/home", "views/menu", "views/rightMenu", "views/profile", "views/dareList", "views/addDare"], function ($, kendo, homeView, menuView, rightMenuView, profileView, dareListView, addDareView)
{
    var kendoApplication;

    return {
        init: function ()
        {
            kendoApplication = new kendo.mobile.Application(document.body, { skin: "flat" });
            console.log('kendo app init');
        },
        views: {
            home: homeView,
            menu: menuView,
            rightMenu: rightMenuView,
            profile: profileView,
            dareList: dareListView,
            addDare: addDareView
        }
    };
});