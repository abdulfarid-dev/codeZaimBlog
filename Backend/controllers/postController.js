import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
    console.log(req.user)
    try {
        const { title, content } = req.body
        const post = await Post.create({ title, content});
        // console.log("req.user >>>", req.user);

        res.status(201).send({ message: "post created successfully", post: post })
    } catch (err) {
        res.status(500).send({ message: "Internal server error", error: err.message })
    }
}




// Get All Posts
export const allpost = async (req, res) => {
    try {
        const posts = await Post.find().populate("user", "name email");

        res.status(200).json({
            message: "All posts fetched successfully",
            posts
        });
    } catch (err) {
        res.status(500).json({ 
            message: "Internal server error", 
            error: err.message 
        });
    }
};


//update post
export const updatePost = async (req, res) => {
    try {
        const _id = req.params._id;     // you want _id → kept same
        const { title } = req.body;

        // find the post
        let post = await Post.findById(_id);

        if (!post) {
            return res.status(404).send({ message: "Post not found" });
        }

        // correct updateOne syntax
        await post.updateOne(
            { title: title }   // fields to update
        );

        // not required but if you want to keep it
        await post.save();

        return res.status(201).send({
            message: "Post updated successfully",
            updatedPost: post
        });

    } catch (error) {
        return res.status(500).send({
            message: "Error updating post",
            error: error.message
        });
    }
};


//delete post

export const deletePost = async (req, res) => {
    try {
        const _id = req.params._id;   // same style as update

        let post = await Post.findById(_id);

        if (!post) {
            return res.status(404).send({ message: "Post not found" });
        }

        await post.deleteOne();   // delete the post

        return res.status(200).send({
            message: "Post deleted successfully"
        });

    } catch (error) {
        return res.status(500).send({
            message: "Error deleting post",
            error: error.message
        });
    }
};


