//create our Crypto class
//it takes a string as an argument
var Crypto = function(text){
	//store the string for use elsewhere
	this.text = text;
};

Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/[\W]/g, "").toLowerCase();
};

Crypto.prototype.size = function() {
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length));
};

Crypto.prototype.plaintextSegments = function() {
	var segments = [],
		npt = this.normalizePlaintext(),
		size = this.size();

	//loop through all of the characters in npt
	for (var i = 0; i < npt.length; i += size) {
		//add a string of characters to our array of segments
		segments.push(npt.slice(i, i+size));
	}
	//return an array of strings that represent our plain text segments
	return segments;
};

Crypto.prototype.ciphertext = function() {
	var ct = "";
		size = this.size();
		segs = this.plaintextSegments();

	//loop through the columns
	for (var i = 0; i < size; i += 1) {
		//loop through the rows
		for (var j = 0; j < segs.length; j += 1) {
			ct += segs[j].charAt(i); //j represents the rows, i represents column
		}
	}

	//return a string representing the coded message
	return ct;
};

module.exports = Crypto;