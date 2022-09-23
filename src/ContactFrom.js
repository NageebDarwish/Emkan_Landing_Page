import axios from "axios";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Popup from "reactjs-popup";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    service: "",
  });
  let flag = true;

  const [value, setvalue] = React.useState("966");

  function check() {
    if (value === "") {
      flag = false;
      document.querySelector(".enter-number").innerHTML = "رجاء ادخل رقم هاتف";
    }
    if (value !== "") {
      flag = true;
      document.querySelector(".enter-number").innerHTML = "";
    }
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (flag) {
      if (formData.email === "") {
        formData.email = "ْ";
      }
      if (formData.service === "") {
        formData.service = "التمويل الشخصي";
      }
      if (formData.name === "") {
        formData.name = "ْ";
      }

      try {
        let res = await axios.post(
          "https://emkanfinances.net/api/add-message",
          {
            name: formData.name,
            email: formData.email,
            service: formData.service,
            phone: value,
          }
        );
        if (res.status === 200) {
          console.log(res.status);
          setFormData((prevFormData) => {
            return {
              ...prevFormData,
            };
          });
          document.querySelector("#s").disabled = true;
          document.querySelector(".clicked-button").click();
          document.querySelector(".modal").style.display = "block";
          setTimeout(() => window.location.replace(window.location.href), 1000);
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log(err.response);
      }
    } else {
      console.log("error");
    }
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="contact" id="contact-us" name="contact-us">
      <div className="pop-up-content">
        <Popup
          trigger={
            <button className="button clicked-button"> Open Modal </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header-css"> تم ارسال رسالتك بنجاح </div>
              <div className="content">
                {" "}
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
              <div className="actions"></div>
            </div>
          )}
        </Popup>
      </div>

      <h1>تواصل معنا</h1>

      <section className="row">
        <div className="rectangle-and-form col-md-5 offset-md-1">
          <p className="haapy-p">
            {" "}
            <a href="https://api.whatsapp.com/send?phone=966580644841&text=">
              {" "}
              تواصل معنا عبر الواتس اب
            </a>{" "}
            أو قم بتعبئة البيانات المطلوبة وسيتم التواصل معك في أسرع وقت ممكن!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=966580644841&text="
            className="contact-href"
          >
            <p className="contact-t">
              {" "}
              <i className="fa-brands fa-whatsapp fa-custom-contact"></i>
              <div style={{ paddingRight: "20px" }}>تواصل عبر الواتس اب</div>
            </p>
          </a>
          <form onSubmit={handleSubmit}>
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
              <option value="التمويل الشخصي">التمويل الشخصي</option>
              <option value="قرض شخصي">قرض شخصي</option>
              <option value="تمويل الشركات">تمويل الشركات</option>
              <option value="التمويل العقاري">التمويل العقاري</option>
              <option value="التمويل الفوري">التمويل الفوري</option>
              <option value="تمويل جسر">تمويل جسر</option>
              <option value="تمويل سيارات">تمويل سيارات</option>
              <option value="تمويل البنك الاهلي">تمويل البنك الاهلي</option>
              <option value="تمويل الراجحي">تمويل الراجحي</option>
            </select>
            <label htmlFor="phone" className="labels">
              رقم الجوال
            </label>
            <PhoneInput value={value} onChange={setvalue} />

            <span className="enter-number"> </span>

            <button type="submit" id="s" onClick={check}>
              ارسال
            </button>
          </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1812.432710069401!2d46.77224805790798!3d24.69715263289916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee35e5b019bdd%3A0xbd2b06ea28ededef!2zRW1rYW4gRmluYW5jZSBDb21wYW55INi02LHZg9ipINin2YXZg9in2YYg2YTZhNiq2YXZiNmK2YQ!5e0!3m2!1sen!2s!4v1663966729529!5m2!1sen!2s"
          width="600"
          className="landing-image col-md-6"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
