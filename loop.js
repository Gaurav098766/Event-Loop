// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers,task, operations are recorded from myFile running
myFile.runContent();

// till when the while loop(event-loop) should execute
function shouldContinue(){
 // 1st check: Any pending setTimeout, setInterval, setImmediate
 // 2nd check: Any pending OS tasks? (Like server listening to port)
 // 3rd check: Any pending long running opertion(Like fs module)
 return pendingTimers.length() || pendingOperations.length() || pendingOSTasks.length();
}

// Entire body executes in one 'tick'
while(shouldContinue){
    // 1.) Node looks at pendingTimers ans sees if any functions
    // are ready to be called

    // 2.) Node looks ar pendingOSTasks and pendingOperarions and calls relevant callbacks

    // 3.) Pause execution, continue when...
    //  - a new pendingOSTask is done
    //  - a new pendingOperation is done
    //  - a timer is about to complete

    // 4.) look at pendingTimers. Call any and only setImmediate
    
    // 5.) Handle any 'close' events

    // eg: 
    //  readStream.on('close', ()=>{
    //      console.log('Cleanup Code');
    //  })
}



// exit back to terminal