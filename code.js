let myLibrary=[];
let myBook=[];
let body=document.querySelector('body');
let newBook=document.querySelector('#newBook');
let closeButton=document.querySelector('#close');
let theData=document.querySelector('#myData');
let theLibraryContainer=document.createElement('div');
theLibraryContainer.setAttribute('id','theContainer');
let theLastSentence=document.createElement('div')
theLastSentence.textContent='@The Odin Project 2023'
theLastSentence.setAttribute('id','last');
body.appendChild(theLibraryContainer);
body.appendChild(theLastSentence);
function book(bookName,pages,status){
    this.bookName=bookName;
    this.pages=pages;
    this.status=status;
};
function addBookToLibrary(aNewBook){
    myLibrary.push(aNewBook);
    myBook.push(aNewBook);
    for (let i=0;i<myBook.length;i++){
        let bookForm=document.createElement('form');//creating a form to display books.
        bookForm.classList.add('my_books');
        bookForm.setAttribute('action','https://httpbin.org/post')
        theLibraryContainer.appendChild(bookForm);
        let theDiv1=document.createElement('div');
        bookForm.appendChild(theDiv1);
        let labelOfBookName=document.createElement('label');
        labelOfBookName.setAttribute('for','book_Name');
        labelOfBookName.textContent=`Book Name:`;
        theDiv1.appendChild(labelOfBookName);
        let theInputOfBookName=document.createElement('input');
        theInputOfBookName.setAttribute('type','text');
        theInputOfBookName.setAttribute('name','book_Name');
        theInputOfBookName.setAttribute('id','book_Name');
        theDiv1.appendChild(theInputOfBookName);
        let theDiv2=document.createElement('div');
        bookForm.appendChild(theDiv2);
        let labelOfBookPages=document.createElement('label');
        labelOfBookPages.setAttribute('for','numberOfPages');
        labelOfBookPages.textContent=`Number Of Pages:`;
        theDiv2.appendChild(labelOfBookPages);
        let theInputOfpages=document.createElement('input');
        theInputOfpages.setAttribute('type','number');
        theInputOfpages.setAttribute('name','book_Pages');
        theInputOfpages.setAttribute('id','numberOfPages');
        theDiv2.appendChild(theInputOfpages);
        let theDiv3=document.createElement('div');
        bookForm.appendChild(theDiv3);
        let theButtonOfStatus=document.createElement('button');
        theButtonOfStatus.setAttribute('id','changeStatus');
        theDiv3.appendChild(theButtonOfStatus);
        let theRemoveButton=document.createElement('button');
        theRemoveButton.setAttribute('id','removeForm');
        theRemoveButton.textContent='Remove'
        bookForm.appendChild(theRemoveButton);
            theInputOfBookName.setAttribute('value',`${aNewBook.bookName}`);//giving the values to the inputs of the form
            theInputOfBookName.setAttribute('disabled','disabled');
            theInputOfpages.setAttribute('value',`${aNewBook.pages}`);
            theInputOfpages.setAttribute('disabled','disabled');
            if(aNewBook.status=='on'){
                theButtonOfStatus.textContent='Read';
                theButtonOfStatus.style.background='green';
            }
            else {
                theButtonOfStatus.textContent='Not Read';
                theButtonOfStatus.style.background='red';
            }
            theButtonOfStatus.addEventListener('click',(e)=>{
                if(theButtonOfStatus.textContent=='Read'){
                    theButtonOfStatus.textContent='Not Read';
                    theButtonOfStatus.style.background='red';
                    aNewBook.status='off';
                }
                else{
                    theButtonOfStatus.textContent='Read';
                    theButtonOfStatus.style.background='green';
                    aNewBook.status='on';
                }
                e.preventDefault();
            });
            theRemoveButton.addEventListener('click',(e)=>{
                bookForm.remove();
                e.preventDefault();
                delete myBook[i];
            });
        console.log (myBook);
    };

};
newBook.addEventListener('click',()=>{          
    theData.showModal();//opening the dialogue
});
closeButton.addEventListener('click',(e)=>{
    let myNewBook=new book();
    myNewBook.bookName=document.getElementById('bookName').value;
    myNewBook.pages=document.getElementById('bookPages').value;
    myNewBook.status=document.getElementById('status').value;
    addBookToLibrary(myNewBook);
    myBook=[];
    e.preventDefault();
    theData.close();
})
