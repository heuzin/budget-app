import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('Should render ExpenseListFilters', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters with alt data', () => {
  wrapper.setProps({
    filters: altFilters,
  })
  expect(wrapper).toMatchSnapshot()
})

test('Should handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: {
      value: 'rent',
    },
  })
  expect(setTextFilter).toHaveBeenLastCalledWith('rent')
})

test('Should sort by date', () => {
  wrapper.setProps({
    filters: altFilters,
  })
  wrapper.find('select').simulate('change', {
    target: {
      value: 'date',
    },
  })
  expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'amount',
    },
  })
  expect(sortByAmount).toHaveBeenCalled()
})
