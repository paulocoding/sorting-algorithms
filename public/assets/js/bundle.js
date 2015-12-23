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
// selection sort
var selSort = function(list) {
	var swap, min;
	for(var i=0, l=list.length;i<l;i++){
		min=i;
		for(var j=i+1, lgt=list.length; j<lgt; j++){
			if(list[j]<list[min]){
				min = j;
			}
		}
		// swapping
		swap=list[i];
		list[i]=list[min];
		list[min]=swap;
	}
}
var main = function() {
	var list = [];
	for (var i=0;i<100;i++) {
		list.push(Math.floor(Math.random()*101));
	}
	var originalList = list.slice();
	drawList('orig-list', originalList);
	selSort(list);
	drawList('sel-sort', list);
};
// end of main function

$(document).ready(main);