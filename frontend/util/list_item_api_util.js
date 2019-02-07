export const fetchListItems = () => (
    $.ajax({
        method: 'get', 
        url: `api/list_items`,
        error: err => console.log(err)
    })
); 

export const fetchListItem = id => (
    $.ajax({
        method: 'get', 
        url: `api/list_items/${id}`, 
        error: err => console.log(err) 
    })
); 

export const deleteListItem = id => (
    $.ajax({
        method: 'delete', 
        url: `api/list_items/${id}`
    })
); 

export const createListItem = (data) => (
    $.ajax({
        method: 'post', 
        url: 'api/list_items', 
        data 
    })
); 