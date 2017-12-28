import React, { Component } from "react";
import "./styles/CardList.scss";
import { PlusButton } from "../Button";
import { Link } from "react-router-dom";

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpened: false
    };

    this.modalToggle = this.modalToggle.bind(this);
  }

  modalToggle() {
    this.setState({ modalOpened: !this.state.modalOpened });
  }

  render() {
    const coverClass = this.state.modalOpened
      ? "modal-cover modal-cover-active"
      : "modal-cover";
    const containerClass = this.state.modalOpened
      ? "modal-container modal-container-active"
      : "modal-container";
    return (
      <div className="Card">
        {/* Modal */}
        <div className={containerClass}>
          <div className="modal-header">
          </div>
          <div className="modal-body">
            <h1>{this.props.name}</h1>
            <p>
              {this.props.population
                ? this.props.population
                : this.props.height}
            </p>
            <p>
              {this.props.diameter ? this.props.diameter : this.props.gender}
            </p>
            <p>
              {this.props.climate ? this.props.climate : this.props.birth_year}
            </p>
            <p>
              {this.props.gravity ? this.props.gravity : this.props.hair_color}
            </p>
            <p>{this.props.films ? this.props.films : this.props.skin_color}</p>

            <Link to="#">
              <p>{this.props.homeworld ? this.props.homeworld : null}</p>
            </Link>
          </div>
          <div className="modal-footer" />
        </div>

        <div className={coverClass} onClick={this.modalToggle} />
        {/* PlussButton */}
        <div className="Card--hoverOverlay">
          <button className="plusButton" onClick={this.modalToggle}>
            <PlusButton />
          </button>
        </div>
        <img
          className="Card-star"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png"
          alt="starwars"
        />
        <div className="Card-Container">
          <h4> {this.props.name}</h4>
          <p>
            {this.props.population ? this.props.population : this.props.height}
          </p>
        </div>
      </div>
    );
  }
}
export default CardList;
