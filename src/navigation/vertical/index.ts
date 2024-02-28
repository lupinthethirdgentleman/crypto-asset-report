// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      path: '/home',
      icon: 'mdi:home-outline'
    },
    {
      title: 'User',
      icon: 'mdi:account-outline',
      children: [
        {
          path: '/user/info',
          title: 'User Info',
          icon: 'mdi:information-outline'
        },
        {
          path: '/user/setting',
          title: 'User Setting',
          icon: 'mdi:account-settings'
        }
      ]
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:shield-outline',
      disabled: true
    }
  ]
}

export default navigation
