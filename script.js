let posts = [
  {
    id: 1,
    title: "post 1",
    content: "this is the content of post 1",
  },
  {
    id: 2,
    title: "post 2",
    content: "this is the content of post 2",
  },
  {
    id: 3,
    title: "post 3",
    content: "this is the content of post 3",
  },
];

let comments = [
  {
    id: 1,
    postId: 1,
    content: "this post is amazing",
  },
  {
    id: 2,
    postId: 1,
    content: "this post is far from amazing",
  },
  {
    id: 3,
    postId: 2,
    content: "i do like this post",
  },
];

let postsPromise = new Promise((resolve) => {
  resolve(posts);
});

let commentsPromise = new Promise((resolve) => {
  resolve(comments);
});

postsPromise.then(createPosts).then(commentsPromise.then(addComments));

function createPosts(posts) {
  posts.forEach((post) => {
    let postDiv = document.createElement("div");
    postDiv.setAttribute("id", post.id);
    postDiv.setAttribute("class", "post");
    let title = document.createElement("h1");
    let titleText = document.createTextNode(post.title);
    title.appendChild(titleText);
    let postContent = document.createElement("h3");
    let postText = document.createTextNode(post.content);
    let commentsDiv = document.createElement("div");
    commentsDiv.setAttribute("class", "comments");
    let commentTitle = document.createElement("h2");
    let commentTitleText = document.createTextNode("Comments:");
    commentTitle.appendChild(commentTitleText);
    commentsDiv.appendChild(commentTitle);
    let commentList = document.createElement("ul");
    commentList.setAttribute("id", "post" + post.id);
    commentsDiv.appendChild(commentList);
    postContent.appendChild(postText);
    postDiv.appendChild(title);
    postDiv.appendChild(postContent);
    postDiv.appendChild(commentsDiv);
    document.body.appendChild(postDiv);
  });
}

function addComments(comments) {
  comments.forEach((comment) => {
    let commentList = document.getElementById("post" + comment.postId);
    let commentContent = document.createElement("li");
    let commentContentText = document.createTextNode(comment.content);
    commentContent.appendChild(commentContentText);
    commentList.appendChild(commentContent);
  });
}
