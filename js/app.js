var x = [];
var y = [];

var t = 0;
var k = 1;
document.getElementById("sliderk").value = 1;
var w = 1; //omega
document.getElementById("sliderw").value = 1;

document.getElementById("k-display").innerHTML = k;
document.getElementById("w-display").innerHTML = w;

Plotly.plot('waveform', [{
	x: x,
	y: y,
}], {
	xaxis: {
		range: [0, 8]
	},
	yaxis: {
		range: [-1.2, 1.2]
	}
});

function compute() {
	var n = 200;
	t = t + 0.02;
	var k = document.getElementById("sliderk").value;
	var w = document.getElementById("sliderw").value;
	document.getElementById("k-display").innerHTML = k;
	document.getElementById("w-display").innerHTML = w;
	document.getElementById("t-display").innerHTML = t.toFixed(2);
	for (var i = 0; i < n; i++) {
		X = i / 25;
		x[i] = X; //displacement
		y[i] = Math.cos(k * X + w * t); //amplitude
	}
}

function update() {
	compute();

	Plotly.animate('waveform', {
		data: [{
			x: x,
			y: y
		}]
	}, {
		transition: {
			duration: 0
		},
		frame: {
			duration: 90,
			redraw: true
		}
	});

	requestAnimationFrame(update);
}

requestAnimationFrame(update);