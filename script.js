document.addEventListener('DOMContentLoaded', function () {
  var changeTextBtn = document.getElementById('changeTextBtn');
  var addItemBtn = document.getElementById('addItemBtn');
  var removeItemBtn = document.getElementById('removeItemBtn');
  var list = document.getElementById('favoritesList');
  var input = document.getElementById('newItemInput');
  var intro = document.getElementById('intro');

  var originalText = intro.textContent;
  var altText = 'Quick matches on my phone and cozy anime nights perfect combo for chilling.';
  var toggled = false;

  changeTextBtn.addEventListener('click', function () {
    var p = document.getElementById('intro');
    if (!p) {
      alert('The introduction paragraph has been removed.');
      return;
    }
    p.textContent = toggled ? originalText : altText;
    toggled = !toggled;
  });

  addItemBtn.addEventListener('click', function () {
    var text = input.value.trim();
    var li = document.createElement('li');
    li.textContent = text || 'New item ' + (list.children.length + 1);
    list.appendChild(li);
    input.value = '';
    input.focus();
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      addItemBtn.click();
    }
  });

  removeItemBtn.addEventListener('click', function () {
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    } else {
      var p = document.getElementById('intro');
      if (p) {
        p.remove();
      } else {
        alert('Nothing left to remove!');
      }
    }
  });
});