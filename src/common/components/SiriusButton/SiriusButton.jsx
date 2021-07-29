import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './SiriusButton.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */

const SiriusButton = (props) => {
  const {
    type,
  } = props;
  const [buttonType, setButtonType] = useState(type);
  const [typeList, setTypeList] = useState([
    {type: 'fb', text: 'Facebook', icon: faFacebook, link: 'https://www.facebook.com/sirius.systems'},
    {type: 'ld', text: 'LinkedIn', icon: faLinkedin, link: 'https://www.linkedin.com/company/sirius-software-dev/mycompany/'},
    {type: 'ig', text: 'Instagram', icon: faInstagram, link: 'https://www.instagram.com/sirius_software/'},
    {type: 'wb', text: 'Website', icon: faGlobe, link: 'https://sirius.com.ar/'}]);
  const [selectedType, setSelectedType] = useState(false);

  useEffect(()=>{
    setButtonType(type);
  }, [type]);

  useEffect(()=>{
  }, [selectedType]);

  useEffect(()=>{
    setSelectedType(typeList.filter((t) => t.type === buttonType)[0]);
  }, [buttonType]);

  return (
    selectedType ?
        // eslint-disable-next-line max-len
      <button className={`sirius-btn ${selectedType.type}`} onClick={()=>window.location.href=selectedType.link}>
        <FontAwesomeIcon className='sirius-btn-icon' icon={selectedType.icon}/>
        <p>{
          selectedType.text
        }</p>
      </button>:
      <>
      </>
  );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

SiriusButton.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SiriusButton);

