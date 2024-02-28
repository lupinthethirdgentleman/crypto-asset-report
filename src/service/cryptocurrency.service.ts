import axios, { AxiosResponse } from 'axios'

export async function getCryptoListData(): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get('/api/getcryptolist')

    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)

    return null
  }
}
