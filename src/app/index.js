import React from 'react'
import { store } from 'store'
import { LogBox } from 'react-native'
import RootNavigator from 'navigator'
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

LogBox.ignoreAllLogs()

const  App = () =>  {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default () => (
    <ReduxProvider store={store}>
        <App/>
    </ReduxProvider>
)