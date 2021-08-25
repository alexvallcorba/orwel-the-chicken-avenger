import React from "react";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./CharacterDetails.css";
import { motion } from "framer-motion";

function CharacterDetails(props) {
  const { id } = useParams();
  const history = useHistory();

  const character = props.characters.find((character) => character.id === id);
  console.log(character);

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${character.id}`, config);
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
    history.push("/");
  };

  return (
    <div className="details-container">
      <div id="name-image">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 230,
            damping: 100,
          }}
        >
          <img
            class="character-image"
            id="image"
            src={character.fields.image}
            alt=""
          />
        </motion.div>

        <h1 className="detailsName">{character.fields.name}</h1>
      </div>
      <div className="detailsFields">
        <p>
          Type:
          {character.fields.type}
        </p>
        <br />
        <p>
          Role:
          {character.fields.role}
        </p>
        <br />
        <p>
          Strengths:
          {character.fields.strengths}
        </p>
        <br />
        <p>
          Weaknesses:
          {character.fields.weaknesses}
        </p>
        <br />
        <p>
          Location:
          {character.fields.location}
        </p>
        {character.fields.mainCharacter !== "true" ? (
          <img
            className="trashCan"
            src="https://i.imgur.com/EArYeyj.png"
            onClick={handleDelete}
          />
        ) : null}
      </div>
    </div>
  );
}

export default CharacterDetails;
