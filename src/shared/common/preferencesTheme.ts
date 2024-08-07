import ThemePreferencesStore from "../stores/preferencesUser"

export const changeTheme = () => {
    const { themeMode } = ThemePreferencesStore.getState()

    console.log(themeMode);
        
}
