import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import "./AddCharacter.css";
import { motion } from "framer-motion";
import Zoom from "../services/sounds/zoom.wav";

function AddCharacter(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [role, setRole] = useState("");
  const [strengths, setStregths] = useState("");
  const [weaknesses, setWeaknesses] = useState("");
  const [location, setLocation] = useState("");

  const params = useParams();
  const history = useHistory();
  // let audio = new Audio(Zoom);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCharacter = {
      name,
      role,
      type,
      strengths,
      weaknesses,
      location,
      image: "https://i.imgur.com/FZyBQ1S.png",
      spray: "https://i.imgur.com/2IFjKrJ.png",
    };
    history.push("/");
    // audio.play();

    await axios.post(baseURL, { fields: newCharacter }, config);
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
  };

  return (
    <div className="boxContainer">
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
          id=""
          src="https://i.imgur.com/liRA4fH.png"
          className="buble"
          alt="buble-graffiti "
        />
      </motion.div>

      <form className="formBox" onSubmit={handleSubmit}>
        <input
          className="inputSize"
          placeholder="New character's name"
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <input
          className="inputSize"
          placeholder="Type"
          type="text"
          id="type"
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
        <br />
        

        <input
          className="inputSize"
          placeholder="Hero or Villain"
          type="text"
          id="role"
          onChange={(e) => setRole(e.target.value)}
          value={role}
          required 
        />
        <br />
        <input
          className="inputSize"
          placeholder="Location"
          type="text"
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <br />
        <textarea
          className="inputSize"
          placeholder="Character's Strengths"
          id="strengths"
          onChange={(e) => setStregths(e.target.value)}
          value={strengths}
        />
        <br />
        <textarea
          className="inputSize"
          placeholder="Character's Weaknesses"
          id="weaknesses"
          onChange={(e) => setWeaknesses(e.target.value)}
          value={weaknesses}
        />
        <br />
        <input
          type="image"
          border="0"
          // onClick={handleSubmit}
          className="crack"
          src="https://i.imgur.com/1Va0dQb.png"
          alt="Cracked egg"
        />
        <br />
      </form>
    </div>
  );
}
export default AddCharacter;
