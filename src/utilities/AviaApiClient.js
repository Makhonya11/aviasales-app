/* eslint-disable */
let SEARCH_ID
export const _APIBASE = 'https://aviasales-test-api.kata.academy'
export const getId = async () => {
    const res = await fetch(`${_APIBASE}/search`)
    if (res.ok) {
        const id = await res.json()
        SEARCH_ID = await id.searchId
    } 
}

export const getTickets = async () => {

        try {
            const res = await fetch(`${_APIBASE}/tickets?searchId=${SEARCH_ID}`)
            if (res.ok) {
                const data = await res.json()
                return data

            }
        else throw new Error('oshipka')
        } catch (error) {
            console.error(error)
            return getTickets()
        }
}

