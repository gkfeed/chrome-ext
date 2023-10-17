document.getElementById('changeColor').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let api_root = 'http://gkfeed.gws/api/v1/'
    let currentURL = tabs[0].url;
    
    let data = {
      url: currentURL
    };

    fetch(api_root + 'add_lazy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      alert('Success:', data);
    })
    .catch(error => {
      alert('Error:', error);
    });
  });
});
