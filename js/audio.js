
var context;

(function init(g){
	try {
		context = new (g.AudioContext || g.webkitAudioContext);
	} catch (e) {
		alert('No web audio oscillator support in this browser');
	}
}(window));

function play(freq, time, volume) {
	var oscillator = context.createOscillator();
	var gainNode = context.createGain();
	oscillator.frequency.value = freq;
	oscillator.connect(gainNode);
	gainNode.connect(context.destination);
	gainNode.gain.value = volume;
	oscillator.start();
	window.setTimeout(function() { oscillator.stop() }, time);
}