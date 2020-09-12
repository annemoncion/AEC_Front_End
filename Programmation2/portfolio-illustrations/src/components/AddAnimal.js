import React from "react";
import FormAddAnimal from "./FormAddAnimal";

function AddAnimal(props) {
  return (
    <>
      <FormAddAnimal history={props.history} />
    </>
  );
}

export default AddAnimal;