import { Button } from '@/src/react'
import type { SpotlightProps } from '@/src/react/Spotlight'
import { Spotlight } from '@/src/react/Spotlight'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  HEADER_IMAGES,
  RawHTML,
  mappingInput,
  renderImage,
  withContainer
} from '../helpers'

type SpotlightArgs = {
  layout: SpotlightProps['layout']
  reverse?: boolean
  heading: string
  text: string
  buttonText: string
  image?: string
  attribution?: string
}

const meta: Meta<SpotlightArgs> = {
  args: {
    layout: 'horizontal',
    reverse: false,
    heading: 'This Spotlight title must not exceed 65 characters allowed total',
    text: 'The description of this Spotlight component must not exceed 125 characters in total length, ensuring clarity and conciseness.',
    buttonText: 'Button text',
    image: 'DPH',
    attribution: '"Title of the image" by <a href="#">Artist Name</a>'
  },
  argTypes: {
    layout: {
      name: 'Layout',
      control: 'inline-radio',
      options: ['horizontal', 'vertical', 'background']
    },
    reverse: {
      name: 'Reverse layout',
      type: 'boolean',
      if: {
        arg: 'layout',
        eq: 'horizontal'
      }
    },
    heading: {
      name: 'Heading'
    },
    text: {
      name: 'Text content'
    },
    buttonText: {
      name: 'Button text'
    },
    image: {
      name: 'Image',
      type: 'string',
      ...mappingInput(HEADER_IMAGES)
    },
    attribution: {
      name: 'Image attribution',
      if: {
        arg: 'image',
        truthy: true
      }
    }
  },
  decorators: [withContainer()],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2sMxDPHy2gTjuCWAZhF3VQ/Components?node-id=21350-18949&t=LMd4lY2daXmnZdtS-0'
    }
  }
}

export default meta

type SpotlightStory = StoryObj<typeof meta>

export const Horizontal: SpotlightStory = {
  args: {
    layout: 'horizontal'
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/2sMxDPHy2gTjuCWAZhF3VQ/Components?node-id=21350-18970&t=LMd4lY2daXmnZdtS-0'
    }
  },
  render({ layout, heading, image, attribution, text, buttonText, reverse }) {
    return (
      <Spotlight layout={layout} reverse={reverse}>
        <Spotlight.Image attribution={<RawHTML>{attribution}</RawHTML>}>
          {renderImage(image)}
        </Spotlight.Image>
        <Spotlight.Content>
          <Spotlight.Heading>{heading}</Spotlight.Heading>
          <p>
            <RawHTML>{text}</RawHTML>
          </p>
          <Button as="a" href="#">
            {buttonText}
          </Button>
        </Spotlight.Content>
      </Spotlight>
    )
  }
}

export const Reverse: SpotlightStory = {
  args: {
    layout: 'horizontal'
  },
  argTypes: {
    layout: {
      table: { disable: true }
    },
    reverse: {
      table: { disable: true }
    }
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/2sMxDPHy2gTjuCWAZhF3VQ/Components?node-id=21350-18970&t=LMd4lY2daXmnZdtS-0'
    }
  },
  render({ layout, heading, image, attribution, text, buttonText }) {
    return (
      <div className="space-y-20">
        <Spotlight layout={layout}>
          <Spotlight.Image attribution={<RawHTML>{attribution}</RawHTML>}>
            {renderImage(image)}
          </Spotlight.Image>
          <Spotlight.Content>
            <Spotlight.Heading>{heading}</Spotlight.Heading>
            <p>
              <RawHTML>{text}</RawHTML>
            </p>
            <Button as="a" href="#">
              {buttonText}
            </Button>
          </Spotlight.Content>
        </Spotlight>
        <Spotlight layout={layout} reverse>
          <Spotlight.Image attribution={<RawHTML>{attribution}</RawHTML>}>
            {renderImage(image)}
          </Spotlight.Image>
          <Spotlight.Content>
            <Spotlight.Heading>{heading}</Spotlight.Heading>
            <p>
              <RawHTML>{text}</RawHTML>
            </p>
            <Button as="a" href="#">
              {buttonText}
            </Button>
          </Spotlight.Content>
        </Spotlight>
      </div>
    )
  }
}

export const Vertical: SpotlightStory = {
  argTypes: {
    reverse: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/2sMxDPHy2gTjuCWAZhF3VQ/Components?node-id=21350-18984&t=LMd4lY2daXmnZdtS-0'
    }
  },
  render({ heading, image, attribution, text, buttonText }) {
    return (
      <Spotlight layout="vertical">
        <Spotlight.Image attribution={<RawHTML>{attribution}</RawHTML>}>
          {renderImage(image)}
        </Spotlight.Image>
        <Spotlight.Content>
          <Spotlight.Heading>{heading}</Spotlight.Heading>
          <p>
            <RawHTML>{text}</RawHTML>
          </p>
          <Button as="a" href="#">
            {buttonText}
          </Button>
        </Spotlight.Content>
      </Spotlight>
    )
  }
}

export const VerticalReversed: SpotlightStory = {
  ...Vertical,
  args: {
    heading: 'This is rendered before the image',
    text: 'But it always shows up below the image with <code>layout="vertical"</code>'
  },
  argTypes: {
    ...Vertical.argTypes,
    reverse: {
      table: {
        disable: true
      }
    }
  },
  parameters: Vertical.parameters,
  render({ heading, image, attribution, text, buttonText }) {
    return (
      <Spotlight layout="vertical">
        <Spotlight.Content>
          <Spotlight.Heading>{heading}</Spotlight.Heading>
          <p>
            <RawHTML>{text}</RawHTML>
          </p>
          <Button as="a" href="#">
            {buttonText}
          </Button>
        </Spotlight.Content>
        <Spotlight.Image attribution={<RawHTML>{attribution}</RawHTML>}>
          {renderImage(image)}
        </Spotlight.Image>
      </Spotlight>
    )
  }
}

export const Background: SpotlightStory = {
  args: {
    layout: 'background'
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/2sMxDPHy2gTjuCWAZhF3VQ/Components?node-id=23495-101769&t=LMd4lY2daXmnZdtS-0'
    }
  },
  render({ layout, heading, image, attribution, text, buttonText, reverse }) {
    return (
      <Spotlight layout={layout} reverse={reverse}>
        <Spotlight.Content>
          <Spotlight.Heading>{heading}</Spotlight.Heading>
          <p>
            <RawHTML>{text}</RawHTML>
          </p>
          <Button as="a" href="#">
            {buttonText}
          </Button>
        </Spotlight.Content>
        <Spotlight.Image attribution={<RawHTML>{attribution}</RawHTML>}>
          {renderImage(image)}
        </Spotlight.Image>
      </Spotlight>
    )
  }
}

export const NoImage: SpotlightStory = {
  args: {
    layout: 'vertical'
  },
  argTypes: {
    image: {
      table: { disable: true }
    },
    attribution: {
      table: { disable: true }
    },
    layout: {
      table: { disable: true }
    }
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/2sMxDPHy2gTjuCWAZhF3VQ/Components?node-id=21350-19009&t=LMd4lY2daXmnZdtS-0'
    }
  },
  render({ layout, heading, text, buttonText, reverse }) {
    return (
      <Spotlight layout={layout} reverse={reverse}>
        <Spotlight.Content>
          <Spotlight.Heading>{heading}</Spotlight.Heading>
          <p>
            <RawHTML>{text}</RawHTML>
          </p>
          <Button as="a" href="#">
            {buttonText}
          </Button>
        </Spotlight.Content>
      </Spotlight>
    )
  }
}

export const BlackTheme: SpotlightStory = {
  args: {
    text: [
      'Note: this story sets <code>data-theme="black"</code> on the element',
      'directly, so the Theme toolbar menu has no effect.'
    ].join(' ')
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/2sMxDPHy2gTjuCWAZhF3VQ/Components?node-id=21350-19073&t=LMd4lY2daXmnZdtS-0'
    }
  },
  render({ layout, heading, text, image, attribution, buttonText, reverse }) {
    return (
      <Spotlight data-theme="black" layout={layout} reverse={reverse}>
        <Spotlight.Image attribution={<RawHTML>{attribution}</RawHTML>}>
          {renderImage(image)}
        </Spotlight.Image>
        <Spotlight.Content>
          <Spotlight.Heading>{heading}</Spotlight.Heading>
          <p>
            <RawHTML>{text}</RawHTML>
          </p>
          {/* note the button variant here */}
          <Button variant="secondary" as="a" href="#">
            {buttonText}
          </Button>
        </Spotlight.Content>
      </Spotlight>
    )
  }
}
