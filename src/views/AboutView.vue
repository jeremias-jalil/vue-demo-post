<template>
    <div class="about-container">
        <div class="row container ">
            <div class="col s12 ">
                <div class="card-panel teal">
                    <span class="white-text">
                        <h1>About</h1>

                    </span>
                </div>
            </div>
            <div class="row ">
                <div class="col s6 ">
                    <div class="card-panel teal">
                        <span class="white-text">
                            <h4>The project</h4>
                            <p>The project consists of a simple web application that allows users to view and publish posts.
                                The
                                main
                                objective of this project is to provide a practical introduction to web application
                                development
                                using the
                                Vue.js framework.</p>
                            <p>Through this project, I hope to increase my knowledge and skills in Vue.js, as well as
                                strengthen
                                my
                                technological stack.</p>
                        </span>
                    </div>
                </div>
                <div class="col s6 ">
                    <div class="card-panel teal">
                        <span class="white-text">
                            <h3>Jeremias Jalil</h3>
                            <div class="collection">
                                <a href="https://jerejalil.com" class="collection-item"><span
                                        class="badge"></span>Repository</a>
                                <a href="https://www.linkedin.com/in/jeremiasjalil/" class="collection-item"><span
                                        class="badge"></span>LinkedIn</a>
                                <a href="https://jerejalil.com" class="collection-item"><span class="badge"></span>Web</a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style>
.about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;


}

.about-container:before {
    content: "";
    background-image: url("../assets/logo.png");
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: .6;
}


.title {
    font-size: 32px;
    margin-bottom: 20px;
}

.content {
    text-align: center;
    font-size: 18px;
}

a {
    color: #0078D7;
}
</style>