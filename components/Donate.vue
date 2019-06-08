<template>
  <div>
    <div class="header">
      <img src="/donate.svg" />
      <div class="header-info">
        <h1>Donate $5</h1>
        <h2>Rehash Trash</h2>
      </div>
    </div>
    <div class="body">
      <input type="text" placeholder="Name On Card" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Card Number" />
      <div class="card-date">
        <select id="expireMM" name="expireMM" style="flex: 3;">
          <option value="00">Month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select
          id="expireYY"
          name="expireYY"
          style="margin-left: 10px; flex: 3;"
        >
          <option value="00">Year</option>
          <option value="19">2019</option>
          <option value="20">2020</option>
          <option value="21">2021</option>
          <option value="22">2022</option>
          <option value="23">2023</option>
          <option value="24">2024</option>
          <option value="25">2025</option>
          <option value="26">2026</option>
          <option value="27">2027</option>
          <option value="28">2028</option>
          <option value="29">2029</option>
          <option value="30">2030</option>
        </select>
        <input
          type="number"
          placeholder="CVV"
          maxlength="3"
          style="margin: 0 0 0 10px; width: 100%; flex: 3;"
        />
      </div>
      <a class="submit-button">DONATE</a>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
.header {
  display: flex;
  background-color: #3f51b5;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 20px;
  font-family: 'Open Sans', sans-serif;
}

.header h1 {
  margin: 0;
  font-size: 2.4rem;
  font-weight: 700;
}

.header h2 {
  margin: 0;
  font-weight: 400;
  font-size: 1.5rem;
}

.header img {
  width: 70px;
}

.header-info {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.body {
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
}

.body input {
  margin: 0px 30px 20px 30px;
  font-size: 1.2rem;
  height: 40px;
  border-color: #3f51b5;
  border-style: solid;
  border-radius: 4px;
  padding: 0px 5px;
}

.card-date {
  display: flex;
  flex-direction: row;
  margin: 0px 30px;
}

.submit-button {
  color: white;
  background-color: #3f51b5;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 20px 0px;
  text-align: center;
  cursor: pointer;
  margin: 30px 30px 0px 30px;
  border-radius: 4px;
}

select {
  font-size: 1.2rem;
  height: 45px;
  border-color: #3f51b5;
  border-style: solid;
  border-radius: 4px;
  padding: 0px 5px;
  border-width: 2px;
  width: 100%;
}

.submit-button:hover {
  opacity: 0.8;
}
</style>
