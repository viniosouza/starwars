import React, { Component } from "react";
import './styles/Demo.scss'
class Demo extends Component {
  render() {
    return (
      <div class="starwars-demo">
        <img
          src="//cssanimation.rocks/demo/starwars/images/star.svg"
          alt="Star"
          class="star"
        />
        <img
          src="//cssanimation.rocks/demo/starwars/images/wars.svg"
          alt="Wars"
          class="wars"
        />
        <h2 class="byline" id="byline">
          The Force Awakens
        </h2>
      </div>
    );
  }
}
export default Demo;
