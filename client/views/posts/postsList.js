var postsData = [
  {
    title:'Moby Dick',
    author: 'Herman Mellville',
    url: 'http://google.com'
  
},
  
  {
    title:'The Catcher in the Rye',
    author: 'J D Saliner',
    url: 'http://yahoo.com'
  
},
  
  {
    title:'Cujo',
    author: 'Stephen King',
    url: 'http://espn.com'
  
},
  
  {
    title:'The Lord of the Rings',
    author: 'JR Tolken',
    url: 'http://buzzfeed.com'
  
},
  
  {
    title:'The Lion the Witch and the Wardrobe',
    author: 'CS Lewis',
    url: 'http://toxel.com'
  
}
];

Template.postsList.helpers({
  //posts: postsData
  posts:function () {
    return Posts.find();
  }
  
});