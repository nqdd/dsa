export class Solution {
	DELIMITER = String.fromCodePoint(128512);
	EMPTY = String.fromCodePoint(128513);

	/**
	 * @param {string[]} strs
	 * @returns {string}
	 */
	encode(strs) {
		return strs
			.map((str) => {
				if (!str.length) {
					return this.EMPTY;
				}
				return str;
			})
			.join(this.DELIMITER);
	}

	/**
	 * @param {string} str
	 * @returns {string[]}
	 */
	decode(str) {
		return str
			.split(this.DELIMITER)
			.filter(Boolean)
			.map((i) => {
				if (i === this.EMPTY) {
					return "";
				}
				return i;
			});
	}
}
