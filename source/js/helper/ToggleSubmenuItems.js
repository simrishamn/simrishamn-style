HelsingborgPrime = HelsingborgPrime || {};
HelsingborgPrime.Helper = HelsingborgPrime.Helper || {};

HelsingborgPrime.Helper.ToggleSubmenuItems = (function ($) {

    function ToggleSubmenuItems() {
        this.init();
    }

    ToggleSubmenuItems.prototype.init = function () {
        $(document).on('click', 'button[data-load-submenu]', function(e) {
            e.preventDefault();

            if (!this.useAjax(e.target)) {
                this.toggleSibling(e.target);
            } else {
                this.ajaxLoadItems(e.target);
                this.toggleSibling(e.target);
            }
        }.bind(this));
    };

    ToggleSubmenuItems.prototype.useAjax = function (target) {
        if ($(target).siblings("ul").length) {
            return false;
        }

        return true;
    };

    ToggleSubmenuItems.prototype.ajaxLoadItems = function (target) {
        var markup = '';
        var parentId = this.getItemId(target);

        $(target).parents('li').first().addClass('is-loading');

        $.get('/?load-submenu-id=' + parentId, function(response){
            if (response.length !== "") {
                $(target).after(response);
                $(target).siblings('.sub-menu');
            } else {
                window.location.href = $(target).attr('href');
            }

            $(target).parents('li').first().removeClass('is-loading');
        }.bind(target)).fail(function(){
            window.location.href = $(target).attr('href');
        }.bind(target));
    };

    ToggleSubmenuItems.prototype.getItemId = function (target) {
        return $(target).parent('li').data('page-id');
    };

    ToggleSubmenuItems.prototype.toggleSibling = function (target) {
        $(target).parent().toggleClass('is-expanded');
    };

    return new ToggleSubmenuItems();

})(jQuery);
