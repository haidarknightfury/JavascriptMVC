function WorldState(container) {
    var self = this;
    this.container = container;
    this.value = 'World';
    container.state = this;
    this.next = function () {
        return new HelloState(this.container);
    }
}