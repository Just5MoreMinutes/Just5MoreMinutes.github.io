function getColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function wait(element, variable, value, original_value, timeout) {
  document.getElementById(element).style.setProperty(variable, value);
  setTimeout(function() { document.getElementById(element).style.setProperty(variable, original_value); }, timeout);
}

  
function setColor() {
    wait('random_col','--new_color', getColor(), 'beige', 2000);
    wait('random_col','--new_radius', '60px', '40px', 2000);
    wait('random_col','--new_scale', '1.2', '1', 2000);
    wait('random_col','--new_letter_space', '10px', '5px', 2000);
    wait('random_col','--opacity', 0.3, 1, 2000)
    wait('show_on_hover','--display', 'opacity-change', 0, 2000)
}