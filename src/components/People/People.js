import React from "react";

const People = ({people, isLoading, error}) => {
  return isLoading ? <h2>Loading...</h2>
  :
  error            ? <h2>An error occurred</h2>
  : 
  (
      <ul>
          {people.map(person => <li key={person.created}>{person.name}</li>)}
      </ul>
  )
}

export default People;
