import React,{Component} from "react";



const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1"
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1"
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5"
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2"
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5"
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4"
  }
];

const users = {
  1: {
    id: 1,
    name: "Jane Jones",
    userName: "coder"
  },
  2: {
    id: 2,
    name: "Matthew Page",
    userName: "mpage"
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123"
  },
  4: {
    id: 3,
    name: "John Doe",
    userName: "user123"
  },
  5: {
    id: 5,
    name: "Lauren Johnson",
    userName: "user123"
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123"
  }
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1"
  },
  2: {
    id: 2,
    name: "Selma"
  },
  3: {
    id: 3,
    name: "Million Dollar Baby"
  },
  4: {
    id: 4,
    name: "Forrest Gump"
  },
  5: {
    id: 5,
    name: "Get Out"
  }
};




class App extends Component {
  render() {
    return (
      <>
          <h2>How Popular is Your Favorite Movie?james</h2>

        { Object.values(movies).map(m => 
          <div>
            
            <h3>{m.name}</h3>
           
            <UserList movieID={m.id} users={users} profiles={profiles} />
          </div>
      )}
      </>
    );
  }
}



class UserList extends Component {
  render() {
    
    const { movieID} = this.props;
    const filteredProfiles = profiles.filter(
      profile => Number(profile.favoriteMovieID) === movieID
    );

    // console.log(filteredProfiles);
    if (!filteredProfiles || filteredProfiles.length === 0) {
      return <p>None of the current users liked this movie</p>;
    }


    return (
      <>
        <p>Liked by:</p>
        <ul>
          {filteredProfiles.map(profile => (
            <li key={profile.userID}>{users[profile.userID].name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;

