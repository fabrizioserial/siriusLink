import React from 'react';
import {connect} from 'react-redux';
import './Home.scss';
import logo from '../../../img/sirius-logo.png';
import deco from '../../../img/decoration-slarge.png';
import SiriusButton from '../../../common/components/SiriusButton/SiriusButton';


/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Home = (props) => {
  const {

  } = props;

  return (
    <div className='home-div-background'>
      <div className='home-div-cont-logo'>
        <img className='home-img-logo' src={logo}/>
      </div>
      <div className='home-div-btngroups'>
        <SiriusButton type='fb'/>
        <SiriusButton type='ld'/>
        <SiriusButton type='ig'/>
        <SiriusButton type='wb'/>
      </div>
      {
        // Hola
      }
        <div className='home-div-decoration'>
            <img src={deco} className='home-img-decoration'/>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

Home.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

