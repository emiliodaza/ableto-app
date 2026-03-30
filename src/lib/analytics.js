import ReactGA from 'react-ga4'

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

export const initAnalytics = () => {
    if(!measurementId) {
        console.warn('GA4 measurement ID is missing')
        return
    }

    ReactGA.initialize(measurementId)
}

export const trackPageView = (path) => {
    if(!measurementId) return

    ReactGA.send({
        hitType: 'pageview',
        page: path,
    })
}

export const trackContactFormSubmit = ({ formType, userLanguage }) => {
    if(!measurementId) return

    ReactGA.event('contact_form_submit', {
        form_type: formType,
        user_language: userLanguage,
    })
}

export const trackStorePageView = () => {
    if(!measurementId) return
    ReactGA.event('store_page_view')
}

export const trackStoreProductClick = ({ productName, productPrice}) => {
    if(!measurementId) return

    ReactGA.event('store_product_click', {
        product_Name: productName,
        product_price: productPrice,
    })
}

export const trackCtaClick =({ ctaText, ctaLocation}) => {
    if(!measurementId) return

    ReactGA.event('cta_click', {
        cta_text: ctaText,
        cta_location: ctaLocation,
    })
}