import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const expense = {
		id: '4',
		description: 'New Expense',
		amount: 5000,
		note: '',
		createdAt: 0
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense: expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([
		...expenses,
		expense
	]);
});

test('should edit an expense', () => {
	const note = 'This is a new note'
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			note: note
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].note).toEqual(note);
});

test('should not edit expense if expense not found', () => {
	const note = 'This is a new note'
	const action = {
		type: 'EDIT_EXPENSE',
		id: '5',
		updates: {
			note: note
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});