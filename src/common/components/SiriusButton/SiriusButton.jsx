import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './SiriusButton.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
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
    {type: 'fb', text: 'Facebook', icon: faFacebook, link: 'www.google.com'},
    {type: 'ld', text: 'LinkedIn', icon: faLinkedin, link: 'www.google.com'},
    {type: 'ig', text: 'Instagram', icon: faInstagram, link: 'www.google.com'},
    {type: 'wb', text: 'Our page', icon: faGlobe, link: 'www.google.com'}]);
  const [selectedType, setSelectedType] = useState(false);

  useEffect(()=>{
    setButtonType(type);
    console.log(type);
  }, [type]);

  useEffect(()=>{
    console.log(selectedType);
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

