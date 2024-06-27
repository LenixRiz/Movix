import { addDoc, collection, doc, getDocs, deleteDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { database } from '../../firebase';
import './adminStyle/movieInp.css'
import { useNavigate } from 'react-router-dom';

const MovieInp = () => {

    const [show, setShow] = useState(false);
    const [val, setVal] = useState([]);
    const [id, setId] = useState('');
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [syn, setSyn] = useState('');
    const [genre, setGenre] = useState('');
    const navigate = useNavigate();

    const value = collection(database, 'MovieList');

    useEffect(() => {
        const getData = async () => {
          const data = await getDocs(value);
          setVal(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        getData();
      }, []);

      const handleCreate = async () => {
        await addDoc(value, { img: img, title: title, syn: syn, genre: genre });
        setImg('');
        setTitle('');
        setSyn('');
        setGenre('');
        setId('');
        window.location.reload();
      };
    
      const handleDelete = async (id) => {
        const deleteVal = doc(database, "MovieList", id);
        await deleteDoc(deleteVal);
        window.location.reload();
      };
    
      const handleEdit = async (id, img, title, syn, genre) => {
        setImg(img);
        setTitle(title);
        setSyn(syn);
        setGenre(genre)
        setId(id);
        setShow(true);
      };
    
      const handleUpdate = async () => {
        const updateData = doc(database, "MovieList", id);
        await updateDoc(updateData, { img: img, title: title, syn: syn, genre: genre });
        setShow(false);
        setImg('');
        setTitle('');
        setSyn('');
        setGenre('');
        setId('');
        window.location.reload();
      };

      return (
        <><div>
          <button className='button-anggota' onClick={() => navigate('/')}>Back to Home</button>
        </div><div className='container-anggota'>
    
            <h1 className='title-anggota'>Movie Input</h1>
            <div className='item-anggota-row'>
              <input className='input-anggota' type='text' placeholder='img' value={img} onChange={(e) => setImg(e.target.value)} />
              <input className='input-anggota' type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
              <input className='input-anggota' type='text' placeholder='syn' value={syn} onChange={(e) => setSyn(e.target.value)} />
              <input className='input-anggota' type='text' placeholder='genre' value={genre} onChange={(e) => setGenre(e.target.value)} />

              {!show ? (
                <button className='button-anggota' onClick={handleCreate}>Create</button>
              ) : (
                <button className='button-anggota' onClick={handleUpdate}>Update</button>
              )}
            </div>
    
            <div className='anggota-list'>
              {val.map((values) => (
                <div className='anggota-item' key={values.id}>
                    <div className='item-anggota-row'>
                    <img src={values.img} alt="Movie Poster" style={{ width: '50%', height: '75%' }} /> {/* Display image */}
                    <div><h2 style={{ margin: '16px 0' }}>{values.title}</h2></div>
                    <div><h5 style={{ margin: '48px 0' }}>{values.syn}</h5></div>
                    <div><p>{values.genre}</p></div>
                    <div className='button-group-anggota'>
                    <button onClick={() => handleDelete(values.id)}>Delete</button>
                    <button onClick={() => handleEdit(values.id, values.img, values.title, values.syn, values.genre)}>Edit</button>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div></>
      );
}

export default MovieInp
