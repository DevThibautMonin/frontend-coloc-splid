import axios from "axios"

const url = 'http://localhost:4500'

export const getExpenses = async () => {

  try {
    const response = await axios.get(`${url}/expense`)
    return response.data
  } catch (error) {
    return error
  }

}

export const createExpense = async (expense) => {

  try {
    const response = await axios.post(`${url}/expense`, expense)
    return response
  } catch (error) {
    return error
  }

}

export const deleteExpense = async (expenseId) => {
  try {
    const response = await axios.delete(`${url}/expense/${expenseId}`)
    return response
  } catch (error) {
    return error
  }
}
