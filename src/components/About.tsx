import React from 'react';

import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import config from '../config/index.json';

const About = () => {
  const { about } = config;
  const { socialMedia } = about;

  return (
    <div
      id="features"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
      style={{display: 'flex', flexDirection: 'row', alignItems: 'space-between'}}
    >
      <div className="flex items-center gap-x-8 mt-6">
        <a
          aria-label="instagram"
          href={socialMedia.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="fill-current text-gray-800 dark:text-white hover:text-primary"
            style={{ fontSize: '40px' }}
          />
        </a>
        <a
          aria-label="facebook"
          href={socialMedia.facebook}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="fill-current text-gray-800 dark:text-white hover:text-primary"
            style={{ fontSize: '40px' }}
          />
        </a>
      </div>
    </div>
  );
};

export default About;
