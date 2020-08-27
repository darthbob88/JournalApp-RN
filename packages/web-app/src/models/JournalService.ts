import { databaseRef } from "../firebase";
import JournalEntry from "./JournalEntry";
//TODO: Turn this into context so I can make it both automatically updated and pull it only once.
//TODO: Turn this into a real-time watcher, so it gets automatically updated.
//TODO: Refactor this into a common service so i can use it with both the web and phone apps.
export const fetchAllEntries = async (): Promise<JournalEntry[]> => {
  let listOfIdeas: JournalEntry[] = [];
  const querySnapshot = await databaseRef.collection("journal").get();
  listOfIdeas = querySnapshot.docs.map(doc => doc.data() as JournalEntry);
  return listOfIdeas;
};
//TODO: Should this return a single idea that we append to the state, or the entire updated state?
export const addEntry = async (newIdea: JournalEntry): Promise<JournalEntry> => {
  const docRef = await databaseRef
    .collection("journal")
    .add(newIdea);
  const entry = await docRef.get();
  return entry.data() as JournalEntry;
};
export const fetchSpecificIdea = async (ideaID: string): Promise<JournalEntry> => {
  //TODO: Maybe I should abstract this to just ideasDB so I don't have to keep writing it out.
  const docRef = databaseRef.collection("journal").doc(ideaID);
  const ideaSnapshot = await docRef.get();

  if (ideaSnapshot.exists) {
    // console.log("Document data:", ideaSnapshot.data());
    return ideaSnapshot.data() as JournalEntry;
  } else {
    // doc.data() will be undefined in this case
    // console.log("No such document!");
    throw new Error("No such document!");
  }
};