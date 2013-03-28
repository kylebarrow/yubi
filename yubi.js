/*Yubi v1.0.2, Copyright (C) 2013 Kyle Barrow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/
(function () {

	'use strict';

	var w = window,
		d = document,
		i,
		active,
		activeoffset,
		lightbox,
		yubiclass = '_yubi-' + (+new Date()),
		yubis = d.querySelectorAll('[class|=_yubi]'), // wildcard selector to test if yubi's already on page
		ns = 'http://www.w3.org/2000/svg'; // because I don't like typing

	// Generate touch target SVG
	function drawTarget(target, boundary) {

		var svg, circles = [], size = target + (boundary*2), center = size/2, radius = [center, target/2];

		svg =  d.createElementNS(ns, 'svg');

		svg.setAttribute('width',size+2); // add 2 pixels to accomodate stroke
		svg.setAttribute('height',size+2);
		svg.setAttribute('pointer-events', 'none');


		for (i=0; i < 2; i+=1)
		{
			circles[i] = d.createElementNS(ns, 'circle');
			circles[i].setAttribute('cx',center+1); // add 1 pixel to accomodate stroke
			circles[i].setAttribute('cy',center+1);
			circles[i].setAttribute('r',radius[i]);
			circles[i].setAttribute('stroke','white');
			circles[i].setAttribute('stroke-width',1);

			// boundary circle 0.2, target circle 0.4
			circles[i].setAttribute('stroke-opacity',0.3 * (i+1));
			circles[i].setAttribute('fill-opacity',0.2 * (i+1));

			circles[i].setAttribute('fill','red');

			svg.appendChild(circles[i]);

		}

		return svg;
	}

	// Track mouse or move on touch
	function targetMove(e) {

		active.style.top = (e.pageY - activeoffset) + 'px';
		active.style.left = (e.pageX - activeoffset) + 'px';
	}

	// Set active target
	function targetSet(target) {

		// global target SVG
		active = target;

		// clear margin on finger target
		active.style.margin = 0;

		// global offset so we don't calculate this on every movement
		activeoffset = Math.round(active.getBoundingClientRect().width/2);


		d.body.appendChild(active);

		lightbox.parentNode.removeChild(lightbox);

		active.style.position =  'absolute';

		// Kick off from target size select
		w.addEventListener("click", targetMove, false);

		w.addEventListener('mousemove',targetMove, false);
		w.addEventListener('touchstart',targetMove, false);

	}

	function hasViewport() {

		var metatags = document.getElementsByTagName('meta');

		for (i=0; i < metatags.length; i+=1) {
			if (metatags[i].getAttribute('name') === 'viewport') {
				return true;
			}

		}

		return false;

	}

	function showTargetSelector() {

		var dialog = d.createElement('div'),
			thumbselect = d.createElement('div'),
			fingerselect = d.createElement('div'),
			thumbtxt = d.createElement('div'),
			fingertxt = d.createElement('div'),
			thumb = drawTarget(52, 13),
			finger = drawTarget(45, 6),
			nowarning =  hasViewport(),
			warning = nowarning ? '' : '<div style=\'font-size:12px; padding-top: 10px\'><span style=\'color:#F00\'>WARNING:</span> This page has no viewport, touch size may be inaccurate on mobiles and tablets</div>',
			dialogheight = nowarning ? 240 : 280;

		lightbox = d.createElement('div');

		lightbox.setAttribute('style','z-index: 10000; padding: 0; margin: 0; background-color: rgba(255, 255, 255, 0.9); color: #000;position: fixed; top: 0; bottom: 0; left: 0; right: 0; font-family:\'Helvetica\', \'Helvetica Neue\', \'Roboto\', sans-serif; font-size: 12px; line-height: 1.5em; font-weight: 200; text-align: center');

		lightbox.className = yubiclass;
		// SVG doesn't support className
		finger.setAttribute('class', yubiclass);
		thumb.setAttribute('class', yubiclass);


		dialog.setAttribute('style','width: 280px; height: '+dialogheight+'px; border-radius: 10px; background-color: rgb(255, 255, 255); position: fixed; top: 50%; left: 50%; margin-top: -'+(dialogheight/2)+'px; margin-left: -140px');

		// Required to work with sites with insane z-indexes
		thumb.style.zIndex = 10000;
		finger.style.zIndex = 10000;

		finger.style.marginTop = '11px';
		finger.style.marginBottom = '10px';

		thumbselect.setAttribute('style','float: left; width: 115px; cursor: pointer; margin-left: 20px');
		thumbselect.appendChild(thumb);

		fingerselect.setAttribute('style','float: right; width: 115px; cursor: pointer; margin-right: 20px');
		fingerselect.appendChild(finger);

		thumbtxt.innerHTML = '<div style=\'font-size: 16px; padding: 10px 0 10px 0\'>Thumb</div><div>8mm target</div><div>2mm boundary</div>';
		thumbselect.appendChild(thumbtxt);

		fingertxt.innerHTML = '<div style=\'font-size: 16px; padding:  10px 0 10px 0\'>Finger</div><div>7mm target</div><div>1mm boundary</div>';
		fingerselect.appendChild(fingertxt);


		dialog.innerHTML = '<div style=\'padding:  20px 10px 20px 10px; font-size: 20px;\'>Choose touch size'+warning+'</div>';

		dialog.appendChild(thumbselect);
		dialog.appendChild(fingerselect);

		lightbox.appendChild(dialog);

		d.body.appendChild(lightbox);

		fingerselect.addEventListener('click',function(){targetSet(finger);}, false);
		thumbselect.addEventListener('click',function(){targetSet(thumb);}, false);

	}

	// If targets are already on page, remove them, otherwise load yubi
	if(yubis.length > 0) {

		// Work in reverse in case lightbox is still open
		for (i=yubis.length-1; i >= 0; i-= 1)
		{
			yubis[i].parentNode.removeChild(yubis[i]);
		}

	} else {
		showTargetSelector();
	}

}());