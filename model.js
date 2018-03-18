function Model(){

    var self= this;
    var state  = new HeadingState();
    var heading = state.getValue();


    this.observers = [];

    this.registerObservers = function(observer){
        this.observers.push(observer);
    }

    this.notifyAll = function(){
        self.observers.forEach(function(observer){
            observer.update(self);
        });
    }

    this.changeHeading = function(){
        console.log('change heading');
        state.changeState();
        self.heading = state.getValue();
    }

    Object.defineProperty(this,"heading",{
        get: function(){
            return heading;
        },
        set: function(value){
            heading = value;
            this.notifyAll();
        }
    })
}