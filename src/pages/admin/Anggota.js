import { addDoc, collection, doc, getDocs, deleteDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { database } from '../../firebase';
import './adminStyle/anggota.css'
import { useNavigate } from 'react-router-dom';

function Anggota() {
  const [show, setShow] = useState(false);
  const [val, setVal] = useState([]);
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  // const [receivedEmail, setReceivedEmail] = useState('');

  // const [searchParams, setSearchParams] = useSearchParams();

  const value = collection(database, 'Anggota');

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(value);
      setVal(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  // useEffect (() => {
  //   if (searchParams.get('email')) {
  //     setReceivedEmail(searchParams.get('email'));
  //   }
  // })

  const handleCreate = async () => {
    await addDoc(value, { email: email });
    setEmail('');
    setId('');
    window.location.reload();
  };

  const handleDelete = async (id) => {
    const deleteVal = doc(database, "Anggota", id);
    await deleteDoc(deleteVal);
    window.location.reload();
  };

  const handleEdit = async (id, email) => {
    setEmail(email);
    setId(id);
    setShow(true);
  };

  const handleUpdate = async () => {
    const updateData = doc(database, "Anggota", id);
    await updateDoc(updateData, { email: email });
    setShow(false);
    setEmail('');
    setId('');
    window.location.reload();
  };

  return (
    <><div>
      <button className='button-anggota' onClick={() => navigate('/')}>Back to Home</button>
    </div><div className='container-anggota'>

        <h1 className='title-anggota'>Anggota</h1>
        <div className='flex-row'>
          <input className='input-anggota' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          {!show ? (
            <button className='button-anggota' onClick={handleCreate}>Create</button>
          ) : (
            <button className='button-anggota' onClick={handleUpdate}>Update</button>
          )}
        </div>

        <div className='anggota-list'>
          {val.map((values) => (
            <div className='anggota-item' key={values.id}>
              <h1>{values.email}</h1>
              <div className='button-group-anggota'>
                <button onClick={() => handleDelete(values.id)}>Delete</button>
                <button onClick={() => handleEdit(values.id, values.email)}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div></>
  );
}

export default Anggota;