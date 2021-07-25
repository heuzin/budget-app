import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('Should render ExpenseListItem with fixture data', () => {
  const expenseOne = expenses[1]
  const wrapper = shallow(<ExpenseListItem {...expenseOne} />)
  expect(wrapper).toMatchSnapshot()
})
