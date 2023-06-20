<template>
  <aside>
    <div class="wellcome">
      <p>
        <span
          ><em>Wellcome to </em><span class="logo">doit plataform!</span></span
        >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
        temporibus fuga illo, nobis voluptas beatae quo dolores. Delectus quos
        modi repudiandae aliquid officiis? Beatae odit dicta optio delectus quam
        quod?
        <button @click="getLogin">Get started</button>
      </p>
      <!-- <img src="../assets/images/tasks.jpg" alt="image with some images"> -->
    </div>
    <div class="usege">
      <h3>How use the plataform?</h3>
      <div class="teacher">
        <h4>Use <span>doit</span> to send tasks for your studants</h4>
        <img src="../assets/images/teacher.jpg" alt="A teacher" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, est
          exercitationem aliquid explicabo earum rem ab quos reiciendis eos fuga
          minus labore fugit, animi sunt distinctio obcaecati quis, velit illo.
        </p>
        <button @click="getLogin">Create account</button>
      </div>
      <div class="studant">
        <h4>Use <span>doit</span> to recive tasks from your teacher!</h4>
        <img src="../assets/images/studant.jpg" alt="A studant" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          accusamus tempora quae velit quo voluptates. Eveniet illo incidunt
          explicabo alias impedit unde porro beatae in, minima ea repellendus
          est voluptatum!
        </p>
        <button @click="getLogin">Create account</button>
      </div>
    </div>
    <div class="about">
      <h3>About us</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni
        ipsa reiciendis, consectetur blanditiis sunt nemo architecto voluptate
        vitae quasi iure, distinctio ad commodi repellat laborum corrupti nisi!
        Eaque, cumque.
      </p>
      <div class="contact">
        <a href="https://github.com/oscarndodo" class="fa fa-github">Github</a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-facebook"
          >Facebook</a
        >
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-instagram"
          >Instagram</a
        >
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-twitter"
          >Twitter</a
        >
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "GetStartedVue",
  methods: {
    getLogin(){
      this.$emit("getLogin");
    }
  }
};
</script>

<style scoped>
aside {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

aside .wellcome {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: url("../assets/images/tasks.jpg");
  height: 380px;
  background-attachment: scroll;
  background-origin: border-box;
  background-position: center;
  background-size: cover;
}

aside .wellcome p {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.2em;
  line-height: 30px;
  color: var(--white);
  padding: 30px 10px;
  background-color: #2a2c3c7f;
}

aside .wellcome p span .logo {
  color: var(--black);
  font-weight: bold;
}

aside .wellcome p button {
  width: 50%;
  background-color: var(--green);
  color: var(--white);
  padding: 8px 20px;
  margin: 30px 0 0 0;
  font-size: 1em;
  border: none;
  border-radius: 5px;
}

aside .usege {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 30px 0 0 0;
}

aside .usege h3 {
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
  color: var(--green);
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: 400;
  letter-spacing: 5px;
}

aside .usege .teacher {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 50px;
}

aside .usege .teacher h4 {
  color: var(--white);
  letter-spacing: 2px;
  margin-bottom: 10px;
}

aside .usege .teacher h4 span {
  color: var(--green);
}

aside .usege .teacher img {
  width: 100%;
  border-radius: 50px 4px 50px 4px;
}

aside .usege .teacher p {
  border-left: 3px solid var(--green);
  padding-left: 10px;
  margin: 10px 0 20px 0;
  color: var(--white);
  font-size: 1.1em;
  font-weight: 400;
  line-height: 25px;
}

aside .usege .teacher button {
  width: 100%;
  padding: 8px 10px;
  font-size: 1.2em;
  border: none;
  border-radius: 4px;
  background-color: var(--white);
  color: var(--green);
}

aside .usege .studant {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 50px;
}

aside .usege .studant h4 {
  color: var(--white);
  letter-spacing: 2px;
  margin-bottom: 10px;
}

aside .usege .studant h4 span {
  color: var(--green);
}

aside .usege .studant img {
  width: 100%;
  border-radius: 4px 50px 4px 50px;
}

aside .usege .studant p {
  border-left: 3px solid var(--green);
  padding-left: 10px;
  margin: 10px 0 20px 0;
  color: var(--white);
  font-size: 1.1em;
  font-weight: 400;
  line-height: 25px;
}

aside .usege .studant button {
  width: 100%;
  padding: 8px 10px;
  font-size: 1.2em;
  border: none;
  border-radius: 4px;
  background-color: var(--white);
  color: var(--green);
}

aside .about {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 50px;
}

aside .about h3 {
  font-size: 1.1em;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--green);
  border-left: 3px solid var(--white);
  padding-left: 15px;
}
aside .about p {
  padding: 15px 0;
  color: var(--white);
  font-weight: 300;
  line-height: 20px;
}

aside .about .contact {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

aside .about .contact a {
  margin-right: 20px;
  color: var(--green);
  font-weight: 300;
  text-decoration: underline;
}
</style>