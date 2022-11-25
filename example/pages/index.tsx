import { useRouter } from 'next/router'
import React from 'react'
import { Layout, Nav, Sider, Space } from '../components/da-vinci-ui'
export default function Home() {
  const router = useRouter()
  const activeItem = navLinks.find((item) => item.link === router.asPath)
  return (
    <Layout hasSidebar className={' relative m-6 w-full gap-5 '}>
      <Sider className="sticky top-5 h-fit">
        <Nav
          vertical={true}
          items={navLinks}
          activeItem={activeItem}
          className="rounded-3xl bg-blue-500"
          logo={<div>Logo</div>}
        />
      </Sider>
      <Layout>
        <div>yooo</div>
        {/* {orderTrackMemo} */}
        <Space />
        {/* <SiteFooter /> */}
      </Layout>
    </Layout>
  )
}
const navLinks = [
  {
    label: 'Harita',
    link: '/',
    // icon: <Map24Filled className="text-ui-white" />,
  },
  {
    label: 'Siparişler',
    link: '/orders',
    // icon: <ClipboardTextRtl24Filled className="text-ui-white" />,
  },
  {
    label: 'İşletmeler',
    link: '/company',
    // icon: <BuildingShop24Filled className="text-ui-white" />,
  },
  {
    label: 'Kuryeler',
    link: '/courier',
    // icon: <IconHelmet className="text-ui-white" />,
  },
  {
    label: 'Raporlar',
    link: '/raporlar',
    // icon: <ChartMultiple24Filled className="text-ui-white" />,
  },
  {
    label: 'Shift',
    link: '/',
    // icon: <IconCalendarEvent className="text-ui-white" />,
  },
]
