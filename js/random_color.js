function getColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
function setColor() {
    document.getElementById('random_col').style.setProperty('--new_color', getColor());
    document.getElementById('random_col').style.setProperty('--new_radius', '60px')
    document.getElementById('random_col').style.setProperty('--new_scale', '1.2')
    setTimeout(function() { document.getElementById('random_col').style.setProperty('--new_color', 'beige'); }, 2000)
    setTimeout(function() { document.getElementById('random_col').style.setProperty('--new_radius', '40px'); }, 2000)
    setTimeout(function() { document.getElementById('random_col').style.setProperty('--new_scale', '1'); }, 2000)
}