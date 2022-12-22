import {
  Blockquote,
  Button,
  Fly,
  Layout,
  Nav,
  Text,
  Tooltip,
} from 'da-vinci-ui'
import React from 'react'
import {
  IconBasket,
  IconBuildingStore,
  IconMoped,
  IconCalendar,
  IconMapPins,
  IconChartArrowsVertical,
} from '@tabler/icons'
import { SvgLogo } from '@/~components/svg/logo'

export default function Home() {
  return (
    <Layout hasSidebar>
      <Nav
        items={navLinks}
        logo={<SvgLogo className="w-10 h-10" />}
        expandedLogo={<SvgLogo className="w-10 h-10" />}
      />
      <Blockquote
        author="Fersat"
        quote="Hello world."
        source="https://google.com/"
      />
      <div className="ml-[400px]">asfasf</div>
    </Layout>
  )
}

const navLinks = [
  {
    label: 'Harita',
    link: '/',
    icon: <IconMapPins />,
  },
  {
    label: 'Siparişler',
    link: '/orders',
    icon: <IconBasket />,
  },
  {
    label: 'İşletmeler',
    link: '/company',
    icon: <IconBuildingStore />,
  },
  {
    label: 'Kuryeler',
    link: '/courier',
    icon: <IconMoped />,
  },
  {
    label: 'Raporlar',
    link: '/reports',
    icon: <IconChartArrowsVertical />,
  },
  {
    label: 'Shift',
    link: '#',
    icon: <IconCalendar />,
  },
]
