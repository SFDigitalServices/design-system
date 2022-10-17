import { Stub } from '../../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Forms/Upload Inputs',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5993%3A6321'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const UploadDropArea = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const UploadProgressMeter = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const UploadedFileList = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const SingleFileUploadInput = Stub.bind({})

SingleFileUploadInput.storyName = 'Upload (single file)'

/** @type {import('@storybook/react').Story} */
export const MultiFileUploadInput = Stub.bind({})

MultiFileUploadInput.storyName = 'Upload (multi-file)'
