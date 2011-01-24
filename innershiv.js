// http://jdbartlett.github.com/innershiv | WTFPL License
window.innerShiv = (function() {
	var d, r;
	
	return function(h, u) {
		if (!d) {
			d = document.createElement('div');
			r = document.createDocumentFragment();
			/*@cc_on d.style.display = 'none';@*/
		}
		
		var e = d.cloneNode(true);
		/*@cc_on document.body.appendChild(e);@*/
		e.innerHTML = h.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		/*@cc_on document.body.removeChild(e);@*/
		
		if (u === false) return e.childNodes;
		
		var f = r.cloneNode(true), i = e.childNodes.length;
		while (i--) f.appendChild(e.firstChild);
		
		return f;
	}
}());

// https://github.com/5509/innershiv | WTFPL License
// jQuery plugin
// this method does not return the original jQuery object
(function($) {
	$.fn.cloneShiv = function() {
		if ( $.support.opacity ) {
			return $(this).clone();
		} else {
			return innerShiv(
					$("<div></div>")
					.append(
						$(this)[0].cloneNode(true)
					).html().replace(/\:/g, '')
				)
			}
	}
})(jQuery);
