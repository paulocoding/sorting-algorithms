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

// counting sort 
var countingSort = function(list, min, max){
	var countList = [];
	var newList = [];
	for(var i = 0, l = max+1 - min; i<l; i++){
		countList.push(0);
	}
	for(var i = 0, l=list.length;i<l;i++){
		countList[list[min+i]]++;
	}
	
	
	for(var i = 0, l = max+1 - min; i<l; i++){
		while(countList[min+i]){
			newList.push(i);
			countList[min+i]--;
		}
	}
	
	return newList;
}
var main = function() {
	var list = [];
	var max = 100;
	for (var i=0;i<100;i++) {
		list.push(Math.floor(Math.random()*(max+1)));
	}
	var originalList = list.slice();
	var selList = list.slice();
	var bbList = list.slice();
	var mList = list.slice();
	var qList = list.slice();
	var countList = list.slice();
	
	
	selSort(selList);
	bubbleSort(bbList);
	mList = mergeSort(mList);
	qList = quickSort(qList);
	countList = countingSort(countList, 0, max);
	
	drawList('orig-list', originalList);
	drawList('sel-sort', selList);
	drawList('bb-sort', bbList);
	drawList('merge-sort', mList);
	drawList('quick-sort', qList);
	drawList('count-sort', countList);
	
	// console.log(selList);
	// console.log(bbList);
	// console.log(mList);
	// console.log(qList);
	// console.log(countList);
};
// end of main function

$(document).ready(main);