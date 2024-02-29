import PropTypes from 'prop-types'


// eslint-disable-next-line react/prop-types
const Button =({buttonContent, nextContent})=>{
    
  return (
        <>
        <button>{buttonContent}</button>
        <button>{nextContent}</button>
        
        </>
    )
}
//if button content is default
// Button.defaultProps ={
//     buttonContent : "yodefaultpropsbataako"
// }
 Button.propTypes ={
    nextContent : PropTypes.string.isRequired 
 }


export default Button 


 