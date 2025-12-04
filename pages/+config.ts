import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'
import vikePhoton from 'vike-photon/config'

export default {
  extends: [vikeReact, vikePhoton],
  title: 'Portfolio Site',
  description: 'My portfolio website'
} satisfies Config
