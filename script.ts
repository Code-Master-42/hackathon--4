document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

const nameElement=document.getElementById('name') as HTMLInputElement
const emailElement=document.getElementById('email') as HTMLInputElement
const phoneElement=document.getElementById('phone') as  HTMLInputElement
const educationElement=document.getElementById('education') as  HTMLInputElement
const experienceElement=document.getElementById('experience') as  HTMLInputElement
const skillsElement=document.getElementById('skills') as  HTMLInputElement
if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
    const name=nameElement.value;
    const email=emailElement.value;
    const phone=phoneElement.value;
    const education=educationElement.value;
    const experience=experienceElement.value;
    const skills=skillsElement.value

const resumeOutput=`
<h2>Resume</h2>
<p><stronge>Name:</stronge><span id="edit-name" class="editable">${name}</span></p>
<p><stronge>Email:</stronge><span id="edit-email" class="editable">${email}</span></p>
<p><stronge>Phone:</stronge><span id="edit-phone" class="editable">${phone}</span></p>

<h3>Education</h3>
<p><span id="edit-education" class="editable">${education}</p>

<h3>Experience</h3>
<p><span id="edit-experience" class="editable">${experience}</p>

<h3>skills</h3>
<p><span id="edit-skills" class="editable">${skills}</p>


`;
const resumeOutputElement=document.getElementById(`resumeOutput`)
if(resumeOutputElement){
    resumeOutputElement.innerHTML=resumeOutput
    makeEditable();
}
}
else{
console.error(`one or more element are missing`)
}
})
function makeEditable(){
    const editableElements=document.querySelectorAll('.editable');
    editableElements.forEach(element=>{
        element.addEventListener('click',function(){
            const currentElement=element as HTMLElement;
            const currentValue=currentElement.textContent ||"";
            if(currentElement.tagName==="p"||currentElement.tagName==="SPAN"){
                const input=document.createElement('input');
                input.type="text";
                input.value=currentValue;
                input.classList.add('editing-input')
                input.addEventListener('blur',function(){

                    currentElement.textContent=input.value;
                    currentElement.style.display='inline';
                    input.remove();
                })
                currentElement.style.display='none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
            }
        })
    })
}