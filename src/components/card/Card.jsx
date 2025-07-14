import "./Card.css"

const Card = props => {
    const {course} = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={course.Image} alt={course.title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-price">${course.price}</p>
        <button className="card-button">Add to Cart</button>
      </div>
    </div>
  )
}

export default Card