const CountingSort = (A,r,k) => {
	let B = [];
	let C = [];
	let i = 0;
	for(i=0;i<r;i++){
		C[i] = 0;
	}
	for(i=0;i<A.length;i++){
		C[digit(A[i],k)]++;
	}
	for(i=1;i<r;i++){
		C[i] = C[i]+C[i-1];
	}
	let idx = (A.length-1);
	console.log("helping array: ",C);
	while(idx>=0){
		let j = digit(A[idx],k);
		C[j]--;
		B[C[j]] = A[idx];
		idx--;
	}
	return B;
}
const digit = (number,place) => {
	return number[place-1];
}
export default CountingSort;