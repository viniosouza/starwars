import React, { PureComponent } from "react";
import "./styles/Home.scss";
import Demo from "../../components/Demo/Demo";

class Home extends PureComponent {
  render() {
    //     /                | /   \    |   _  \
    //     |   (-----|  |----`/  ^  \   |  |_)  |
    //      \   \    |  |    /  /_\  \  |      /
    // .-----)   |   |  |   /  _____  \ |  |\  \-------.
    // |________/    |__|  /__/     \__\| _| `.________|
    //  ____    __    ____  ___     .______    ________.
    //  \   \  /  \  /   / /   \    |   _  \  /        |
    //   \   \/    \/   / /  ^  \   |  |_)  ||   (-----`
    //    \            / /  /_\  \  |      /  \   \
    //     \    /\    / /  _____  \ |  |\  \---)   |
    //      \__/  \__/ /__/     \__\|__| `._______/

    return (
      <section className="Home">
        <Demo />
        <div className="Home-container">
          <audio
            autoplay
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/244725/MainTitle.ogg"
          >
            O seu navegador não suporta o elemento <code>audio</code>.
          </audio>
        </div>
      </section>
    );
  }
}
export default Home;
