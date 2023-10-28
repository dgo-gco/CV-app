
export const Animals = () => {
    let animals = [];

    if (!animals) {
      return <div>Loading...</div>;
    }
  
    if (animals.length === 0) {
      return <div>There are no animals in the list!</div>;
    }
  

  return (
    <ul>
      {animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  )
}
