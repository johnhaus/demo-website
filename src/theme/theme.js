import palette from './palette';

export const darkTheme = {
  colors: {
    background: {
      canvas: palette.black,
      surface: palette.white,
    },
    text: {
      onCanvas: palette.white,
      onSurface: palette.black,
      fixed: palette.white,
    },
    action: {
      hover: palette.white91,
      hoverTransparent: palette.white10,
      active: palette.white20,
    },
    status: {
      error: palette.red900,
      warning: palette.orange600,
      success: palette.green700,
    },
    surface: {
      highlight: palette.green100,
    },
    accent: {
      primary: palette.red900,
    },
    border: {
      strong: palette.black,
      subtle: palette.black10,
    },
    // Box-shadow colors
    emphasis: {
      high: palette.white,
      low: palette.black10,
    },
    // Focus colors
    focus: {
      ring: palette.black,
    },
    control: {
      background: palette.white,
    },
  },
};

export const lightTheme = {
  colors: {
    background: {
      canvas: palette.white,
      surface: palette.black,
    },
    text: {
      onCanvas: palette.black,
      onSurface: palette.white,
      fixed: palette.white,
    },
    action: {
      hover: palette.white91,
      hoverTransparent: palette.white10,
      active: palette.white20,
    },
    status: {
      error: palette.red300,
      warning: palette.orange600,
      success: palette.green700,
    },
    surface: {
      highlight: palette.green100,
    },
    accent: {
      primary: palette.red900,
    },
    border: {
      subtle: palette.black10,
    },
    emphasis: {
      high: palette.white,
      low: palette.black10,
    },
    focus: {
      ring: palette.black,
    },
    control: {
      background: palette.white,
    },
  },
};
