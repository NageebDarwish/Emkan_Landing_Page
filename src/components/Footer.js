

export default function Footer() {
  return (
    <footer>
      <div className="container-css">
        <div className="row">
          <div className="col-md-1 logo-flex">
            <a href="#" className="anchor-logo">
            <img src={require('../assets/image/logo_footer.png')} className="logo_footer" alt="logo"/>
            </a>
          </div>
          <ul className="link-group col-md-3">
          <h4 className="footer-titles">خارطة الموقع</h4>
          
          <div className="unmain_padding ">
            <li>
              <a href="#">الرئيسية</a>
            </li>
            <li>
              <a href="https://www.emkanfinance.com.sa/ar/products/">المنتجات</a>
            </li>
            </div>
          
          </ul>
          
          <ul className="link-group col-md-2">
          <h4 className="footer-titles">المساعدة</h4>
          
          <div className="unmain_padding">
            <li>
              <a href="https://www.emkanfinance.com.sa/ar/frequently-asked-question/">الاسئلة الشائعة</a>
            </li>
            <li>
              <a href="#contact-us">تواصل معنا</a>
            </li>
            </div>
          
          </ul>
          <ul className="col-md-4">
          <h4 className="footer-titles ">حمل التطبيق</h4>
          <ul className="apps unmain_padding">
            <a target="_blank" href="https://app.adjust.com/ilmab07?deep_link=emkanapp%3A%2F%2F">
                            <img src="https://www.emkanfinance.com.sa/wp-content/themes/emkan/assets/img/googleplay-icon.svg" alt="googleplay"/>
                        </a>
           <a target="_blank" href="https://app.adjust.com/ooi3v49?deep_link=emkanapp%3A%2F%2F">
                            <img src="https://www.emkanfinance.com.sa/wp-content/themes/emkan/assets/img/appstore-icon.svg" alt="apple store"/>
                        </a>
          </ul>
          </ul>

          <ul style={{display:"block"}} className="col-md-2">
            <h4 className="footer-titles" style={{paddingBottom:"20px"}}>حسابات التواصل الاجتماعي</h4>
            <div className="twi ">
            <a target="_blank" href="https://twitter.com/Emkan_Finance">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27.524" height="22.671" viewBox="0 0 27.524 22.671">
                                    <title>Twitter</title>
                                    <g transform="translate(0 0)">
                                        <path id="Path_930" data-name="Path 930" d="M931.883,297.51a11.292,11.292,0,0,1-2.78.794c.447-.075,1.108-.886,1.372-1.214a5.116,5.116,0,0,0,.926-1.686c.023-.048.042-.108-.006-.144a.156.156,0,0,0-.147.012,14.242,14.242,0,0,1-3.3,1.264.221.221,0,0,1-.228-.061,2.673,2.673,0,0,0-.289-.3,5.844,5.844,0,0,0-1.6-.98,5.573,5.573,0,0,0-2.454-.4,5.865,5.865,0,0,0-2.328.658A6.009,6.009,0,0,0,919.169,297a5.754,5.754,0,0,0-1.121,2.246,6.1,6.1,0,0,0-.06,2.372c.018.132.007.151-.113.132-4.536-.675-8.3-2.3-11.348-5.776-.132-.151-.205-.151-.313.011-1.336,2-.688,5.219.981,6.8.222.21.451.421.7.613a5.8,5.8,0,0,1-2.19-.613c-.132-.084-.2-.036-.211.114a3.508,3.508,0,0,0,.036.65,5.818,5.818,0,0,0,3.586,4.639,3.371,3.371,0,0,0,.728.222,6.482,6.482,0,0,1-2.147.067c-.157-.03-.216.048-.157.2a6.042,6.042,0,0,0,4.512,3.779c.205.036.409.036.614.084-.012.018-.024.018-.036.036-.506.773-2.263,1.347-3.082,1.633a11.038,11.038,0,0,1-4.68.6c-.252-.037-.3-.035-.373,0s-.009.1.072.168c.319.211.645.4.975.578a15.413,15.413,0,0,0,3.129,1.251c5.623,1.553,11.957.412,16.178-3.783,3.316-3.294,4.478-7.836,4.478-12.385,0-.178.21-.276.336-.37a10.893,10.893,0,0,0,2.191-2.289.662.662,0,0,0,.136-.439v-.024C931.986,297.437,932,297.459,931.883,297.51Z" transform="translate(-904.462 -294.793)" fill="currentColor"></path>
                                    </g>
                                    <g transform="translate(8.174 22.573)">
                                        <path d="M913.909,320.882Z" transform="translate(-913.909 -320.882)" fill="currentColor" fill-rule="evenodd"></path>
                                    </g>
                                    <g transform="translate(7.964 22.573)">
                                        <path d="M913.876,320.882c-.036,0-.454,0,0,0Z" transform="translate(-913.666 -320.882)" fill="currentColor" fill-rule="evenodd"></path>
                                    </g>
                                    <g transform="translate(9.101 22.577)">
                                        <path d="M914.98,320.907c0-.047.488,0,0,0C914.98,320.883,915.041,320.907,914.98,320.907Z" transform="translate(-914.98 -320.886)" fill="currentColor" fill-rule="evenodd"></path>
                                    </g>
                                    <g transform="translate(18.722 0.033)">
                                        <path d="M926.214,294.831a.1.1,0,0,1-.114,0Z" transform="translate(-926.1 -294.831)" fill="currentColor" fill-rule="evenodd"></path>
                                    </g>
                                </svg>
                            </a>
              </div>
          </ul>
        </div>
      </div>
      
    </footer>
  );
}
