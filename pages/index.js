import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Card from '../components/card'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Open Deli</title>
          <meta
            name="description"
            content="The food delivery alternative, empowering communities."
          />
          <meta property="og:title" content="Open Deli" />
          <meta
            property="og:description"
            content="The food delivery alternative, empowering communities."
          />
        </Head>
        <div className="home-navbar">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-branding">
              <img
                alt="image"
                src="/playground_assets/open-deli-200h.png"
                className="home-image"
              />
            </div>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav className="home-links">
                <a href="#Restaurant" className="home-link button">
                  <span>For Restaurants</span>
                </a>
                <a href="#Driver" className="home-link1 button">
                  <span>
                    <span>For Couriers</span>
                    <br></br>
                  </span>
                </a>
                <a href="#Customers" className="home-link2 button">
                  <span>
                    <span>For Consumers</span>
                    <br></br>
                  </span>
                </a>
                <button className="home-button button">Menu</button>
              </nav>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <img
                alt="image"
                src="/playground_assets/group%202084%5B1%5D.svg"
                className="home-hamburger"
              />
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-top">
                <div className="home-branding1">
                  <img
                    alt="image"
                    src="/playground_assets/open-deli-200h.png"
                    className="home-image01"
                  />
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M128 128h768v768h-768z"></path>
                  </svg>
                  <span className="home-text07">Remarkable</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <a href="#Restaurant" className="home-link3 button">
                  <span>For Restaurants</span>
                </a>
                <a href="#Driver" className="home-link4 button">
                  <span>For Couriers</span>
                </a>
                <a href="#Customers" className="home-link5 button">
                  For Consumers
                </a>
              </nav>
            </div>
          </header>
        </div>
        <header className="home-hero">
          <div className="home-content">
            <h1 className="home-title">
              The food delivery alternative, empowering communities.
            </h1>
            <span className="home-description">
              OpenDeli is the decentralized, open-source food delivery
              alternative that empowers communities.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <img
              alt="image"
              src="/playground_assets/line-300w.png"
              className="home-image02"
            />
          </div>
          <div className="home-image03">
            <video
              src="/playground_assets/open-deli-consumer.mp4"
              loop
              muted
              preload="auto"
              autoPlay
              playsInline
              className="home-video"
            ></video>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-image04"
            />
            <img
              alt="image"
              src="/playground_assets/food%20delivery_takeout-500h.png"
              className="home-image05"
            />
          </div>
        </header>
        <section className="home-mission">
          <h2 className="home-text10">
            <span>
              Be part of the decentralized revolution. Join the growing number
              of communities demanding more.
            </span>
            <br></br>
          </h2>
          <a href="#mission" className="home-link6 button">
            <span className="home-text13">Learn about our mission</span>
          </a>
        </section>
        <section className="home-improve">
          <div className="home-heading">
            <h2 className="home-text14">
              <span>More choice. More flexibility. More freedom.</span>
              <br></br>
            </h2>
            <p className="home-text17">
              <span>
                Our system provides a fair and open alternative that’s
                federated. Local businesses can break away from unfair
                treatment, excessive fees and have complete control over who
                they work with. With OpenDeli, local businesses set up shop on
                their terms in their best interests.
              </span>
              <br></br>
            </p>
          </div>
        </section>
        <section className="home-services">
          <h2 className="home-text20">Contribute your way</h2>
          <div className="home-cards">
            <div className="home-row">
              <div id="Driver" className="home-container01">
                <Card
                  Icon="/playground_assets/carprofile.svg"
                  Title="Drivers"
                  image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  image_src1="/playground_assets/courier.svg"
                  Description="OpenDeli gives drivers more freedom. Our decentralized, open-source software enables local businesses to cooperate in their best interests. What's more, our powerful system enables groups of drivers to become co-owners with companies, cooperatives and non-profit organizations. "
                  Description1="With OpenDeli, drivers can advocate for their rights at the local level. Local governments can also use our powerful software. Using OpenDeli, they can provide drivers with free services and ensure they receive fair pay."
                  rootClassName="card-root-class-name"
                ></Card>
              </div>
              <div id="Restaurant" className="home-container02">
                <Card
                  Icon="/playground_assets/hamburger.svg"
                  Title="Restaurants"
                  image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  image_src1="/playground_assets/restaurant.svg"
                  Description="OpenDeli’s system gives restaurants more control. With OpenDeli, local restaurants can create their own company. This lets local eateries work together and act in their best interests. "
                  Description1="Our software gives power back to restaurants. They can break away from the major food delivery services that only want to extract. OpenDeli enables restaurants to work in a way that benefits them best. We also enable restaurants to create shared ownership of delivery services. This way, restaurants have more say at the table and can work together for each other’s best interests."
                  rootClassName="card-root-class-name1"
                ></Card>
              </div>
              <div id="Customers" className="home-container03">
                <Card
                  Icon="/playground_assets/usersfour.svg"
                  Title="Consumers"
                  image_src1="/playground_assets/consumer.svg"
                  Description="Our software supports a decentralized future. With OpenDeli, customers support their communities with every order."
                  Description1="OpenDeli’s software empowers local businesses to create value-driven choices for their customers. Whatever their food preferences, users can align their values with their orders. By using OpenDeli, people support their communities every time they buy."
                  rootClassName="card-root-class-name2"
                ></Card>
              </div>
            </div>
          </div>
        </section>
        <section className="home-partners">
          <div className="home-content1">
            <h2 className="home-text21">Create a community</h2>
            <p className="home-text22">
              Unite foodies in your area - start your own community on Open Deli
              and savor the local flavors together
            </p>
          </div>
          <div className="home-partners-desktop">
            <div className="home-column">
              <div className="home-container04">
                <div className="partner-container">
                  <img
                    alt="image"
                    src="/playground_assets/takeout-box_1f961-200h.png"
                    className="partner-image"
                  />
                </div>
                <span className="home-text23">ORG</span>
              </div>
            </div>
            <div className="home-column01">
              <div className="home-container05">
                <div className="partner-container">
                  <img
                    alt="image"
                    src="/playground_assets/carrot_1f955-200h.png"
                    className="partner-image"
                  />
                </div>
                <span className="home-text24">ORG</span>
              </div>
              <div className="home-container06">
                <div className="partner-container">
                  <img
                    alt="image"
                    src="/playground_assets/flag-spain_1f1ea-1f1f8-200h.png"
                    className="partner-image"
                  />
                </div>
                <span className="home-text25">ORG</span>
              </div>
            </div>
            <div className="home-column02">
              <div className="home-container07">
                <div className="partner-container">
                  <img
                    alt="image"
                    src="/playground_assets/bacon_1f953-200h.png"
                    className="partner-image"
                  />
                </div>
                <span className="home-text26">ORG</span>
              </div>
              <div className="home-container08">
                <div className="partner-container">
                  <img
                    alt="image"
                    src="/playground_assets/red-apple_1f34e1-200h.png"
                    className="partner-image"
                  />
                </div>
                <span className="home-text27">ORG</span>
              </div>
              <div className="home-container09">
                <div className="partner-container">
                  <img
                    alt="image"
                    src="/playground_assets/unicorn_1f984-200h.png"
                    className="partner-image"
                  />
                </div>
                <span className="home-text28">ORG</span>
              </div>
            </div>
          </div>
          <div className="home-partners-mobile">
            <div className="home-row1">
              <div className="partner-container home-partner06">
                <img
                  alt="image"
                  src="/playground_assets/bacon_1f953-200h.png"
                  className="partner-image"
                />
              </div>
              <div className="partner-container home-partner07">
                <img
                  alt="image"
                  src="/playground_assets/carrot_1f955-200h.png"
                  className="partner-image"
                />
              </div>
              <div className="partner-container home-partner08">
                <img
                  alt="image"
                  src="/playground_assets/flag-united-states_1f1fa-1f1f8-200h.png"
                  className="partner-image"
                />
              </div>
            </div>
            <div className="home-column03"></div>
            <div className="home-column04">
              <div className="partner-container home-partner09">
                <img
                  alt="image"
                  src="/playground_assets/steaming-bowl_1f35c-200h.png"
                  className="partner-image"
                />
              </div>
              <div className="partner-container home-partner10">
                <img
                  alt="image"
                  src="/playground_assets/croissant_1f950-200h.png"
                  className="partner-image"
                />
              </div>
            </div>
            <div className="home-column05">
              <div className="partner-container home-partner11">
                <img
                  alt="image"
                  src="/playground_assets/takeout-box_1f961-200h.png"
                  className="partner-image"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="mission" className="home-banner">
          <div className="home-container10">
            <div className="home-header">
              <h2 className="home-title1">Mission</h2>
              <p className="home-description1">
                <span>
                  Introducing the future of food delivery: our open source and
                  federated app.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Choose from a wide range of local restaurants and food
                  providers while supporting small businesses and reducing
                  carbon emissions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Take control of your data and privacy with our decentralized
                  platform.
                </span>
              </p>
            </div>
          </div>
        </section>
        <section className="home-mission1"></section>
        <section className="home-galleries">
          <div className="home-gallery-desktop">
            <div className="home-column06">
              <img
                alt="image"
                src="/playground_assets/pexels-tim-douglas-6205761-1300w.jpg"
                className="home-image18"
              />
            </div>
            <div className="home-column07">
              <div className="home-row2">
                <div className="home-yellow">
                  <img
                    alt="image"
                    src="/playground_assets/opendeli-motocycle-yellow-bg-1300w.png"
                    className="home-image19"
                  />
                </div>
                <img
                  alt="image"
                  src="/playground_assets/pexels-norma-mortenson-4393667-1300w.jpg"
                  className="home-image20"
                />
              </div>
              <div className="home-row3">
                <img
                  alt="image"
                  src="/playground_assets/pexels-mikhail-nilov-6740517-500w.jpg"
                  className="home-image21"
                />
                <img
                  alt="image"
                  src="/playground_assets/opendeli-menu1-1300w.png"
                  className="home-image22"
                />
              </div>
            </div>
          </div>
          <div className="home-gallery-mobile">
            <div className="home-column08">
              <img
                alt="image"
                src="/playground_assets/pexels-tim-douglas-6205761-1300w.jpg"
                className="home-image23"
              />
              <img
                alt="image"
                src="/playground_assets/pexels-norma-mortenson-4393667-1300w.jpg"
                className="home-image24"
              />
            </div>
            <div className="home-column09">
              <div className="home-yellow1">
                <img
                  alt="image"
                  src="/playground_assets/opendeli-motocycle-yellow-bg-1300w.png"
                  className="home-image25"
                />
              </div>
              <img
                alt="image"
                src="/playground_assets/pexels-mikhail-nilov-6740517-500w.jpg"
                className="home-image26"
              />
              <div className="home-row4">
                <img
                  alt="image"
                  src="/playground_assets/opendeli-menu1-1300w.png"
                  className="home-image27"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-newsletter">
          <div className="home-header1">
            <h2 className="home-text36">Subscribe to our newsletter</h2>
            <p className="home-text37">
              Sign up for our newsletter to get the latest news!
            </p>
          </div>
          <div className="home-content2">
            <div className="home-email">
              <input
                type="text"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-submit">
                <img
                  alt="image"
                  src="/playground_assets/frame.svg"
                  className="home-image28"
                />
              </div>
            </div>
            <div className="home-notice">
              <span className="home-notice1">
                By subscribing, you accept to receive communications from
                Open-deli to your email address. 
              </span>
            </div>
          </div>
        </section>
        <Footer
          text11="Give us a star"
          text21="Follow us on Mastodon"
          image_src2="/playground_assets/githublogo1.svg"
          image_src11="/playground_assets/mastodon.svg"
          non_profit_logo="/playground_assets/hci-princeton-logomark-200h.webp"
          open_source_logo="/playground_assets/princeton-university-logo_freelogovectors.net_-200h.png"
          carbon_neutral_logo="/playground_assets/carbon-neutral.svg"
        ></Footer>
        <div>
          <DangerousHTML
            html={`<style>
    .partner-container:hover .partner-image{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(75deg) brightness(101%) contrast(102%);
    }
</style>`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1324px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            background-size: cover;
            justify-content: space-between;
            background-image: url('/playground_assets/open-deli-noise-bg-1400w.png');
          }
          .home-branding {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: auto;
            height: var(--dl-size-size-small);
            object-fit: cover;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
            background-color: transparent;
          }
          .home-link1 {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
            background-color: transparent;
          }
          .home-link2 {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
            background-color: transparent;
          }
          .home-button {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(18, 40, 33, 1);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
            border-left-width: 1px;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-hamburger {
            width: 100px;
            object-fit: cover;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: auto;
            display: flex;
            z-index: 100;
            position: fixed;
            transform: translateY(-100%);
            transition: 0.5s;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            background-color: #fff;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-branding1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image01 {
            width: 100px;
            object-fit: cover;
          }
          .home-icon {
            width: 7px;
            height: 7px;
          }
          .home-text07 {
            color: rgba(18, 40, 33, 1);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon2 {
            width: 34px;
            height: 34px;
          }
          .home-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-link3 {
            color: var(--dl-color-paperblack-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            text-decoration: none;
            background-color: rgb(18, 40, 33);
          }
          .home-link4 {
            color: var(--dl-color-paperblack-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            text-decoration: none;
            background-color: rgb(18, 40, 33);
          }
          .home-link5 {
            color: var(--dl-color-paperblack-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            text-decoration: none;
            background-color: rgb(18, 40, 33);
          }
          .home-hero {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 700px;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-content {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            position: relative;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-title {
            color: rgb(18, 40, 33);
            font-size: 72px;
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
            line-height: 92px;
          }
          .home-description {
            color: rgb(18, 40, 33);
            font-size: 24px;
            max-width: 600px;
            font-family: Lato;
            line-height: 36px;
          }
          .home-image02 {
            left: 0px;
            width: 240px;
            bottom: -410px;
            height: 330px;
            position: absolute;
            object-fit: cover;
          }
          .home-image03 {
            width: 720px;
            height: 700px;
            display: flex;
            overflow-x: hidden;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-video {
            width: auto;
            height: 100%;
            max-width: 380px;
          }
          .home-image04 {
            height: 100%;
            display: none;
            object-fit: cover;
          }
          .home-image05 {
            right: 127px;
            width: 317px;
            bottom: -122px;
            height: 295px;
            position: absolute;
            object-fit: cover;
          }
          .home-mission {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: 290px;
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-text10 {
            color: rgba(18, 40, 33, 1);
            font-size: 40px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
            line-height: 51px;
          }
          .home-link6 {
            color: var(--dl-color-green-900);
            text-decoration: none;
            background-color: var(--dl-color-green-100);
          }
          .home-text13 {
            line-height: 21px;
          }
          .home-improve {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 120px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text14 {
            color: rgb(18, 40, 33);
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 51px;
          }
          .home-text17 {
            color: rgb(18, 40, 33);
            font-size: 20px;
            max-width: 600px;
            text-align: center;
            font-family: Lato;
            line-height: 30px;
          }
          .home-services {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-text20 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 56px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .home-cards {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-row {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: stretch;
          }
          .home-container01 {
            display: flex;
            align-items: stretch;
          }
          .home-container02 {
            display: flex;
            align-items: stretch;
          }
          .home-container03 {
            display: flex;
            align-items: stretch;
          }
          .home-partners {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 130px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: 0px;
          }
          .home-content1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text21 {
            color: #122821;
            font-size: 56px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text22 {
            color: rgb(18, 40, 33);
            font-size: 20px;
            max-width: 300px;
            font-family: Lato;
            line-height: 30px;
          }
          .home-partners-desktop {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-column {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container04 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text23 {
            color: var(--dl-color-paperblack-white);
            padding: var(--dl-space-space-halfunit);
            z-index: 3;
            font-style: normal;
            margin-top: -24px;
            text-align: center;
            font-family: Roboto Flex;
            font-weight: 400;
            border-radius: var(--dl-radius-radius-radius8);
            letter-spacing: 1px;
            text-transform: uppercase;
            background-color: var(--dl-color-paperblack-400);
          }
          .home-column01 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container05 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text24 {
            color: var(--dl-color-paperblack-white);
            padding: var(--dl-space-space-halfunit);
            z-index: 3;
            font-style: normal;
            margin-top: -24px;
            text-align: center;
            font-family: Roboto Flex;
            font-weight: 400;
            border-radius: var(--dl-radius-radius-radius8);
            letter-spacing: 1px;
            text-transform: uppercase;
            background-color: var(--dl-color-paperblack-400);
          }
          .home-container06 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text25 {
            color: var(--dl-color-paperblack-white);
            padding: var(--dl-space-space-halfunit);
            z-index: 3;
            font-style: normal;
            margin-top: -24px;
            text-align: center;
            font-family: Roboto Flex;
            font-weight: 400;
            border-radius: var(--dl-radius-radius-radius8);
            letter-spacing: 1px;
            text-transform: uppercase;
            background-color: var(--dl-color-paperblack-400);
          }
          .home-column02 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container07 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text26 {
            color: var(--dl-color-paperblack-white);
            padding: var(--dl-space-space-halfunit);
            z-index: 3;
            font-style: normal;
            margin-top: -24px;
            text-align: center;
            font-family: Roboto Flex;
            font-weight: 400;
            border-radius: var(--dl-radius-radius-radius8);
            letter-spacing: 1px;
            text-transform: uppercase;
            background-color: var(--dl-color-paperblack-400);
          }
          .home-container08 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text27 {
            color: var(--dl-color-paperblack-white);
            padding: var(--dl-space-space-halfunit);
            z-index: 3;
            font-style: normal;
            margin-top: -24px;
            text-align: center;
            font-family: Roboto Flex;
            font-weight: 400;
            border-radius: var(--dl-radius-radius-radius8);
            letter-spacing: 1px;
            text-transform: uppercase;
            background-color: var(--dl-color-paperblack-400);
          }
          .home-container09 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text28 {
            color: var(--dl-color-paperblack-white);
            padding: var(--dl-space-space-halfunit);
            z-index: 3;
            font-style: normal;
            margin-top: -24px;
            text-align: center;
            font-family: Roboto Flex;
            font-weight: 400;
            border-radius: var(--dl-radius-radius-radius8);
            letter-spacing: 1px;
            text-transform: uppercase;
            background-color: var(--dl-color-paperblack-400);
          }
          .home-partners-mobile {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-row1 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-column03 {
            gap: var(--dl-space-space-fourunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-column04 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-column05 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-banner {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 140px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-container10 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 110px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-green-900);
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-title1 {
            color: rgb(230, 249, 224);
            width: 100%;
            font-size: 36px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 46px;
          }
          .home-description1 {
            color: rgb(230, 249, 224);
            width: 100%;
            font-size: 20px;
            max-width: 550px;
            text-align: center;
            font-family: Lato;
            line-height: 30px;
          }
          .home-mission1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 120px;
            align-items: flex-end;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-galleries {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-gallery-desktop {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-column06 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image18 {
            height: 700px;
            object-fit: cover;
          }
          .home-column07 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-row2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-yellow {
            flex: 1;
            height: 330px;
            display: flex;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/moped-1300w.png');
            background-position: center;
          }
          .home-image19 {
            width: 100%;
            height: 100%;
            display: none;
            object-fit: cover;
          }
          .home-image20 {
            height: 330px;
            object-fit: cover;
          }
          .home-row3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image21 {
            width: 435px;
            object-fit: cover;
          }
          .home-image22 {
            height: 400px;
            object-fit: cover;
          }
          .home-gallery-mobile {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: none;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-column08 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image23 {
            height: 700px;
            object-fit: cover;
          }
          .home-image24 {
            width: 435px;
            object-fit: cover;
          }
          .home-column09 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-yellow1 {
            flex: 1;
            height: 330px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #fae48e;
          }
          .home-image25 {
            width: 100px;
            object-fit: cover;
          }
          .home-image26 {
            height: 330px;
            object-fit: cover;
          }
          .home-row4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image27 {
            height: 400px;
            object-fit: cover;
          }
          .home-newsletter {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 120px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-header1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text36 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text37 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 20px;
            text-align: center;
            line-height: 30px;
          }
          .home-content2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-email {
            width: 400px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-top: 2px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 60px;
            padding-right: 2px;
            flex-direction: row;
            padding-bottom: 2px;
            justify-content: center;
            background-color: #f3f3f3;
          }
          .home-textinput {
            flex: 1;
            color: #122821;
            outline: inherit;
            font-family: Lato;
            font-weight: 600;
            background-color: transparent;
          }
          .home-submit {
            width: 56px;
            cursor: pointer;
            height: 56px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-green-900);
          }
          .home-submit:hover {
            background-color: var(--dl-color-green-500);
          }
          .home-image28 {
            width: 18px;
            filter: brightness(0) saturate(100%) invert(88%) sepia(8%)
              saturate(484%) hue-rotate(62deg) brightness(111%) contrast(95%);
            transform: rotate(-45deg);
            object-fit: cover;
          }
          .home-notice {
            width: 100%;
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            padding-left: 27px;
            flex-direction: column;
            justify-content: center;
          }
          .home-notice1 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 12px;
            max-width: 305px;
            font-family: Lato;
            line-height: 15px;
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-mobile-menu {
              height: auto;
            }
            .home-icon {
              display: none;
            }
            .home-text07 {
              display: none;
            }
            .home-hero {
              gap: var(--dl-space-space-threeunits);
              height: auto;
              align-items: flex-start;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-image02 {
              display: none;
            }
            .home-image03 {
              width: 100%;
              height: auto;
              position: static;
              align-items: flex-end;
              aspect-ratio: 1;
              justify-content: flex-start;
            }
            .home-video {
              max-width: 100%;
              border-color: #ffffff;
              border-width: 1px;
            }
            .home-image05 {
              right: 23px;
              width: 377px;
              bottom: 0px;
              height: 405px;
              position: absolute;
              max-width: auto;
              max-height: 600px;
            }
            .home-mission {
              gap: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text10 {
              font-size: 18px;
              text-align: center;
              line-height: 23px;
            }
            .home-link6 {
              width: 100%;
              text-align: center;
            }
            .home-text13 {
              font-family: Lato;
            }
            .home-improve {
              gap: var(--dl-space-space-fiveunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-services {
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .home-text20 {
              max-width: 500px;
              text-align: center;
            }
            .home-cards {
              flex-direction: column;
            }
            .home-row {
              flex-direction: column;
            }
            .home-partners {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: 60px;
            }
            .home-content1 {
              align-items: center;
              justify-content: center;
            }
            .home-text21 {
              text-align: center;
            }
            .home-text22 {
              text-align: center;
            }
            .home-partners-desktop {
              display: none;
              flex-wrap: wrap;
              flex-direction: column;
            }
            .home-column {
              flex-direction: row;
            }
            .home-column01 {
              flex-direction: row;
            }
            .home-column02 {
              flex-direction: row;
            }
            .home-partners-mobile {
              gap: 10px;
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
            }
            .home-row1 {
              gap: 10px;
              flex-direction: row;
            }
            .home-column03 {
              gap: 10px;
              flex-direction: row;
            }
            .home-column04 {
              gap: 10px;
              flex-direction: row;
            }
            .home-column05 {
              gap: 10px;
              flex-direction: row;
            }
            .home-banner {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-mission1 {
              margin-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-gallery-desktop {
              display: none;
            }
            .home-gallery-mobile {
              gap: var(--dl-space-space-halfunit);
              display: flex;
            }
            .home-column08 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-end;
            }
            .home-image23 {
              width: 280px;
              height: 400px;
            }
            .home-image24 {
              width: 240px;
            }
            .home-column09 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
            }
            .home-yellow1 {
              flex: 0 0 auto;
              width: 220px;
              height: 300px;
            }
            .home-image25 {
              width: 100%;
              height: 100%;
            }
            .home-image26 {
              width: 260px;
              height: 170px;
            }
            .home-image27 {
              width: 220px;
              height: 290px;
            }
            .home-newsletter {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text36 {
              font-size: 32px;
            }
            .home-text37 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-notice1 {
              font-size: 10px;
              line-height: 13px;
            }
          }
          @media (max-width: 767px) {
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              width: 40px;
              height: 40px;
              display: flex;
              aspect-ratio: 1;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #e6f9e0;
            }
            .home-hamburger {
              width: 16px;
              height: 8px;
            }
            .home-link3 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .home-link4 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .home-link5 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .home-title {
              font-size: 36px;
              line-height: 46px;
            }
            .home-description {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image05 {
              width: 249px;
              height: 184px;
            }
            .home-mission {
              align-items: center;
            }
            .home-text14 {
              font-size: 32px;
              line-height: 41px;
            }
            .home-text17 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-content1 {
              align-items: center;
            }
            .home-text22 {
              max-width: 100%;
              text-align: center;
            }
            .home-column09 {
              gap: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-top: var(--dl-space-space-unit);
            }
            .home-video {
              width: 50%;
              border-width: 2px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-image05 {
              width: 236px;
              height: 149px;
              margin-left: 0px;
            }
            .home-row {
              flex-direction: column;
            }
            .home-partners {
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-partner06 {
              border-width: 6px;
            }
            .home-partner07 {
              border-width: 6px;
            }
            .home-partner08 {
              border-width: 6px;
            }
            .home-column03 {
              display: none;
            }
            .home-partner09 {
              border-width: 6px;
            }
            .home-partner10 {
              border-width: 6px;
            }
            .home-partner11 {
              border-width: 6px;
            }
            .home-container10 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-title1 {
              font-size: 32px;
              line-height: 41px;
            }
            .home-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image23 {
              width: 140px;
              height: 200px;
            }
            .home-image24 {
              width: 120px;
            }
            .home-column09 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-yellow1 {
              width: 110px;
              height: 150px;
            }
            .home-image26 {
              width: 130px;
              height: 85px;
            }
            .home-image27 {
              width: 110px;
              height: 145px;
            }
            .home-email {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
