const test1 = document.getElementById('checkChange');
const articleId = sessionStorage.getItem("ArtId");
const UserCode = getCookie('Kandlus-users');
test1.addEventListener("click", () => {
    callForUpdate(articleId)
  });

      import SavingData from './controller/savingPage.js';
    
      function callForUpdate(UserData){
        console.log('test update:' + UserData);
       

      const updatedData = {savedArticle: [UserData]};
      
      SavingData(UserCode, updatedData);
    
      }
      
    
      
    
    
    // main.js
    
    
    
    
    
    
    
      