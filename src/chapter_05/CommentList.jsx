import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이대현",
    comment: "안녕 나는 이대현이야 리액트 천재야",
  },
  {
    name: "용민지",
    comment: "안녕 나는 귀염둥이 민지얌",
  },
  {
    name: "김가루",
    comment: "안녕 나는 귀여운 가루야",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((item) => (
        <Comment name={item.name} comment={item.comment} />
      ))}
    </div>
  );
}

export default CommentList;
