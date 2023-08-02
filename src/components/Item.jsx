import React from 'react'

function Item({ item }) {
  return (
    <span style={{ marginRight: 4 }}>
      <span className="badge badge-success">
        {item?.name}
      </span>x{item?.CharacterItem?.quantity}
    </span>
  )
}

export default Item