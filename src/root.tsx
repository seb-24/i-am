import { component$ } from '@builder.io/qwik'
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city'

import './global.css'

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet='utf-8' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.svg' />
        <title>Sebastián García</title>
      </head>
      <body
        lang='es'
        class='flex min-h-screen flex-col justify-center bg-background'
      >
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  )
})
