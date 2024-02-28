import { NextApiRequest, NextApiResponse } from 'next/types'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const start = req.query.start || '1'
  const limit = req.query.limit || '100' // Default to 100 items
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_COINMARKETCAP_API}v1/cryptocurrency/listings/latest`, {
      params: {
        start,
        limit
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
