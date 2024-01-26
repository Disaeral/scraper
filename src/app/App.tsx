import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from './providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import 'shared/config/i18n/i18nConfig'
import { Suspense } from 'react'

export const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (
      <div className={classNames('app', [theme], {})}>
          <Suspense fallback={'Loading...'}>
              <Navbar />
              <div className={'page-content'}>
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}
