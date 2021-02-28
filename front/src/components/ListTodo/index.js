import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostAC } from '../../redux/actionCreators';
import Element from '../Element';
import './style.css';

function List(props) {
  
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(process.env.REACT_APP_URL, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then((responce) => responce.json())
      .then((data) => dispatch(loadPostAC(data)));
  }, [dispatch]);

  return (
    <div className="wrapperList">
      {store.posts &&
        store.posts.map((el) => <Element key={performance.now()} el={el} />)}
    </div>
  );
}

export default List;
