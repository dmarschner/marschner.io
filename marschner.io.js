var $ = document;
var today = new Date();
var time = today.getHours();

if (time >= 6 && time <= 19) {
  var id = "light";

  if (!$.getElementById(id)) {
    var head = $.getElementsByTagName('head')[0];
    var light = $.createElement('link');

    light.id = id;
    light.rel = 'stylesheet';
    light.type = 'text/css';
    light.href = id + '.css';
    light.media = 'all';

    head.appendChild(light);
  }
}
