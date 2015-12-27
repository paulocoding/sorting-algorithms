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