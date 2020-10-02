
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (matrix) {
	  var finalArray = [];
	  for(var i=0; i<matrix.length; i+=1) {
	    if ((i+1)%2 === 0) {
	     for (var j=matrix[i].length-1; j>=0; j-=1) {
	          finalArray.push(matrix[i][j]);
	      }
	    } else {
	      for (var j=0; j<matrix[i].length; j+=1) {
	          finalArray.push(matrix[i][j]);
	      }
	    } 
	   
	  }
	  return finalArray;
	}

	return [];
  }
