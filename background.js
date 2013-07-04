chrome.app.runtime.onLaunched.addListener(function() { 
  
  // create a new window and position it with a fixed size
  var win = chrome.app.window.create('main.html', { 
    width: 350, 
    height: 400,
    minWidth:300,
    minHeight:400,
    left:100,
    top:300
  });
});

chrome.app.window.onClosed.addListener(function(event) {
   win.left(); 
});
