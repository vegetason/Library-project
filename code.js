let myLibrary=[];
let body=document.querySelector('body');
let newBook=document.querySelector('#newBook');
let closeButton=document.querySelector('#close');
let theData=document.querySelector('#myData');
let theLibraryContainer=document.createElement('div');
theLibraryContainer.setAttribute('id','theContainer');
body.appendChild(theLibraryContainer);
function book(bookName,pages,status){
    this.bookName=bookName;
    this.pages=pages;
    this.status=status;
};
function addBookToLibrary(aNewBook){
    myLibrary.push(aNewBook);
    for (let i=0;i<myLibrary.length;i++){
        let bookForm=document.createElement('form');
        bookForm.classList.add('my_books');
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
        let labelOfStatus=document.createElement('label');
        labelOfStatus.setAttribute('for','readingStatus');
        labelOfStatus.textContent=`Reading Status:`;
        theDiv3.appendChild(labelOfStatus);
        let theInputOfStatus=document.createElement('input');
        theInputOfStatus.setAttribute('type','checkbox');
        theInputOfStatus.setAttribute('name','status');
        theInputOfStatus.setAttribute('id','readingStatus');
        theDiv3.appendChild(theInputOfStatus);
        let theButtonOfStatus=document.createElement('button');
        theButtonOfStatus.setAttribute('id','changeStatus');
        bookForm.appendChild(theButtonOfStatus);
        let theRemoveButton=document.createElement('button');
        theRemoveButton.setAttribute('id','removeForm');
        theRemoveButton.textContent='Remove'
        bookForm.appendChild(theRemoveButton);
        myLibrary.forEach(book=>{
            theInputOfBookName.setAttribute('value',`${book.bookName}`);
            theInputOfpages.setAttribute('value',`${book.pages}`);
            if(book.status=='on'){
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
                    book.status='off';
                }
                else{
                    theButtonOfStatus.textContent='Read';
                    theButtonOfStatus.style.background='green';
                    book.status='on';
                }
                e.preventDefault();
            });
            theRemoveButton.addEventListener('click',(e)=>{
                bookForm.remove();
                e.preventDefault()
            })
        });
    };
};
newBook.addEventListener('click',()=>{
    theData.showModal();
});
closeButton.addEventListener('click',()=>{
    let myNewBook=new book();
    myNewBook.bookName=document.getElementById('bookName').value;
    myNewBook.pages=document.getElementById('pages').value;
    myNewBook.status=document.getElementById('status').value;
    addBookToLibrary(myNewBook);
    myLibrary=[];
    theData.close();
})
