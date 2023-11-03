import './card.scss'

export default function Card(props) {
  return (
    <div className='card_container' >
        <div className="card_content" >
            <h2>{`post ${props.object.id}`}</h2>
            <h3>{props.object.title}</h3>
            <p>{props.object.body}</p>
            <button onClick={() => {props.delPost(props.object.id)
            console.log(props.object.id)}}>delete post</button>
        </div>
    </div>
  )
}
