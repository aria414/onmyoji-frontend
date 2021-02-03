import React from "react";

const Form = (props) => {
  //STATE FOR THE FORM

  const [formData, setFormData] = React.useState(props.onmyoji)
  console.log("Form - props ", props)

  // ========== FUNCTIONS ==========
  // This handle submit function will call the handle submit from parent.. which is to crete
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  // -- Everytime you tye, you see consolelog changes. When finished typing, the setFormData will update state to current form state. So when you submit, it will pass the info back to App to handle. ---
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label for="clan">Clan</label>
          <input
            type="text"
            name="clan"
            value={formData.clan}
            onChange={handleChange}
          />
        </div>

        <div>
          <label for="level">Level</label>
          <input
            type="number"
            name="level"
            value={formData.level}
            onChange={handleChange}
          />
        </div>

        <div>
          <label for="shikigamis">Enter a Shikigami ID</label>
          <input
            type="text"
            name="shikigamis"
            value={formData.shikigamis}
            onChange={handleChange}
          />
        </div>

        <input type="submit" value={props.label} />
      </form>
    </div>

  )
}

export default Form;
