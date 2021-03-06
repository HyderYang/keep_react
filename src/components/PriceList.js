import React from 'react'
import Ionicon from 'react-ionicons'
import Proptypes from 'prop-types'

const PriceList = ({items, onModifyItem, onDeleteItem}) => {
  return (
    <ul className="list-group list-grop-flush">
      {
        items.map((item) => (
          <li className="list-group-item d-flex
                         justify-content-between align-item-center"
              key={item.id}
          >
            <span className="col-1 badge badge-primary">
              {/*{item.category.name}*/}
              <Ionicon className="rounded-circle"
                       fontSize="30px"
                       style={{backgroundColor: "#007bff", padding: "5px"}}
                       color='#fff'
                       icon={item.category.iconName}
              />
            </span>
            <span className="col-5">
              {item.title}
            </span>
            <span className="col-2 font-weight-bold">
              {(item.category.type === 'income') ? '+' : '-'}
              {item.price}元
            </span>
            <span className="col-2">
              {item.date}
            </span>
            <a className="col-1" href="/#"
               onClick={() => {
                 onModifyItem(item)
               }}
            >
              <Ionicon className="rounded-circle"
                       fontSize="30px"
                       style={{backgroundColor: "#28a745", padding: "5px"}}
                       color='#fff'
                       icon='ios-create-outline'
              />
            </a>
            <a className="col-1" href="/#"
               onClick={() => {
                 onDeleteItem(item);
               }}
            >
              <Ionicon className="rounded-circle"
                       fontSize="30px"
                       style={{backgroundColor: "#007bff", padding: "5px"}}
                       color='#fff'
                       icon='ios-create-outline'
              />
            </a>
          </li>
        ))
      }
    </ul>
  )
};

PriceList.propTypes = {
  items: Proptypes.array.isRequired,
  onModifyItem: Proptypes.func.isRequired,
  onDeleteItem: Proptypes.func.isRequired,
};
export default PriceList;