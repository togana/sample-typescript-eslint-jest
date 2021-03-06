import React from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }) => {
  return children
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
}

export const customRender = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'> = {}
): RenderResult => render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'
