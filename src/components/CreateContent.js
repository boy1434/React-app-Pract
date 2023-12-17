
function CreateContent(props) {
  console.log('Content render');
    return (
      <article>
        <h2>Create</h2>
        
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
            alert('submit');
          }.bind(this)}
        >
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="Title">
            </input>
          </p>

          <p>
            <textarea 
              name="desc"
              placeholder="desscription">
              </textarea>
          </p>

          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
      
    )
  }

  export default CreateContent;