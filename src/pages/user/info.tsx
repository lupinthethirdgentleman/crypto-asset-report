import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'

const UserInfo = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={<Typography variant='h5'>User Info</Typography>}
        subtitle={<Typography variant='body2'>This is User Info Page</Typography>}
      ></PageHeader>
    </Grid>
  )
}

export default UserInfo
