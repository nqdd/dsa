export class Solution {
	DELIMITER = "#";

	/**
	 * @param {string[]} strs
	 * @returns {string}
	 */
	encode(strs) {
		return strs.reduce(
			(acc, str) => acc + str.length + this.DELIMITER + str,
			"",
		);
	}

	/**
	 * @param {string} str
	 * @returns {string[]}
	 */
	decode(str) {
		const result = [];
		let index = 0;
		while (index < str.length) {
			// Parse length
			// Example: "123#..."
			// loop 1: length = 0 * 10 + 1
			// loop 2: length = 1 * 10 + 2 = 12
			// loop 3: length = 12 * 10 + 3 = 123
			let length = 0;
			while (index < str.length && str[index] !== this.DELIMITER) {
				length = length * 10 + parseInt(str[index], 10);
				index++;
			}
			index++; // skip delimiter

			result.push(str.slice(index, index + length));
			index += length;
		}
		return result;
	}
}
