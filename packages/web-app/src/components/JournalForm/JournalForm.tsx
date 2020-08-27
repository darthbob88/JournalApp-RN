import React, { useState, useContext, FormEvent } from "react";
// import { Question } from "../../model/Question";
import styles from "./JournalForm.module.css";
import JournalEntry from "../../models/JournalEntry";
import { AuthContext } from "../../models/AuthService";
import { addEntry } from "../../models/JournalService";

type JournalProps = {};
export const JournalComponent: React.FunctionComponent<JournalProps> = () => {
  const AuthService = useContext(AuthContext);

  const [thoughts, setThoughts] = useState("");
  const [exercise, setExercise] = useState("");
  const [gratefulFor, setGratefulFor] = useState("");
  const [tomorrow, setTomorrow] = useState("");

  const submit = (event: FormEvent) => {
    const newEntry: JournalEntry = {
      thoughts,
      exercise,
      gratefulFor,
      tomorrow,
      timeStamp: Date.now(),
    };
    addEntry(newEntry);
   event.preventDefault();
  };
  return (
    <form className={styles.newEntry}>
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
      <label>
        Exercise I did today:
        <textarea
          rows={6}
          name="exercise"
          value={exercise}
          onChange={(event) => setExercise(event?.target.value)}
          placeholder="Exercise I did today"
        />
      </label>
      <label>
        What I'm grateful for today:
        <textarea
          rows={6}
          name="gratefulFor"
          value={gratefulFor}
          onChange={(event) => setGratefulFor(event?.target.value)}
          placeholder="What I'm grateful for today"
        />
      </label>
      <label>
        What am I looking forward to tomorrow?
        <textarea
          rows={6}
          name="tomorrow"
          value={tomorrow}
          onChange={(event) => setTomorrow(event?.target.value)}
          placeholder="What am I looking forward to tomorrow?"
        />
      </label>
      <button
        onClick={(event) => submit(event)}
        disabled={AuthService.currentUser == null}
      >
        Add new journal entry
      </button>
    </form>
  );
};
