// import React, { useState, useEffect } from 'react';
// import { database } from '../firebase'
// import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
// import './comment.css';


// const Comments = () => {

//     const [name, setName] = useState('');
//     const [comment, setComment] = useState('');
//     const [comments, setComments] = useState([]);
//     const [editingCommentId, setEditingCommentId] = useState(null);
//     const [editingName, setEditingName] = useState('');
//     const [editingComment, setEditingComment] = useState('');

//     const commentsCollectionRef = collection(database, 'comments');

//     useEffect(() => {
//         const getComments = async () => {
//             const data = await getDocs(commentsCollectionRef);
//             setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//         };

//         getComments();
//     }, []);

//     const handleCreate = async () => {
//         await addDoc(commentsCollectionRef, {
//             name: name,
//             comment: comment,
//         });
//         setName('');
//         setComment('');
//     }

//     const handleDelete = async (id) => {
//         const commentDoc = doc(database, 'comments', id);
//         await deleteDoc(commentDoc);

//         // Update the comments state after deleting
//         const updatedComments = comments.filter((comment) => comment.id !== id);
//         setComments(updatedComments);
//     }

//     const handleEdit = (id, name, comment) => {
//         setEditingCommentId(id);
//         setEditingName(name);
//         setEditingComment(comment);
//     };

//     const handleSaveEdit = async () => {
//         const commentDoc = doc(database, 'comments', editingCommentId);
//         await updateDoc(commentDoc, {
//             name: editingName,
//             comment: editingComment,
//         });
//         setEditingCommentId(null);
//         setEditingName('');
//         setEditingComment('');
//     };

//     return(
//         <div className="container">
//             <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
//             <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" placeholder="Comment" />
//             <button onClick={handleCreate}>Add Comment</button>
//             {
//                 comments.map(values => 
//                     editingCommentId === values.id ? (
//                         <div>
//                             <input value={editingName} onChange={(e) => setEditingName(e.target.value)} type="text" placeholder="Name" />
//                             <input value={editingComment} onChange={(e) => setEditingComment(e.target.value)} type="text" placeholder="Comment" />
//                             <button onClick={handleSaveEdit}>Save</button>
//                         </div>
//                     ) : (
//                         <div>
//                             <p>{values.name}</p>
//                             <p>{values.comment}</p>
//                             <button onClick={() => handleDelete(values.id)}>Delete</button>
//                             <button onClick={() => handleEdit(values.id, values.name, values.comment)}>Edit</button>
//                         </div>
//                     )
//                 )
//             }
//         </div>
//     );
// };

// export default Comments;
