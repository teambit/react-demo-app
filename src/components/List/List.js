import React from 'react';
import RemovableListItem from '../RemovableListItem';
import PropTypes from 'prop-types';


const List = (props) => {
  const {items, removeItem} = props;
  return (
      <ul style={{paddingLeft: 0}}>
          {items.map(item =>  
              <RemovableListItem key={item.key} text={item.text} id={item.key} removeItem={removeItem}/>   
          )}
      </ul>
  )
}

List.propTypes = {
  /** List items.
   *  key: The item's unique key.
   *  text: The item's description. */ 
    items: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
    /** A collback to be executed on a remove-item event */
    removeItem: PropTypes.func
  };

  export default List;
