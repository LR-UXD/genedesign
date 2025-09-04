```yaml
meta:
  type: Component
  category: General
title: Glass Button
description: A button component with liquid glass effects, supporting WebGL rendering and CSS fallback for realistic glass texture and lighting effects.
```

@import ./__demo__/basic.md
@import ./__demo__/icon-glass.md

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| canvasWidth | Canvas width | `number` | `800` |
| canvasHeight | Canvas height | `number` | `600` |
| buttonX | Button X coordinate position | `number` | `400` |
| buttonY | Button Y coordinate position | `number` | `300` |
| bgImage | Background image URL | `string` | `''` |
| bgBlur | Background blur intensity | `number` | `10` |
| glassWidth | Glass button width | `number` | `120` |
| glassHeight | Glass button height | `number` | `40` |
| glassRadius | Glass button border radius | `number` | `8` |
| lightIntensity | Light intensity | `number` | `0.8` |
| lightAngle | Light angle | `number` | `45` |
| refractionDepth | Refraction depth | `number` | `0.1` |
| refractionFactor | Refraction factor | `number` | `0.3` |
| dispersion | Dispersion effect intensity | `number` | `0.1` |
| text | Button text | `string` | `''` |
| textColor | Text color | `string` | `'#ffffff'` |
| textSize | Text font size | `number` | `14` |
| textFont | Text font family | `string` | `'Arial, sans-serif'` |
| icon | Icon content (for text icons) | `string(play、pause、stop、download、heart、star、home、setting)` | `''` |
| iconType | Icon type | `'text' \| 'svg' \| 'local-svg' \| 'image'` | `'text'` |
| iconSize | Icon size | `number` | `16` |
| iconColor | Icon color | `string` | `'#ffffff'` |
| iconPosition | Icon position relative to text | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` |
| iconSpacing | Spacing between icon and text | `number` | `8` |
| iconSvgPath | Local SVG icon file path | `string` | `''` |
| debugStep | Debug step (0-9) | `number` | `9` |
| nonShapeAlpha | Non-shape area transparency (0-100) | `number` | `0` |

### Events

| Event | Description | Parameters |
| --- | --- | --- |
| click | Triggered when button is clicked | `(event: MouseEvent)` |

### Features

- **WebGL Rendering**: Hardware-accelerated rendering for smooth liquid glass effects
- **CSS Fallback**: Automatic fallback to CSS styling when WebGL is not supported
- **Icon Support**: Support for text, SVG, local SVG files, and image icons
- **Interactive Feedback**: Smart click/drag detection with mouse interaction support
- **Adaptive Layout**: Draggable button position adjustment
- **Performance Optimization**: Built-in performance monitoring and optimization mechanisms

