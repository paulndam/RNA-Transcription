/** @format */

//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//listing the object key values

const transcriptor = {
	G: "C",
	C: "G",
	T: "A",
	A: "U",
};

// this functions takes one argument, in order to return the RNA complement, i will have to iterate through my transcriptor.
// to achieve that i use the spread operation method, which will iterate through the transcriptor object expression.
// later on then map it and return each or an index of my transcriptor object and finally call on the join method .

export const toRna = (str) => {
	return [...str]
		.map((letters) => {
			return transcriptor[letters];
		})
		.join("");
};
