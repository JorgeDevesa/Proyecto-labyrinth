particlesJS.load('particles-js', '../style/particlesjs-config (1).json', function() {
    console.log('callback - particles.js config loaded');
  });
function StartGameButton(game){
    this.game = game
    document.querySelector(".start").onclick = function(){
        document.querySelector(".start").parentNode.style.display = "none"
    }
}