import { identify_identical, identical_left, identical_right } from "./app";

const a: Array<number> = [1,2,3,1,5]
console.log(identify_identical(a,5))

function are_identical(snowflake1: Array<number>, snowflake2: Array<number>):number {
	for(let start=0; start<6;start++) {
		if(identical_left(snowflake1,snowflake2,start)) {
			return 1
		}
		if(identical_right(snowflake1,snowflake2,start)) {
			return 1
		}
	}
	return 0
}
