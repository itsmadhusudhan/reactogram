import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './HomeContainer.scss';
import instagram from "../../images/instagram.svg";

const HomeContainer=(props)=>{
  return(
    <div className={styles.home__container}>
     Home container
     <img src={instagram} className={styles.logo} />

     </div>
  )
}

export default HomeContainer;

HomeContainer.propTypes={
  
}