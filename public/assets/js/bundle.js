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
	var swap;
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

// merge sort
var mergeSort = function(list){
	var l = list.length;
	if(l>1){
		var pivot = Math.ceil(l/2);
		var left = mergeSort(list.slice(0,pivot));
		var right = mergeSort(list.slice(pivot,l));
		var newlist = [];
		do {
			// pushing lower number
			if(left[0]<right[0]){
				newlist.push(left.shift());
			} else {
				newlist.push(right.shift());
			}
		} while(left.length && right.length);
		
		if(left.length > 0){
			do{
				newlist.push(left.shift());
			}while(left.length);
		} else {
			do{
				newlist.push(right.shift());
			}while(right.length);			
		}
		return newlist;
	}else{
		return list;
	}
}

// quick sort
// recusive 
var quickSort = function(list){
	if(list.length >1)
	{
		// selecting pivot
		var pivot = list[0];
		var l = [];
		var r = [];
		for(var i = 1, lgt = list.length; i<lgt; i++) {
			if(list[i]<list[pivot]) {
				l.push(list[i]);	
			} else {
				r.push(list[i]);
			}
		}
		l=mergeSort(l);
		r=mergeSort(r);
		l.push(list[pivot]);
		var newList = l.concat(r);
		return newList;
	}
	else{
		return list;
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
	var mList = list.slice();
	var qList = list.slice();
	drawList('orig-list', originalList);
	selSort(selList);
	bubbleSort(bbList);
	mList = mergeSort(mList);
	qList = quickSort(qList);
	drawList('sel-sort', selList);
	drawList('bb-sort', bbList);
	drawList('merge-sort', mList);
	drawList('quick-sort', qList);
};
// end of main function

$(document).ready(main);