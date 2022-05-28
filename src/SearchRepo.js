import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";
import NavBar from "./NavBar";
import Favourites from "./Favourites";
import { Link } from "react-router-dom";

const Search = ({ onFilterRepo }) => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState();
  const [fav, setFav] = useState([]);

  // useEffect(() => {
  //   const getRepos = async() => {
  //     try {
  //       const repoArr = await axios.get("http://dummy.restapiexample.com/api/v1/employees");
  //       setRepos(repoArr.data.data);
  //     }
  //     catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   getRepos();

  // useEffect(() => {
  //   const getRepos = async() => {
  //     try {
  //       const repoArr = await axios.get(`https://api.github.com/users/${searchTerm}/repos`);
  //       console.log(repoArr);
  //       setRepos(repoArr.data);
  //     }
  //     catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   getRepos();
  // }, [])

  useEffect(() => {
    // axios(`https://api.github.com/users/${searchTerm}/repos`)
    // .then(response => {
    // console.log("..."+response.data)
    // setAllData(response.data);
    // setFilteredData(response.data);
    // })
    // .catch(error => {
    // console.log('Error getting fake data: ' + error);
    // })
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    setSearchTerm(value);

    let result = [];
    axios(`https://api.github.com/users/${value}/repos`)
      .then((response) => {
        console.log("..." + response.data[0].name);
        console.log(response);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });

    result = allData.filter((data) => {
      return data.title.search(value) != -1;
    });

    setFilteredData(result);
  };

  const handleFavourite = (favRepo) => {
    setFav((previousState) => [...previousState, { name: favRepo, id: v4() }]);
  };

  return (
    <>
      <div className="mt-8 ml-5">
        {/* <Link to={{pathname: "/favourites", state: fav}} /> */}
        <NavBar />
        <label className="text-rose-600">Search: </label>

        {/* <input type="text" onChange={(event) =>handleSearch(event)} /> */}
        <input
          type="text"
          name="uname"
          onChange={(event) => handleSearch(event)}
          className="border-2 border-rose-600 ..."
        />
      </div>
      <br />
      <div>
        {filteredData.map((value, index) => {
          console.log(value);
          return (
            <div key={value.id}>
              <div className="mt-8">
                <div className="float-left w-2/3">
                  <h1 className=" bg-rose-600 w-100 text-zinc-100 text-lg ... ml-10 w-100">
                    {" "}
                    {value.name}{" "}
                  </h1>
                  <div className="ml-9">
                    <p className="text-left">URL:{value.git_url}</p>
                    <p className="text-left">Created At:{value.created_at}</p>
                    <p className="text-left">Updated At:{value.updated_at}</p>
                    <p className="text-left">Forks count:{value.forks_count}</p>
                  </div>
                </div>
                <div className="float-right w-1/3">
                  <button
                    className=" bg-rose-300 shadow-lg shadow-black ... mr-10 mt-10 mb-8"
                    onClick={() => handleFavourite(value)}
                  >
                    Add to favourite
                  </button>

                  <Link
                    to={{
                      pathname: "/Favourites",
                      state: {
                        results: {fav} ,
                      }
                    }}
                  >
                    <button
                      className=" bg-rose-300 shadow-lg shadow-black ... mr-10 mt-10 mb-8">
                      Go to Favourites
                    </button>
                  </Link>
                </div>
                <br /> <br />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
