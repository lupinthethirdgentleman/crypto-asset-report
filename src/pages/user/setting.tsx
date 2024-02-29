import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'

const UserSetting = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={<Typography variant='h5'>User Setting</Typography>}
        subtitle={<Typography variant='body2'>This is User Setting Page</Typography>}
      ></PageHeader>
    </Grid>
  )
}

export default UserSetting
