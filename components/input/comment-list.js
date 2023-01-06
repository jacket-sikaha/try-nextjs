import classes from "./comment-list.module.css";

function CommentList({ items }) {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {items.map(({ id, text, name }) => {
        return (
          <li key={id}>
            {""}
            <p>{text}</p>
            <div>
              By <address>{name}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
