
function CreateContent(props) {
  console.log('Content render');
    return (
      <header>
      <h2>
        Create
      </h2>
      {props.desc}
      </header>
      
    )
  }

  export default CreateContent;