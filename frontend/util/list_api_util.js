export const fetchList = id => (
    $.ajax({
        method: 'get', 
        url: `api/lists/${id}`, 
        error: err => console.log(err)
    })
); 