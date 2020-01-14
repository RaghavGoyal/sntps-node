function outer(name){
	console.log("outer function");
	console.log(name);
	inner(name);

	function inner(name){
		console.log("inner function");
		this.name=name+" goyal";
		console.log(this.name);
	}

}

outer("raghav")
