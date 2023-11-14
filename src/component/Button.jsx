import  "../styles/button.css"

const Button = (props) => {
  return (
    <button onClick={props.onclick} className={props.className}>
      {props.title}
    </button>
  );
};

export default Button;
