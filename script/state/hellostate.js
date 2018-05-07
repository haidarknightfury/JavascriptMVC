function HelloState(container){
    var self =this;
    this.container = container; 
    this.value = 'Hello';
    container.state = this;
    this.next = function(){
        return new WorldState(self.container);
    }
}