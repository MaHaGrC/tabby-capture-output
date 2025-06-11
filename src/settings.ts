import { Injectable } from '@angular/core'
import { SettingsTabProvider } from 'tabby-settings'

import { SaveOutputSettingsTabComponent } from './settingsTab.component'

/** @hidden */
@Injectable()
export class SaveOutputSettingsTabProvider extends SettingsTabProvider {
    id = 'capture-output'
    icon = 'download'
    title = 'Capture Output'

    getComponentType (): any {
        return SaveOutputSettingsTabComponent
    }
}
