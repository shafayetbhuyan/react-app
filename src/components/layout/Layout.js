import React from 'react';
import style from './Layout.module.css';
import companyLogo from '../../images/logo_svrs.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from './menu/Menu';

function Layout(props) {
  // console.log("in layout", props)
  const { children } = props;

  return (
    <div className={style.layout}>
      <header className={style.header}>
        <div className={style.leftHeader}>
          <div className={style.logo}> <img src={companyLogo} alt="SVRS logo" /></div>
          <div className={style.companyName}><b>SVRS</b><br /> Bangladesh Bureau of Statistics</div>
        </div>

        <div className={style.rightHeader}>

          <div className={style.topButton}>
            <button className={` ${style.userSwitch} ${style.cp} `} >
              <div className={`${style.displayFlex} ${style.alignItemsCenter} ${style.h100}`}>
                <div className={`${style.companyLogoSec} ${style.px1} ${style.displayFlex}  ${style.alignItemsCenter}`} >
                  <img src={companyLogo} alt="SVRS logo" className={style.compamyImage} />
                </div>
                <div className={`${style.px4} ${style.textLeft} `}>
                  <h4 className={`${style.font10} ${style.textWhite}`} id="CompanyShortCode">USER</h4>
                </div>
              </div>
            </button>
          </div>

          <div className={style.topButton}>
            <button className={`${style.userSwitch} ${style.cp}`} >
              <div className={`${style.displayFlex} ${style.alignItemsCenter} ${style.h100}`}>
                <div className={`${style.px4} ${style.textLeft}`}>
                  <h4 className={`${style.font10} ${style.textWhite}`} id="CompanyShortCode">Log Out</h4>
                </div>
              </div>
            </button>
          </div>

        </div>

      </header>
      <div className={style.mainContainer}>
        <aside className={style.aside}>
          <Menu />
        </aside>
        <main className={style.main}>{children}</main>
      </div>
      <footer className={style.footer}></footer>
    </div>
  );
};

export default Layout;