export const navigatePageUrl = {
    mainPage: '/',
    hotelPage: '/hotel/:id',
    registration: '/registration',
    authorization: '/authorization',
}
export const hotelsUrl = (str) => `https://fe-student-api.herokuapp.com/api/hotels/${str}`
export const popular = 'popular'
export const googlePlayUrl = 'https://play.google.com'
export const appleStoreUrl = 'https://www.apple.com/app-store'
export const queryParams = (searchValue, dateFrom, dateTo, adults, childAges, rooms) => {
    return `?search=${searchValue}&dateFrom=${dateFrom}&dateTo=${dateTo}&adults=${adults}&children=${childAges}&rooms=${rooms}`
}

export const hotelPage = {
    getHotelInfo: (country, city) => {
        return `Hello dear user of our site! We are pleased to present you this hotel, which is located
                                 in ${country} and in the city center of ${city}. The sights of the 
                                 city are densely located near our hotel. Developed infrastructure. We look forward to
                                 collaborating!`
    }
}

export const svgIcons = {
    siteLogo: '#logo',
    themeSwitch: '#themeSwitch',
    account: '#account',
    signOut: '#signOut',
    googlePlay: '#googlePlay',
    appleStore: '#appleStore',
    signUp: '#signUp',
    closeBtn: '#close',
}

export const buttonsText = {
    continue: 'Continue...',
    signUp: 'Sign Up',
    signOut: 'Sign out',
    regions: 'Regions',
    cities: 'Cities',
    places: 'Places of interest',
    bookNow: 'Book now',
    selectAge:'Select age',
}
export const topSection = {
    id: 'topSection',
    titleFirst: `Discover stays`,
    titleSecond: 'to live, work or just relax',
}

export const availableHotels = {
    id: 'availableHotels',
    getTitle: (sumHotels) => {
        return `Available ${sumHotels} hotels:`
    }
}
export const homesGuestsLoves = {
    id: 'popularHotels',
    title: 'Homes guests loves',
}

export const destinations = {
    id:'attractions',
    title: 'The best destinations',
}
export const reviews = {
    title: 'Guests reviews',
}

export const formFields = {
    email: 'Email address',
    pass: 'Password',
    phone: 'Phone',
}

export const filter = {
    filterBtn: {
        id: 'filterBtn',
        getTitle: (adultsCount, childrenCount, roomsCount) => {
            return `${adultsCount} Adults — ${childrenCount} Children — ${roomsCount} Room`
        }
    },
    childBlock: {
        titleFirst: 'What is the age of the child you’re',
        titleSecond: 'travelling with?',
    }
}

export const messages = {
    successfullyRegistered: 'You have successfully registered! Check your email.',
    signUp: 'Sign up and get 20% off your first booking',
}
export const errors = {
    formReg: 'You missed a field!',
    formAuth: 'Incorrect password or email!',
}
export const themes = {
    default : 'default',
    dark: 'dark',
}
