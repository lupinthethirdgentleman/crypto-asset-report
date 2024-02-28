import axios, { AxiosResponse } from 'axios'

export async function getCryptoListData(page = 1, limit = 100): Promise<any> {
  const start = (page - 1) * limit + 1

  try {
    const response: AxiosResponse<any> = await axios.get('/api/getcryptolist', {
      params: {
        start,
        limit
      }
    })

    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)

    return null
  }
}

export function getCryptoIcon(size: number, name: any): any {
  const resourceUrl: string = process.env.NEXT_PUBLIC_COINMARKETCAP_RESOURCE_API ?? ''

  return `${resourceUrl}img/coins/${size}x${size}/${name}.png`
}
