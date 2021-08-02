import uuid from 'uuid';

// Add Expense
export const addExpense = (
	{
		description = '',
		note = '',
		amount = 0,
		createdAt = 0
	} = {}
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description: description,
		note: note,
		amount: amount,
		createdAt: createdAt
	}
});

// Remove Expense
export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// Edit Expense
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});