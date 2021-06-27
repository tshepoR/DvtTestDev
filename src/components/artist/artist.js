import React, { Component } from "react";
import { connect } from "react-redux";
import { getDefaultAristList, getProfile } from "../../redux/actions";
import axios from "axios";

class Artist extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchArtistName: "",
      };
   }
   async componentDidMount() {
      //just get any artist in b caharacter search to avoid blank screen
      this.props.dispatch(getDefaultAristList("b"));
   }
   search = (e) => {
      this.setState({ searchArtistName: e.target.value });
      this.props.dispatch(getDefaultAristList(e.target.value));
   };

   viewProfile = async (artist) => {
      debugger;
      const limit5 = artist.tracklist.replace("50", "5");
      const data = await axios.get(limit5, {
         headers: {
            "Access-Control-Allow-Origin": "*",
         },
      });
   };
   renderArtistList = () => {
      debugger;
      const { artistList } = this.props;
      if (!artistList) return;

      return (
         <div className="row">
            {artistList.map((item, index) => {
               return (
                  <div
                     className="col-md-4"
                     key={index}
                     style={{ marginTop: "6px" }}
                  >
                     <div className="card"></div>
                     <img
                        style={{ width: "50%" }}
                        className="card-img-top"
                        src={item.artist.picture}
                        alt="Card image"
                     ></img>
                     <div className="card-body">
                        <h4 className="card-title">{item.artist.name}</h4>
                        <p className="card-text">54 Fans</p>
                        <a
                           style={{ cursor: "pointer" }}
                           onClick={() => this.viewProfile(item.artist)}
                           className="btn btn-primary"
                        >
                           See Profile
                        </a>
                     </div>
                  </div>
               );
            })}
         </div>
      );
   };
   renderTopTracks = () => {
      //display list of tracks
      return (
         <div>
            <ul class="list-group">
               <li className="list-group-item">First item</li>
               <li className="list-group-item">Second item</li>
               <li className="list-group-item">Third item</li>
            </ul>
         </div>
      );
   };
   renderrenderArtistListProfile = (artistData) => {
      return (
         <div className="row">
            <div className="col-md-6" style={{ marginTop: "6px" }}>
               <div className="card"></div>
               <img
                  style={{ width: "50%" }}
                  className="card-img-top"
                  src={artistData.artist.picture}
                  alt="Card image"
               ></img>
               <div className="card-body">
                  <h4 className="card-title">{artistData.artist.name}</h4>
                  <p className="card-text">54 Fans</p>
                  <a href="#" className="btn btn-primary">
                     See Profile
                  </a>
               </div>
            </div>
            <div className="col-md-6">
               {artistData && this.renderTopTracks()}
            </div>
         </div>
      );
   };
   renaderSearchForm = () => {
      return (
         <div>
            <form>
               <div className="form-group">
                  <label htmlFor="search">Search</label>
                  <input
                     type="text"
                     className="form-control"
                     id="search"
                     placeholder=""
                     name="artistName"
                     value={this.state.searchArtistName}
                     onChange={this.search}
                  />
               </div>
            </form>
         </div>
      );
   };
   render() {
      const { error } = this.props;
      if (error)
         return (
            <div className="alert alert-danger" role="alert">
               An unexpected error occured.
            </div>
         );
      return (
         <div className="container">
            <header>
               <h3>Deezer</h3>
            </header>
            {this.renaderSearchForm()}
            {this.renderArtistList()}
         </div>
      );
   }
}
const mapStateToPros = (state) => {
   debugger;
   return {
      artistList: state.artist.artitsList.data,
      error: state.artist.error,
   };
};
export default connect(mapStateToPros)(Artist);
