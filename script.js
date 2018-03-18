(function(){

    'use strict';

    function main() {
        var model = new Model();
        var controller = new Controller(model);
        var view = new View(controller);
    }
    main();

})();