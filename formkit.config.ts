import { pt, en } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import '@formkit/themes'
import '@formkit/pro'

const config: DefaultConfigOptions = {
  locales: { pt, en },
  locale: 'en',
  theme: 'genesis'
}

export default config