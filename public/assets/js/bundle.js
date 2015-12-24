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

// bubble sort
var bubbleSort = function(list) {
	var swapped = true;
	var swap ;
	for(var i=0, l=list.length; i<l && swapped; i++){
		swapped=false;
		for(var j=l-1; j>i; j--){
			if(list[j]<list[j-1]){
				//swap
				swap = list[j];
				list[j] = list[j-1];
				list[j-1] = swap;
				swapped=true;
			}
		}
	}
}
var main = function() {
	var list = [];
	for (var i=0;i<100;i++) {
		list.push(Math.floor(Math.random()*101));
	}
	var originalList = list.slice();
	var selList = list.slice();
	var bbList = list.slice();
	drawList('orig-list', originalList);
	selSort(selList);
	bubbleSort(bbList);
	drawList('sel-sort', selList);
	drawList('bb-sort', bbList);
};
// end of main function

$(document).ready(main);