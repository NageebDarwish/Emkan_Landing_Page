import axios from "axios";
import React from "react";
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import Popup from 'reactjs-popup';


export default function Contact() {
  
  

  
  
 
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    service: ""
  });
  let flag = true
  
  const [value, setvalue] = React.useState('966')

  function check(){
	if(value === ''){
    flag = false
    document.querySelector('.enter-number').innerHTML = "رجاء ادخل رقم هاتف"

  }
  if(value !== ''){
    flag = true
    document.querySelector('.enter-number').innerHTML = ''
      }
    
};
   
  
 let handleSubmit = async (e) => {
    
   e.preventDefault();
   if (flag){
   if(formData.email === ''){
    formData.email = 'ْ';
   }
   if(formData.service === ''){
    formData.service = 'التمويل الشخصي';
   }
   if(formData.name === ''){
    formData.name = 'ْ';
   }
  
   try {
    
    let res = await axios.post("https://emkanfinances.net/api/add-message",{
      name:formData.name,
      email:formData.email,
      service:formData.service,
      phone:value
     },
      );
     if (res.status === 200) {
      console.log(res.status)
       setFormData((prevFormData) => {
         return {
           ...prevFormData
         }
         
       });
       document.querySelector('#s').disabled = true
       document.querySelector('.clicked-button').click()
       document.querySelector('.modal').style.display = "block"
       setTimeout(()=>window.location.replace(window.location.href),1000)
     } else {
       console.log("Some error occured");
     }
   } catch (err) {
     console.log(err.response);
   }



}else {
  console.log('error')
}
}
console.log(value,formData);

  function handleChange(event) {
    
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  return (
    <div className="contact" id="contact-us" name="contact-us">
      <div className="pop-up-content">
      <Popup
    trigger={<button className="button clicked-button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header-css"> تم ارسال رسالتك بنجاح </div>
        <div className="content">
          {' '}
          <div class="success-checkmark">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div>
          <br />
        </div>
        <div className="actions">
        </div>
      </div>
    )}
  </Popup>
  </div>
      
      <h1>تواصل معنا</h1>
      
      <section className="row">
        <div className="rectangle-and-form col-md-5 offset-md-1">
        <p className="haapy-p"> <a href="https://wa.me/message/GC6W4EGX6RLAN1"> تواصل معنا عبر الواتس اب</a> أو قم بتعبئة البيانات المطلوبة وسيتم التواصل معك في أسرع وقت ممكن!</p>
        <a href="https://wa.me/message/GC6W4EGX6RLAN1" className="contact-href"><p className="contact-t"> <i className="fa-brands fa-whatsapp fa-custom-contact"></i><div style={{paddingRight: '20px'}}>تواصل عبر الواتس اب</div></p></a>
          <form onSubmit={handleSubmit} >
            <label htmlFor="name" className="labels">
              الاسم الكريم
            </label>
            <input
              type="text"
              placeholder="الرجاء ادخال اسمك"
              onChange={handleChange}
              name="name"
              id="name"
              value={formData.name}
            />
             
            <label htmlFor="email" className="labels">
              البريد الالكتروني
            </label>

            <input
              type="email"
              placeholder="الرجاء ادخال بريدك الالكتروني"
              onChange={handleChange}
              name="email"
              id="email"
              value={formData.email}
            />
            <label htmlFor="select" className="labels">
              اختر الخدمة المطلوبة
            </label>

            <select
              id="select"
              value={formData.service}
              onChange={handleChange}
              name="service"
              required
            >
              <option value="التمويل الشخصي">
               التمويل الشخصي
              </option>
              <option value="قرض شخصي">
                قرض شخصي
              </option>
              <option value="تمويل الشركات">
                تمويل الشركات
              </option>
              <option value="التمويل العقاري">
                التمويل العقاري
              </option>
              <option value="التمويل الفوري">التمويل الفوري</option>
              <option value="تمويل جسر">تمويل جسر</option>
              <option value="تمويل سيارات">تمويل سيارات</option>
              <option value="تمويل البنك الاهلي">تمويل البنك الاهلي</option>
              <option value="تمويل الراجحي">تمويل الراجحي</option>
            </select>
            <label htmlFor="phone" className="labels">
              رقم الجوال
            </label>
            <PhoneInput value={value} onChange={setvalue}/>
           
            <span className="enter-number">  </span>
            
            <button type="submit" id="s" onClick={check} >ارسال</button>
          </form>
        </div>
        <img
          src={require("./assets/image/11.jpg")}
          alt="contact"
          className="landing-image col-md-6"
          
        />
      </section>
    </div>
  );
  
}

