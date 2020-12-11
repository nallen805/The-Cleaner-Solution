window.onload=function()
{
    $('#showOfficeServices').hide();
    $('#showResidentialServices').hide();
    $('#serviceMsg').hide();
    $('#resServiceMsg').hide();
    $('#hidden').hide();
    $('.galleryPic').fadeIn("slow");
}

function cleanOffice()
{   
    var cleanOffice = document.getElementById("cleanOffice");
    var officeSelected;
    
    //Come back and fix
    var officeOnly = document.getElementsByName("officeOnly").innerHTML;

    if(cleanOffice.click)
    {
        officeSelected=true;
        residenceSelected=false;
        $('#showOfficeServices').slideToggle();
        document.getElementById('showOfficeServices').scrollIntoView();
    }
}

function cleanResidence()
{
    var cleanResidence = document.getElementById("cleanResidence");
    var residenceSelected;
    if(cleanResidence.click)
    {   
        residenceSelected=true;
        officeSelected=false;  
        $('#showResidentialServices').slideToggle(); 
        document.getElementById('showResidentialServices').scrollIntoView();
    }
}

function displayServiceDetails()
{
    //Display details for service
    let serviceArray = 
        [
            {"serviceName":"Window Cleaning", "serviceDetails":"Powerful window cleaning that will leave your window view crystal clear!"},
            {"serviceName":"Office Cleaning", "serviceDetails":"We clean your entire office from the bottom floor to the top floor and everything in between!"},
            {"serviceName":"Sweeping \& Mopping", "serviceDetails":"We'll come sweep and mop for those times in between cleaning!"},
            {"serviceName":"Vacuum \& Shampoo", "serviceDetails":"We vacuum and shampoo also!"},
            {"serviceName":"Restroom Cleaning", "serviceDetails":"Yes, we clean restrooms too!"},
            {"serviceName":"Smoke Area \& Breakroom cleaning", "serviceDetails":"We clear your break room and smoke areas of unwanted items, trash, cigarettes, etc.!"},
            {"serviceName":"Basement \& Event Room cleanup", "serviceDetails":"After a big party or event, who wants to clean up? Call us! We'll do it for you!"},
            {"serviceName":"Carpet \& Rug cleaning/shampooing", "serviceDetails":"We provide a very detailed cleaning of carpets and rugs."},
            {"serviceName":"Room Cleaning", "serviceDetails":"We can come clean one room for you..."},
            {"serviceName":"(Entire) Residence Cleaning", "serviceDetails":"...or we can clean your entire residence for you!"},
            {"serviceName":"Power Washing (outside)", "serviceDetails":"We also do power washing for the outside of your house."}
        ];

    var displayServiceMsg = document.getElementById("serviceMsg");
    var radioButtons = document.getElementsByName("selection");
    var thisBtnValue;
    var thisServiceArea;
    var thisServiceArea2;

    for(let i=0; i<radioButtons.length; i++)
    {
        thisBtnValue = radioButtons[i].value;
        if(radioButtons[i].checked)
        {    
            if(thisBtnValue==serviceArray[i].serviceName)
            {   displayServiceMsg.innerHTML=serviceArray[i].serviceDetails;     }   
        }  
    }
    $('#serviceMsg').show();
}

function displayResidentialServiceDetails()
{
        //Display details for service
        let serviceArray = 
        [
            {"serviceName":"Window Cleaning", "serviceDetails":"Powerful window cleaning that will leave your window view crystal clear!"},
            {"serviceName":"Office Cleaning", "serviceDetails":"We clean your entire office from the bottom floor to the top floor and everything in between!"},
            {"serviceName":"Sweeping \& Mopping", "serviceDetails":"We'll come sweep and mop for those times in between cleaning!"},
            {"serviceName":"Vacuum \& Shampoo", "serviceDetails":"We vacuum and shampoo also!"},
            {"serviceName":"Restroom Cleaning", "serviceDetails":"Yes, we clean restrooms too!"},
            {"serviceName":"Smoke Area \& Breakroom cleaning", "serviceDetails":"We clear your break room and smoke areas of unwanted items, trash, cigarettes, etc.!"},
            {"serviceName":"Basement \& Event Room cleanup", "serviceDetails":"After a big party or event, who wants to clean up? Call us! We'll do it for you!"},
            {"serviceName":"Carpet \& Rug cleaning/shampooing", "serviceDetails":"We provide a very detailed cleaning of carpets and rugs."},
            {"serviceName":"Room Cleaning", "serviceDetails":"We can come clean one room for you..."},
            {"serviceName":"(Entire) Residence Cleaning", "serviceDetails":"...or we can clean your entire residence for you!"},
            {"serviceName":"Power Washing (outside)", "serviceDetails":"We also do power washing for the outside of your house."}
        ];

    var displayServiceMsg = document.getElementById("resServiceMsg");
    var radioButtons = document.getElementsByName("resselection");
    var thisBtnValue;

    for(let i=0; i<radioButtons.length; i++)
    {
        thisBtnValue = radioButtons[i].value;
        if(radioButtons[i].checked)
        {    
            if(thisBtnValue==serviceArray[i].serviceName)
            {   displayServiceMsg.innerHTML=serviceArray[i].serviceDetails; } 
        }  
    }
    $('#resServiceMsg').show();
}

function checkInfo()
{
    var thisRadBtnVal;
    var radBtns = document.getElementsByName("radioGroup");
    var addPkgNo = document.getElementById("selectedPkg");
    var addPkgFreq = document.getElementById("selectedFreq");
    var showPkgPrice = document.getElementById("selectedPrice");
    var packFreq;
    var price;
    var packNo;

    for(let i=0; i<radBtns.length; i++)
    {
        thisRadBtnVal = radBtns[i].value.split(",");
        packNo = thisRadBtnVal[0];
        packFreq = thisRadBtnVal[1];
        price = thisRadBtnVal[2];

        if(radBtns[i].checked)
        {
            //Make sure package has been selected 
            var pkgOptions = document.getElementsByName("stdSelectedPkg");

            $('#hidden').show();
            document.getElementById('hidden').scrollIntoView();
            addPkgNo.value=packNo;
            addPkgFreq.value=packFreq;
            showPkgPrice.value=price;

            var nameFocus = document.getElementsByName('stdName');
            nameFocus.focus();
        }
    }
}

//Confirm package has been selected
function submittedStandard()
{
    if(confirm("Are you sure?"))
    {   document.forms.namedItem("standardForm").submit();  }
    else
    {   window.location.assign('/quote');   }
}

//Come back to this -- validate phone number; stay on current page if invalid, and
//focus on phone number field -- otherwise, proceed to saved quote page.
function validatePhone(phoneNum)
{
    phoneNum = document.getElementById('phoneNum').value;
    var regExp = new RegExp(/\d{3}\d{3}\d{4}/);
    if(!phoneNum.match(regExp))
    {   
        alert("Please enter a valid phone number.");  
        window.location='/Quote';  
        document.getElementById('phoneNum').focus();
    }
    else
    {   
        document.getElementsByName("CustomRequestForm").submit();   
        window.location='/savedCustomRequest';
    }
}

// function transformIt()
// {
//     document.getElementsByClassName('.col-3.test').style.backgroundColor="red";
// }