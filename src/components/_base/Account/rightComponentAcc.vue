<template>
  <b-col xl="8">
    <div class="card__editAccount mt-lg-2 py-4 py-lg-3 px-3 px-lg-5">
      <div class="d-flex position-relative mt-lg-2">
        <h2 class="contact__title">Contacts</h2>
        <a class="btn_edit"
          ><img
            src="../../../assets/image/icons/edit_accountIcons.svg"
            alt="edit_btn"
        /></a>
      </div>
      <b-form-row class="mt-lg-3 mt-4">
        <b-col lg="6">
          <b-form-group>
            <label for="Email">Email adress :</label>
            <b-form-input
              type="email"
              v-model="dataForm.email"
              placeholder="Enter email"
              disabled
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group class="mt-2 mt-lg-0">
            <label for="mobileNumb" class="mobile_form">Mobile Number :</label>
            <b-form-input
              type="tel"
              class="mobile_input"
              id="mobile_number"
              v-model="dataForm.phoneNumber"
              pattern="[0-9]{12}"
              maxlength="12"
              placeholder="082034093032"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group class="mt-lg-4 mt-2">
            <label for="address">Delivery adress :</label>
            <b-form-textarea
              rows="2"
              maxlength="100"
              v-model="dataForm.addressUser"
              cols="30"
              placeholder="Iskandar Street no. 67 Block A Near Bus Stop"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-form-row>
      <h2 class="title_detail my-lg-4 my-3 pb-1 pb-lg-2">Details</h2>
      <b-form-row>
        <b-col lg="6">
          <b-form-group>
            <label>Display name :</label>
            <b-form-input
              type="text"
              id="username"
              maxlength="15"
              v-model="dataForm.userName"
              required
              placeholder="Username"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <b-form-group>
            <label class="mobile_date_form">DD/MM/YY</label>

            <b-form-datepicker
              id="date"
              class="mobile_date_input"
              today-button
              reset-button
              close-button
              placeholder="dd-mm-yyyy"
              v-model="dataForm.dateBirth"
              locale="ID"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col lg="12">
          <b-form-group class="mt-2 mt-lg-2">
            <label>First name :</label>
            <b-form-input
              type="text"
              id="first_name"
              maxlength="15"
              v-model="dataForm.firstName"
              class="name_space"
              placeholder="Your first name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="12">
          <b-form-group class="mt-2 mt-lg-2">
            <label>Last name :</label>
            <b-form-input
              type="text"
              id="last_name"
              maxlength="15"
              v-model="dataForm.lastName"
              class="name_space"
              placeholder="Your last name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <div
          class="radio_btn mt-lg-3 mt-4 ml-auto mr-auto pb-4 ml-lg-auto mr-lg-auto pb-lg-4"
        >
          <div class="form-check form-check-inline mr-2 mr-lg-5">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="MALE"
              v-model="dataForm.Gender"
            />
            <label
              class="form-check-label pl-2 pl-lg-3"
              :class="dataForm.Gender === 'MALE' ? 'active' : ''"
              for="inlineRadio1"
              >Male</label
            >
          </div>
          <div class="form-check form-check-inline ml-2 ml-lg-5">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="FEMALE"
              v-model="dataForm.Gender"
            />
            <label
              class="form-check-label pl-2 pl-lg-3"
              :class="dataForm.Gender === 'FEMALE' ? 'active' : ''"
              for="inlineRadio2"
              >Female</label
            >
          </div>
        </div>
      </b-form-row>
      <div class="save_itbtn d-block d-lg-none">
        <h2 class="sure__change mb-4 px-4 text-center">
          Do you want to save the change?
        </h2>
        <b-col>
          <button type="submit" class="btn_saveChange mb-3">
            Save Change
          </button>
        </b-col>
        <b-col>
          <button type="button" class="btn_cancel mb-5">Cancel</button>
        </b-col>
        <b-col>
          <button type="button" @click="logoutHandle" class="btn_logout">
            Log out
          </button>
        </b-col>
      </div>
    </div>
  </b-col>
</template>
<script>
import { mapActions } from 'vuex'
import AlertMixins from '../../../mixins/Alert'
export default {
  props: ['dataForm'],
  mixins: [AlertMixins],
  name: 'RCA',
  methods: {
    ...mapActions(['logout']),
    logoutHandle() {
      this.AlertSuccesLogout(this.dataForm.userName).then(res => {
        if (res) {
          this.logout()
        }
      })
    }
  }
}
</script>
<style scoped>
div.card__editAccount {
  background: #ffffff;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  border-bottom: 10px solid #6a4029;
}

h2.contact__title {
  color: #4f5665;
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

a.btn_edit {
  position: absolute;
  right: -30px;
  top: -12px;
}

.form-group input {
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  border: none;
  padding: 0;
  background: none;
  border-bottom: 1px solid;
}
.form-group label.mobile_form,
input.mobile_input {
  width: 70%;
  margin-left: 12%;
}
.form-group label.mobile_date_form,
.mobile_date_input {
  width: 100%;
  margin-left: 12%;
}
.mobile_date_input {
  border: none;
  border-bottom: 1px solid;
  margin-top: 11px;
}
.form-group label {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
}

textarea {
  resize: none;
  border: none;
  font-family: 'Rubik', sans-serif;
  font-size: 17px;
  padding: 0;
  border-bottom: 1px solid;
  outline: none !important;
}

input.name_space {
  width: 50%;
}

h2.title_detail {
  font-size: 25px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: #4f5665;
}

div.radio_btn {
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
}
div.radio_btn label.form-check-label {
  color: #9f9f9f;
}
div.radio_btn label.form-check-label.active {
  font-weight: 700;
  color: #6a4029;
}

/* Button Style Mobile */
h2.sure__change {
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
}

button.btn_saveChange,
button.btn_cancel,
button.btn_logout {
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin: 0 auto;
  display: block;
  border: none;
  outline: none !important;
  border-radius: 20px;
  padding: 19px;
}
button.btn_cancel {
  color: #6a4029;
  background: #ffba33;
}
button.btn_saveChange {
  color: #f8f8f8;
  background: #6a4029;
}
button.btn_saveChange {
  filter: drop-shadow(0px 6px 20px rgba(106, 64, 41, 0.65));
}
button.btn_logout {
  color: #6a4029;
  border: 1px solid rgb(187, 186, 186);
  background: #fff;
}

/* Hover Left Account Style */
button.btn_cancel:hover {
  color: #703718;
  background: #ffaa00;
}
button.btn_saveChange:hover {
  color: #ffffff;
  background: #633015;
}
button.btn_logout:hover {
  color: #83360c;
  border: 1px solid rgb(126, 124, 124);
  background: #fff;
}

/* Media Query Right Account */

@media (max-width: 576px) {
  a.btn_edit {
    position: absolute;
    right: -7px;
    top: -10px;
  }
  h2.contact__title {
    font-size: 30px;
  }
  .form-group label.mobile_form,
  input.mobile_input,
  .form-group label.mobile_date_form,
  .mobile_date_input {
    width: 100%;
    margin-left: 0;
  }

  input.name_space {
    width: 100%;
  }
}
</style>
