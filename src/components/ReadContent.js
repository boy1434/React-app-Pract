
function ReadContent(props) {
  console.log('Content render');
    return (
      <header>
      <h2>
        {props.title}
      </h2>
      {props.desc}
      </header>
      
    )
  }

  export default ReadContent;