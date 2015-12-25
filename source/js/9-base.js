var main = function() {
	var list = [];
	for (var i=0;i<100;i++) {
		list.push(Math.floor(Math.random()*101));
	}
	var originalList = list.slice();
	var selList = list.slice();
	var bbList = list.slice();
	var mList = list.slice();
	drawList('orig-list', originalList);
	selSort(selList);
	bubbleSort(bbList);
	mList = mergeSort(mList);
	drawList('sel-sort', selList);
	drawList('bb-sort', bbList);
	drawList('merge-sort', mList);
};
// end of main function

$(document).ready(main);