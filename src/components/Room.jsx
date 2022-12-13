import Desk from "./Desk";

import { useContext } from 'react';
import { WritingContext } from '../context/writing.context';

function Room(props){

  const { myWriting } = useContext(WritingContext);

  return (
    <div>
      <Desk writing={props.writing} />
      <p style={{
        color: myWriting === 'blue' ? 'blue' : 'purple'
      }}>{myWriting}</p>
    </div>
  );
}

export default Room;