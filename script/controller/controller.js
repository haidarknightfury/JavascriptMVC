function Controller(model) {
    var self = this;
    this.model = model;

    // delegate events
    this.handleEvent = function (e) {
        e.stopPropagation();
        switch (e.type) {
            case 'click':
                self.clickHandler(e.target);
                break;
            default:
                console.log(e.target);
        }
    }

    this.getModelHeading = function () {
        return self.model.heading;
    }
    
    this.clickHandler = function (target) {
        self.model.changeHeading();
        self.model.notifyAll();
    }




}