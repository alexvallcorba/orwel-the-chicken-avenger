import React from "react";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function CharacterDetails(props) {
  const { id } = useParams();
  const history = useHistory();

  const character = props.characters.find((character) => character.id === id);
  console.log(character);



  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${character.id}`, config);
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
    history.push("/")
  };
  

  return (
    <div>
      <img
        class="character-image"
        id="image"
        src={character.fields.image}
        alt=""
      />
      <h1 className="detailsName">{character.fields.name}</h1>
      <div className="details">
        <p>Type:
          {character.fields.type}</p>
      <p>Role:
          {character.fields.role}</p>
        <p>Strengths:
          {character.fields.strengths}</p>
        <p>Weaknesses:
          {character.fields.weaknesses}</p>
        <p>Location:
          {character.fields.location}</p>
        {character.fields.mainCharacter !== "true" ? <button onClick={handleDelete}>Delete</button>
         : null}
      </div>
    </div>
  );
}

export default CharacterDetails;
