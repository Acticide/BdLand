export const urlBase = "http://localhost:51596/"

export const postJson = (url, data) => {
    return fetch(urlBase + url, {
        method : 'POST',
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
} 

export const postFormData = (url, data) => {
    return fetch(urlBase + url, {
        method : 'POST',
        headers : {
            "accept" : "application/json"
        },
        body : data
    })
} 

export const get = (url) => {
    return fetch(urlBase + url, {
        method : 'GET'
    })
}