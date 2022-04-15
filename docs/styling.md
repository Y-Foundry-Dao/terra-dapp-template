# Styled Components

This template comes with [styled components](https://styled-components.com/) ready to use out of the box

## File Structure

We have included 4 files for styled components in the `src/styles` directory

- `global.css.tsx` - This file sets up all global styles for the project (styling of HTML and Body tags, as well as creating scrollbar styles)

- `theme.tsx` - This file allows you to set common theme elements (colors, font sizes, font weights, border thickness, etc) that you can use within your styling. Then you can just change parts of your theme file to change your colors across the app rather than needing to do it explicitly in each styled component

- `ThemeComponent.tsx` - This is a custom component that wraps our App component. It passes our theme down to all components in our tree so we can use our theme where we need it without adding more boilerplate to our `index.tsx`

- `ThemeType.tsx` - This exports our type of our theme to use in typescript

## Styling Resources

- [Creating global style component](https://scalablecss.com/styled-components-global-styles/)

- [Article with good reference info](https://able.bio/drenther/styling-in-react-with-styled-components--62pbyjl#introduction)

- [Styling a specific class](https://stackoverflow.com/questions/45301517/target-specific-css-classes-with-styled-components) (useful for overriding styles from third party libraries)
