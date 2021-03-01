import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Element from '../Element';
import { thunkInitDevs } from '../../redux/thunkCreators';
import './style.css';

function List(props) {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkInitDevs());
  }, [dispatch]);

  return (
    <div className="wrapperList">
      {store.posts &&
        store.posts.map((el) => <Element key={performance.now()} el={el} />)}
    </div>
  );
}

export default List;
