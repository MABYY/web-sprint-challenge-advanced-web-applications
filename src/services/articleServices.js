import React , { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'


const articleService = ()=> {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/articles')
        .then(res=>{
            setArticles(res.data)
        })
        .catch(err =>{ setArticles([])})
    },[])
    
    return (
        articles
    )
}

export default articleService;

//Task List:
//1. Complete articleServices. 
// This module should make an authenticated call and return an array of those articles.