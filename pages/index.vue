<template>
  <!-- Content -->
  <div class="content">
    <!-- Profile -->
    <img class="content__profile" src="/img/profile.jpg">
    <article class="content__article content__article--center content__article--margin-16">
      <p class="content__article-title content__article-title--large">
        Full Name or Title
      </p>
      <p class="content__article-subtitle">
        Insert Subtitle or Subheader
      </p>
      <p class="content__article-links">
        <a href="/docs/resume.pdf" target="_blank">
          <i class="far fa-file-alt content__article-link"/>
        </a>
        <a href="https://github.com" target="_blank">
          <i class="fab fa-github content__article-link"/>
        </a>
        <a href="https://linkedin.com" target="_blank">
          <i class="fab fa-linkedin-in content__article-link"/>    
        </a>
        <a href="https://twitter.com" target="_blank">
          <i class="fab fa-twitter content__article-link"/>      
        </a>
        <a href="mailto:name@domain.com" target="_blank">
          <i class="far fa-envelope content__article-link"/>        
        </a>
      </p>              
    </article>

    <!-- About Me -->
    <article class="content__article content__article--margin-16">
      <p class="content__article-details">
        Lorem ipsum dolor sit amet, facilisi nec, <a href="#" target="_blank">nonummy</a> hendrerit elit a metus <a href="#" target="_blank">ultricies</a>, ante tortor volutpat suspendisse eos hac in, metus quis in felis egestas, sapien id id eu duis volutpat. 
        <br><br>         
        A turpis magna ac, eu etiam <a href="#" target="_blank">tellus rutrum</a> enim arcu eget. Non dolor eu torquent. <a href="#" target="_blank">Aenean nostra</a> torquent fringilla, ac wisi penatibus id sit enim scelerisque, metus ac erat, vel id.
      </p>      
    </article>

    <!-- Projects -->
    <article class="content__article content__article--margin-24">
      <p class="content__article-title content__article-title--medium">
        <i class="fa fa-briefcase"/> Projects
      </p>     
      <hr>
    </article>

    <!-- Project -->
    <article class="content__article content__article--margin-8">
      <!-- Title -->       
      <p class="content__article-title content__article-title">
        Title
      </p>

      <!-- Details --> 
      <p class="content__article-details content__article--margin-8">
        Project description goes here.<br> 
        <span class="content__article-metadata">
          <b><i class="fa fa-code"/> Technology:</b> HTML, CSS, Javascript
        </span>  
      </p>   

      <!-- Preview -->   
      <a href="https://xportal.netlify.com/" target="_blank">
        <img src="/img/preview.jpg" class="content__article-preview">
      </a> 

      <!-- Links --> 
      <p class="content__article-details">
        -- <br>        
        <a href="#" target="_blank">Demo</a> | <a href="https://github.com" target="_blank">View on Github</a>
      </p>   
      <hr>
    </article>        
  </div>
</template>

<style>
/* Block Elements */
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 4;
}
.content__profile {
  height: 180px;
  width: 180px;
  border: solid white 4px;
  border-radius: 50%;
  box-shadow: 2px 2px 8px #494b4b;
}
.content__article {
  width: 100%;
}
.content__article-title {
  font-size: 22px;
  font-weight: bold;
  color: #3a4145;
}
.content__article-subtitle {
  font-size: 22px;
  font-weight: bold;  
  color: #a9a9a9;
}
.content__article-details {
  font-size: 16px;
}
.content__article-metadata {
  font-size: 13px;
}
.content__article-links {
  margin: 8px 0;
}
.content__article-link {
  font-size: 22px;
  margin: 0 8px;   
}
.content__article-preview {
  width: 100%;
  max-width: 800px;
  margin-top: 16px;
}

/* Modifiers */
.content__article-title--medium {
  font-size: 32px;
  font-weight: bold;
}
.content__article-title--large {
  font-size: 40px;
  font-weight: bold;
}
.content__article--center {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.content__article--margin-8 {
  margin-top: 8px;
}
.content__article--margin-16 {
  margin-top: 16px;
}
.content__article--margin-24 {
  margin-top: 24px;
}

@media only screen and (min-width: 800px) {
  .content {
    width: 800px;
  }
}
</style>
