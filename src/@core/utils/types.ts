interface MonthYear {
  year: number
  month: number
}

interface Fns {
  cardType(cardNumber: string): string
  formatCardNumber(cardNumber: string): string
  validateCardNumber(cardNumber: string): boolean
  validateCardCVC(cvc: string, type?: string): boolean
  validateCardExpiry(monthYear: string, year?: string): boolean
  cardExpiryVal(monthYear: string | HTMLInputElement): MonthYear
}

export type PaymentTypes = {
  fns: Fns
  formatCardCVC(elem: HTMLInputElement): HTMLInputElement
  restrictNumeric(elem: HTMLInputElement): HTMLInputElement
  formatCardNumber(elem: HTMLInputElement): HTMLInputElement
  formatCardExpiry(elem: HTMLInputElement): HTMLInputElement
}

// Crypto Listing Page
//-----------
export type CryptoDataGridRowType = {
  id: number
  name: string
  symbol: string
  slug: string
  cmc_rank: number
  num_market_pairs: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  infinite_supply: number
  last_updated: string
  date_added: string
  tags: string[]
  platform: any
  quote: any
}

// Crypto Info Page
//----------
export type CryptoInfoType = {
  category: string
  contact_address: string[]
  date_added: string
  date_launched: string
  description: string
  id: number
  infinite_supply: boolean
  is_hidden: number
  logo: string
  name: string
  notice: string
  platform: any
  self_reported_circulating_supply: any
  self_reported_market_cap: any
  self_reported_tags: any
  slug: string
  subreddit: string
  symbol: string
  urls: URLGroupType
}

export type URLGroupType = {
  announcement: string[]
  chat: string[]
  explorer: string[]
  facebook: string[]
  message_board: string[]
  reddit: string[]
  source_code: string[]
  technical_doc: string[]
  twitter: string[]
  website: string[]
}
