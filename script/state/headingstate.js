function HeadingState() {
    var self = this;
    this.state = new HelloState(self);
    this.changeState = function () {
        self.state.next();
    }
    this.getValue = function () {
        return self.state.value;
    }
}