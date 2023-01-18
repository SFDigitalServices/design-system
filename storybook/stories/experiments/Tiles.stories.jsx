import React from 'react'
import clsx from 'clsx'
// import Icon from '../../src/Icon'
import { polymorphic, withClasses } from '../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  args: {
    title: 'Hello, world!',
    description: 'This is the description'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=3377%3A167'
    }
  }
}

const TILE_SIZE_SMALL = '160px'
const TILE_SIZE_LARGE = '360px'

const TileBody = withClasses(polymorphic('div', { style: { gap: '28px' } }), 'flex flex-col justify-between p-20')

const TileTitle = withClasses(polymorphic('h2'), 'title-xs m-0')

const TileDescription = withClasses(polymorphic('div'), 'text-body')

const TileImage = withClasses(({
  as: Component = 'img',
  style,
  ...rest
}) => (
  <Component style={{
    objectFit: 'cover',
    objectPosition: 'center',
    ...style
  }} {...rest} />
), 'block')

const ImageLeftTile = withClasses(({
  as: Component = 'div',
  title,
  description,
  image,
  ...rest
}) => (
  <Component {...rest}>
    <TileImage className='rounded-l' src={image} />
    <TileBody className='rounded-r'>
      <TileTitle>{title}</TileTitle>
      <TileDescription>{description}</TileDescription>
    </TileBody>
  </Component>
), 'flex')

const ImageRightTile = withClasses(({
  as: Component = 'div',
  title,
  description,
  image,
  ...rest
}) => (
  <Component {...rest}>
    <TileBody className='rounded-l'>
      <TileTitle>{title}</TileTitle>
      <TileDescription>{description}</TileDescription>
    </TileBody>
    <TileImage className='rounded-r' src={image} />
  </Component>
), 'flex')

/** @type {import('@storybook/react').Story} */
export const EventTile = ({
  as: Component = 'div',
  title,
  image,
  date,
  month,
  day,
  ...rest
}) => (
  <Component {...rest}>
    {image
      ? <TileImage className='w-full rounded-t' style={{ height: TILE_SIZE_SMALL }} src={image} />
      : (month && day) ? <BigDateDisplay month={month} day={day} className='rounded-t' /> : null
    }
    <TileBody
      className={clsx('bg-green-3 text-white', image || (month && day) ? 'rounded-b' : 'rounded')}
      style={(image || (month && day)) && { minHeight: TILE_SIZE_SMALL }}
    >
      <TileTitle>{title}</TileTitle>
      <TileDescription>{date}</TileDescription>
    </TileBody>
  </Component>
)

EventTile.decorators = [
  Story => <div style={{ maxWidth: TILE_SIZE_LARGE }}>{Story()}</div>
]

EventTile.argTypes = {
  title: {
    name: 'Title',
    type: 'string'
  },
  date: {
    name: 'Date/range',
    description: 'A date string or range',
    type: 'string'
  },
  image: {
    name: 'Image URL',
    type: 'string'
  },
  month: {
    name: 'Month',
    description: 'The month of the date',
    type: 'string'
  },
  day: {
    name: 'Day',
    description: 'The day of the month',
    type: 'string'
  }
}

EventTile.args = {
  title: 'Tour the dome at City Hall',
  image: 'https://sf.gov/sites/default/files/styles/836x484/public/2022-03/Civic%20Center.jpg?itok=MoJOWKv1',
  date: 'Thursday, October 20',
  month: 'October',
  day: '20'
}

function BigDateDisplay ({ month, day, className, ...rest }) {
  return (
    <div
      className={clsx('bg-green-2 flex flex-col items-center justify-center text-slate-4', className)}
      style={{ minHeight: TILE_SIZE_SMALL }}
      {...rest}
    >
      <span className='text-title-xl font-regular' style={{ opacity: '65%' }}>{month}</span>
      {/* FIXME: need a text style for this? */}
      <span style={{ fontSize: '64px', lineHeight: '1', opacity: '65%' }}>{day}</span>
    </div>
  )
}

/** @type {import('@storybook/react').Story} */
export const NewsTile = withClasses(({
  as: Component = 'div',
  title,
  date,
  image,
  ...rest
}) => (
  <Component {...rest}>
    <div className='flex justify-between align-start'>
      <TileBody className={clsx('flex-auto bg-yellow-3', image ? 'rounded-l' : 'rounded')}>
        <TileTitle>{title}</TileTitle>
        <TileDescription>{date}</TileDescription>
      </TileBody>
      {image && <TileImage src={image} className='rounded-r' style={{ maxWidth: 'min(160px, 50%)' }} />}
    </div>
  </Component>
), '')

NewsTile.argTypes = {
  title: {
    name: 'Title',
    type: 'string'
  },
  date: {
    name: 'Date',
    type: 'string'
  },
  image: {
    name: 'Image URL',
    type: 'string'
  }
}

NewsTile.args = {
  title: 'Mayor London Breed Swears in 32 Appointed Commissioners',
  date: 'April 22, 2019',
  image: 'https://sf.gov/sites/default/files/styles/700x500/public/2022-09/on-tour-bus-in-san-francisco-2021-08-30-04-48-26-utc.jpg?itok=nmBe1vFo'
}

const TextTile = ({
  title,
  description,
  children,
  ...rest
}) => (
  <TileBody {...rest}>
    {children || (
      <>
        <TileTitle>{title}</TileTitle>
        <TileDescription>{description}</TileDescription>
      </>
    )}
  </TileBody>
)

/** @type {import('@storybook/react').Story} */
export const FeatureTile = withClasses(({ image, imagePosition, ...rest }) => (
  image
    ? imagePosition === 'left'
      ? <ImageLeftTile image={image} {...rest} />
      : <ImageRightTile image={image} {...rest} />
    : <TextTile {...rest} />
), 'rounded bg-purple-3 text-white')

FeatureTile.args = {
}

/** @type {import('@storybook/react').Story} */
export const ContentTile = withClasses(({
  title,
  href,
  description,
  children,
  style,
  ...rest
}) => (
  <TileBody style={{ gap: '12px', ...style }} {...rest}>
    {children || (
      <>
        <TileTitle as='a' href={href} className='text-body font-semibold underline'>{title}</TileTitle>
        <TileDescription>{description}</TileDescription>
      </>
    )}
  </TileBody>
), 'rounded border-solid border-grey-2 border-3 bg-white')

/** @type {import('@storybook/react').Story} */
export const QuickLink = withClasses(({
  title,
  description,
  style,
  ...rest
}) => (
  <TileBody as='a' style={{ minHeight: '250px', ...style }} {...rest}>
    <div className='absolute bottom-24 right-24 flex'>
      {/* <Icon symbol='arrow-right' /> */}
    </div>
    <div className='relative flex flex-col gap-12'>
      <div className='title-md m-0'>{title}</div>
      <div style={{ height: '8px', maxWidth: '100px', backgroundColor: 'currentcolor' }} />
      <div className='text-body text-black group-hocus:text-inherit'>{description}</div>
    </div>
  </TileBody>
), 'rounded border-solid border-grey-2 border-3 bg-white text-action hocus:bg-action hocus:text-white hocus:border-action no-underline group relative')

QuickLink.args = {
  title: 'See most requested forms',
  description: 'Every 5 years, we create 3 strategic plans to help direct our policies. Join us in developing this year’s plans.',
  href: 'https://sf.gov'
}

QuickLink.decorators = [
  Story => <div style={{ maxWidth: '350px' }}>{Story()}</div>
]

/** @type {import('@storybook/react').Story} */
export const TopicTile = withClasses(({
  as: Component = 'a',
  title,
  description,
  ...rest
}) => (
  <Component {...rest}>
    <div className='text-action title-md m-0 group-hocus:underline'>{title}</div>
    <div className='text-slate-light text-body'>{description}</div>
  </Component>
), 'rounded bg-grey-1 text-slate-4 hocus:text-slate-4 group no-underline p-12 md:p-40 flex flex-col gap-8')

TopicTile.args = {
  title: 'Activities',
  description: 'Construction and building permitting',
  href: 'https://sf.gov/topics/'
}
