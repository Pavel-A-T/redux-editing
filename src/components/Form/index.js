import React, { useEffect, useState } from "react";
import { save, create, cancel } from '../../store/postSlice'
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { setText } from '../../store/filterSlice'

function Form() {
  const initItem = {
    name: '',
    count: ''
  }

  const [newItem, setNewItem] = useState(initItem);
  const [filter, setFilter] = useState('');

  const list = useSelector((state) => state.posts)
  const dispatch = useDispatch();

  const editableItem = list.find(item => item.status === 'edit');

  useEffect(()=> {
    setNewItem(editableItem ? editableItem : initItem);
  }, [list])

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewItem(prevInfo => ({...prevInfo, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableItem) {
      dispatch(save({
        ...newItem,
        name: newItem.name,
        count: Number(newItem.count),
        status: 'publish',
      }))
    } else {
      dispatch(create({
          id: uuidv4(),
          name: newItem.name,
          count: Number(newItem.count),
          status: 'publish',
        })
      )

      setNewItem(initItem)
    }
  }

  const handleCancel = () => {
    dispatch(cancel())
    setNewItem(initItem)
  }

  const handleFilterChange = (e) => {
    const {value} = e.target
    setFilter(value)
    dispatch(setText(value))
  }

  return (
   <div className="form">
     <div className="filter">
      <input type="text" placeholder="Filter" value={filter} onChange={handleFilterChange} />
     </div>
     <form onSubmit={handleSubmit}>
       <input type="text" name="name" placeholder="Name" value={newItem.name} onChange={handleChange} required />
       <input type="number" name="count" placeholder="Number" value={newItem.count} onChange={handleChange} required />
       {!editableItem && <input type="submit" value="Create" />}
       {editableItem && <input type="submit" value="Save" />}
       {editableItem && <input type="button" value="Cancel" onClick={handleCancel} />}
     </form>
   </div>
  )
}

export default Form;