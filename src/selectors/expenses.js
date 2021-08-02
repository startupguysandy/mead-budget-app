// Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		// If the dates aren't a number (i.e. 'undefined') then we're going to ignore the filter input and set the match to true.
		// If it is a number, then we're going to check against it.
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		} else if (sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	});
};

export default getVisibleExpenses;