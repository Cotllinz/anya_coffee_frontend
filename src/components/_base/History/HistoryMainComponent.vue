<template>
  <main class="bg__history">
    <hr class="mt-lg-3 d-none d-lg-block" />
    <b-container fluid>
      <div class="pb-xl-5 pb-3">
        <div class="titleHistory mt-xl-5 mt-lg-5 pt-4 pt-xl-0">
          <h1>Let’s see what you have bought!</h1>
          <p>Select item to delete</p>
        </div>
        <div class="d-flex pr-xl-5 mr-xl-3 pr-1">
          <a
            v-b-modal.modal-prevent-closing
            class="select_all ml-xl-auto ml-auto mb-4 mb-lg-0"
            >Select All</a
          >
          <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Submit Your Name"
          ></b-modal>
        </div>
      </div>
      <b-row class="px-xl-5 grid__system">
        <b-col>
          <div class="card p-xl-1 position-relative mb-3 mb-lg-4">
            <div class="card-body d-flex align-items-center">
              <div class="image__history">
                <img
                  class="fit__image"
                  src="../../../assets/image/mainImage/History__Product.svg"
                  alt="Image_History"
                />
              </div>
              <div class="all__infoHistory position-relative">
                <h2 class="title__product">
                  Mie Kari Pedas + Expreso Hitam
                </h2>
                <div class="info__history">
                  <p class="mt-xl-3 mt-3">IDR 34.000</p>
                  <p>Delivered</p>
                </div>
              </div>
              <input
                class="ml-xl-auto ml-auto mt-4 mt-xl-auto mr-xl-3 mb-xl-3"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>
<script>
export default {
  name: 'HMC'
}
</script>
<style scoped>
main.bg__history {
  background-image: url('../../../assets/image/mainImage/Bg__History.jpg');
  background-size: cover;
  background-position: 0% 25%;
}

div.titleHistory {
  text-align: center;
  font-family: 'Rubik', sans-serif;
}

div.titleHistory p {
  font-size: 20px;
  color: #fff;
}

div.titleHistory h1 {
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  font-weight: 700;
}
div.card {
  border-radius: 20px;
  height: 120px;
}
div.image__history {
  width: 80px;
  height: 80px;
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
}

a.select_all {
  font-family: 'Poppins', sans-serif;
  color: rgb(255, 255, 255);
  font-weight: 700;
  text-decoration: underline;
  font-size: 20px;
}

div.image__history > .fit__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 45%;
}
h2.title__product {
  font-size: 22px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}
div.all__infoHistory {
  left: 95px;
  width: 80%;
  top: 6px;
}
div.info__history {
  font-size: 20px;
  color: #895537;
  font-family: 'Poppins', sans-serif;
}
div.info__history p:nth-child(1) {
  line-height: 6px;
}
div.info__history p:nth-child(2) {
  line-height: 10px;
}
div.grid__system {
  display: grid;
}

input[type='checkbox'] {
  cursor: pointer;
  z-index: 3;
}

/* Modal Style */

div.modal-body h2 {
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
}
div.modal-content {
  border-radius: 20px;
}
div.modal-footer {
  border: none;
}
button.btn_cancel,
button.btn_delete {
  font-family: 'Poppins', sans-serif;
  padding: 15px 27px;
  border-radius: 10px;
  font-weight: 700;
  outline: none !important;
  font-size: 15px;
}
button.btn_cancel {
  border: 3px solid #6a4029;
  background: none;
  color: #6a4029;
}
button.btn_delete {
  border: 3px solid #6a4029;
  background: #6a4029;
  color: #ffffff;
}
/* Hover Modal */
button.btn_cancel:hover {
  border-color: #53301d;
  background: #5a311b;
  color: #fff;
}
button.btn_delete:hover {
  border: 3px solid #fa6515;
  background: #fa6515;
}
/* Hover History */
a.select_all:hover {
  color: rgb(164, 164, 165);
  font-size: 20px;
}

/* Media Query */
@media (max-width: 4000px) {
  div.grid__system {
    grid-template-columns: 16.6% auto auto auto auto auto;
  }
}
@media (max-width: 1920px) {
  div.grid__system {
    grid-template-columns: 25% auto auto auto;
  }
}
@media (max-width: 1440px) {
  div.grid__system {
    grid-template-columns: 34% auto auto;
  }
}

@media (max-width: 1024px) {
  div.all__infoHistory {
    width: 70%;
  }
}

@media (max-width: 576px) {
  div.titleHistory h1 {
    font-size: 30px;
  }
  div.titleHistory p {
    font-size: 20px;
    margin-top: 20px;
  }
  div.grid__system {
    grid-template-columns: auto;
  }
  div.all__infoHistory {
    left: 90px;
    width: 70%;
    padding-right: 0px;
  }
  main.bg__history {
    background-position: 35% 55%;
  }
}
</style>
