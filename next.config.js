module.exports={
  
    async rewrites(){
        return[
        {
            source:'/Project',
            destination:'/Home/projects',
        },
        {
            source:'/Profile',
            destination:'/Home/profile',
        },
        {
            source:'/about',
            destination:'/Home/about',
        },
       
    ]
}

};