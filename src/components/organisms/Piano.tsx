import * as Tone from "tone";
import styled from "@emotion/styled";

const PianoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
  position: relative;
`;

const Key = ({note, shownNote, type}: {note: string; type: string, key: number, shownNote: string;}) => {
    const synth = new Tone.AMSynth().toDestination();
    const playNote = () => {
        synth.triggerAttackRelease(note, "8n");
    }
    return (
        <StyledKey onClick={playNote} type={type}>
            {note}
        </StyledKey>
    )   
}

const StyledKey = styled.div<{ type?: string }>`
  width: 40px;
  height: 200px;
  margin: 0 2px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  ${(props) =>
        props.type === "black" &&
        `
    // width: 30px;
    // height: 140px;
    background-color: black;
    // position: absolute;
    // z-index: 2;
    // margin-left: -15px;
    // margin-right: -15px;
  `}

  ${(props) =>
        props.type === "white" &&
        `
    background-color: white;
    z-index: 1;
  `}
`;

const Piano = () => {
    const keys = [
        { key: "C", className: "white", note: "C3" },
        { key: "C#", className: "black", note: "C#3" },
        { key: "D", className: "white", note: "D3" },
        { key: "D#", className: "black", note: "D#3" },
        { key: "E", className: "white", note: "E3" },
        { key: "F", className: "white", note: "F3" },
        { key: "F#", className: "black", note: "F#3" },
        { key: "G", className: "white", note: "G3" },
        { key: "G#", className: "black", note: "G#3" },
        { key: "A", className: "white", note: "A4" },
        { key: "A#", className: "black", note: "A#4" },
        { key: "B", className: "white", note: "B4" },
        { key: "C", className: "white", note: "C4" },
        { key: "C#", className: "black", note: "C#4" },
        { key: "D", className: "white", note: "D4" },
        { key: "D#", className: "black", note: "D#4" },
        { key: "E", className: "white", note: "E4" },
        { key: "F", className: "white", note: "F4" },
        { key: "F#", className: "black", note: "F#4" },
        { key: "G", className: "white", note: "G4" },
        { key: "G#", className: "black", note: "G#4" },
        { key: "A", className: "white", note: "A5" },
        { key: "A#", className: "black", note: "A#5" },
        { key: "B", className: "white", note: "B5" },
    ];

    return (
        <PianoWrapper>
            {keys.map(({key, className, note}, index) => (
                <Key key={index} type={className} note={note} shownNote={key}>
                </Key>
            ))}
        </PianoWrapper>
    );
};

export {Piano};