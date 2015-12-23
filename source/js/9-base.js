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