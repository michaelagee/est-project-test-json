export const applicationPlatforms = [
    {
        "platform": "Web",
        "hours": 200
    },
    {
        "platform": "Mobile",
        "hours": 360
    },
    {
        "platform": "Both (Hybrid)",
        "hours": 560
    }
]

// 1. informational: Easy, static, light content + CMS, no login. Maybe a few forms
// 2. Search: lots of images, content management, caching, login, etc (think IMDB)
// 3. E-commerce: lots of images, lots of products, payments, extra Security, carts, search, database.CMS
// 4. Social/Media Driven: Lots of user generated and managed content, lots of privacy and security stuff, images, chat, sharing, etc. 
// 5. Financial/Medical/Geolocation: Hippa, highly Secure, addresses, personal info, lots of options, think bank of america or uber. 
export const mobileApplicationTypes = [
    {
        "categoryName": "E-Commerce (Amazon, Nike, Offer Up)",
        "categoryType": 3,
        "hours": 40
    },
    {
        "categoryName": "Utility (Stock tracker, CoinGecko)",
        "categoryType": 2,
        "hours": 40
    },
    {
        "categoryName": "Financial (Bank of America, Wells Fargo, Citibank)",
        "categoryType": 5,
        "hours": 40
    },
    {
        "categoryName": "Social (TikTok, Facebook, Twitter)",
        "categoryType": 4,
        "hours": 40
    },
    {
        "categoryName": "Media Driven (Instagram, Pinterest, SnapChat)",
        "categoryType": 4,
        "hours": 40
    },
    {
        "categoryName": "GeoLocation (Uber, Food order/pickup)",
        "categoryType": 5,
        "hours": 40
    },
    {
        "categoryName": "Informational (River Renew, Portfolio)",
        "categoryType": 1,
        "hours": 40
    },
    {
        "categoryName": "Search (IMDB)",
        "categoryType": 2,
        "hours": 40
    }
]

export const applicationCategories = ['coldstateOnly', 'hotState', 'financialTransactions']