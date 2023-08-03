import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames'
import { Tooltip } from 'react-tooltip';
import { uid } from 'uid';

const TooltipContent = ({ item }) => {
  const { id: charId } = useParams()
  const navigate = useNavigate()
  const buy = () => {
    try {
      fetch(`/api/characters/${charId}/item/${item.id}/buy`)
        .then(navigate(0))
    } catch (err) {
      console.error(err)
    }
  }
  return <div>
    <h6>{item.name}</h6>
    <p>{item.description}</p>
    {item.price && <div className="text-center">
      <button className='btn btn-primary btn-sm' onClick={buy}>Acheter</button>
    </div>}
  </div>
}

function Item({ item }) {
  const quantity = item?.CharacterItem?.quantity && ('x' + item?.CharacterItem?.quantity)
  return (
    <span style={{ marginRight: 4 }}>
      <span className={classNames('badge', {
        'badge-success': quantity,
        'badge-primary': item.owned,
        'badge-warning': item.special,
        'badge-light': !quantity && !item.owned && !item.special,
      })}>
        {item?.name}
      </span>
      {quantity}
    </span>
  )
}

export default Item