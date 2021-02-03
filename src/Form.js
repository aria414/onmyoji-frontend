import React from "react";

const Form = (props) => {
  //STATE FOR THE FORM

  //FUNCTIONS
    // This handle submit function will call the handle submit from parent.. which is to crete


  return (
    <form >
      <input
        type="text"
        name="name"
        value="Yorimitsu"
        // onChange={handleChange}
      />
      <input
        type="text"
        name="clan"
        value="Minamoto"
        // onChange={handleChange}
      />
      <input
        type="number"
        name="level"
        value="60"
        // onChange={handleChange}
      />
      <input type="submit" value="submit" />
    </form>
  )
}

export default Form;
