  const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

 //TypeWriter Method
 TypeWriter.prototype.type = function() {
   const current = this.wordIndex % this.words.length;
   const fulltxt = this.words[current];

     this.txt = fulltxt.substring(0,this.txt.length + 1);

     if (this.txt= fulltxt) {
       this.wordIndex++;
       this.txt = fulltxt.substring(0,this.txt.length + 1);
     }

   //Insert txt into element
   this.txtElement.innerHTML = `<span class = "txt">${this.txt} </span>`;


   //Type Speed
   setTimeout(() => this.type(),2000)
 }

 //Init on DOM Load
 document.addEventListener('DOMContentLoaded', init);

 //Init App
 function init() {
   const txtElement = document.querySelector('.txt-type');
   const words = JSON.parse(txtElement.getAttribute('data-words'));
   const wait = txtElement.getAttribute('data-wait');
   new TypeWriter(txtElement, words, wait);
 }
