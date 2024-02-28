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

export function getCryptoIcon(size: number, name: any): any {
  const resourceUrl: string = process.env.NEXT_PUBLIC_COINMARKETCAP_RESOURCE_API ?? ''
  console.log(`${resourceUrl}img/coins/${size}x${size}/${name}.png`)

  return `${resourceUrl}img/coins/${size}x${size}/${name}.png`
}
