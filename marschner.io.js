var $ = document;
var today = new Date();
var time = today.getHours();
var id = 'dark';

if (time >= 6 && time <= 19) {
  id = "light";
}

if (!$.getElementById(id)) {
  var head = $.getElementsByTagName('head')[0];
  var link = $.createElement('link');

  link.id = id;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = id + '.css';
  link.media = 'all';

  head.appendChild(link);
}
