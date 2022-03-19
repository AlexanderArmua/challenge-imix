import {images} from "./images";

const subdomain = 'assets'

const serverUrl = `https://${subdomain}.imgix.net`

const getRealImageURL = (imageName) => images.find(({ name }) => name === imageName)?.url || ''

export const buildFilters = (filters = []) => {
    return filters.reduce((left, [key, value]) => left.concat(`${key}=${value}&`), "").slice(0, -1)
}

export const buildParams = (image, filters = []) => `${image}?${buildFilters(filters)}`

export const buildURL = (image, filters) => `${serverUrl}/${getRealImageURL(image)}?${buildFilters(filters)}`

export const buildUrlWithImage = (image) => `${serverUrl}/${getRealImageURL(image)}`
