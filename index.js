function getFromDataLayer(key) { 
    let result = null; 
    dataLayer.push(function() { 
        console.log("Asked for "+key);
        let value = this.get(key);
        console.log("Got "+value);
        if (value) {
            result = value;
        }
    });
    return result;    
};

function requestDataPush(ev_name) {
    var msg_out = ev_name;
    var targetOrigin = window.location.origin;
    // generate a data event request message to host
    parent.postMessage(msg_out, targetOrigin);
    console.log("Data Push Requested: "+ev_name+" / Host: "+targetOrigin);
}

function pushData(event_name) {
   dataLayer.push({
        'event': event_name,
   });
   console.log("Data event created: "+event_name);
}


