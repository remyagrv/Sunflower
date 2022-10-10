/** @format */

import React from "react";
import "./Maintainance.scss";
import { BsLinkedin } from 'react-icons/bs';

function Maintainance() {
  return (
    <div style={{ backgroundColor: "#434A54" }}>
      <div class="maintenance">
        <div class="maintenance_contain">
          <img
            src="https://demo.wpbeaveraddons.com/wp-content/uploads/2018/02/main-vector.png"
            alt="maintenance"
          />
          {/* <span class="pp-infobox-title-prefix">WE ARE COMING SOON</span> */}
          <div class="pp-infobox-title-wrapper">
            <h3 class="pp-infobox-title">The website is under maintenance!</h3>
          </div>
          <div class="pp-infobox-description">
            <p>
            Sorry,We are down for maintenance but will be back in no time!
              <br />
              If you have any questions, please contact us at <span style={{color:"navy"}}>info@trackgenesis.com</span>
              
            </p>{" "}
            {/* <div  class="pp-social-icons pp-social-icons-center pp-responsive-center"> */}

            <a href="https://www.linkedin.com/company/trackgenesis/"  style={{color:"blue"}}>connect me on linkedin</a>
            {/* </div> */}
          </div>
          {/* <span class="title-text pp-primary-title">We are social</span> */}
          {/* <div class="pp-social-icons pp-social-icons-center pp-responsive-center">
            <span class="pp-social-icon">
              <link itemprop="url" href="#" />
              <a
                itemprop="sameAs"
                href="#"
                target="_blank"
                title="Facebook"
                aria-label="Facebook"
                role="button"
              >
                <i class="fa fa-facebook"></i>
              </a>
            </span>
            <span class="pp-social-icon">
              <link itemprop="url" href="#" />
              <a
                itemprop="sameAs"
                href="#"
                target="_blank"
                title="Twitter"
                aria-label="Twitter"
                role="button"
              >
                <i class="fa fa-twitter"></i>
              </a>
            </span>
            <span class="pp-social-icon">
              <link itemprop="url" href="#" />
              <a
                itemprop="sameAs"
                href="#"
                target="_blank"
                title="Google Plus"
                aria-label="Google Plus"
                role="button"
              >
                <i class="fa fa-google-plus"></i>
              </a>
            </span>
            <span class="pp-social-icon">
              <a
                itemprop="sameAs"
                href="#"
                target="_blank"
                title="LinkedIn"
                aria-label="LinkedIn"
                role="button"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Maintainance;
