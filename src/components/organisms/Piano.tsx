import * as Tone from "tone";
import { useState } from "react";
import styled from "@emotion/styled";

    const notes = [
        { note: "C4" },
        { note: "C#4" },
        { note: "D4" },
        { note: "D#4" },
        { note: "E4" },
        { note: "F4" },
        { note: "F#4" },
        { note: "G4" },
        { note: "G#4" },
        { note: "A4" },
        { note: "A#4" },
        { note: "B4" },
        { note: "C5" },
        { note: "C#5" },
        { note: "D5" },
        { note: "D#5" },
        { note: "E5" },
        { note: "F5" },
        { note: "F#5" },
        { note: "G5" },
        { note: "G#5" },
        { note: "A5" },
        { note: "A#5" },
        { note: "B5" },
        { note: "C6" },
    ];

const PianoWrapper = styled.div<{open: boolean}>`
  display: flex;
  justify-content: center;
  align-items: top;
  padding: 20px;
  transition: height 1s linear;
  height: ${({open}) => (open ? "200px" : "0px")};
`;

const Key = styled.div<{isBlack: boolean}>`
  width: 40px;
  height: ${(props) => (props.isBlack ? "150px" : "200px")};
  margin: 0 2px;
  background-color: ${(props) => (props.isBlack ? "black" : "white")};
  border: 1px solid #000;
  z-index: ${(props) => (props.isBlack ? 2 : 1)};
  margin-left: ${(props) => (props.isBlack ? "-20px" : "0")};
  margin-right: ${(props) => (props.isBlack ? "-20px" : "0")};
  cursor: pointer;

  &:active {
    background-color: ${(props) => (props.isBlack ? "#333" : "#ddd")};
  }
    align-content: end;
`;

const NoteLabel = styled.span<{ isBlack: boolean }>`
  margin-top: auto;
  font-size: 0.8rem;
  color: ${(props) => (props.isBlack ? "white" : "black")};
`;

const Piano = () => {
    const [open, setOpen] = useState(false);

    const togglePiano = () => {
        setOpen(!open);
    }

    const playNote = (note: string) => {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(note, "8n");
    };

    return (
        <>
        <button onClick={togglePiano}>{open ? "Close Piano" : "Open Piano"}</button>
        <PianoWrapper open={open}>
            {notes.map((key, index) => (
                <Key
                    key={index}
                    isBlack={key.note.includes("#")}
                    onClick={() => playNote(key.note)}
                >
                    <NoteLabel isBlack={key.note.includes("#")}>{key.note}</NoteLabel>
                </Key>
            ))}
        </PianoWrapper>
        </>
    );
};

export {Piano};