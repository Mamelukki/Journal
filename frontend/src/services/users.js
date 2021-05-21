import axios from 'axios'
import storage from '../utils/storage'

const baseUrl = 'http://localhost:3001/api/users'

const getConfig = () => {
  if (storage.loadUser()) {
    return {
      headers: { Authorization: `bearer ${storage.loadUser().token}` }
    }
  }
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (username, password) => {
  const object = { username, password }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, getConfig())
  return response.data
}

export default {
  getAll,
  createNew,
  remove
}