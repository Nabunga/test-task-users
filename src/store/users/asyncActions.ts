import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUsers } from './types'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
    return response.data
  }
)

export const sortByCity = createAsyncThunk(
  'users/sortByCity',
  async () => {
    const response = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
    return response.data.sort(function (a, b) {
      if (a.address.city < b.address.city) { return -1; }
      if (a.address.city > b.address.city) { return 1; }
      return 0;
    })
  }
)

export const sortByCompany = createAsyncThunk(
  'users/sortByCompany',
  async () => {
    const response = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
    return response.data.sort(function (a, b) {
      if (a.company.name < b.company.name) { return -1; }
      if (a.company.name > b.company.name) { return 1; }
      return 0;
    })
  }
)