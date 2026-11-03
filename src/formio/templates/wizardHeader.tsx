/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import h from 'vhtml'
import { classes } from '../../react'
import type { WizardRenderContext } from './wizard'

export default { form }

function isMobile() {
  return window.innerWidth <= 1024
}

function toggleOpenAttribute() {
  const detailsElement = document.getElementById(
    'nav-accordion'
  ) as HTMLDetailsElement | null
  if (detailsElement) {
    detailsElement.open = !isMobile()
  }
}

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/wizardHeader/form.ejs
 */
export function form({ ...ctx }: WizardRenderContext) {
  const numPages = ctx.panels.length - 1
  const isOpen = !isMobile()
  const currentPage = ctx.currentPage
  const hideNav = ctx.panels[currentPage].properties?.hideSidebar === 'true'
  window.addEventListener('resize', toggleOpenAttribute)

  return (
    <nav
      className="shrink-0 sticky lg:ml-96 lg:top-space-xl lg:leading-24"
      id={`${ctx.wizardKey}-header`}
      hidden={hideNav}
      aria-hidden={hideNav}
    >
      <details
        className="group"
        id="nav-accordion"
        open={isOpen}
        aria-labelledby="navigation"
      >
        <summary
          className="flex flex-row w-full mb-space-xs
          outline outline-1 outline-black rounded
          focus:outline-focus
          lg:hidden"
          id="nav-toggle"
          aria-controls="nav-menu"
        >
          <div
            className="flex-1 p-space-sm text-heading-md text-left"
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line max-len
              __html: `Section ${currentPage} of ${numPages}: ${ctx.panels[currentPage].title}`
            }}
          />
          <div className="w-40 dropdown-open group-open:scale-y-[-1]"></div>
        </summary>
        <div
          className="rounded py-16 px-28 shadow-[rgba(0,0,0,0.25)_0px_2px_8px] lg:p-0 lg:shadow-none"
          id="nav-content"
          aria-labelledby="nav-accordion"
        >
          <ul className="flex flex-col pl-[18px] translate-x-[6.5px] translate-y-[10px]">
            {ctx.panels.map((panel, index) => {
              const completed = index < ctx.currentPage
              const isCurrentPage = index === ctx.currentPage
              const isLastPage = index === ctx.panels.length - 1
              const hideFromNav =
                panel.properties?.hideFromNavigation === 'true'

              return (
                <li
                  key={`wizard-panel-${index}`}
                  data-testid={`wizardHeader-${index}`}
                  className={
                    hideFromNav
                      ? 'hidden'
                      : classes(
                          'flex w-full pb-space-desktop-md',
                          isCurrentPage
                            ? 'active font-bold text-[18px]'
                            : 'text-body',
                          isLastPage
                            ? 'translate-x-[1px]'
                            : completed
                            ? 'border-l-2 border-solid border-success500'
                            : 'border-l-2 pb-space-desktop-md border-dashed border-neutral200 cursor-default'
                        )
                  }
                >
                  <span
                    className={classes(
                      'w-12 h-12 rounded-full shrink-0 transform -translate-y-1/2',
                      isCurrentPage
                        ? 'bg-black -translate-x-[6.5px]'
                        : completed
                        ? 'panel-completed -translate-x-[9.5px]'
                        : 'bg-neutral200 -translate-x-[6.5px]'
                    )}
                  ></span>

                  <button
                    ref={`${ctx.wizardKey}-link`}
                    disabled={!completed}
                    className={classes(
                      'text-left transform -translate-y-12',
                      isCurrentPage
                        ? 'text-black pl-20'
                        : completed
                        ? 'text-primary500 underline cursor-pointer pl-[14px]'
                        : 'cursor-default text-neutral600 pl-20'
                    )}
                  >
                    {panel.title}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </details>
    </nav>
  )
}
