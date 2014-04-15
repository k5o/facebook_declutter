var manifest = chrome.runtime.getManifest();

chrome.runtime.sendMessage(
  { tabs_host: document.URL },
  function(response) { if (response === true) { Declutter.init() } }
);

var Declutter = {
  init: function() {
    l = document.getElementById('leftCol')
    r = document.getElementById('rightCol')
    p = document.getElementById('pagelet_composer')

    if (l && r && p){
      l.style.display = "none"
      r.style.display = "none"
      p.style.display = "none"
    }
  }
}
