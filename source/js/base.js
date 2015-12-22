var main = function() {
	var list = [];
	for (var i=0;i<40;i++) {
		list.push(Math.floor(Math.random()*101));
	}
	console.log(list);
	var originalList = list.slice();
	selSort(list);
	console.log(list);
	console.log(originalList);
};
// end of main function

$(document).ready(main);