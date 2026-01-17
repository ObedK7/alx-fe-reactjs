function UserDetails(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>{props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
}

export default UserDetails;
