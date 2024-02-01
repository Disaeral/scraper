import { createRoot } from 'react-dom/client'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { SidebarToggleProvider } from 'widgets/SidebarToggleBtn/ui/SidebarToggleProvider'

const spareNode = ((): HTMLDivElement => {
    const d = document.body.appendChild(document.createElement('div'))
    d.setAttribute('id', 'root')
    return d
})()

const domNode = document.getElementById('root') ?? spareNode

const root = createRoot(domNode)

root.render(
    <SidebarToggleProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </SidebarToggleProvider>
)
