// pages/api/coinmarketcap.ts
import { NextApiRequest, NextApiResponse } from 'next/types'
import axios, { AxiosError } from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_COINMARKETCAP_API}v1/cryptocurrency/listings/latest`, {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY as string
      }
    })
    res.status(200).json(response.data)
  } catch (error) {
    const axiosError = error as AxiosError
    res.status(axiosError.response?.status || 500).json({ message: axiosError.message })
  }
}
