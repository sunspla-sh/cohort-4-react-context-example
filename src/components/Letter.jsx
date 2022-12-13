import { useContext } from 'react';
import { WritingContext } from '../context/writing.context';

function Letter(props){

  const { myWriting, setMyWriting } = useContext(WritingContext);

  return (
    <div>
      <h1>{myWriting}</h1>
      <input value={myWriting} onChange={event => setMyWriting(event.target.value)} />
    </div>
  );
}

export default Letter;