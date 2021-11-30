import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/posts";


const getAllPost = () =>
{
    return axios.get(url);
}

const getUsersPost = async (userId) =>
{
    let resp = await axios.get(url);
    let allUsersdata = resp.data;

    let posts = allUsersdata.filter(x => x.userId==userId);
    console.log(posts)
    return posts;
}

export default {getAllPost, getUsersPost}