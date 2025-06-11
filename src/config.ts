import { ConfigProvider } from 'tabby-core'

/** @hidden */
export class SaveOutputConfigProvider extends ConfigProvider {
    defaults = {
        captureOutput: {
            autoSave: 'off',
            autoSaveDirectory: null,
        },
    }

    platformDefaults = { }
}
