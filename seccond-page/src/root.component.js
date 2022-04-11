export default function Root(props) {
 return (
    <div style={{width: '300px', height: '100px', border: '1px solid green'}}>
      {props.name} is mounted!
    </div>
  );
}
