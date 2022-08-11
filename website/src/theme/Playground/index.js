import React, { useState } from 'react'
import clsx from 'clsx'
import useIsBrowser from '@docusaurus/useIsBrowser'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import Translate from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { usePrismTheme } from '@docusaurus/theme-common'
import EncapsulatedStyleRoot from '../../components/EncapsulatedStyleRoot'
import styles from './styles.module.css'

function Header ({ as: Component = 'div', className, ...rest }) {
  return <Component className={clsx(styles.playgroundHeader, className)} {...rest} />
}

function LivePreviewLoader () {
  // Is it worth improving/translating?
  // eslint-disable-next-line @docusaurus/no-untranslated-text
  return <div>Loading...</div>
}

function ResultWithHeader ({ meta }) {
  const previewClassName = meta?.match(/class=["']([^'"]+)["']/)?.[1]
  return (
    <>
      {/*
      <Header>
        <Translate
          id='theme.Playground.result'
          description='The result label of the live codeblocks'>
          Result
        </Translate>
      </Header>
      */}
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div className={clsx(styles.playgroundPreview, previewClassName)}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => (
            <>
              <EncapsulatedStyleRoot>
                <LivePreview />
              </EncapsulatedStyleRoot>
              <LiveError />
            </>
          )}
        </BrowserOnly>
      </div>
    </>
  )
}

function ThemedLiveEditor () {
  const isBrowser = useIsBrowser()
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={styles.playgroundEditor}
    />
  )
}

function EditorWithHeader ({ open: defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <details className='details-reset' open={open} onToggle={e => setOpen(e.target.open)}>
      <Header as='summary' className='flex gap-x-8 align-center cursor-pointer'>
        <Translate
          id='theme.Playground.liveEditor'
          description='The live editor label of the live codeblocks'>
          Code editor
        </Translate>
        <sfgov-icon
          symbol={open ? 'chevron-down' : 'chevron-right'}
          width='16' height='16'
        />
      </Header>
      <ThemedLiveEditor />
    </details>
  )
}
export default function Playground ({ children, transformCode, ...props }) {
  const {
    siteConfig: { themeConfig }
  } = useDocusaurusContext()
  const {
    liveCodeBlock: { playgroundPosition }
  } = themeConfig
  const prismTheme = usePrismTheme()
  const metaStrings = props.metastring?.split(/\s+/) || []
  const open = !metaStrings.includes('closed')
  return (
    <div className={styles.playgroundContainer}>
      {/* @ts-expect-error: type incompatibility with refs */}
      <LiveProvider
        code={children.replace(/\n$/, '')}
        noInline={metaStrings.includes('noInline')}
        transformCode={transformCode ?? ((code) => `${code};`)}
        theme={prismTheme}
        {...props}>
        {playgroundPosition === 'top'
          ? (
              <>
                <ResultWithHeader meta={props.metastring} />
                <EditorWithHeader open={open} />
              </>
            )
          : (
              <>
                <EditorWithHeader meta={props.metastring} />
                <ResultWithHeader open={open} />
              </>
            )}
      </LiveProvider>
    </div>
  )
}
