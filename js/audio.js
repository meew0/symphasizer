
var context;

(function init(g){
	try {
		context = new (g.AudioContext || g.webkitAudioContext);
	} catch (e) {
		alert('No web audio oscillator support in this browser');
	}
}(window));

function play(freq, time) {
	var oscillator = context.createOscillator();
	oscillator.frequency.value = freq;
	oscillator.connect(context.destination);
	oscillator.start();
	window.setTimeout(function() { oscillator.stop() }, time);
}