import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [userInput, addUserInput] = useState({ title: "", content: "" });
  const [isClicked, setClicked] = useState(false);
  // let isClicked = false;

  function handletTitle(event) {
    const inputType = event.target.name;
    const inputValue = event.target.value;

    addUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputType]: inputValue,
      };
    });
  }

  return (
    <div>
      <form className="create-note">
        {isClicked && (
          <input
            name="title"
            placeholder="Title"
            onChange={handletTitle}
            value={userInput.title}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          onChange={handletTitle}
          value={userInput.content}
          onClick={() => {
            console.log("Hello");
            setClicked(true);
          }}
        />
        <Zoom in={isClicked}>
          <Fab
            onClick={(event) => {
              props.handleNotes(userInput);
              addUserInput({ title: "", content: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
