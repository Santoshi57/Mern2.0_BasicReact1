import PropTypes from 'prop-tyoes'


//const Button = (props)=>{
  //  console.log(props) 
    //return (
      //  <>
        
        //<button>{this.props.buttonContent}</button>
        //<button>{this.props.nextContent}</button>

        //</>
    //)
//}

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
 Button.PropTypes ={
    nextContent : PropTypes.string.isRequire 
 }


export default Button 


 