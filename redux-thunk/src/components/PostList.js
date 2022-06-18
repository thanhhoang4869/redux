import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchPosts } from "../actions";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchFetchPosts = () => dispatch(fetchPosts());
    dispatchFetchPosts();
  }, [dispatch]);

  // console.log(posts);

  const renderList = posts.map((post) => {
    return (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default React.memo(PostList);

// class PostList extends React.Component {
//   componentDidMount() {
//     this.props.fetchPosts();
//   }

//   renderList() {
//     return this.props.posts.map((post) => {
//       return (
//         <div className="item" key={post.id}>
//           <i className="large middle aligned icon user" />
//           <div className="content">
//             <div className="description">
//               <h2>{post.title}</h2>
//               <p>{post.body}</p>
//             </div>
//           </div>
//         </div>
//       );
//     });
//   }

//   render() {
//     return <div className="ui relaxed divided list">{this.renderList()}</div>;
//   }
// }

// const mapStateToProps = (state) => {
//   return { posts: state.posts };
// };

// export default connect(mapStateToProps, { fetchPosts })(PostList);
