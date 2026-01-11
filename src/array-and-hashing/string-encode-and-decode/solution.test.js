import { Solution } from "./solution";

describe("Solution - String Encode and Decode", () => {
	let solution;

	beforeEach(() => {
		solution = new Solution();
	});

	test("should encode and decode a list of strings", () => {
		const input = ["Hello", "World"];
		const encoded = solution.encode(input);
		const decoded = solution.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("should handle empty strings in the list", () => {
		const input = [""];
		const encoded = solution.encode(input);
		const decoded = solution.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test("should handle empty array", () => {
		const input = [];
		const encoded = solution.encode(input);
		const decoded = solution.decode(encoded);
		expect(decoded).toEqual(input);
	});
});
