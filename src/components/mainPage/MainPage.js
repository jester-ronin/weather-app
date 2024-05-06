import React from 'react'
import SearchInput from '../searchInput/SearchInput';

export const MainPage = () => {
    return (
        <div>
            <div className="MainPage">
                <header className="App-header">
                    <img src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png" className="App-logo" alt="logo" />
                    <SearchInput />
                </header>
            </div >
        </div>
    )
}

export default MainPage;