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