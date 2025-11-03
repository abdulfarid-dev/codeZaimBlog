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
