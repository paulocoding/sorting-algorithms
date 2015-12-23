var drawList = function(divClass, list) {
	var $div = $('.'+divClass);
	var eachdiv = $('<div class="bar"></div>');
	$div[0].innerHTML = '';
	for(var i = 0, l = list.length;i<l;i++){
		eachdiv = $('<div class="bar"></div>');
		eachdiv.css('height', list[i]+'px');
		$div.append(eachdiv);
	}
};