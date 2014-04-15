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

    if (l){ l.style.display = "none" }
    if (r) { r.style.display = "none" }
    if (p) { p.style.display = "none" }
  }
}
