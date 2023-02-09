export default function Buttons(props) {
  return (
    <div>
      <button onClick={props.previous}>Previous</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
}
