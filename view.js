function View(controller) {
    this.controller = controller;
    this.heading = document.getElementById('heading');
    this.heading.addEventListener('click', controller);

    // update function - view class considered as the observer
    this.update = function(data){
        this.heading.innerText = data.heading;
    }

    this.controller.model.registerObservers(this);

}