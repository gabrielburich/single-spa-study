export default function Root(props) {
  return (
    <div style={{width: '300px', height: '100px', border: '1px solid black'}}>
      {props.name} is mounted! banana
    </div>
  );
}
