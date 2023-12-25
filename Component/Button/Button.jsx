import './button.css'

const Button = ({btnText}) => {
  return (
    <div>
        <button className='btn-button'>{btnText}</button>
    </div>
  )
}

export default Button