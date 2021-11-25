import react from 'react'
import { Fragment } from 'react'
import { IntlProvider } from 'react-intl'

import {LOCALES} from './locales.js'
import messages from './messages/index.js'
const Provider = ({children, locale = LOCALES.POLISH}) => (
    <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
    >
    {children}
    </IntlProvider>
)

export default Provider