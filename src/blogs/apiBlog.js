export const create = (post) => {
    console.log(post)
    return fetch(`http://localhost:3001/create?id=${post.blogID}&t=${post.blogTitle}&c=${post.blogContent}&d=${post.creationDate}&k=${post.keywords}&a=${post.authorID}`,{
        method: "POST",
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}

export const comment = (userID,postID,comment) => {
    return fetch(`http://localhost:3001/add/comment?blogID=${postID}&userID=${userID}&comment=${comment}`,{
        method: "POST",
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}


export const List = () => {
    return fetch(`http://localhost:3001/retrieve/allBlogs`,{
        method: "GET",
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}

export const UserList = (userid) => {
    return fetch(`http://localhost:3001/retrieve?user=${userid}`,{
        method: "GET",
    })
    .then(result => {
        return result.json()
    })
    .catch(err => console.log(err));
}

export const SearchList = (keyword) => {
    return fetch(`http://localhost:3001/search?keyword=${keyword}`,{
        method: "GET",
    })
    .then(result => {
        console.log(result["data"])
        return result.json()
    })
    .catch(err => console.log(err));
}


export const UserDetail = (userid) => {
    return fetch(`http://localhost:3001/user?userID=${userid}`,{
        method: "GET",
    })
    .then(result => {
        console.log("reply from node for user detail")
        return result.json()
    })
    .catch(err => console.log(err));
}
 
export const BlogContent = (blogid) => {
    return fetch(`http://localhost:3001/blogContent?blogID=${blogid}`,{
        method: "GET",
    })
    .then(result => {
        console.log("reply from node for user detail")
        return result.json()
    })
    .catch(err => console.log(err));
}
 
export const BlogComment = (blogid) => {
    return fetch(`http://localhost:3001/comments?blogID=${blogid}`,{
        method: "GET",
    })
    .then(result => {
        console.log("reply from node for user detail")
        return result.json()
    })
    .catch(err => console.log(err));
}
