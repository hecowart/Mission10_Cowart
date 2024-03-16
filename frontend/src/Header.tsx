import fish from './catfish.jpeg';

function Header(props: any) {
  return (
    <header className="row navbar navbar-dark bg-dark">
      <br />
      <div className="col-4">
        <img width="300" src={fish} className="logo" alt="logo" />
      </div>
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
        <br />
        <h4 className="text-white">
          This site will change your life! Below, you will find a table with the
          information of bowlers who play for the Marlins or the Sharks! Enjoy!
          Stay striking and tug some slugs!
        </h4>
      </div>
      <br />
    </header>
  );
}

export default Header;
