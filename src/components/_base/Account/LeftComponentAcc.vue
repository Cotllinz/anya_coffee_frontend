<template>
  <b-col xl="4">
    <div class="image__fit">
      <img v-if="url" :src="url" class="style__image" alt="image__account" />
    </div>
    <div class="label__name mt-3 mt-lg-2">
      <h2>Zulaikha</h2>
      <p>zulaikha17@gmail.com</p>
    </div>
    <div class="all_button">
      <b-col>
        <input id="fileUpload" type="file" @change="onFileChange" hidden />
        <button @click.prevent="chooseFiles()" class="btn_photo mb-lg-3 mb-3">
          Choose photo
        </button>
      </b-col>
      <b-col>
        <button class="btn_removePhoto mb-lg-5 mb-5">
          Remove photo
        </button>
      </b-col>
      <b-col>
        <button class="btn_editPassword mb-lg-5 mb-4">
          Edit Password
        </button>
      </b-col>
      <div class="save_itbtn d-none d-lg-block">
        <h2 class="sure__change mb-lg-5 px-lg-5 text-center">
          Do you want to save the change?
        </h2>
        <b-col>
          <button class="btn_saveChange mb-lg-3">
            Save Change
          </button>
        </b-col>
        <b-col>
          <button class="btn_cancel mb-lg-5">Cancel</button>
        </b-col>
        <b-col>
          <button class="btn_logout">Log out</button>
        </b-col>
      </div>
    </div>
  </b-col>
</template>
<script>
export default {
  name: 'LCA',
  data() {
    return {
      url: null
    }
  },
  methods: {
    chooseFiles() {
      document.getElementById('fileUpload').click()
    },
    onFileChange(e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
      console.log(this.url)
    }
  }
}
</script>
<style scoped>
div.image__fit {
  width: 170px;
  margin: 0 auto;
  height: 170px;
  overflow: hidden;
  border-radius: 50%;
}

img.style__image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
div.label__name {
  text-align: center;
  font-family: 'Rubik', sans-serif;
}
div.label__name h2 {
  font-size: 20px;
  font-weight: 700;
}
div.label__name p {
  font-size: 15px;
  line-height: 8px;
}

button.btn_photo,
button.btn_removePhoto,
button.btn_editPassword,
button.btn_saveChange,
button.btn_cancel,
button.btn_logout {
  width: 70%;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin: 0 auto;
  display: block;
  border: none;
  outline: none !important;
  padding: 10px;
  border-radius: 10px;
}
button.btn_editPassword,
button.btn_saveChange,
button.btn_cancel,
button.btn_logout {
  font-size: 18px;
  border-radius: 20px;
  padding: 15px;
}
.all_button button.btn_photo,
.all_button .save_itbtn .btn_cancel {
  color: #6a4029;
  background: #ffba33;
}
.all_button .btn_removePhoto,
.all_button .save_itbtn .btn_saveChange {
  color: #f8f8f8;
  background: #6a4029;
}
.all_button .save_itbtn .btn_saveChange {
  filter: drop-shadow(0px 6px 20px rgba(106, 64, 41, 0.65));
}
.all_button .btn_editPassword,
.all_button .save_itbtn .btn_logout {
  color: #6a4029;
  border: 1px solid rgb(187, 186, 186);
  background: #fff;
}

h2.sure__change {
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
}

/* Hover Left Account Style */
.all_button button.btn_photo:hover,
.all_button .save_itbtn .btn_cancel:hover {
  color: #703718;
  background: #ffaa00;
}
.all_button .btn_removePhoto:hover,
.all_button .save_itbtn .btn_saveChange:hover {
  color: #ffffff;
  background: #633015;
}
.all_button .btn_editPassword:hover,
.all_button .save_itbtn .btn_logout:hover {
  color: #83360c;
  border: 1px solid rgb(126, 124, 124);
  background: #fff;
}

/* Media Query Left Account Style */
@media (max-width: 1024px) {
  h2.title {
    text-align: center;
    font-size: 50px;
  }
  div.label__name h2 {
    font-size: 25px;
  }
  div.label__name p {
    font-size: 20px;
    line-height: 13px;
  }
  button.btn_photo,
  button.btn_removePhoto,
  button.btn_editPassword,
  button.btn_saveChange,
  button.btn_cancel,
  button.btn_logout {
    font-size: 17px;
    width: 50%;
    padding: 15px;
  }
  button.btn_editPassword,
  button.btn_saveChange,
  button.btn_cancel,
  button.btn_logout {
    font-size: 20px;
    padding: 18px;
  }
  button.btn_logout {
    margin-bottom: 30px;
  }
}
@media (max-width: 576px) {
  h2.title {
    font-size: 35px;
  }
  button.btn_photo,
  button.btn_removePhoto,
  button.btn_editPassword,
  button.btn_saveChange,
  button.btn_cancel,
  button.btn_logout {
    width: 80%;
  }

  button.btn_saveChange,
  button.btn_cancel,
  button.btn_logout {
    width: 100%;
  }
  button.btn_logout {
    margin-bottom: 0;
  }
  .save_itbtn .btn_cancel {
    color: #6a4029;
    background: #ffba33;
  }
  .save_itbtn button:nth-child(2) {
    color: #f8f8f8;
    background: #6a4029;
    filter: drop-shadow(0px 6px 20px rgba(106, 64, 41, 0.65));
  }
  .save_itbtn button:nth-child(4) {
    color: #6a4029;
    border: 1px solid rgb(187, 186, 186);
    background: #fff;
  }

  /* Hover Media Query */
  .save_itbtn button:nth-child(3):hover {
    color: #703718;
    background: #ffaa00;
  }
  .save_itbtn button:nth-child(2):hover {
    color: #ffffff;
    background: #633015;
  }
  .save_itbtn .btn_logout:hover {
    color: #83360c;
    border: 1px solid rgb(255, 0, 0);
    background: #fff;
  }
}
</style>
