
const { deleteOne } = require("../models/Comment");
const Comment = require("../models/Comment");

module.exports = {
  
  createComment: async (req, res) => {
    try {
        //const commentUser = await User.find({ user: req.user.id });
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
        CreatedBy: req.user.userName,
        CreatedById: req.user.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+ req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
        await Comment.deleteOne({_id: req.params.commentid })
        res.redirect("/post/"+ req.params.postid)
    }
    catch (err){
        console.log(error)
    }
  }
};
