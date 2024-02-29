import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next/types'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { query } = req
    const { symbol } = query

    const response = await axios.get(`${process.env.NEXT_PUBLIC_COINMARKETCAP_API}v2/cryptocurrency/info`, {
      params: {
        symbol
      },
      headers: {
        'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY
      }
    })

    res.status(200).json(response.data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({ message: error.message })
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' })
    }
  }
}
