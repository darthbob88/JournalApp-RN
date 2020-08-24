/**
 * A basic type to contain journal entries.
 * @property {string} thoughts Thoughts of the day.
 * @property {string} exercise Exercise for the day.
 * @property {string} gratefulFor What I'm grateful for today.
 * @property {string} tomorrow What I'm looking forward to for tomorrow.
 * @property {number} timeStamp When the entry was made.
 */
//TODO: Get this integrated with some documentation generator
export default interface JournalEntry {
  thoughts: string;
  exercise: string;
  gratefulFor: string;
  tomorrow: string;
  timeStamp: number
}