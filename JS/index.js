window.onload = function(){
    particlesJS.load('particles-js', '../style/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
      });

    var game = new Game("myCanvas")
    game.start()
}
