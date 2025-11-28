import React, { useEffect, useState } from "react";
import API from "../api";
import "../css/Posts.css"; 
import { jwtDecode } from "jwt-decode";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [editingPost, setEditingPost] = useState(null);
  const [userId, setUserId] = useState(null);
  const[message,setMessage] =useState(" ")

  //decode token for like and unlike
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.userId); // 👈 userId from JWT
    }
  }, []);

  // Fetch postsnp
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/user/allpost");
      // backend sends {posts: [...]} or just [...]
      setPosts(res.data.posts || res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  // Create new post
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      let res=await API.post("/user/createpost", newPost);
      console.log(res)
      setMessage(res.data.message)
     
      setNewPost({ title: "", content: "" });
      fetchPosts();
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  // Delete post

const handleDelete = async (id) => {
  try {
    await API.delete(`/user/deletePost/${id}`);
    fetchPosts();
  } catch (err) {
    console.error("Error deleting post:", err);
  }
};


  // Edit post
  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/user/updatePost/${editingPost._id}`, {
        title: editingPost.title,
        content: editingPost.content,
      });
      setEditingPost(null);//reset form after update
      fetchPosts();
    } catch (err) {
      console.error("Error updating post:", err);
    }
  };

  














  return (
    <div className="posts-container">
      <h2>All Posts</h2>

      {/* Create Post */}
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
        ></textarea>
        <button type="submit">Create Post</button>
        <p>{message}</p>
      </form>

      {/* Edit Post */}
      {editingPost && (
        <form onSubmit={handleUpdate}>
          <h3>Edit Post</h3>
          <input
            type="text"
            value={editingPost.title}
            onChange={(e) =>
              setEditingPost({ ...editingPost, title: e.target.value })
            }
            required
          />
          <textarea
            value={editingPost.content}
            onChange={(e) =>
              setEditingPost({ ...editingPost, content: e.target.value })
            }
            required
          ></textarea>
          <button type="submit">Update</button>
          <button onClick={() => setEditingPost(null)}>Cancel</button>
        </form>
      )}

      {/* Post List */}
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post._id}>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
            <div>
              <button onClick={() => handleEdit(post)}>Edit</button>
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            </div>

           
         </li>
        ))}
      </ul>
    </div>
  );
}
