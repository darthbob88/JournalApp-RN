import React, { useState, useContext, useEffect, Fragment } from "react";
// import styles from "./JournalForm.module.css";
import JournalEntry from "../../models/JournalEntry";
import { AuthContext } from "../../models/AuthService";
import { fetchAllEntries } from "../../models/JournalService";
import { Redirect } from "react-router-dom";
import { ROUTES } from "../../routes";


export const FullJournalComponent: React.FunctionComponent<{}> = () => {
  const AuthService = useContext(AuthContext);

  
  const [allEntries, setAllEntries] = useState<JournalEntry[]>();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllEntries();
      setAllEntries(result);
    };
    fetchData();
  }, []);

  if (AuthService.currentUser == null) return <Redirect to={ROUTES.SIGN_IN} />
 
  return (
      <Fragment>
    <h1>Journal</h1>
    <ul>
        {allEntries?.map(entry => <li key={entry.timeStamp}>
            <p className="thoughts">{entry.thoughts}</p>
            <p className="gratefulFor">{entry.gratefulFor}</p>
            <p className="exercise">{entry.exercise}</p>
            <p className="tomorrow">{entry.tomorrow}</p>
        </li>)}
    </ul></Fragment>
  );
};
