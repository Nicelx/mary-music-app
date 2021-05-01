const debounceTimeout =  (time) => {
	let timeout;
	return (f) => {
		clearTimeout(timeout);
		const run = () => {
			// timeout = null;
			f();
		}
		timeout = setTimeout(run, time)

	};
}
export const debounce = debounceTimeout(3);