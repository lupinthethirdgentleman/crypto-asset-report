import { Box, Card, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { DataGrid, GridColumns, GridRenderCellParams } from '@mui/x-data-grid'
import { CryptoDataGridRowType } from 'src/@core/utils/types'
import QuickSearchToolbar from './QuickSearchToolbar'
import PercentageText from 'src/@core/components/mui/text/PercentageText'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { getCryptoIcon } from 'src/service/cryptocurrency.service'

const escapeRegExp = (value: string) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const renderCryptoIcon = (params: GridRenderCellParams) => {
  const { row } = params

  return <CustomAvatar src={getCryptoIcon(64, row.id)} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
}

const columns: GridColumns = [
  {
    flex: 0.1,
    maxWidth: 200,
    field: 'name',
    headerName: 'Name',
    filterable: false,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderCryptoIcon(params)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <a href={`/home/${row.symbol}`} style={{ textDecoration: 'none' }}>
              {row.name}
            </a>
            <Typography noWrap variant='caption'>
              {row.symbol}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.08,
    maxWidth: 100,
    field: 'price',
    headerName: 'Price',
    filterable: false,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        ${params.row.quote['USD'].price.toFixed(2)}
      </Typography>
    )
  },
  {
    flex: 0.06,
    minWidth: 100,
    headerName: '1h %',
    field: 'percent_change_1h',
    filterable: false,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <PercentageText size='body2' percent={params.row.quote['USD'].percent_change_1h}></PercentageText>
    )
  },
  {
    flex: 0.06,
    minWidth: 100,
    headerName: '24h %',
    field: 'volume_change_24h',
    filterable: false,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <PercentageText size='body2' percent={params.row.quote['USD'].volume_change_24h}></PercentageText>
    )
  },
  {
    flex: 0.06,
    minWidth: 100,
    headerName: '7d %',
    field: 'percent_change_7d',
    filterable: false,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <PercentageText size='body2' percent={params.row.quote['USD'].percent_change_7d}></PercentageText>
    )
  },
  {
    flex: 0.06,
    minWidth: 100,
    headerName: 'Market Cap',
    field: 'market_cap',
    filterable: false,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <PercentageText size='body2' percent={params.row.quote['USD'].market_cap}></PercentageText>
    )
  },
  {
    flex: 0.08,
    minWidth: 100,
    headerName: 'Volume(24h)',
    field: 'volume_24h',
    filterable: false,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          ${params.row.quote['USD'].volume_24h}
        </Typography>
        <Typography noWrap variant='caption'>
          {`${params.row.quote[params.row.symbol]?.volume_24h ?? 0} ${params.row.symbol}`}
        </Typography>
      </Box>
    )
  },
  {
    flex: 0.08,
    minWidth: 100,
    headerName: 'Circulating Supply',
    field: 'circulating_supply',
    filterable: false,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {`${params.row.circulating_supply} ${params.row.symbol}`}
        {}
      </Typography>
    )
  }
]

type CryptoCurrencyTableProps = {
  data: CryptoDataGridRowType[]
  limit: number
  currentPage: number
  totalColumns: number // Add totalColumns prop
  onPageChange: (newPage: number) => void
}

const CryptoCurrencyTable = (props: CryptoCurrencyTableProps) => {
  const { data, limit, currentPage, totalColumns, onPageChange } = props
  const [searchText, setSearchText] = useState<string>('')

  const [filteredData, setFilteredData] = useState<CryptoDataGridRowType[]>([])

  // Correctly use the `newPage` parameter
  const handlePageChange = (newPage: number) => {
    onPageChange(newPage + 1) // Add 1 because MUI DataGrid pages are zero-based
  }

  const handleSearch = (searchValue: string) => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows = data.filter((row: any) => {
      return ['name', 'symbol', 'slug'].some(field => {
        // Assuming row[field] is always defined; otherwise, add null checks
        return searchRegex.test(row[field].toString())
      })
    })
    setFilteredData(searchValue.length ? filteredRows : [])
  }

  return (
    <Card>
      <DataGrid
        autoHeight
        sx={{ mt: 3 }}
        pageSize={limit}
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
        onPageChange={handlePageChange} // Use the corrected handlePageChange function
        page={currentPage - 1} // MUI DataGrid pages are zero-based
        rows={filteredData.length ? filteredData : data}
        rowCount={totalColumns}
        paginationMode='server' // Ensure you're controlling pagination from the server-side
        componentsProps={{
          toolbar: {
            value: searchText,
            clearSearch: () => handleSearch(''),
            onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)
          }
        }}
      ></DataGrid>
    </Card>
  )
}

export default CryptoCurrencyTable
