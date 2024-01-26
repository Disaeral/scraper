import { useTranslation } from 'react-i18next'

const AboutPage = (): React.ReactNode => {
  const [t] = useTranslation(['translation', 'about'])
  return (
      <div>
          {t('Test translation')}
          {t('About us', { ns: 'about' })}
      </div>
  )
}

export default AboutPage
