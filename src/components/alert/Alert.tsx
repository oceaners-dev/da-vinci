/* eslint-disable react/no-unknown-property */
import chroma from 'chroma-js'
import React, { useEffect, useId, useState } from 'react'
import { SvgX } from '../../utils/svg'
import { ColorVariants } from '../../utils/types'
import { Card } from '../card-UNFINISHED/Card'
import { NotificationType } from '../notification/Notification'
import SvgIcon from '../notification/svg'

export interface AlertProps {
  classNames?: {
    card?: string
    closeBtn?: string
    closeSvg?: string
    content?: string
    contentWrapper?: string
    svgWrapper?: string
    title?: string
    wrapper?: string
  }
  /**
   * Must be a `HEX` value with #.
   * @example #010101
   */
  color?: ColorVariants
  content: React.ReactNode
  icon?: React.ReactNode
  onClose?: () => void
  title: React.ReactNode
  type?: NotificationType
  withCloseButton?: boolean
}

const Alert: React.FunctionComponent<AlertProps> = (props) => {
  const {
    classNames = {
      card: '',
      closeBtn: '',
      closeSvg: '',
      content: '',
      contentWrapper: '',
      svgWrapper: '',
      title: '',
      wrapper: '',
    }, // ✅
    color, // ✅
    content, // ✅
    icon, // ✅ TODO: add html support
    onClose, // ✅
    title, // ✅
    type,
    withCloseButton, // ✅
    ...rest
  } = props

  const id = useId().replaceAll(':', '')

  const [bgColor, setBgColor] = useState<string>()

  useEffect(() => {
    if (!color || !document) return
    const bgHex = document.documentElement.style.getPropertyValue(
      `--da-vinci-colors-${color}-base`,
    )
    if (bgHex !== '') {
      setBgColor(chroma.scale([bgHex.replace('#', ''), 'white']).colors(12)[10])
    }
  }, [color])

  return (bgColor && (
    <Card
      data-tag="card"
      className={`min-w-[300px] !w-fit ${classNames.card} relative z-[999]`}
      style={{
        backgroundColor: bgColor,
      }}
      {...rest}
    >
      <div
        data-tag="wrapper"
        className={`w-full h-fit flex flex-row items-start gap-5 alert ${classNames.wrapper}}`}
      >
        <div
          data-tag="svgWrapper"
          className={`leading-none text-lg ${id} ${classNames.svgWrapper}`}
        >
          <style>{`
            .${id} svg {
              color: var(--da-vinci-colors-${color}-base);
            }
          `}</style>
          {icon ? icon : <SvgIcon type={type} />}
        </div>
        <div
          className={`flex flex-col gap-1 w-full ${classNames.contentWrapper}`}
          data-tag="contentWrapper"
        >
          <div className="flex flex-row items-center justify-between w-full">
            <div
              data-tag="title"
              className={`leading-none font-semibold text-base ${classNames.title}}`}
              style={{
                color: `var(--da-vinci-colors-${color}-base)`,
              }}
            >
              {title}
            </div>
            {withCloseButton && (
              <button
                data-tag="closeBtn"
                className={classNames.closeBtn}
                onClick={() => {
                  onClose && onClose()
                }}
              >
                <SvgX
                  data-tag="closeSvg"
                  className={`w-4 h-4 ${classNames.closeSvg}`}
                />
              </button>
            )}
          </div>
          <div
            data-tag="content"
            className={`text-sm text-black ${classNames.content}`}
          >
            {content}
          </div>
        </div>
      </div>
    </Card>
  )) as any
}

Alert.defaultProps = {
  color: 'warning',
}

export { Alert }
