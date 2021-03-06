export function isValidNumberInput(e) {
	if (isNaN(parseInt(e.key, 10)) === true)
		return e.preventDefault();
	return true;
}

export function parseInputAsNumber(val){
	if (val === "")
		return -1;
	return parseInt(val, 10);
}

export function isValidName(val){
	if (val.length > 0)
		return true;
	else
		return false;
}

export function isValidHour(val){
	if (val >= 0 && val <= 23)
		return true;
	else
		return false;
}

export function isValidMinute(val){
	if (val >= 0 && val <= 60)
		return true;
	else
		return false;
}