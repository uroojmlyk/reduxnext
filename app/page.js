// 'use client';

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts } from './features/posts/postsSlice';
// export default function Page() {
//   const dispatch = useDispatch();
//   const { data, status } = useSelector((state) => state.posts);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   if (status === 'loading') return <p>Loading...</p>;

//   return (
//     <div>
//       {data.slice(1,3).map((post) => (
//         <p key={post.id}>{post.title}</p>
//       ))}
//     </div>
//   );
// }


// 'use client'
// import { useEffect } from "react"
// import { useSelector,useDispatch } from "react-redux"
// import { fetchPosts } from "./features/posts/postsSlice"
// export default function Page (){
//   const dispatch=useDispatch();
//   const {data,status}= useSelector ((state)=> (state.posts));
//   useEffect( ()=> {
//     dispatch (fetchPosts())
//   },[dispatch]);
//   if (status === 'loading') return <p> Loading...</p>
//   return <div>
//     {data.slice (1,3). map((post)=> ( <p key={post.id}>{post.title}</p>) )}
//   </div>
// }
'use client'
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchPosts } from './features/posts/postsSlice';
export default function page (){
const dispatch=useDispatch();
const {data,status}=useSelector ( (state)=> state.posts);
useEffect (()=> {

dispatch (fetchPosts());
},[dispatch])
if (status==='loading') return <p>loading...</p>
return <div>
  {data.slice(1,5).map((posts)=>( <p key={posts.id}> {posts.title}</p>) )}
</div>

}















