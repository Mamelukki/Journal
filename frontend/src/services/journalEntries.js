import axios from 'axios'
import storage from '../utils/storage'

const baseUrl = 'http://localhost:3001/api/journalEntries'

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

const createNew = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, getConfig())
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, getConfig())
  return response.data
}

const addImage = (id, formData) => {
  console.log(`service: ${formData}`)
  const request = axios.post(`${baseUrl}/${id}/images`, formData, getConfig())
  console.log(request.then(response => response.data))
  return request.then(response => response.data)
}

export default {
  getAll,
  createNew,
  remove,
  addImage
}