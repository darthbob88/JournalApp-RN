import React, { useState } from "react";
// import { Question } from "../../model/Question";
import styles from "./Question.module.css";
import JournalEntry from "../../models/JournalEntry";

type JournalProps = {};
export const JournalComponent: React.FunctionComponent<JournalProps> = ({}) => {
  const [thoughts, setThoughts] = useState("");
  const [exercise, setExercise] = useState("");
  const [gratefulFor, setGratefulFor] = useState("");
  const [tomorrow, setTomorrow] = useState("");

  const submit = () => {
    const newEntry: JournalEntry = {
      thoughts,
      exercise,
      gratefulFor,
      tomorrow,
      timeStamp: Date.now(),
    };
  };
  return (
    <form>
      <label>
        Thoughts of the day:
        <textarea
          rows={6}
          name="thoughts"
          value={thoughts}
          onChange={(event) => setThoughts(event?.target.value)}
          placeholder="Thoughts of the day"
        />
      </label>
    </form>
  );
};
