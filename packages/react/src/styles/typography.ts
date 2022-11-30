/** eslint-disable */
import type { TextProps, Theme, ThemeUICSSProperties, ThemeUIStyleObject } from 'theme-ui'

export const FONT_WEIGHT_LIGHT = 300
export const FONT_WEIGHT_NORMAL = 400
export const FONT_WEIGHT_BOLD = 600

export type TextStyleVariantName = 'desktop'

export type TextStyleWithVariants = {
  default: ThemeUIStyleObject
} & {
  // eslint-disable-next-line no-unused-vars
  [key in TextStyleVariantName]?: ThemeUIStyleObject
}

export const fontFamilies: Theme['fonts'] = {
  rubik: 'Rubik, ui-sans-serif, sans-serif',
  mono: 'Roboto mono, ui-monospace, monospace',
  noto: 'Noto Sans TC, ui-sans-serif, sans-serif'
}

export const fontWeights: Theme['fontWeights'] = {
  light: FONT_WEIGHT_LIGHT,
  normal: FONT_WEIGHT_NORMAL,
  bold: FONT_WEIGHT_BOLD
}

export type TextStyleName =
  'body' | 'small' | 'bigDesc' |
  'titleXs' | 'titleSm' | 'titleMd' | 'titleLg' | 'titleXl' |
  'displaySm' | 'displayLg'

export const nestedTextStyles: Record<TextStyleName, TextStyleWithVariants> = {
  body: {
    default: {
      fontFamily: 'rubik',
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 'normal'
    }
  },
  bigDesc: {
    default: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: 'bold'
    },
    desktop: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold'
    }
  },
  small: {
    default: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: 'bold'
    }
  },
  titleXs: {
    default: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: 'bold'
    }
  },
  titleSm: {
    default: {
      fontSize: 24,
      lineHeight: 28,
      fontWeight: 'bold'
    }
  },
  titleMd: {
    default: {
      fontSize: 24,
      lineHeight: 28,
      fontWeight: 'bold'
    },
    desktop: {
      fontSize: 32,
      lineHeight: 36,
      fontWeight: 'bold'
    }
  },
  titleLg: {
    default: {
      fontSize: 28,
      lineHeight: 32,
      fontWeight: 'bold',
      letterSpacing: -1
    },
    desktop: {
      fontSize: 44,
      lineHeight: 52,
      fontWeight: 'bold',
      letterSpacing: -1
    }
  },
  titleXl: {
    default: {
      fontSize: 32,
      lineHeight: 36,
      fontWeight: 'bold',
      letterSpacing: -1
    },
    desktop: {
      fontSize: 60,
      lineHeight: 64,
      fontWeight: 'light',
      letterSpacing: -1
    }
  },
  displaySm: {
    default: {
      fontSize: 36,
      lineHeight: 40,
      fontWeight: 'light',
      letterSpacing: -1
    },
    desktop: {
      fontSize: 48,
      lineHeight: 52,
      fontWeight: 'light',
      letterSpacing: -1
    }
  },
  displayLg: {
    default: {
      fontSize: 44,
      lineHeight: 48,
      fontWeight: 'light',
      letterSpacing: -1
    },
    desktop: {
      fontSize: 72,
      lineHeight: 76,
      fontWeight: 'light',
      letterSpacing: -2
    }
  }
}

export const textStyles = Object.fromEntries(
  Object.entries(nestedTextStyles).flatMap(([name, style]) => [
    [name, style.default],
    [`${name}Desktop`, style.desktop]
  ])
    .filter(([name, value]) => value)
)

const textStylePropNames: (keyof ThemeUICSSProperties)[] = ['fontSize', 'fontWeight', 'lineHeight', 'letterSpacing']

export const textStyleProps = Object.fromEntries(
  Object.entries(nestedTextStyles).map(([name, style]) => [
    name,
    {
      sx: Object.fromEntries(
        textStylePropNames
          .filter(prop => style.default[prop] || style.desktop?.[prop])
          .map(prop => [
            prop,
            //  [__,              xs,   sm,   md,   lg, xl]
            [style.default[prop], null, null, null, style.desktop?.[prop]]
          ])
      )
    }
  ])
) as Record<TextStyleName, TextProps>
