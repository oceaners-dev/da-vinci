import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {
  DatePicker,
  Indicator,
  Layout,
  Nav,
  Sider,
  Space,
} from '../components/da-vinci-ui'
export default function Home() {
  const router = useRouter()
  const activeItem = navLinks.find((item) => item.link === router.asPath)
  const [date, setDate] = useState(new Date())

  return (
    <Layout hasSidebar className={'relative m-6 w-full gap-5 '}>
      <Sider className="sticky top-5 h-fit">
        <Nav
          key={'fersat'}
          expanded={true}
          vertical={true}
          items={navLinks}
          activeItem={activeItem}
          className="rounded-3xl bg-blue-500"
          logo={<div>Logo</div>}
        />
      </Sider>
      <Layout>
        <div>
          <br />
          <br />
          <br />
          <br />
          <Indicator position="top-right" dot={true}>
            <div className="w-5 h-5 flex bg-black relative" />
          </Indicator>
        </div>
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
    icon: <div>eyyy</div>,
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
