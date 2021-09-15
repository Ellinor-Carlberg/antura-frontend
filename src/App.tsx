import React from 'react';
import './App.css';

type Props = {
  onClick: () => void;
};

const GetUserButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Hämta användare
    </button>
  );
};
function App() {

  const handleClick = () => {
    alert("Hello World");
  };
  
  return (
    <div className="App">
      <GetUserButton onClick={handleClick} />
    </div>
  );
}

export default App;


/* 
{"results":
  [
    {"gender":"male",
    "name":
      {"title":"Mr",
      "first":"Ronald",
      "last":"Lord"
      },
    "location":
      {"street":
        {"number":3813,
        "name":"Kingsway"
        },
      "city":"Portsmouth",
      "state":"Dorset",
      "country":"United Kingdom",
      "postcode":"UI4 0FF",
      "coordinates":
        {"latitude":"14.1890",
        "longitude":"-170.2003"
        },
      "timezone":
        {"offset":"+6:00",
        "description":"Almaty, Dhaka, Colombo"
        }
      },
    "email":"ronald.lord@example.com",
    "login":
      {"uuid":"d8c65a4b-227a-4fbe-ab1a-026a2216a0e8",
      "username":"beautifulostrich133",
      "password":"pilot",
      "salt":"lkDP0S5j",
      "md5":"c4f7e62d779f2e2522ce02028b918faa",
      "sha1":"312504bbaa52e1c619da64254930516c12f3605f","sha256":"0d8eb6813bac63edbf5605d4a67969e05f475bbce95580f792d30a421713a81e"
      },
    "dob":  
      {"date":"1952-09-21T23:35:29.868Z",
      "age":69 
      },
    "registered": 
      {"date":"2009-01-13T09:21:46.772Z",  
      "age":12
      },
    "phone":"0191 806 2981",
    "cell":"0738-757-629",
    "id":
      {"name":"NINO",
      "value":"OA 87 49 15 E"
      },
    "picture":
      {"large":"https://randomuser.me/api/portraits/men/63.jpg",
      "medium":"https://randomuser.me/api/portraits/med/men/63.jpg",
      "thumbnail":"https://randomuser.me/api/portraits/thumb/men/63.jpg"
      },
    "nat":"GB"
    }
  ],
  "info":
    {"seed":"c50561ecffbb3747",
    "results":1,
    "page":1,
    "version":"1.3"
    }
} */