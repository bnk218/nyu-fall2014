if (Posts.find().count() === 0) {
  Posts.insert({
    title:"Running Lean",
    author:"Ash Maurya",
    url:"http://runninglean.com"
  });
  
  Posts.insert({
    title:"The Lean Startup",
    author:"Eric Reis",
    url:"http://startuplessonslearned.com"
  });
  
  Posts.insert({
    title:"html5: The Missing Manual",
    author:"O'Reilly",
    url:"http://safaribooks.com"
  });
  
}