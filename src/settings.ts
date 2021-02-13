import { Injectable } from '@angular/core'
import { SettingsTabProvider } from 'terminus-settings'

import { QuickCmdsSettingsTabComponent } from './components/quickCmdsSettingsTab.component'

@Injectable()
export class QuickCmdsSettingsTabProvider extends SettingsTabProvider {
    id = 'qc'
    icon = 'hand-sparkles'
    title = 'Quick Commands'

    getComponentType (): any {
        return QuickCmdsSettingsTabComponent
    }
}
